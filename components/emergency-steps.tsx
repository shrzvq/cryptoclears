/**
 * Emergency Steps Component
 *
 * Provides a step-by-step protocol for responding to cryptocurrency scams
 * and fraud incidents. Includes contact information for relevant authorities
 * and support resources.
 *
 * @component
 */

export function EmergencySteps() {
  const steps = [
    {
      number: 1,
      title: "Stop All Transactions",
      description:
        "Immediately cease any ongoing transactions. Do not send any more cryptocurrency or provide any additional information to suspicious parties.",
    },
    {
      number: 2,
      title: "Secure Your Accounts",
      description:
        "Change all passwords immediately, especially for email accounts and cryptocurrency exchanges. Enable two-factor authentication if not already active. Use a password manager to generate strong, unique passwords.",
    },
    {
      number: 3,
      title: "Transfer Remaining Funds",
      description:
        "If you still have access to your wallet, immediately transfer any remaining cryptocurrency to a new wallet with a fresh seed phrase. Never reuse compromised wallets.",
    },
    {
      number: 4,
      title: "Document Everything",
      description:
        "Take screenshots of all communications, transaction IDs, wallet addresses, and any other relevant information. This documentation will be crucial for reporting and potential recovery efforts.",
    },
    {
      number: 5,
      title: "Report the Incident",
      description:
        "File reports with federal agencies and organizations. Having documentation from these reports can help with legal processes and may aid in recovery efforts.",
    },
    {
      number: 6,
      title: "Monitor Your Accounts",
      description:
        "Continuously monitor all financial accounts for suspicious activity. Set up alerts for transactions. Consider placing fraud alerts with credit bureaus if personal information was compromised.",
    },
  ]

  return (
    <div className="max-w-[900px] mx-auto px-10 py-5">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-destructive to-primary bg-clip-text text-transparent mb-10 text-center uppercase tracking-[3px]">
        Emergency Response Protocol
      </h2>
      <p className="text-center max-w-3xl mx-auto mb-10 leading-relaxed text-destructive font-medium">
        If you suspect you've been compromised, follow these steps immediately:
      </p>

      <div className="mb-10 p-8 bg-destructive/15 border-2 border-destructive rounded-lg">
        <h3 className="text-2xl font-bold text-destructive mb-4 text-center">Important Contact Information</h3>
        <p className="text-center text-muted-foreground leading-relaxed">
          Save these resources now - you'll need them if you're ever targeted by a scam.
        </p>
      </div>

      <div className="space-y-8">
        {steps.map((step) => (
          <div key={step.number} className="bg-red-400/10 border-l-4 border-red-400 p-8">
            <div className="text-2xl font-extrabold text-red-400 mb-4">STEP {step.number}</div>
            <div className="text-xl font-bold text-white mb-3">{step.title}</div>
            <div className="text-gray-300 leading-relaxed">{step.description}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-primary/10 border-2 border-primary rounded-lg">
        <h3 className="text-2xl font-bold text-primary mb-5 text-center">Additional Support Resources</h3>

        <div className="space-y-6 text-muted-foreground leading-loose">
          <div>
            <strong className="text-primary">Federal Agencies:</strong>
            <br />• <strong>FBI Internet Crime Complaint Center (IC3):</strong>{" "}
            <a
              href="https://www.ic3.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-foreground transition-colors"
            >
              ic3.gov
            </a>
            <br />• <strong>Federal Trade Commission (FTC):</strong>{" "}
            <a
              href="https://reportfraud.ftc.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-foreground transition-colors"
            >
              reportfraud.ftc.gov
            </a>
            <br />• <strong>Commodity Futures Trading Commission (CFTC):</strong>{" "}
            <a
              href="https://www.cftc.gov/complaint"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-foreground transition-colors"
            >
              cftc.gov/complaint
            </a>
          </div>

          <div>
            <strong className="text-primary">Crypto-Specific Resources:</strong>
            <br />• <strong>Crypto Fraud Reporting:</strong>{" "}
            <a
              href="https://www.justice.gov/criminal-fraud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-foreground transition-colors"
            >
              justice.gov/criminal-fraud
            </a>
            <br />• <strong>Securities and Exchange Commission (SEC):</strong>{" "}
            <a
              href="https://www.sec.gov/tcr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-foreground transition-colors"
            >
              sec.gov/tcr
            </a>
          </div>

          <div>
            <strong className="text-primary">Victim Support:</strong>
            <br />• <strong>AARP Fraud Watch Network Helpline:</strong> 1-877-908-3360
            <br />• <strong>National Cyber Security Alliance:</strong>{" "}
            <a
              href="https://staysafeonline.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-foreground transition-colors"
            >
              staysafeonline.org
            </a>
          </div>

          <div>
            <strong className="text-primary">Credit Monitoring Services:</strong>
            <br />• <strong>Equifax Fraud Alert:</strong> 1-888-766-0008
            <br />• <strong>Experian Fraud Alert:</strong> 1-888-397-3742
            <br />• <strong>TransUnion Fraud Alert:</strong> 1-800-680-7289
          </div>

          <div>
            <strong className="text-primary">Remember:</strong>
            <br />
            You are not alone. Millions of people fall victim to crypto scams every year. Reporting your experience
            helps authorities track and stop these criminals. Don't be embarrassed - be proactive and help protect
            others by sharing your experience with the appropriate authorities.
          </div>
        </div>
      </div>
    </div>
  )
}
