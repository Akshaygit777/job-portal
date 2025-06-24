// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
    "./index.html",
    "./src/**/*.{js,jsx}",
];
export const theme = {
    extend: {
        colors: {
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            muted: "hsl(var(--muted))",
            "muted-foreground": "hsl(var(--muted-foreground))",
            // ... add other semantic colors if needed
        },
    },
};
export const plugins = [];
  