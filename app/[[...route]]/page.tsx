import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

import MobileNav from "./_components/MobileNav";

export default function CurrPage({ params }: { params: { route: string[] } }) {
  const showParams = (route: string[]) => {
    if (!route) return "Index Page";

    return `${route.join(", ")} Page`;
  };

  return (
    <div className="flex flex-col h-screen bg-white text-slate-800">
      <header className="flex items-center justify-between px-4 py-3 border-b">
        <Link href="#" className="text-lg font-semibold" prefetch={false}>
          Mobile Navigation
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-xs bg-white p-4 pt-8"
          >
            <MobileNav />
          </SheetContent>
        </Sheet>
      </header>

      <section className="my-4 text-center text-2xl font-bold capitalize px-4">
        {showParams(params.route)}
      </section>
    </div>
  );
}
