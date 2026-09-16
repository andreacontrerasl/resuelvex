"use client";

import Link from "next/link";
import { Button } from "@mantine/core";

export function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Button component={Link} href={href} color="navy" radius="xl">
      {children}
    </Button>
  );
}
