import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "py-3 px-6 rounded-md font-medium transition-colors cursor-pointer",
  {
    variants: {
      variant: {
        primary: "text-neutral-cream",
        secondary: "bg-transparent border",
      },
      theme: {
        "primary-dark": "",
        "accent-red": "",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        theme: "primary-dark",
        class: "bg-primary-dark hover:bg-primary-light",
      },
      {
        variant: "secondary",
        theme: "primary-dark",
        class: "border-primary-dark text-primary-dark",
      },
      {
        variant: "primary",
        theme: "accent-red",
        class: "bg-accent-red hover:bg-accent-peach",
      },
      {
        variant: "secondary",
        theme: "accent-red",
        class: "border-accent-red text-accent-red",
      },
    ],
    defaultVariants: {
      variant: "primary",
      theme: "primary-dark",
      fullWidth: false,
    },
  },
);
