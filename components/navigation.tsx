"use client"; // this is also server rendered but it just not server component

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { useMedia } from "react-use";
import { NavButton } from "./nav-button";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  // {
  //   href: "/settings",
  //   label: "Settings",
  // },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
];

export const Navigation = () => {
  const router = useRouter();  // get access of the current router object 
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMedia("(max-width: 1024px)", false); // Removed space in the media query string
  
  const onClick = (href: string) => {
    router.push(href);  // for navigate thorugh pages
    setIsOpen(false);  //to close the drawer
  };


  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger >
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none 
            focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none
             text-white focus:bg-white/30 transition"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={route.href === pathname ? "secondary" : "ghost"}
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto"> {/* Corrected class names */}
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
};
