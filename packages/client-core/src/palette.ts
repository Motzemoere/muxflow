// Shared palette; desktop CSS is generated from this source. Layout stays platform-specific.
export const colors = {
  // ── Chrome surfaces ───────────────────────────────────────────────────
  // Omarchy "Last Horizon"; the surface steps are lifted from its #0c0b0c background.
  chromeBg: "#0c0b0c",
  chromeRaised: "#131113",
  chromeHairline: "#1c191b",
  chromeBorder: "#3a3336",
  chromeHover: "#1a1719",
  chromeSelected: "#251f22",
  // A selected row's edge. Dark fills a selected row a step lighter and needs no
  // edge, so it is the fill itself; light draws white rows that need one.
  chromeSelectedEdge: "#251f22",

  // ── Chrome ink ────────────────────────────────────────────────────────
  chromeInk: "#cfd3cd",
  chromeInkStrong: "#fafcfb",
  // Faint stays a step below dim, so the two still read as two levels.
  chromeDim: "#a89fa1",
  chromeFaint: "#857a7d",

  // ── Accent and destructive ────────────────────────────────────────────
  accent: "#b59790",
  accentInk: "#0c0b0c",
  accentWash: "rgba(181, 151, 144, 0.12)",
  danger: "#c38b7b",
  dangerInk: "#ddb0a3",
  dangerWash: "rgba(195, 139, 123, 0.13)",

  // ── Status ────────────────────────────────────────────────────────────
  // The theme has no usable yellow, so warn is a muted amber in its tone.
  ok: "#87a9b0",
  warn: "#d6b48c",

  // ── Elevation ─────────────────────────────────────────────────────────
  // Shadows and scrims mix this toward transparent at their own strength.
  shadow: "#000000",
} as const;

export const terminalTheme = {
  background: "#0c0b0c",
  foreground: "#fafcfb",
  cursor: "#e2dddc",
  cursorAccent: "#0c0b0c",
  selectionBackground: "#584e51",
  selectionForeground: "#e2dddc",
  black: "#0c0b0c",
  red: "#c38b7b",
  green: "#87a9b0",
  yellow: "#6b5e73",
  blue: "#b59790",
  magenta: "#c4d8e2",
  cyan: "#a5a0b6",
  white: "#fafcfb",
  brightBlack: "#584e51",
  brightRed: "#c38b7b",
  brightGreen: "#87a9b0",
  brightYellow: "#6b5e73",
  brightBlue: "#b59790",
  brightMagenta: "#c4d8e2",
  brightCyan: "#a5a0b6",
  brightWhite: "#e2dddc",
} as const;

export const stateColors = {
  // The theme's yellow (#6b5e73) is too dark to read as a status dot on its background.
  working: terminalTheme.magenta,
  blocked: terminalTheme.red,
  done: terminalTheme.cyan,
  unknown: colors.chromeDim,
} as const;

// ── Light theme (desktop) ───────────────────────────────────────────────
// Modelled on T3 Code's light theme: neutral zinc greys rather than One Light's
// blue-tinted ones, the work area a shade whiter than the chrome around it,
// and white selected rows set off by a border.
export const lightColors = {
  chromeBg: "#fafafa",
  // Raised stays a grey a step below the ground, not white: borderless code
  // blocks, inline code and table stripes are drawn in it.
  chromeRaised: "#f4f4f5",
  chromeHairline: "#e4e4e7",
  chromeBorder: "#d4d4d8",
  chromeHover: "#ececee",
  // White with a border, so a selected row is a different shape from a hovered
  // one rather than a lighter shade of it.
  chromeSelected: "#ffffff",
  chromeSelectedEdge: "#d4d4d8",

  chromeInk: "#27272a",
  chromeInkStrong: "#18181b",
  chromeDim: "#71717b",
  // Darker than zinc's #9f9fa9, which drew section labels at 2.5:1.
  chromeFaint: "#85858e",

  accent: "#2f6fe0",
  accentInk: "#ffffff",
  accentWash: "rgba(47, 111, 224, 0.12)",
  danger: "#dc2626",
  dangerInk: "#b91c1c",
  dangerWash: "rgba(220, 38, 38, 0.13)",

  ok: "#16a34a",
  warn: "#b45309",

  // Softer than black: a light surface needs a fraction of the dark lift.
  shadow: "#18181b40",
} as const satisfies Record<keyof typeof colors, string>;

// VS Code's light terminal colours, which T3 Code uses too, with every text
// colour at 4.5:1 or better on the background. VS Code leaves yellow and cyan
// near 3:1, and shell prompts are commonly drawn in cyan, so both are darkened
// here, as are the bright green, yellow and white CLIs print emphasis in;
// white (7) is a grey for the same reason.
export const lightTerminalTheme = {
  background: "#fcfcfc",
  foreground: "#1c2129",
  cursor: "#26384e",
  cursorAccent: "#fcfcfc",
  selectionBackground: "#253f6333",
  selectionForeground: "#1c2129",
  black: "#000000",
  red: "#cd3131",
  green: "#107c10",
  yellow: "#8f6a00",
  blue: "#0451a5",
  magenta: "#bc05bc",
  cyan: "#0e7490",
  white: "#555555",
  brightBlack: "#666666",
  brightRed: "#cd3131",
  brightGreen: "#0a7a0a",
  brightYellow: "#7a6400",
  brightBlue: "#0451a5",
  brightMagenta: "#bc05bc",
  brightCyan: "#0e7490",
  brightWhite: "#6e6e6e",
} as const satisfies Record<keyof typeof terminalTheme, string>;

export const lightStateColors = {
  working: "#d97706",
  blocked: lightColors.danger,
  done: lightTerminalTheme.cyan,
  unknown: lightColors.chromeDim,
} as const satisfies Record<keyof typeof stateColors, string>;


export const terminalCssTokens: Record<keyof typeof terminalTheme, string> = {
  background: "--term-bg",
  foreground: "--term-fg",
  cursor: "--term-cursor",
  cursorAccent: "--term-cursor-text",
  selectionBackground: "--term-selection-bg",
  selectionForeground: "--term-selection-fg",
  black: "--term-0",
  red: "--term-1",
  green: "--term-2",
  yellow: "--term-3",
  blue: "--term-4",
  magenta: "--term-5",
  cyan: "--term-6",
  white: "--term-7",
  brightBlack: "--term-8",
  brightRed: "--term-9",
  brightGreen: "--term-10",
  brightYellow: "--term-11",
  brightBlue: "--term-12",
  brightMagenta: "--term-13",
  brightCyan: "--term-14",
  brightWhite: "--term-15",
};

