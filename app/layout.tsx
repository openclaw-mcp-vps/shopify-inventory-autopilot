import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Inventory Autopilot – Auto-reorder before stockouts",
  description: "Predictive inventory management that auto-generates purchase orders based on sales velocity and lead times. Built for Shopify stores with 50–500 SKUs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5389cdc9-fb7c-4644-a629-0e41b4a8ebef"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
