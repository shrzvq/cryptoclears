"use client"

import { useState, useEffect } from "react"
import { AlertTriangle, ExternalLink, Calendar, Newspaper } from "lucide-react"

interface Article {
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  source: {
    name: string
  }
}

/**
 * Reports Component
 *
 * Displays real-time cryptocurrency scam news articles fetched from NewsAPI.
 * Articles are filtered to ensure relevance to crypto scams and fraud.
 * Requires NEWS_API_KEY environment variable to be configured.
 *
 * @component
 */
export function Reports() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch("/api/news")

      if (!response.ok) {
        const data = await response.json()
        if (data.error === "NEWS_API_KEY not configured") {
          throw new Error("Please add your NEWS_API_KEY in the environment variables to view reports.")
        }
        throw new Error("Failed to fetch articles")
      }

      const data = await response.json()
      setArticles(data.articles || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load articles. Please try again later.")
      console.error("Error fetching articles:", err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <section id="reports" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Newspaper className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Latest Reports</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Crypto Scam Reports
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest cryptocurrency scam reports and fraud alerts from around the world
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
            <p className="text-muted-foreground">Loading latest reports...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 text-center">
              <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-destructive mb-2">Unable to Load Reports</h3>
              <p className="text-muted-foreground mb-4">{error}</p>
              {!error.includes("NEWS_API_KEY") && (
                <button
                  onClick={fetchArticles}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Try Again
                </button>
              )}
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {!loading && !error && articles.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <article
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Image */}
                {article.urlToImage && (
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={article.urlToImage || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Source & Date */}
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span className="font-medium text-primary">{article.source.name}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.description}</p>

                  {/* Read More Link */}
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    Read Full Article
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* No Articles */}
        {!loading && !error && articles.length === 0 && (
          <div className="text-center py-20">
            <Newspaper className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Reports Available</h3>
            <p className="text-muted-foreground">Check back later for the latest crypto scam reports</p>
          </div>
        )}
      </div>
    </section>
  )
}
