/**
 * Blockchain Builder Component
 *
 * Interactive educational tool that demonstrates how blockchain technology works.
 * Users can add blocks to a chain to understand the concept of linked, immutable
 * data structures that form the foundation of cryptocurrency technology.
 *
 * @component
 */
"use client"

import { useState } from "react"

export function BlockchainBuilder() {
  const [blockCount, setBlockCount] = useState(1)

  const handleAddBlock = () => {
    if (blockCount < 8) {
      setBlockCount(blockCount + 1)
    }
  }

  const handleReset = () => {
    setBlockCount(1)
  }

  return (
    <div className="max-w-[1200px] mx-auto px-10 py-5">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent mb-10 text-center uppercase tracking-[3px]">
        Blockchain Builder
      </h2>
      <p className="text-center max-w-3xl mx-auto mb-10 leading-relaxed text-muted-foreground">
        Understand the fundamentals of blockchain technology by building your own chain. Each block contains transaction
        data and is cryptographically linked to the previous block, creating an immutable ledger.
      </p>

      <div className="text-center py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10 place-items-center">
          {Array.from({ length: blockCount }).map((_, i) => (
            <div key={i} className="relative">
              <div className="w-36 h-36 bg-gradient-to-br from-chart-1/80 to-chart-1/40 border-2 border-chart-1 shadow-[0_0_30px_rgba(123,97,255,0.3)] flex flex-col items-center justify-center relative hover:scale-110 hover:shadow-[0_0_50px_rgba(123,97,255,0.5)] transition-all cursor-pointer group rounded-lg backdrop-blur-sm">
                <div className="text-sm font-bold text-foreground mb-2">Block {i + 1}</div>
                <div className="text-xs font-mono text-muted-foreground">
                  0x{Math.random().toString(16).substr(2, 3).toUpperCase()}...
                </div>
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-card text-foreground px-3 py-2 rounded text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-border pointer-events-none shadow-lg">
                  Transaction Data: 0x{Math.random().toString(16).substr(2, 6).toUpperCase()}
                </div>
              </div>
              {i < blockCount - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-r from-chart-1 to-chart-1/50" />
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-5 justify-center flex-wrap">
          <button
            onClick={handleAddBlock}
            disabled={blockCount >= 8}
            className="px-10 py-4 bg-card border-2 border-chart-2 text-chart-2 text-sm font-semibold tracking-wide hover:bg-chart-2 hover:text-background hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
          >
            [ Add the Next Block ]
          </button>
          <button
            onClick={handleReset}
            className="px-10 py-4 bg-card border-2 border-destructive text-destructive text-sm font-semibold tracking-wide hover:bg-destructive hover:text-destructive-foreground hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all rounded-lg"
          >
            [ Reset Chain ]
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 p-10 bg-card border border-primary/30 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-primary mb-5 text-center">Why Learn About Blockchain?</h3>

        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <div>
            <strong className="text-primary">What This Simulation Teaches:</strong>
            <br />
            This interactive builder helps you understand how blockchain technology actually works. By clicking "Add the
            Next Block," you're creating a chain of connected information blocks - just like real cryptocurrencies do.
          </div>

          <div>
            <strong className="text-primary">Why It Matters:</strong>
            <br />
            Understanding blockchain is your first defense against scams. When you know how the technology works, you
            can spot when someone is lying about it. Scammers often use confusing tech terms to trick people who don't
            understand the basics. If you understand blockchain, you'll know that legitimate cryptocurrencies are
            transparent and traceable - not the "untraceable anonymous money" that scammers often promise.
          </div>

          <div>
            <strong className="text-primary">Key Takeaway:</strong>
            <br />
            Each block in a blockchain is permanently connected to the one before it. This makes it nearly impossible to
            fake or change past transactions. However, this also means that if you send cryptocurrency to a scammer,
            that transaction is permanent and can't be reversed - which is why it's so important to verify everything
            before you send money.
          </div>

          <div>
            <strong className="text-primary">Real-World Application:</strong>
            <br />
            When someone promises you can "delete" a transaction or "reverse" a crypto payment, that's a red flag.
            Blockchain technology doesn't work that way. Legitimate crypto services will never ask you to send money to
            "unlock" or "verify" your funds because the blockchain itself is the verification.
          </div>
        </div>
      </div>
    </div>
  )
}
