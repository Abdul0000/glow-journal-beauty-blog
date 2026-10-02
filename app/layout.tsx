import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata = {title:"Glow Journal — Beauty, Thoughtfully",description:"Thoughtful notes on skincare, modern rituals, makeup and the little things that make you feel more like you."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}