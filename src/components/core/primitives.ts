import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold ",
  variants: {
    color: {
      primary: "text-[#8E80FF]",
      violet: "text-[#FF1CF7]",
      yellow: "text-[#ffff00]",
      blue: "text-[#5EA2EF]",
      cyan: "text-[#00b7fa]",
      green: "text-[#6FEE8D]",
      pink: "text-[#FF72E1]",
      white: "text-[#FFFFFF]",
      foreground: "dark:text-[#FFFFFF] dark:text-[#4B4B4B]",
    },
    size: {
      xs: "text-lg lg:text-xl",
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "primary",
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "white",
        "foreground",
      ],
      class: "",
    },
  ],
});

export const paragraph = tv({
  base: "w-full lg:w-1/2  text-default-600 block max-w-full",
  variants: {
    color: { default: "text-low-medium", dark: "text-low" },
    fullWidth: {
      true: "w-full lg:w-full",
    },
    size: {
      sm: "text-[12px]",
      md: "text-[16px]",
      lg: "text-[20px]",
    },
  },
  defaultVariants: {
    fullWidth: true,
    color: "default",
    size: "md",
  },
  compoundVariants: [
    {
      color: ["default", "dark"],
      size: ["md", "sm", "lg"],
      class: "bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2  text-default-600 block max-w-full",
  variants: {
    color: { white: "#FFFFFF" },
    size: {
      sm: "text-sm lg:text-md",
      md: "text-md lg:text-lg",
      lg: "text-lg lg:text-xl",
      xl: "text-xl lg:text-2xl",
    },
    fullWidth: {
      true: "!w-full",
      false: "w-full",
      size: "md",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
  compoundVariants: [
    {
      size: ["lg", "md"],
      color: ["white"],
      class: "",
    },
  ],
});
