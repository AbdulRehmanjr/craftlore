"use client";

import React from "react";
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
import { Input } from "~/components/ui/input";
import { CheckCircle2, XCircle, Search, FileText, AlertTriangle, AlertCircle, Megaphone, Settings, Link as LinkIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaEnvelope } from "react-icons/fa6";

const formSchema = z.object({
  category: z.string({ required_error: "Field is required" }),
  subcategory: z.string({ required_error: "Field is required" }),
  product: z.string({ required_error: "Field is required" }),
  id: z.string({ required_error: "Field is required" }).min(8, { message: "ID must be 8 digits" }),
});

type FormData = z.infer<typeof formSchema>;

export const ReportingForm = () => {
  const router = useRouter();
  const [verificationMessage, setVerificationMessage] = React.useState<string | null>(null);
  const [showAdditionalOptions, setShowAdditionalOptions] = React.useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const categories = api.category.getCategories.useQuery();
  const subcategories = api.category.getSubCategories.useQuery(
    { categoryId: form.watch("category") },
    { enabled: !!form.watch("category") },
  );

  const materials = api.category.getMaterialBySubCategory.useQuery(
    { subcategoryId: form.watch("subcategory") },
    { enabled: !!form.watch("subcategory") },
  );

  const onSubmit = (data: FormData) => {
    if (data.id === "12345678") {
      setVerificationMessage("✔ Verified: This GI number is valid. This product is officially certified as a Geographical Indication (GI) of Kashmir. Its origin, craft tradition, and authenticity are confirmed.");
      setShowAdditionalOptions(true);
    } else {
      setVerificationMessage("✖ Invalid: This number does not correspond to any certified Kashmiri GI product. Please verify the number or contact the certification body.");
      setShowAdditionalOptions(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-4 text-white [&_label]:text-xl"
      >
        {/* Category Field */}
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
          name="product"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Product<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="bg-white text-gray-950">
                    <SelectValue placeholder="Select product" />
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

        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                ID (8 Digit Craft Code)<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter ID" className="text-gray-900"{...field} value={field.value ?? ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Submit Button */}
        <Button type="submit" variant="secondary" className="mt-4 w-fit">
          Verify your product
        </Button>

        {/* Verification Message */}
        {verificationMessage && (
          <div className="space-y-4">
            <div className={`p-4 rounded-lg flex items-start gap-3 ${
              verificationMessage.startsWith("✔") 
                ? "bg-green-50 border border-green-200 text-green-800" 
                : "bg-red-50 border border-red-200 text-red-800"
            }`}>
              {verificationMessage.startsWith("✔") ? (
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
              ) : (
                <XCircle className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
              )}
              <p className="text-base leading-relaxed">
                {verificationMessage.replace(/^[✔✖]\s*/, "")}
              </p>
            </div>

            {showAdditionalOptions && (
              <div className="bg-white/10 p-4 rounded-lg space-y-3">
                <h3 className="text-lg font-semibold text-white">Additional Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/90">
                    <Search className="h-5 w-5" />
                    <span>View origin trace and artisan details</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <FileText className="h-5 w-5" />
                    <span>Certification issued by GI Kashmir Authority</span>
                  </div>
                  <button 
                    type="button"
                    onClick={() => router.push("/craft-registry/blockchain")}
                    className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                  >
                    <LinkIcon className="h-5 w-5" />
                    <span>Blockchain verification available</span>
                  </button>
                </div>
              </div>
            )}

            {!showAdditionalOptions && verificationMessage.startsWith("✖") && (
              <div className="bg-white/10 p-4 rounded-lg space-y-4">
                <h3 className="text-lg font-semibold text-white">Suggestions</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-white/90">
                    <Settings className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Ensure the GI number is entered correctly</span>
                  </div>
                  <div className="flex items-start gap-2 text-white/90">
                    <FaEnvelope className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Contact GI Kashmir Support for help with verification</span>
                  </div>
                  <div className="flex items-start gap-2 text-red-400">
                    <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>This may be a fake or counterfeit product. Non-certified products sold under GI labels are subject to legal penalties.</span>
                  </div>
                  <div className="flex items-start gap-2 text-red-400">
                    <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Consumer Alert: Using unverified GI numbers violates intellectual property rights and misleads buyers.</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <h4 className="text-lg font-semibold text-white mb-3">📢 Suspect a Fake? Report It Now</h4>
                  <p className="text-white/80 mb-4">
                    Help us fight counterfeiting and protect Kashmiri artisans. Your report will be confidential and assist in legal enforcement.
                  </p>
                  <button 
                    onClick={() => router.push("/craft-registry/GI/reporting")}
                    className="flex items-center gap-2 text-white hover:text-white/90 transition-colors bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
                  >
                    <Megaphone className="h-5 w-5" />
                    <span>Submit a Complaint to GI Kashmir Authority</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </form>
    </Form>
  );
};
