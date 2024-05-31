import { clsx } from "../../../node_modules/clsx/";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
//56567
//7878
