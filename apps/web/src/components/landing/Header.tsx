"use client";

import { useState } from "react";
import { Group, Anchor, Button, Box, Burger, Collapse, Stack, Divider } from "@mantine/core";

const NAV_LINKS = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#planes", label: "Planes" },
  { href: "#por-que", label: "Por qué Resuelvex" },
  { href: "#faq", label: "Preguntas" },
];

interface HeaderProps {
  isLoggedIn: boolean;
  dashboardHref: string;
}

export function Header({ isLoggedIn, dashboardHref }: HeaderProps) {
  const [opened, setOpened] = useState(false);
  const close = () => setOpened(false);

  return (
    <Box
      component="header"
      style={{
        position: "sticky",
        top: 16,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: "0 16px",
      }}
    >
      <Box
        style={{
          width: "100%",
          maxWidth: 1100,
          borderRadius: opened ? 28 : 100,
          background: "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255, 255, 255, 0.6)",
          boxShadow: "0 8px 30px rgba(31, 48, 94, 0.12)",
          transition: "border-radius 0.2s ease",
          overflow: "hidden",
        }}
      >
        {/* Fila de arriba — siempre visible */}
        <Group justify="space-between" style={{ padding: "10px 12px 10px 10px" }}>
          <img src="/logo-color-no-bg.png" alt="Resuelvex" style={{ height: 30 }} />

          <Group gap={30} visibleFrom="sm">
            {NAV_LINKS.map((link) => (
              <Anchor key={link.href} href={link.href} c="navy.9" fw={500} size="sm" underline="never">
                {link.label}
              </Anchor>
            ))}
          </Group>

          <Group gap={8} visibleFrom="sm">
            {isLoggedIn ? (
              <Button component="a" href={dashboardHref} color="navy" radius="xl" size="sm">
                Ir a mi panel
              </Button>
            ) : (
              <>
                <Button component="a" href="/auth/login" variant="subtle" color="navy" radius="xl" size="sm">
                  Iniciar sesión
                </Button>
                <Button component="a" href="#planes" color="navy" radius="xl" size="sm">
                  Ver planes
                </Button>
              </>
            )}
          </Group>

          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color="var(--mantine-color-navy-9)"
            hiddenFrom="sm"
          />
        </Group>

        {/* Panel que se expande hacia abajo — solo mobile */}
        <Box hiddenFrom="sm">
          <Collapse expanded={opened}>
            <Box style={{ padding: "0 22px 20px" }}>
              <Divider mb="md" />
              <Stack gap="md" mb="lg">
                {NAV_LINKS.map((link) => (
                  <Anchor
                    key={link.href}
                    href={link.href}
                    c="navy.9"
                    fw={600}
                    size="md"
                    underline="never"
                    onClick={close}
                  >
                    {link.label}
                  </Anchor>
                ))}
              </Stack>
              <Stack gap="sm">
                {isLoggedIn ? (
                  <Button component="a" href={dashboardHref} color="navy" radius="xl" fullWidth onClick={close}>
                    Ir a mi panel
                  </Button>
                ) : (
                  <>
                    <Button component="a" href="/auth/login" variant="outline" color="navy" radius="xl" fullWidth onClick={close}>
                      Iniciar sesión
                    </Button>
                    <Button component="a" href="#planes" color="navy" radius="xl" fullWidth onClick={close}>
                      Ver planes
                    </Button>
                  </>
                )}
              </Stack>
            </Box>
          </Collapse>
        </Box>
      </Box>
    </Box>
  );
}
