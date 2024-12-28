import { Logo } from "@/components/shared/Logo/logo";
import { itemsNavbar } from "@/data/itemsNavbar";
import { cn } from "@/lib/utils";
import { BellRing, Search } from "lucide-react";
import Link from "next/link";

export function NavbarDesktop() {
  return (
    <div
      className={cn(
        "z-30 left-0 right-0 top-0 h-16 fixed w-full transition-all duration-300"
      )}
    >
      <div className="px[4%] mx-auto h-full">
        <div className="flex gap-4 justify-between items-center">
          <div className="flex gap-2 items-center">
            <Logo />
            <div className="ml-10 flex gap-4">
              {itemsNavbar.map((item) => (
                <Link key={item.name} href={item.link}>
                    {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Search className="cursor-pointer" />
            <BellRing className="cursor-pointer" />
            <div className="flex gap-2 items-center">
              <p>User</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
