/**
 * Scam Simulator Component
 *
 * Educational tool that presents realistic cryptocurrency scam scenarios
 * and teaches users to identify red flags and manipulation tactics.
 * Includes threat analysis to explain the psychology behind each scam.
 *
 * @component
 */
"use client"

import { useState } from "react"

const scenarios = [
  {
    content: {
      title: "URGENT SECURITY ALERT",
      from: "security@crypt0-support.com",
      subject: "IMMEDIATE ACTION REQUIRED - Account Suspended",
      body: "Your wallet has been flagged for suspicious activity. You have 24 hours to verify your identity or your account will be permanently closed.\n\nCLICK HERE TO VERIFY NOW: bit.ly/verify-wallet-8834\n\nFailure to respond will result in loss of all funds.",
    },
    threats: [
      {
        label: "THREAT: Sense of Urgency",
        desc: "OBJECTIVE: Induce panic, prevent critical thinking. DEFENSE: Legitimate services never threaten immediate account closure via email.",
      },
      {
        label: "THREAT: Suspicious Sender Domain",
        desc: 'OBJECTIVE: Impersonate legitimacy. DEFENSE: Note the "0" instead of "o" in crypt0-support.com. Always verify sender addresses carefully.',
      },
      {
        label: "THREAT: Shortened URL",
        desc: "OBJECTIVE: Hide true destination. DEFENSE: Never click shortened links in unsolicited messages.",
      },
      {
        label: "THREAT: Threat of Loss",
        desc: "OBJECTIVE: Create fear-based compliance. DEFENSE: Real companies provide multiple contact methods and reasonable timeframes.",
      },
    ],
  },
  {
    content: {
      title: "Congratulations Winner!",
      from: "Elon_Musk_Official@protonmail.com",
      subject: "You've Been Selected!",
      body: "You have been randomly selected to receive 5 BTC as part of our community giveaway!\n\nTo claim your prize, send 0.5 BTC to verify your wallet address:\n1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa\n\nThis offer expires in 2 hours! Act now!",
    },
    threats: [
      {
        label: "THREAT: Too Good To Be True",
        desc: "OBJECTIVE: Exploit greed. DEFENSE: Nobody gives away free Bitcoin.",
      },
      {
        label: "THREAT: Celebrity Impersonation",
        desc: "OBJECTIVE: Leverage trust in public figures. DEFENSE: Verify all celebrity announcements through official channels only.",
      },
      {
        label: "THREAT: Request for Payment",
        desc: "OBJECTIVE: Direct theft. DEFENSE: Legitimate giveaways never require you to send crypto first.",
      },
      {
        label: "THREAT: Artificial Urgency",
        desc: "OBJECTIVE: Prevent verification. DEFENSE: Time pressure is a classic manipulation tactic.",
      },
    ],
  },
  {
    content: {
      title: "EXCLUSIVE INVESTMENT OPPORTUNITY",
      from: "investments@blockchain-fortune.net",
      subject: "Double Your ETH in 48 Hours - GUARANTEED",
      body: "Join thousands of successful investors using our AI-powered trading bot.\n\nGuaranteed 100% returns in 48 hours or your money back!\n\nMinimum investment: 1 ETH\nSend to: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb\n\nLimited spots available.",
    },
    threats: [
      {
        label: "THREAT: Guaranteed Returns",
        desc: "OBJECTIVE: Create false confidence. DEFENSE: No legitimate investment can guarantee returns.",
      },
      {
        label: "THREAT: Unverifiable Claims",
        desc: 'OBJECTIVE: Establish fake credibility. DEFENSE: "Thousands of investors" and "AI-powered" are red flags when unverifiable.',
      },
      {
        label: "THREAT: Direct Payment Request",
        desc: "OBJECTIVE: Irreversible theft. DEFENSE: Legitimate investments use regulated platforms.",
      },
      {
        label: "THREAT: Social Proof Manipulation",
        desc: "OBJECTIVE: Use fake testimonials. DEFENSE: Always independently research.",
      },
    ],
  },
]

export function ScamSimulator() {
  const [currentScenario, setCurrentScenario] = useState<(typeof scenarios)[0] | null>(null)
  const [showThreats, setShowThreats] = useState(false)

  const handleGenerate = () => {
    const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)]
    setCurrentScenario(randomScenario)
    setShowThreats(false)
  }

  const handleScan = () => {
    setShowThreats(true)
  }

  return (
    <div className="max-w-[1200px] mx-auto px-10 py-5">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent mb-10 text-center uppercase tracking-[3px]">
        Scam Simulator
      </h2>
      <p className="text-center max-w-3xl mx-auto mb-10 leading-relaxed text-muted-foreground">
        Learn to identify common cryptocurrency scams by analyzing real-world attack scenarios. Each simulation reveals
        the tactics scammers use and how to protect yourself.
      </p>

      <div className="max-w-4xl mx-auto mb-16 p-10 bg-destructive/10 border-2 border-destructive rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-destructive mb-5 text-center">Understanding Crypto Scams</h3>

        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <div>
            <strong className="text-destructive">What This Simulation Does:</strong>
            <br />
            This tool shows you real examples of scam messages that people receive every day. You'll learn to identify
            the warning signs before you click any links or send any money. By practicing here in a safe environment,
            you'll be prepared when you encounter these tactics in real life.
          </div>

          <div>
            <strong className="text-destructive">Why Scammers Target Crypto Users:</strong>
            <br />
            Cryptocurrency transactions can't be reversed. Once you send crypto to a scammer, it's gone forever -
            there's no bank to call, no credit card company to dispute the charge. Scammers know this, which is why they
            focus on crypto. They use psychological tricks like urgency, fear, and greed to make you act before you
            think.
          </div>

          <div>
            <strong className="text-destructive">Common Scam Tactics You'll Learn:</strong>
            <br />• <strong>Urgency:</strong> "Act now or lose your money!" - Legitimate companies give you time to
            think
            <br />• <strong>Impersonation:</strong> Pretending to be famous people or official companies
            <br />• <strong>Too Good to Be True:</strong> Promising guaranteed returns or free money
            <br />• <strong>Fear Tactics:</strong> Threatening account closure or legal action
          </div>

          <div>
            <strong className="text-destructive">How to Use This Simulator:</strong>
            <br />
            Click "Generate Threat Scenario" below to see a realistic scam message. Try to spot the red flags yourself
            before clicking "Scan for Red Flags" to see the analysis. The more scenarios you practice with, the better
            you'll become at spotting real scams.
          </div>

          <div className="text-center py-5 bg-card/50 rounded mt-8 border border-border">
            <p className="text-primary text-lg font-medium">Scroll down to start the simulation</p>
          </div>
        </div>
      </div>

      <h3 className="text-3xl font-bold text-primary mb-8 text-center">Practice Identifying Scams</h3>

      <div className="text-center mb-10 flex gap-5 justify-center flex-wrap">
        <button
          onClick={handleGenerate}
          className="px-10 py-4 bg-card border-2 border-chart-2 text-chart-2 text-sm font-semibold tracking-wide hover:bg-chart-2 hover:text-background hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all rounded-lg"
        >
          [ Generate Threat Scenario ]
        </button>
        {currentScenario && !showThreats && (
          <button
            onClick={handleScan}
            className="px-10 py-4 bg-card border-2 border-destructive text-destructive text-sm font-semibold tracking-wide hover:bg-destructive hover:text-destructive-foreground hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all rounded-lg"
          >
            [ Scan for Red Flags ]
          </button>
        )}
      </div>

      {currentScenario ? (
        <div className="bg-card border-2 border-destructive p-10 mb-10 max-w-3xl mx-auto leading-relaxed shadow-[0_0_30px_rgba(239,68,68,0.2)] rounded-lg">
          <strong className="text-xl text-foreground block mb-4">{currentScenario.content.title}</strong>
          <div className="text-muted-foreground mb-2">
            <strong>From:</strong> {currentScenario.content.from}
          </div>
          <div className="text-muted-foreground mb-6">
            <strong>Subject:</strong> {currentScenario.content.subject}
          </div>
          <div className="text-muted-foreground whitespace-pre-line">{currentScenario.content.body}</div>
        </div>
      ) : (
        <div className="bg-card border-2 border-border p-10 mb-10 max-w-3xl mx-auto text-center rounded-lg">
          <p className="text-muted-foreground italic py-16">
            Click "Generate Threat Scenario" to begin your training...
          </p>
        </div>
      )}

      {showThreats && currentScenario && (
        <div className="bg-card border-2 border-primary p-10 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 rounded-lg shadow-lg">
          {currentScenario.threats.map((threat, index) => (
            <div key={index} className="mb-8 pb-8 border-b border-border last:border-b-0">
              <div className="text-sm font-bold text-destructive mb-2 uppercase tracking-wide">{threat.label}</div>
              <div className="text-muted-foreground leading-relaxed">{threat.desc}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
