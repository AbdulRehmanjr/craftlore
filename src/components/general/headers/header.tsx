"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, type FC } from "react";
import {
  FaBars,
  FaChevronRight,
  FaFacebook,
  FaLinkedin,
  FaSignal,
  FaTwitter,
} from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { cn } from "~/lib/utils";
import { MenuItems } from "~/constants/variable";

interface HeaderProps {
  disabled?: boolean;
}

interface SubMenuItem {
  title: string;
  href: string;
  submenu?: SubMenuItem[];
}

function getLinkProps(href: string, disabled?: boolean, baseClass?: string) {
  return {
    href: disabled ? "#" : href,
    onClick: disabled ? (e: React.MouseEvent) => e.preventDefault() : undefined,
    className: cn(
      baseClass,
      disabled && "cursor-not-allowed pointer-events-none text-gray-400",
    ),
  };
}

export const Header: FC<HeaderProps> = ({ disabled = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const SubMenu = ({ items }: { items: SubMenuItem[] }) => (
    <div className="invisible absolute left-1/2 top-full z-20 -translate-x-1/2 border-t-2 border-secondary bg-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 lg:min-w-[150px] xl:min-w-[200px]">
      <ul className="w-full">
        {items.map((item, index) => (
          <li key={index} className="group/nested relative border-b">
            <Link
              {...getLinkProps(
                item.href,
                disabled,
                "flex h-full w-full items-center justify-between px-4 py-2 text-primary hover:bg-secondary/80 hover:text-white lg:text-xs xl:text-sm 2xl:text-base",
              )}
            >
              {item.title}
              {item.submenu && <FaChevronRight size={10} />}
            </Link>
            {item.submenu && (
              <div className="invisible absolute top-0 z-30 border-t-2 border-secondary bg-white opacity-0 transition-all duration-300 group-hover/nested:visible group-hover/nested:opacity-100 lg:right-full lg:min-w-[150px] xl:min-w-[200px] 2xl:right-full">
                <ul className="w-full">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="border-b">
                      <Link
                        {...getLinkProps(
                          subItem.href,
                          disabled,
                          "block h-full w-full px-4 py-2 text-primary hover:bg-secondary/80 hover:text-white lg:text-xs xl:text-sm 2xl:text-base",
                        )}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  // Mobile nested submenu component
  const MobileNestedMenu = ({
    items,
    level = 1,
  }: {
    items: SubMenuItem[];
    level?: number;
  }) => (
    <ul className="w-full">
      {items.map((item, index) => (
        <li key={index} className="py-1">
          {item.submenu ? (
            <div className="w-full">
              {/* Direct link for parent items */}
              {item.href !== "#" && (
                <Link
                  {...getLinkProps(
                    item.href,
                    disabled,
                    cn(
                      "block text-sm text-gray-700 hover:text-secondary py-1 border-b",
                      level === 1 && "font-medium",
                    ),
                  )}
                >
                  {item.title}
                </Link>
              )}

              {/* Collapsible for submenu */}
              <Collapsible className="mt-1 w-full">
                <CollapsibleTrigger className="flex w-full items-center justify-between text-left">
                  <div
                    className={cn(
                      "flex w-full items-center justify-between py-1 text-sm text-gray-700 hover:text-secondary",
                      level === 1 && "font-medium",
                    )}
                  >
                    <span>
                      {item.href === "#" ? item.title : "More in " + item.title}
                    </span>
                    <span className="inline-flex items-center">
                      <FaChevronDown
                        className="transition-transform"
                        size={10}
                      />
                    </span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <ul className="w-full">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-1">
                        {subItem.submenu ? (
                          <div className="w-full">
                            {/* Direct link for submenu items */}
                            {subItem.href !== "#" && (
                              <Link
                                {...getLinkProps(
                                  subItem.href,
                                  disabled,
                                  "block text-sm text-gray-700 hover:text-secondary py-1 border-b",
                                )}
                              >
                                {subItem.title}
                              </Link>
                            )}

                            {/* Collapsible for nested submenu */}
                            <Collapsible className="mt-1 w-full">
                              <CollapsibleTrigger className="flex w-full items-center justify-between text-left">
                                <div className="flex w-full items-center justify-between py-1 text-sm text-gray-700 hover:text-secondary">
                                  <span>
                                    {subItem.href === "#"
                                      ? subItem.title
                                      : "More in " + subItem.title}
                                  </span>
                                  <span className="inline-flex items-center">
                                    <FaChevronDown
                                      className="transition-transform"
                                      size={10}
                                    />
                                  </span>
                                </div>
                              </CollapsibleTrigger>
                              <CollapsibleContent className="mt-2">
                                <ul className="w-full">
                                  {subItem.submenu.map(
                                    (grandChild, grandChildIndex) => (
                                      <li
                                        key={grandChildIndex}
                                        className="py-1"
                                      >
                                        <Link
                                          {...getLinkProps(
                                            grandChild.href,
                                            disabled,
                                            "block text-sm text-gray-700 hover:text-secondary py-1",
                                          )}
                                        >
                                          {grandChild.title}
                                        </Link>
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </CollapsibleContent>
                            </Collapsible>
                          </div>
                        ) : (
                          <Link
                            {...getLinkProps(
                              subItem.href,
                              disabled,
                              "block text-sm text-gray-700 hover:text-secondary py-1",
                            )}
                          >
                            {subItem.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ) : (
            <Link
              {...getLinkProps(
                item.href,
                disabled,
                cn(
                  "block text-sm text-gray-700 hover:text-secondary py-1",
                  level === 1 && "font-medium",
                ),
              )}
            >
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-10 flex w-full flex-col bg-white text-primary transition-colors duration-300",
        isScrolled && "bg-primary text-white",
      )}
    >
      <div className="ml-auto hidden justify-between gap-6 rounded-bl-lg bg-primary p-6 py-2 text-white lg:flex">
        <div className="flex flex-col items-center gap-1 font-opensans md:flex-row xl:gap-3 2xl:gap-12">
          <p className="text-xs font-bold 2xl:text-2xl">
            <strong className="text-secondary">Craftlore</strong> - Kashmir
            Craft Repository System
          </p>
          <div className="hidden h-7 w-1 bg-secondary md:block" />
          <p className="text-sm 2xl:text-2xl">
            Initiative of Hamadan Craft Revival Foundation
          </p>
        </div>
        <div className="flex gap-4">
          {/* Register / Login */}
          <Button
            size="sm"
            variant="secondary"
            className={cn(
              "text-xs text-white xl:text-base",
              disabled && "pointer-events-none cursor-not-allowed opacity-50",
            )}
            asChild
          >
            <Link {...getLinkProps("#", disabled)}>Register / Login</Link>
          </Button>
          <div className="flex gap-6">
            <Link
              {...getLinkProps(
                "#",
                disabled,
                "flex items-center gap-2 hover:text-secondary text-sm xl:text-base",
              )}
            >
              <FaTwitter />
            </Link>
            <Link
              {...getLinkProps(
                "#",
                disabled,
                "flex items-center gap-2 hover:text-secondary text-sm xl:text-base",
              )}
            >
              <FaFacebook />
            </Link>
            <Link
              {...getLinkProps(
                "#",
                disabled,
                "flex items-center gap-2 hover:text-secondary text-sm xl:text-base",
              )}
            >
              <FaLinkedin />
            </Link>
            <Link
              {...getLinkProps(
                "#",
                disabled,
                "flex items-center gap-2 hover:text-secondary text-sm xl:text-base",
              )}
            >
              <FaSignal />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between p-4">
        <div
          className={cn(
            "relative ml-6 h-20 w-20 md:ml-0 md:h-24 md:w-24 xl:h-32 xl:w-32",
            !isScrolled && "xl:h-36 xl:w-36",
          )}
        >
          <Image
            src="/logo/logo.png"
            alt="logo for craftlore"
            fill
            sizes="(max-width: 768px) 80px, (max-width: 1280px) 96px, 144px"
            priority
            quality={85}
            className="object-contain"
          />
        </div>
        <div className="flex items-center px-6 py-4 lg:mx-auto">
          <nav className="hidden lg:block">
            <ul className="flex gap-6 font-bold">
              {MenuItems.map((item, index) => (
                <li key={index} className="group relative">
                  <Link
                    {...getLinkProps(
                      item.href,
                      disabled,
                      "flex items-center gap-1 px-3 py-2 hover:text-secondary lg:text-xs xl:text-sm 2xl:text-base",
                    )}
                  >
                    {item.title}
                    {item.submenu && (
                      <span className="inline-flex items-center">
                        <FaChevronDown
                          className="transition-transform duration-200 group-hover:hidden"
                          size={10}
                        />
                        <FaChevronUp
                          className="hidden transition-transform duration-200 group-hover:block"
                          size={10}
                        />
                      </span>
                    )}
                  </Link>
                  {item.submenu && <SubMenu items={item.submenu} />}
                </li>
              ))}
            </ul>
          </nav>
          <Sheet>
            <SheetTrigger
              className={cn(
                "text-white lg:hidden",
                !isScrolled && "text-primary",
                disabled && "pointer-events-none cursor-not-allowed opacity-50",
              )}
            >
              <FaBars size={32} />
            </SheetTrigger>
            <SheetContent className="overflow-y-auto bg-white">
              <SheetHeader>
                <SheetTitle>Craftlore</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <MobileNestedMenu items={MenuItems} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
