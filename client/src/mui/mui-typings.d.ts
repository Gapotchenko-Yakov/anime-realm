import { TypeBackground } from "@mui/material/styles/createPalette";
import { PaletteColor } from "@mui/material";

// Декларативное расширение интерфейса TypeBackground
declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    alt: string;
  }
}

declare module "@mui/material/styles" {
  interface PaletteColor {
    [key: number]: string;
  }
}
