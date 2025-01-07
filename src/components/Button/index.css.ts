import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    border: "none",
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
  },
  variants: {
    size: {
      sm: {
        padding: "0.5rem",
      },
      md: {
        padding: "1rem",
      },
      lg: {
        padding: "1.5rem",
      },
    },
  },
});
