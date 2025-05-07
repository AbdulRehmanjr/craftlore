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
      <div className="fixed right-0 top-1/2 z-50 -translate-y-1/2 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="h-auto rounded-l-md rounded-r-none border-0 bg-orange-500 px-3 py-8 text-white shadow-md hover:bg-orange-600">
              <span className="rotate-180 transform text-sm font-medium [writing-mode:vertical-lr]">
                Click me 
              </span>
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
