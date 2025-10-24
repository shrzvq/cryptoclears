"use client"

import { useState } from "react"

/**
 * Lexicon Component
 *
 * Expandable glossary of cryptocurrency security terms with detailed
 * explanations written in plain language for educational purposes.
 *
 * @component
 */
const lexiconTerms = [
  {
    term: "Phishing",
    definition:
      'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity in digital communication. In crypto, this often involves fake wallet sites or emails claiming to be from exchanges. Think of it like a fisherman using fake bait - scammers create fake websites or emails that look real to "catch" your private information. They might send you an email that looks like it\'s from Coinbase or another exchange, with links to fake websites. When you enter your password on the fake site, they steal it. Always check the web address carefully and never click links in unexpected emails.',
  },
  {
    term: "Private Key",
    definition:
      "A secret cryptographic code that allows you to access and control your cryptocurrency. Think of it like a master key to a bank vault - whoever has this key has complete access to everything inside. Never share your private key with anyone, not even people claiming to be tech support or customer service. Legitimate companies will NEVER ask for your private key. If someone gets your private key, they can take all your cryptocurrency immediately, and you can't get it back. Store your private key somewhere safe and offline, like written on paper in a secure location.",
  },
  {
    term: "Pump and Dump",
    definition:
      "A scheme where scammers artificially inflate the price of a cryptocurrency through misleading statements, then sell their holdings at the peak, causing the price to crash and leaving other investors with losses. Here's how it works: Scammers buy a lot of a cheap cryptocurrency, then spread rumors and hype about it on social media saying \"this coin is going to the moon!\" When regular people see the hype and buy in, the price goes up. Once it's high enough, the scammers sell all their coins for a profit, the price crashes, and everyone else loses money. If you see people aggressively promoting a coin with promises of quick riches, it's probably a pump and dump scheme.",
  },
  {
    term: "Rug Pull",
    definition:
      "When developers abandon a project and run away with investors' funds. The name comes from the phrase \"pulling the rug out from under someone.\" Imagine you're standing on a rug and someone yanks it - you fall. That's what happens to investors in a rug pull. The developers create a new cryptocurrency or DeFi project, get lots of people to invest money in it, then suddenly shut everything down and take all the money. They delete their social media, close the website, and disappear. This is especially common with new, unknown projects that promise huge returns. Always research the developers behind a project and be suspicious of new coins with anonymous creators.",
  },
  {
    term: "Social Engineering",
    definition:
      'Psychological manipulation tactics used to trick people into revealing confidential information or performing actions that compromise security. This is the foundation of most crypto scams. Instead of hacking your computer, scammers hack your emotions and decision-making. They might create a sense of urgency ("Your account will be closed in 24 hours!"), use fear ("You\'ll lose all your money!"), appeal to greed ("Double your Bitcoin!"), or pretend to be someone you trust. Social engineering works because it targets human nature, not computer systems. The best defense is to slow down, think critically, and verify everything before taking action. If someone is pressuring you to act quickly, that\'s a major warning sign.',
  },
  {
    term: "Seed Phrase",
    definition:
      'A series of 12-24 words that can restore your cryptocurrency wallet. Think of it as a master password made up of random words like "apple river mountain cloud." This seed phrase is even more important than your private key because it can generate all your private keys. If you lose your phone or computer, you can use your seed phrase to recover your wallet on a new device. However, if someone else gets your seed phrase, they can steal everything. Write it down on paper (not on your computer or phone), store it somewhere very safe, and NEVER type it into any website or share it with anyone. Legitimate companies will never ask for your seed phrase. Anyone asking for it is trying to steal from you.',
  },
  {
    term: "Two-Factor Authentication (2FA)",
    definition:
      "An extra layer of security requiring two forms of identification before accessing an account. Instead of just a password (something you know), 2FA adds a second step like a code from your phone (something you have). Even if a scammer steals your password, they can't get into your account without also having access to your phone or authentication app. The most common types are: text message codes (less secure), authentication apps like Google Authenticator (more secure), or physical security keys (most secure). Always enable 2FA on your crypto exchanges and wallets. It's like having two locks on your door instead of one - much harder for thieves to break in.",
  },
]

export function Lexicon() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleTerm = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-[900px] mx-auto px-10 py-5">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent mb-10 text-center uppercase tracking-[3px]">
        Crypto Security Lexicon
      </h2>
      <p className="text-center max-w-3xl mx-auto mb-10 leading-relaxed text-muted-foreground">
        Essential terminology to help you navigate the cryptocurrency security landscape with confidence.
      </p>

      <div className="space-y-5">
        {lexiconTerms.map((item, index) => (
          <div key={index} className="border border-primary/30 bg-card/60 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleTerm(index)}
              className="w-full px-5 py-5 flex justify-between items-center hover:bg-primary/10 transition-colors"
            >
              <span className="text-lg font-bold text-primary">{item.term}</span>
              <span className="text-2xl font-light text-primary">{openIndex === index ? "−" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-[1000px] px-5 py-5" : "max-h-0"
              }`}
            >
              <p className="text-muted-foreground leading-relaxed">{item.definition}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
