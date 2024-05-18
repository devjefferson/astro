"use client";

import { SwitchProps, useSwitch } from "@nextui-org/switch";
import { useIsSSR } from "@react-aria/ssr";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { FC } from "react";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      <div>
        {theme !== "light" ? (
          <SunFilledIcon size={22} onClick={() => onChange()} />
        ) : (
          <MoonFilledIcon size={22} onClick={() => onChange()} />
        )}
      </div>
    </div>
  );
};
