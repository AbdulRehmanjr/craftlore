"use client";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";
import { Copy, KeyRound } from "lucide-react";
import { useState } from "react";
import { cn } from "~/lib/utils";

export const GenerateApi = () => {
  const { data: apiKey, refetch } = api.register.getApiKey.useQuery();
  const generateKeyMutation = api.register.generateKey.useMutation();
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = async () => {
    await navigator.clipboard.writeText(apiKey?.key ?? "none");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            <KeyRound className="h-5 w-5 text-blue-600" />
            Step 1: Obtain API Access
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Generate your unique 32-character API key for authentication.
          </p>

          {apiKey?.key && (
            <div className="mt-4 flex flex-wrap items-center gap-3 rounded-lg border bg-white p-3 shadow-sm">
              <div className="max-w-xs truncate font-mono text-sm text-gray-800 md:max-w-sm lg:max-w-lg">
                {apiKey.key}
              </div>
              <Button
                variant="outline"
                type="button"
                className={cn(
                  "flex items-center gap-2",
                  copied && "bg-green-100",
                )}
                onClick={handleCopyToClipboard}
              >
                <Copy className="h-4 w-4" />
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          )}
        </div>

        <Button
          type="button"
          className="mt-4 md:mt-0"
          onClick={async () => {
            generateKeyMutation.mutate();
            await refetch();
          }}
          disabled={generateKeyMutation.isPending}
        >
          {generateKeyMutation.isPending ? "Generating..." : "Generate API Key"}
        </Button>
      </div>
    </div>
  );
};
