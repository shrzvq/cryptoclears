"use client"

interface HeroSectionProps {
  onNavigate: (page: "blockchain" | "simulator" | "reports") => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const cryptoLogos = [
    { name: "Bitcoin", path: "/images/bitcoin.png", size: 60 },
    { name: "Ethereum", path: "https://i.ibb.co/vxVTmHYB/ethereum-eth-round-logo-icon-png-701751694969815akblwl2552.png", size: 55 },
    { name: "Solana", path: "/images/solana.png", size: 50 },
    { name: "Litecoin", path: "/images/litecoin.png", size: 50 },
    { name: "Dogecoin", path: "https://s2.coinmarketcap.com/static/img/coins/200x200/74.png", size: 50 },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-10 pt-28 pb-10">
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="lg:pr-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-8 leading-tight">
            Welcome to CryptoCLEAR
          </h1>
          <p className="text-base text-muted-foreground mb-10 leading-relaxed">
            Cryptocurrency economy fraud is rapidly becoming one of the leading causes of financial loss worldwide. As
            digital currencies grow in popularity, so do the tactics used by scammers to exploit new and experienced
            users alike. From phishing schemes to fake investment platforms, these threats are evolving every day —
            making awareness and education more critical than ever. CryptoClear was built to help people understand how
            these scams work, how to recognize red flags, and how to stay safe in the digital economy.
          </p>
          <p className="text-base font-medium text-primary mb-10">
            Ready to learn about it? Try some of our simulations!
          </p>
          <div className="flex flex-col gap-5 max-w-md">
            <button
              onClick={() => onNavigate("blockchain")}
              className="px-10 py-5 bg-card border-2 border-primary text-primary text-base font-semibold tracking-wide hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all hover:-translate-y-0.5 rounded-lg"
            >
              Blockchain Builder
            </button>
            <button
              onClick={() => onNavigate("simulator")}
              className="px-10 py-5 bg-card border-2 border-primary text-primary text-base font-semibold tracking-wide hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all hover:-translate-y-0.5 rounded-lg"
            >
              Scam Simulator
            </button>
            <button
              onClick={() => onNavigate("reports")}
              className="px-10 py-5 bg-card border-2 border-primary text-primary text-base font-semibold tracking-wide hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all hover:-translate-y-0.5 rounded-lg"
            >
              Real-Time Scam Reports
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center relative h-[500px]">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="text-8xl z-10 animate-float">🏦</div>

            {cryptoLogos.map((crypto, index) => {
              const angle = (index / cryptoLogos.length) * 360
              const radius = 180
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <div
                  key={crypto.name}
                  className="absolute animate-orbit"
                  style={{
                    left: "50%",
                    top: "50%",
                    ["--orbit-x" as string]: `${x}px`,
                    ["--orbit-y" as string]: `${y}px`,
                    animationDelay: `${index * 0.4}s`,
                  }}
                >
                  <img
                    src={crypto.path || "/placeholder.svg"}
                    alt={crypto.name}
                    className="w-auto h-auto opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                    style={{
                      width: `${crypto.size}px`,
                      height: `${crypto.size}px`,
                      objectFit: "contain",
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
