import { extendVariants, Card } from "@nextui-org/react";
export const CFSCard = extendVariants(Card, {
  variants: {
    type: {
      default: {
        base: "flex flex-col px-8 py-6 bg-neutral-500 hover:bg-neutral-600 rounded-2xl w-full self-center shadow",
        header: "text-white justify-center items-center mb-4 max-h-96 text-2xl font-medium font-['IBM Plex Sans']",
        body: "text-white self-center p-3 text-lg font-['IBM Plex Sans']", 
      },
      tile: {
        base: "flex flex-row px-8 py-6 bg-neutral-500 hover:bg-neutral-600 rounded-2xl w-full self-center shadow",
        header: "text-white object-contain w-40 max-h-96 text-2xl font-medium font-['IBM Plex Sans']",
        body: "text-white self-center p-3 text-lg font-['IBM Plex Sans']",        
      },
      info: {
        base: "px-8 py-6 bg-info-600 rounded-2xl shadow",
        header: "text-white text-2xl font-medium font-['IBM Plex Sans'] ",
      },
    },
  },
  defaultVariants: {
    type: "default",
  },
});
