import { extendVariants, Button } from "@nextui-org/react";
export const CFSButton = extendVariants(Button, {
  variants: {
    type: {
      primary:
        "bg-neutral-600 rounded-full h-16 px-10 w-80 text-white text-lg font-medium font-['IBM Plex Sans']",
      secondary:
        "bg-white rounded-full h-16 px-10 text-black border border-neutral-600 text-lg font-normal  font-['IBM Plex Sans']",
    },
  },
  defaultVariants: {
    type: "primary",
  },
});
