"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";

export const NavigationButton = () => {
  const router = useRouter();
  return (
    <Button size="sm" variant="secondary" type="button" onClick={() => router.back()}>
      <ArrowLeft />
    </Button>
  );
};
