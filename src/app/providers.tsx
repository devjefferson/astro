"use client";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import React from "react";

type DefaultTemplateProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: DefaultTemplateProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <NextThemesProvider>{children}</NextThemesProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
