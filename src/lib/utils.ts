// ============================================
// INVERTECH CLIMA — Utility Functions
// ============================================

import { type ClassValue, clsx } from "clsx";
import { WHATSAPP_NUMBER } from "./constants";

/**
 * Merge class names with clsx (no tailwind-merge needed for v4)
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Prepend or personalize a WhatsApp wa.me URL with the lead's name
 */
export function getPersonalizedWhatsappUrl(url: string, name: string): string {
  try {
    const urlObj = new URL(url);
    const textParam = urlObj.searchParams.get("text");
    
    let newText = "";
    if (textParam) {
      if (textParam.includes("simulação") || textParam.includes("economizar")) {
        newText = `Oi, meu nome é ${name}. ${textParam}`;
      } else if (textParam.includes("PMOC") || textParam.includes("avaliação")) {
        if (textParam.includes("Nome:")) {
          newText = textParam.replace("Nome:", `Nome: ${name}`);
        } else {
          newText = `Olá! Gostaria de solicitar uma avaliação de PMOC para minha empresa.\n\nNome: ${name}\nEmpresa:\nSegmento:\nQuantidade aproximada de aparelhos:\nLocalização:`;
        }
      } else {
        newText = `Oi, meu nome é ${name} queria saber mais sobre os serviços de climatização da invertech!`;
      }
    } else {
      newText = `Oi, meu nome é ${name} queria saber mais sobre os serviços de climatização da invertech!`;
    }
    
    urlObj.searchParams.set("text", newText);
    return urlObj.toString();
  } catch (e) {
    const number = WHATSAPP_NUMBER || "5563991129517";
    if (url.includes("PMOC") || url.includes("avaliação")) {
      return `https://wa.me/${number}?text=${encodeURIComponent(`Olá! Gostaria de solicitar uma avaliação de PMOC para minha empresa.\n\nNome: ${name}\nEmpresa:\nSegmento:\nQuantidade aproximada de aparelhos:\nLocalização:`)}`;
    }
    return `https://wa.me/${number}?text=${encodeURIComponent(`Oi, meu nome é ${name} queria saber mais sobre os serviços de climatização da invertech!`)}`;
  }
}
