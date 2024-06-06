"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const { NEXT_PUBLIC_APP_URL} = process.env;

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={`${NEXT_PUBLIC_APP_URL}${href}`}>{label}</Link>
    </Button>
  );
};
