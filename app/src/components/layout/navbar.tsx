"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NeoButton } from "@/components/ui/neo-button";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, User, Settings, LogOut } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/app" },
  { name: "Studies", href: "/app/studies" },
  { name: "Data", href: "/app/data" },
  { name: "Analytics", href: "/app/analytics" },
];

interface NavbarProps {
  user?: {
    name: string;
    email: string;
    image?: string;
  };
}

export function Navbar({ user }: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 neo-button bg-[#DAF5F0] px-4 py-2"
            >
              <span className="font-bold text-xl">DigiHealth</span>
            </Link>
            <nav className="hidden md:flex items-center gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 neo-button bg-white hover:bg-[#FFFD96] text-black font-bold",
                    pathname === item.href && "bg-[#FFFD96]"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <NeoButton variant="peach">
                    <span className="sr-only">Open user menu</span>
                    <User className="h-5 w-5" />
                  </NeoButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="neo-card w-56">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <NeoButton variant="peach" asChild>
                <Link href="/login">Login</Link>
              </NeoButton>
            )}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <NeoButton variant="mint" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </NeoButton>
              </SheetTrigger>
              <SheetContent side="left" className="neo-card">
                <VisuallyHidden.Root>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>Menu</SheetDescription>
                </VisuallyHidden.Root>

                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "px-4 py-2 neo-button bg-white hover:bg-[#FFFD96] text-black font-bold",
                        pathname === item.href && "bg-[#FFFD96]"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
