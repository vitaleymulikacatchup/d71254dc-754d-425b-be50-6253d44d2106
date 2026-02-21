"use client";

import Button from "../button/Button";
import ButtonTextUnderline from "../button/ButtonTextUnderline";
import Logo from "./Logo";
import { NavItem } from "@/types/navigation";
import { cls } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { ButtonConfig } from "@/types/button";

interface NavbarLayoutFloatingInlineProps {
  navItems: NavItem[];
  // logoSrc?: string;
  // logoAlt?: string;
  brandName?: string;
  button: ButtonConfig;
  className?: string;
  navItemClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
}

const NavbarLayoutFloatingInline = ({
  navItems,
  // logoSrc,
  // logoAlt = "",
  brandName = "Webild",
  button,
  className = "",
  navItemClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
}: NavbarLayoutFloatingInlineProps) => {
  const theme = useTheme();

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed z-[100] top-6 w-full transition-all duration-500 ease-in-out"
    >
      <div className={cls(
        "w-content-width mx-auto",
        "flex items-center justify-between",
        "card rounded-theme",
        "p-3 pl-6 h-fit relative",
        className
      )}>
        <Logo brandName={brandName} href="/" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-6 items-center">
          {navItems.map((item, index) => (
            <ButtonTextUnderline
              key={index}
              text={item.name}
              href={item.id}
              className={cls("!text-base", navItemClassName)}
            />
          ))}
        </div>

        <Button
          {...getButtonProps(
            button,
            0,
            theme.defaultButtonVariant,
            buttonClassName,
            buttonTextClassName
          )}
        />
      </div>
    </nav>
  );
};

export default NavbarLayoutFloatingInline;
