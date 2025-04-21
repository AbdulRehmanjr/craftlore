'use client';

import { TabsTrigger } from "~/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";

interface TabSwitcherProps {
  value: string;
  type: string;
  className?: string;
  children: React.ReactNode;
}

export const TabSwitcher = ({ value, type, className, children }: TabSwitcherProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = () => {
    // Create a new URLSearchParams object with current params
    const params = new URLSearchParams(searchParams.toString());
    // Update the tab parameter
    params.set('tab', value);
    // Keep the type parameter if it exists
    if (!params.has('type')) {
      params.set('type', type);
    }
    // Navigate to the new URL
    router.push(`/listing?${params.toString()}`);
  };

  return (
    <TabsTrigger
      value={value}
      className={className}
      onClick={handleClick}
    >
      {children}
    </TabsTrigger>
  );
} 