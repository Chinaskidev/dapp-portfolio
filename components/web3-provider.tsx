"use client"

import { RainbowKitProvider, darkTheme, lightTheme, getDefaultConfig } from "@rainbow-me/rainbowkit"
import { WagmiProvider, http } from "wagmi"
import { base } from "wagmi/chains"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState, useEffect, type ReactNode } from "react"

import "@rainbow-me/rainbowkit/styles.css"

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID
const config = projectId
  ? getDefaultConfig({
      appName: "jcarlov.eth Portfolio",
      projectId,
      chains: [base],
      transports: {
        [base.id]: http(),
      },
    })
  : null

const queryClient = new QueryClient()

export function Web3Provider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"))
    check()
    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    return () => observer.disconnect()
  }, [])

  if (!config) {
    return <>{children}</>
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={
            isDark
              ? darkTheme({ accentColor: "#c9a84c", accentColorForeground: "white" })
              : lightTheme({ accentColor: "#c9a84c", accentColorForeground: "white" })
          }
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
