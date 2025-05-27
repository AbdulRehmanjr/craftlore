"use client";

import { useState, useMemo } from "react";
import { api } from "~/trpc/react";
import { flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, useReactTable, type ColumnDef, type Table } from "@tanstack/react-table";
import { Table as UITable, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { Skeleton } from "~/components/ui/skeleton";
import { ChevronDown, Search, Filter, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

// Rank order mapping for sorting
const rankOrder = {
    Gold: 1,
    Silver: 2,
    Bronze: 3,
} as const;

type RankType = keyof typeof rankOrder;

const isRankType = (value: unknown): value is RankType => {
    return typeof value === 'string' && value in rankOrder;
};

const columns: ColumnDef<BusinessProps>[] = [
    {
        id: 'listingRank',
        accessorFn: (row) => row.criteria.listingRank,
        accessorKey: "listingRank",
        header: "Rank",
        filterFn: "includesString",
        sortingFn: (rowA, rowB) => {
            const valueA = rowA.getValue("listingRank");
            const valueB = rowB.getValue("listingRank");
            
            if (isRankType(valueA) && isRankType(valueB)) {
                return rankOrder[valueA] - rankOrder[valueB];
            }
            return 0;
        },
        cell: ({ row }) => {
            const value = row.getValue("listingRank");
            if (!isRankType(value)) return null;
            
            const colors = {
                Gold: "bg-yellow-100 text-yellow-800",
                Silver: "bg-gray-100 text-gray-800",
                Bronze: "bg-amber-100 text-amber-800",
            } as const;
            
            return (
                <div className={`px-2 py-1 rounded-full text-sm font-medium inline-block ${colors[value]}`}>
                    {value}
                </div>
            );
        },
    },
    {
        accessorKey: "businessName",
        header: "Business Name",
        cell: ({ row }) => (
            <div className="font-medium">{row.getValue("businessName")}</div>
        ),
    },
    {
        accessorKey: "businessAddress",
        header: "Location",
        cell: ({ row }) => (
            <div className="text-gray-600">{row.getValue("businessAddress")}</div>
        ),
    },
    {
        accessorKey: "businessEmail",
        header: "Email",
        cell: ({ row }) => (
            <div className="text-gray-600">{row.getValue("businessEmail")}</div>
        ),
    },
    {
        accessorKey: "businessType",
        header: "Type",
        cell: ({ row }) => {
            const type :string= row.getValue("businessType");
            const formattedType = type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            return <div className="font-medium">{formattedType}</div>;
        },
    },
    {
        accessorKey: "businessEmployee",
        header: "Employees",
        cell: ({ row }) => (
            <div className="text-right font-medium max-w-12">
                {row.getValue("businessEmployee")}
            </div>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status :string= row.getValue("status");
            return (
                <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    status === "active" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                }`}>
                    {status === "active" ? "Active" : "Blacklisted"}
                </div>
            );
        },
    },
];

const LoadingSkeleton = () => (
    <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-12 w-full" />
            </div>
        ))}
    </div>
);

interface PaginationProps {
    table: Table<BusinessProps>;
}

const Pagination = ({ table }: PaginationProps) => {
    const currentPage = table.getState().pagination.pageIndex + 1;
    const totalPages = table.getPageCount();

    const getPageNumbers = (): Array<number | string> => {
        const pages: Array<number | string> = [];
        const maxVisible = 5;
        const halfVisible = Math.floor(maxVisible / 2);

        let startPage = Math.max(currentPage - halfVisible, 1);
        const endPage = Math.min(startPage + maxVisible - 1, totalPages);

        if (endPage - startPage + 1 < maxVisible) {
            startPage = Math.max(endPage - maxVisible + 1, 1);
        }

        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) pages.push("...");
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) pages.push("...");
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className="flex items-center gap-2">
            <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>

            {getPageNumbers().map((page, i) => (
                page === "..." ? (
                    <Button
                        key={`ellipsis-${i}`}
                        variant="ghost"
                        size="sm"
                        className="px-2"
                        disabled
                    >
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                ) : (
                    <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => table.setPageIndex((page as number) - 1)}
                        className="px-3"
                    >
                        {page}
                    </Button>
                )
            ))}

            <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    );
};

export const BusinessTable = () => {
    const { data, isLoading } = api.register.getBusinesses.useQuery();
    const [nameFilter, setNameFilter] = useState<string>("");
    const [blacklistedOnly, setBlacklistedOnly] = useState<boolean>(false);
    const [limit, setLimit] = useState<number>(10);

    const filteredData = useMemo(() => {
        if (!data) return [];
        return data
            .sort((a, b) => rankOrder[a.criteria.listingRank as keyof typeof rankOrder] - rankOrder[b.criteria.listingRank as keyof typeof rankOrder])
            .filter((business) =>
                business.businessName.toLowerCase().includes(nameFilter.toLowerCase())
            )
            .filter((business) => (blacklistedOnly ? business.status !== "active" : true))
            .slice(0, limit);
    }, [data, limit, nameFilter, blacklistedOnly]);

    const table = useReactTable({
        data: filteredData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        initialState: {
            pagination: {
                pageSize: 10,
            },
            sorting: [
                {
                    id: "listingRank",
                    desc: false,
                },
            ],
        },
    });

    if (isLoading) {
        return (
            <div className="lg:container p-4">
                <LoadingSkeleton />
            </div>
        );
    }

    return (
        <div className="lg:container bg-white rounded-xl shadow-lg">
            <ScrollArea className="w-[320px] lg:w-full">
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b">
                    <div className="flex items-center gap-2 flex-1">
                        <Search className="w-4 h-4 text-gray-500" />
                        <Input
                            placeholder="Search businesses..."
                            value={nameFilter}
                            onChange={(e) => setNameFilter(e.target.value)}
                            className="max-w-xs"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="gap-2">
                                    <Filter className="w-4 h-4" />
                                    Show Top {limit}
                                    <ChevronDown className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {[10, 20, 50, 100].map((num) => (
                                    <DropdownMenuItem key={num} onClick={() => setLimit(num)}>
                                        Top {num}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button
                            variant={blacklistedOnly ? "destructive" : "outline"}
                            onClick={() => setBlacklistedOnly(!blacklistedOnly)}
                            className="whitespace-nowrap"
                        >
                            {blacklistedOnly ? "Show All" : "Blacklisted Only"}
                        </Button>
                    </div>
                </div>

                <div className="rounded-md overflow-hidden">
                    <UITable>
                        <TableHeader className="sticky top-0 bg-white">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableHead key={header.id} className="font-semibold">
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows.length > 0 ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow 
                                        key={row.id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center text-gray-500">
                                        No businesses found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </UITable>
                </div>

                <div className="flex items-center justify-between p-4 border-t">
                    <div className="text-sm text-gray-500">
                        Page {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount()} · Showing {table.getRowModel().rows.length} of{" "}
                        {data?.length ?? 0} businesses
                    </div>
                    <Pagination table={table} />
                </div>
                <ScrollBar orientation="horizontal" className="mt-2" />
            </ScrollArea>
        </div>
    );
};
