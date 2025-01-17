import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAmount(amount : number, formatType:string) {
  const amountString = Math.round(amount).toString(); // Round and convert to string
    const lastDigit = amountString.slice(-1); // Get the last digit
    const maskedPart = formatType.repeat(amountString.length - 1); // Mask all except the last digit
    return `${maskedPart}${lastDigit}`; // Combine masked part with the last digit
}