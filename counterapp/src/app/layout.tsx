import { Chain } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const abstractTestnet: Chain = {
  chainId: 11124,
  rpc: ["https://api.testnet.abs.xyz"],
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  shortName: "abstract-testnet",
  slug: "abstract-testnet",
  testnet: true,
  chain: "Abstract",
  name: "Abstract Testnet",
};

export const metadata: Metadata = {
  title: "Abstract Testnet dApp",
  description:
    "A decentralized application running on the Abstract testnet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider
          activeChain={abstractTestnet}
          clientId="5b3b4877ec4e3daf174860e2c5cdb4ac"
        >
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}