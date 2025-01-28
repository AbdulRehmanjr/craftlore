import { Menu } from "lucide-react";
import { type Metadata } from "next";
import { DetailAside } from "~/components/craft-repository/profiling/details/aside";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";

export const metadata: Metadata = {
  title: "CRAFTLORE | Profile",
};

export default function ProfileDetailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="col-span-12 mx-3 grid grid-cols-3 gap-6 px-3 py-4 md:mx-6 md:px-24 md:py-12">
      <div className="fixed bottom-20 right-4 z-50 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="animate-pulse rounded-full shadow-lg shadow-blue-500/50 transition-all duration-700 ease-in-out hover:shadow-blue-400/80"
            >
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] overflow-y-auto sm:w-[400px]"
          >
            <DetailAside />
          </SheetContent>
        </Sheet>
      </div>
      <div className="col-span-3 lg:col-span-2">{children}</div>
      <div className="hidden lg:block">
        <DetailAside />
      </div>
    </section>
  );
}
