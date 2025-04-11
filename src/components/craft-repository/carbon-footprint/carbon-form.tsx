"use client";

import React, { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { api } from "~/trpc/react";
import { toast } from "~/hooks/use-toast";
import { Leaf, AlertTriangle, AlertCircle, XCircle, ShoppingCart, Scissors, Heart } from "lucide-react";

const superData = {category:'',subcategory:''}
const formSchema = z
  .object({
    category: z.string({ required_error: "Field is required" }),
    subcategory: z.string({ required_error: "Field is required" }),
    rawMaterial: z.string({ required_error: "Field is required" }),
    package: z.string({ required_error: "Field is required" }),
    transport: z.string({ required_error: "Field is required" }),

    processing: z.string().optional(),
    production: z.string().optional(),
    crafting: z.string().optional(),
    installation: z.string().optional(),
    finishing: z.string().optional(),
    cooking: z.string().optional(),
    preparation: z.string().optional(),

    painting: z.string().optional(),
    embroidery: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (superData.category !== "Culinary weaving") {
      if (!data.processing) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["processing"],
        });
      }
    }

    if (superData.subcategory == "Pashmina Shawl") {
      if (!data.production) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["production"],
        });
      }
    }
    //  else {
    //   if (!data.crafting) {
    //     ctx.addIssue({
    //       code: z.ZodIssueCode.custom,
    //       message: "Field is required",
    //       path: ["crafting"],
    //     });
    //   }
    // }

    if (superData.subcategory == "Khatamband" || superData.subcategory == "Pinjrakari") {
      if (!data.installation) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["installation"],
        });
      }
    }
    if (
      superData.category == "Sport Crafts" ||
      superData.category == "Hide Crafts" ||
      superData.subcategory == "Engraved Metalware" ||
      superData.subcategory == "Silverware Craft"
    ) {
      if (!data.finishing) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["finishing"],
        });
      }
    }
    if (data.subcategory == "Wazwan") {
      if (!data.cooking) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["cooking"],
        });
      }
    }

    if (superData.category == "Culinary weaving") {
      if (!data.preparation) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["preparation"],
        });
      }
    }
    if (superData.subcategory == "Papier Mache") {
      if (!data.painting) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["painting"],
        });
      }
    }
    if (superData.subcategory == "Gabba") {
      if (!data.embroidery) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["embroidery"],
        });
      }
    }
  });

type FormData = z.infer<typeof formSchema>;

export const CarbonForm: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const [calculations, setCalculations] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });

  const categories = api.category.getCategories.useQuery();
  const subcategories = api.category.getSubCategories.useQuery(
    { categoryId: form.watch("category") },
    { enabled: !!form.watch("category") },
  );

  const materials = api.category.getMaterialBySubCategory.useQuery(
    { subcategoryId: form.watch("subcategory") },
    { enabled: !!form.watch("subcategory") },
  );

  const sections = api.carbon.getSectionsBySubCategory.useQuery(
    { subCategoryId: form.watch("subcategory") },
    { enabled: !!form.watch("subcategory") },
  );

  const filteredCategory = useMemo(() => {
    const category =
      categories.data?.find(
        (category) => category.categoryId === form.watch("category"),
      )?.categoryName ?? "";
      superData.category = category
    return category;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, form.watch("category")]);

  const filteredSubCategory = useMemo(() => {
    const sub =
      subcategories.data?.find(
        (sub) => sub.subcategoryId === form.watch("subcategory"),
      )?.subcategoryName ?? "";
      superData.subcategory = sub
    return sub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, form.watch("subcategory")]);

  const estimateCarbon = api.cost.carbonFootPrint.useMutation({
    onSuccess: (data) => {
      setCalculations((prev) => ({
        ...prev,
        lower: data.totalLower,
        upper: data.totalUpper,
      }));
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Opps!",
        description: error.message,
      });
    },
  });

  const onSubmit = (data: FormData) => {
    estimateCarbon.mutate({
      category: data.category,
      subcategory: data.subcategory,
      rawMaterial: data.rawMaterial,
      packaging: data.package,
      transport: data.transport,
      processing: data.processing,
      production: data.production,
      crafting: data.crafting,
      installation: data.installation,
      finishing: data.finishing,
      cooking: data.cooking,
      preparation: data.preparation,
      painting: data.painting,
      embroidery: data.embroidery,
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-4 text-white [&_label]:text-xl"
        >
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Craft Category<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="bg-white text-gray-950">
                      <SelectValue placeholder="Select Craft Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.data?.map((category) => (
                        <SelectItem
                          key={category.categoryId}
                          value={category.categoryId}
                        >
                          {category.categoryName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subcategory Field */}
          <FormField
            control={form.control}
            name="subcategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Craft Type<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="bg-white text-gray-950">
                      <SelectValue placeholder="Select Craft Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {subcategories.data?.map((sub, index) => (
                        <SelectItem value={sub.subcategoryId} key={index}>
                          {sub.subcategoryName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Raw Material Field */}
          <FormField
            control={form.control}
            name="rawMaterial"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Raw Material<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="bg-white text-gray-950">
                      <SelectValue placeholder="Select Raw Material" />
                    </SelectTrigger>
                    <SelectContent>
                      {materials.data?.map((raw, index) => (
                        <SelectItem value={raw.materialId} key={index}>
                          {raw.materialName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {filteredCategory !== "Culinary Weaving" && (
            <FormField
              control={form.control}
              name="processing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Processing<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select Process" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) => section.sectionType == "Processing",
                          )
                          ?.uniqueNames?.map((process, index) => (
                            <SelectItem value={process} key={index}>
                              {process}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {(() => {
            if (filteredSubCategory === "Pashmina Shawl") {
              return (
                <FormField
                  control={form.control}
                  name="production"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Production<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="bg-white text-gray-950">
                            <SelectValue placeholder="Select Production" />
                          </SelectTrigger>
                          <SelectContent>
                            {sections.data
                              ?.find(
                                (section) =>
                                  section.sectionType == "ProductionMethod",
                              )
                              ?.uniqueNames?.map((production, index) => (
                                <SelectItem value={production} key={index}>
                                  {production}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            } 
            // else {
            //   return (
            //     <FormField
            //       control={form.control}
            //       name="crafting"
            //       render={({ field }) => (
            //         <FormItem>
            //           <FormLabel>
            //             Crafting<span className="text-red-500">*</span>
            //           </FormLabel>
            //           <FormControl>
            //             <Select
            //               onValueChange={field.onChange}
            //               value={field.value}
            //             >
            //               <SelectTrigger className="bg-white text-gray-950">
            //                 <SelectValue placeholder="Select Crafting" />
            //               </SelectTrigger>
            //               <SelectContent>
            //                 {sections.data
            //                   ?.find(
            //                     (section) => section.sectionType == "Crafting",
            //                   )
            //                   ?.uniqueNames?.map((craft, index) => (
            //                     <SelectItem value={craft} key={index}>
            //                       {craft}
            //                     </SelectItem>
            //                   ))}
            //               </SelectContent>
            //             </Select>
            //           </FormControl>
            //           <FormMessage />
            //         </FormItem>
            //       )}
            //     />
            //   );
            // }
          })()}

          {/* Installation Field */}
          {(filteredSubCategory === "Khatamband" ||
            filteredSubCategory === "Pinjrakari") && (
            <FormField
              control={form.control}
              name="installation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Installation<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select Installation" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) => section.sectionType == "Installation",
                          )
                          ?.uniqueNames?.map((install, index) => (
                            <SelectItem value={install} key={index}>
                              {install}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Finishing Field */}
          {(filteredSubCategory === "Engraved Metalware" ||
            filteredSubCategory === "Silverware Craft" ||
            filteredCategory === "Sport Crafts" ||
            filteredCategory === "Hide Crafts") && (
            <FormField
              control={form.control}
              name="finishing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Finishing<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select Finishing" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) => section.sectionType == "Finishing",
                          )
                          ?.uniqueNames?.map((finish, index) => (
                            <SelectItem value={finish} key={index}>
                              {finish}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Cooking Field */}
          {filteredSubCategory === "Wazwan" && (
            <FormField
              control={form.control}
              name="cooking"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Cooking<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select Cooking" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) =>
                              section.sectionType == "CookingProcess",
                          )
                          ?.uniqueNames?.map((cooking, index) => (
                            <SelectItem value={cooking} key={index}>
                              {cooking}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Preparation Field */}
          {filteredCategory === "Culinary Weaving" && (
            <FormField
              control={form.control}
              name="preparation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Preparation<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select Preparation" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) => section.sectionType == "Preparation",
                          )
                          ?.uniqueNames?.map((preparation, index) => (
                            <SelectItem value={preparation} key={index}>
                              {preparation}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Painting Field */}
          {filteredSubCategory === "Papier Mache" && (
            <FormField
              control={form.control}
              name="painting"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Painting<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select Painting" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) =>
                              section.sectionType == "PaintingAndLacquering",
                          )
                          ?.uniqueNames?.map((painting, index) => (
                            <SelectItem value={painting} key={index}>
                              {painting}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Embroidery Field */}
          {filteredSubCategory === "Gabba" && (
            <FormField
              control={form.control}
              name="embroidery"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Embroidery<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select Embroidery" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) => section.sectionType == "Embroidery",
                          )
                          ?.uniqueNames?.map((embroidery, index) => (
                            <SelectItem value={embroidery} key={index}>
                              {embroidery}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Packaging Field */}
          <FormField
            control={form.control}
            name="package"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Packaging<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="bg-white text-gray-950">
                      <SelectValue placeholder="Select Packaging" />
                    </SelectTrigger>
                    <SelectContent>
                      {sections.data
                        ?.find((section) => section.sectionType == "Packaging")
                        ?.uniqueNames?.map((packaging, index) => (
                          <SelectItem value={packaging} key={index}>
                            {packaging}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Transportation Field */}
          <FormField
            control={form.control}
            name="transport"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Transportation<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="bg-white text-gray-950">
                      <SelectValue placeholder="Select Transportation" />
                    </SelectTrigger>
                    <SelectContent>
                      {sections.data
                        ?.find((section) => section.sectionType=="Transportation")
                        ?.uniqueNames?.map((process, index) => (
                          <SelectItem value={process} key={index}>
                            {process}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="secondary"
            className="mt-4 w-full"
            disabled={estimateCarbon.isPending}
          >
            {estimateCarbon.isPending
              ? "Calculating"
              : "Calculate Carbon Footprint"}
          </Button>
        </form>
      </Form>

      {calculations.lower != 0 && (
        <div className="mt-6 space-y-6">
          {/* Main Carbon Footprint Card */}
          <div className="rounded-lg border border-green-200 bg-green-50 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-100 p-2">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-green-800">
                Your Carbon Footprint Trace Is Complete
              </h3>
            </div>
            <div className="mt-4 grid gap-2 text-green-700">
              <p><span className="font-medium">Product ID:</span> DKC-HAND-101</p>
              <p><span className="font-medium">Craft:</span> Hand-embroidered Sozni Shawl</p>
              <p><span className="font-medium">Origin:</span> Kashmir</p>
              <p className="text-lg font-semibold">
                <span className="font-medium">Footprint:</span> {calculations.lower.toFixed(1)} kg CO₂e
                <span className="ml-2 rounded-full bg-green-100 px-2 py-1 text-sm">
                  Artisan-Made, Low Emission
                </span>
              </p>
            </div>
          </div>

          {/* Environmental Impact Comparison */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h4 className="mb-4 text-xl font-semibold">Environmental Impact Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Product Type</th>
                    <th className="px-4 py-2 text-left">CO₂ Emissions per Unit</th>
                    <th className="px-4 py-2 text-left">Risk Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2">Handcrafted Sozni Shawl</td>
                    <td className="px-4 py-2">{calculations.lower.toFixed(1)} kg CO₂e</td>
                    <td className="px-4 py-2">
                      <span className="rounded-full bg-green-100 px-2 py-1 text-green-700">
                        ✅ Eco-Friendly
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Machine-Made Imitation</td>
                    <td className="px-4 py-2">86.5 kg CO₂e</td>
                    <td className="px-4 py-2">
                      <span className="rounded-full bg-red-100 px-2 py-1 text-red-700">
                        ⚠️ Toxic & Polluting
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Warning Section */}
          <div className="rounded-lg border border-red-200 bg-red-50 p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <h4 className="text-xl font-semibold text-red-800">
                Warning: Mass Production Comes at a Cost
              </h4>
            </div>
            <p className="mt-4 text-red-700">
              Machine-made products flood markets with synthetic dyes, petrochemical fibers, and plastic micro-pollutants. Each unit releases more than 40x the emissions of an authentic Kashmiri craft.
            </p>
            <p className="mt-2 text-red-700">
              They don&apos;t just harm the earth — they erase artisan livelihoods, disrupt local economies, and suffocate heritage.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
            <h4 className="mb-4 text-xl font-semibold text-blue-800">The Choice is Yours</h4>
            <p className="mb-4 text-blue-700">When you choose handmade, you choose:</p>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                A living ecosystem over industrial decay
              </li>
              <li className="flex items-center gap-2">
                <Scissors className="h-5 w-5" />
                A weaver&apos;s dignity over a factory&apos;s exhaust
              </li>
              <li className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                A legacy of harmony over a footprint of harm
              </li>
            </ul>
          </div>

          {/* Policy Section */}
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
              <h4 className="text-xl font-semibold text-yellow-800">
                Policy Shift Incoming
              </h4>
            </div>
            <p className="mt-4 text-yellow-700">
              International buyers, eco-certifications, and climate-conscious markets are moving fast.
              Products with high carbon footprints may soon face:
            </p>
            <ul className="mt-2 space-y-2 text-yellow-700">
              <li className="flex items-center gap-2">
                <XCircle className="h-5 w-5" />
                Eco-tax surcharges
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="h-5 w-5" />
                Retail bans
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="h-5 w-5" />
                Sustainability blacklisting
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="rounded-lg border border-purple-200 bg-purple-50 p-6 text-center">
            <h4 className="mb-4 text-xl font-semibold text-purple-800">
              Be the Change. Wear the Future.
            </h4>
            <p className="mb-4 text-purple-700">
              Support climate-smart artisans. Support Kashmir. Support tomorrow.
            </p>
            <Button className="bg-purple-600 text-white hover:bg-purple-700">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Explore Certified Low-Carbon Kashmiri Masterpieces
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
