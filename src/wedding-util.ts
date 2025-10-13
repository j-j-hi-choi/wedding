import { useState, useEffect } from "react";

export function useCopyToClipboard(timeout: number = 2000) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = (text: string) => {
    if (typeof text !== "string" || !text) {
      console.error("Cannot copy non-string or empty text.");
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedText(text);
      })
      .catch((err) => {
        console.error("Failed to copy text:", err);
        alert("Failed to copy text.");
      });
  };

  useEffect(() => {
    if (copiedText) {
      const timer = setTimeout(() => {
        setCopiedText(null);
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [copiedText, timeout]);

  // 특정 텍스트가 현재 복사된 상태인지 확인하는 함수
  const isCopied = (text: string) => copiedText === text;

  return { copiedText, isCopied, copy };
}
