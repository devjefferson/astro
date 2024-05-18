import { tv } from "tailwind-variants";

export const input = tv({
  base: "w-full px-4 border-1 py-2",
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    fullWidth: false,
    variant: "default",
  },
  compoundVariants: [
    {
      variant: ["default"],
      class: "bg-gradient-to-b",
    },
  ],
});
