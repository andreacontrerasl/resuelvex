import { createTheme, type MantineColorsTuple } from "@mantine/core";

// Paleta derivada de tu navy (#1F305E), en los 10 tonos que Mantine espera
// para poder usarla como cualquier otro color del sistema (Button color="navy", etc.)
const navy: MantineColorsTuple = [
  "#eef1f8",
  "#d5deee",
  "#aebfdc",
  "#849dc9",
  "#6280ba",
  "#4d6cb1",
  "#4162ac",
  "#335096",
  "#294787",
  "#1F305E", //main
];

// Paleta derivada de tu teal (#00BFB3)
const teal: MantineColorsTuple = [
  "#e1fbf8",
  "#c8f5ef",
  "#96ebe1",
  "#61e1d3",
  "#3ad9c8",
  "#20d3bf",
  "#00BFB3", //main
  "#00a89d",
  "#00948a",
  "#007d73",
];

export const theme = createTheme({
  primaryColor: "navy",
  colors: { navy, teal },
  primaryShade: 9,
  defaultRadius: "md",
  fontFamily: "Inter, sans-serif",
  fontFamilyMonospace: "IBM Plex Mono, monospace",
  headings: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontWeight: "700",
  },
  other: {
    // tokens de marca que no encajan en el sistema de colores de Mantine
    // pero se usan directo en el CSS module para el fold-card y los blobs
    paper: "#F4F5F7",
    fold: "#B0B8C0",
  },
});
