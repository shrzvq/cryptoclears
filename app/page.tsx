"use client"

import { useState } from "react"
import { PlexusBackground } from "@/components/plexus-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BlockchainBuilder } from "@/components/blockchain-builder"
import { ScamSimulator } from "@/components/scam-simulator"
import { Reports } from "@/components/reports"
import { Lexicon } from "@/components/lexicon"
import { EmergencySteps } from "@/components/emergency-steps"

type Page = "home" | "blockchain" | "simulator" | "lexicon" | "emergency" | "reports"

export default function CryptoClearApp() {
  const [currentPage, setCurrentPage] = useState<Page>("home")

  const handleNavigate = (page: Page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black text-gray-300 relative overflow-x-hidden">
      <PlexusBackground />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="relative z-10">
        {currentPage === "home" && <HeroSection onNavigate={handleNavigate} />}
        {currentPage === "blockchain" && (
          <div className="min-h-screen pt-28 pb-16">
            <BlockchainBuilder />
          </div>
        )}
        {currentPage === "simulator" && (
          <div className="min-h-screen pt-28 pb-16">
            <ScamSimulator />
          </div>
        )}
        {currentPage === "reports" && (
          <div className="min-h-screen pt-28 pb-16">
            <Reports />
          </div>
        )}
        {currentPage === "lexicon" && (
          <div className="min-h-screen pt-28 pb-16">
            <Lexicon />
          </div>
        )}
        {currentPage === "emergency" && (
          <div className="min-h-screen pt-28 pb-16">
            <EmergencySteps />
          </div>
        )}
      </main>

      <footer className="relative z-10 bg-black/80 border-t border-white/10 py-8 mt-16">
        <div className="max-w-[1200px] mx-auto px-10 text-center">
          <p className="text-gray-500 text-sm">
            © <span className="text-white font-bold">CryptoCLEAR</span> - All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  )
}
