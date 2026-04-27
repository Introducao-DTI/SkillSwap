import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "h-9 sm:h-10 rounded-md px-4 outline-none w-full",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-dark text-neutral-cream placeholder:text-neutral-cream/60",
        secondary:
          "bg-transparent border border-primary-dark text-primary-dark placeholder:text-primary-dark/60 hover:border-accent-red focus:border-accent-red",
        disabled:
          "bg-gray-200 text-gray-500 placeholder:text-gray-500/60 cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  },
);

export const inputWrapperVariants = cva("flex flex-col gap-1", {
  variants: {
    fullWidth: {
      true: "w-full",
      false: "w-auto",
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});
