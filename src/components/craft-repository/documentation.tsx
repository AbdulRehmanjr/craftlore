"use client";
import { Button } from "~/components/ui/button";
import { KeyRound } from "lucide-react";
import Link from "next/link";

export const Documentation = () => {
  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            <KeyRound className="h-5 w-5 text-blue-600" />
            Step 2: Documentation
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Read the documentation to integration the apis with your system.
          </p>
        </div>

        <Button className="mt-4 md:mt-0" asChild>
          <Link href="/documentation">Document</Link>
        </Button>
      </div>
    </div>
  );
};
