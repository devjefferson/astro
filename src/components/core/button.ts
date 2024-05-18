import { tv } from "tailwind-variants";

export const button = tv({
  base: "rounded-none text-md border-1 flex items-center justify-center",
  variants: {
    color: {
      primary:
        "border-primary  bg-primary  text-high hover:text-high hover:border-primary/90 hover:bg-primary/90  ",
      secondary:
        "border-secondary  bg-secondary  text-high hover:text-high hover:border-secondary/90 hover:bg-secondary/90",
      dark: "border-low  bg-low  text-high hover:text-low  hover:bg-high",
      light:
        "border-high  bg-high  text-low-dark hover:text-high  hover:bg-low-dark",
      disabled: "border-high-medium  bg-high-medium  text-high-light",
    },
    size: {
      sm: "py-2 px-10",
      md: "py-4 px-10",
      lg: "py-6 px-10",
      flex: "h-full",
    },
    variant: {
      contained: "",
      outlined: "bg-clip-text text-transparent ",
      text: "bg-clip-text text-transparent border-none ",
    },
    fullWidth: {
      true: "w-full",
      false: "w-max",
    },
  },
  defaultVariants: {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    size: "md",
  },
  compoundVariants: [
    {
      variant: ["contained", "outlined", "text"],
      color: ["primary", "dark", "disabled", "light", "secondary"],
      class: "bg-gradient-to-b ",
    },
  ],
});
