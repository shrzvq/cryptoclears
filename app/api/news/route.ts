import { NextResponse } from "next/server"

export async function GET() {
  const apiKey = "27512036677e434c9ebda8feac12545e"

  if (!apiKey) {
    return NextResponse.json({ error: "NEWS_API_KEY not configured" }, { status: 500 })
  }

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=(scam OR fraud OR hack OR hacked OR stolen OR theft OR ponzi OR "rug pull" OR phishing OR laundering OR "exit scam" OR ransomware OR "pump and dump" OR "fake wallet") AND (cryptocurrency OR crypto OR bitcoin OR ethereum OR blockchain OR NFT OR DeFi OR "digital currency")&sortBy=publishedAt&language=en&pageSize=100&apiKey=${apiKey}`,
      { next: { revalidate: 3600 } },
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error("NewsAPI error:", errorData)
      throw new Error(errorData.message || "Failed to fetch news")
    }

    const data = await response.json()

    const cryptoKeywords = [
      "crypto",
      "bitcoin",
      "ethereum",
      "blockchain",
      "nft",
      "defi",
      "cryptocurrency",
      "digital currency",
      "btc",
      "eth",
      "token",
      "wallet",
      "exchange",
      "coinbase",
      "binance",
    ]

    const scamKeywords = [
      "scam",
      "fraud",
      "hack",
      "hacked",
      "stolen",
      "theft",
      "ponzi",
      "rug pull",
      "phishing",
      "laundering",
      "exit scam",
      "ransomware",
      "pump and dump",
      "fake",
      "fraudulent",
      "scheme",
      "swindle",
      "embezzle",
      "defraud",
      "exploit",
      "breach",
      "attack",
      "victim",
      "arrest",
      "charged",
      "indicted",
      "sentenced",
      "lose",
      "lost",
      "stole",
    ]

    const filteredArticles = (data.articles || [])
      .map((article: any) => {
        const titleLower = (article.title || "").toLowerCase()
        const descLower = (article.description || "").toLowerCase()
        const combined = titleLower + " " + descLower

        const hasCrypto = cryptoKeywords.some((keyword) => combined.includes(keyword.toLowerCase()))
        const hasScam = scamKeywords.some((keyword) => combined.includes(keyword.toLowerCase()))

        let score = 0
        if (hasCrypto && hasScam) {
          if (scamKeywords.some((keyword) => titleLower.includes(keyword.toLowerCase()))) {
            score += 10
          }
          score += scamKeywords.filter((keyword) => combined.includes(keyword.toLowerCase())).length
          score += cryptoKeywords.filter((keyword) => combined.includes(keyword.toLowerCase())).length
        }

        return { ...article, relevanceScore: score }
      })
      .filter((article: any) => article.relevanceScore > 0)
      .filter((article: any, index: number, self: any[]) => index === self.findIndex((a) => a.url === article.url))
      .sort((a: any, b: any) => b.relevanceScore - a.relevanceScore)
      .slice(0, 6)

    return NextResponse.json({ ...data, articles: filteredArticles })
  } catch (error) {
    console.error("News API error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch news articles" },
      { status: 500 },
    )
  }
}
