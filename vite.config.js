import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "Hangout AI",
        short_name: "Hangout AI",
        description:
          "Hangout AI for Recommendation Itinerary Jakarta, Singapore and Kuala Lumpur.",
        theme_color: "#000000",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    react(),
  ],
});
