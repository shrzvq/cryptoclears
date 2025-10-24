"use client"

type Page = "home" | "blockchain" | "simulator" | "lexicon" | "emergency" | "reports"

/**
 * Props for the Navigation component
 * @interface NavigationProps
 * @property {Page} currentPage - Currently active page
 * @property {function} onNavigate - Callback to handle page navigation
 */
interface NavigationProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

/**
 * Navigation Component
 *
 * Fixed navigation bar that allows users to switch between different
 * sections of the CryptoCLEAR educational platform.
 *
 * @component
 */
export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-[1600px] mx-auto px-10 py-5">
        <div className="flex justify-between items-center">
          <button
            onClick={() => onNavigate("home")}
            className="text-2xl font-bold text-foreground tracking-wide hover:text-primary transition-colors"
          >
            CryptoCLEAR
          </button>
          <div className="flex gap-0 items-center border border-border rounded-full p-1.5 bg-card/50 backdrop-blur-md shadow-lg">
            {[
              { id: "home", label: "Home" },
              { id: "blockchain", label: "Blockchain Builder" },
              { id: "simulator", label: "Scam Simulator" },
              { id: "reports", label: "Reports" },
              { id: "lexicon", label: "Lexicon" },
              { id: "emergency", label: "Emergency Steps" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as Page)}
                className={`px-5 py-2.5 text-sm font-medium whitespace-nowrap rounded-full transition-all ${
                  currentPage === item.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
