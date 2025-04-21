"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import {
  CldUploadWidget,
  type CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { api } from "~/trpc/react";
import { useToast } from "~/hooks/use-toast";
import { Container } from "~/components/common/container";
import { motion } from "framer-motion";
import { Loader2, Upload } from "lucide-react";

const formSchema = z.object({
  fullName: z.string({ required_error: "Name is required." }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email format is wrong." }),
  job: z.string({ required_error: "Job is required." }),
  jobCode: z.string({ required_error: "Job code is required." }),
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const CareerForm = () => {
  const { toast } = useToast();
  const [allow, setAllow] = useState<boolean>(false);
  const [files, setFiles] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const submitJob = api.application.addApplication.useMutation({
    onSuccess: () => {
      form.reset();
      setFiles([]);
      setAllow(false);
      toast({
        title: "Success",
        description: "Your application has been submitted successfully!",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });

  const formSubmission = (data: z.infer<typeof formSchema>) => {
    if (!allow) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please submit both resume and cover letter",
      });
      return;
    }
    submitJob.mutate({
      fullName: data.fullName,
      email: data.email,
      job: data.job,
      jobCode: data.jobCode,
      resume: files[0] ?? "none",
      coverLetter: files[1] ?? "none",
    });
  };

  return (
    <section className="bg-[#e5edf7] py-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-4 font-montserrat text-3xl font-bold text-primary md:text-4xl">
            Job Application Form
          </h2>
          <p className="text-lg text-secondary">
            Apply for open positions by submitting your details and uploading your resume
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-xl bg-white p-8 shadow-sm"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(formSubmission)} className="space-y-8">
              <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          {...field}
                          value={field.value ?? ""}
                          className="focus:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          value={field.value ?? ""}
                          className="focus:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="job"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Job Applied For</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter job name"
                          {...field}
                          value={field.value ?? ""}
                          className="focus:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="jobCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Job Code</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter job code"
                          {...field}
                          value={field.value ?? ""}
                          className="focus:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <FormLabel className="text-gray-700">Required Documents</FormLabel>
                <div className="rounded-lg border border-dashed border-gray-300 p-6">
                  <CldUploadWidget
                    options={{ sources: ["local"], multiple: true }}
                    uploadPreset="craftlore"
                    onSuccess={(result: CloudinaryUploadWidgetResults) => {
                      const info = result.info;
                      if (typeof info !== "string") {
                        setFiles((prev) => {
                          const flag = prev.every((file) => file !== info?.secure_url);
                          if (flag) prev.push(info?.secure_url ?? "");
                          return prev;
                        });
                        setAllow(true);
                      }
                      setIsUploading(false);
                    }}
                    onUpload={() => setIsUploading(true)}
                  >
                    {({ open }) => (
                      <div className="flex flex-col items-center gap-4">
                        <Upload className="h-8 w-8 text-gray-400" />
                        <div className="text-center">
                          <p className="text-sm text-gray-600">
                            Upload your resume and cover letter
                          </p>
                          <p className="text-xs text-gray-500">
                            PDF, DOC, DOCX (max. 5MB each)
                          </p>
                        </div>
                        <Button
                          type="button"
                          onClick={() => open()}
                          className="relative"
                          disabled={isUploading}
                        >
                          {isUploading && (
                            <Loader2 className="absolute left-2 h-4 w-4 animate-spin" />
                          )}
                          {isUploading ? "Uploading..." : "Upload Documents"}
                        </Button>
                      </div>
                    )}
                  </CldUploadWidget>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex">
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90"
                  disabled={submitJob.isPending}
                >
                  {submitJob.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </Container>
    </section>
  );
};
