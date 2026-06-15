export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Shopify Inventory Autopilot
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-reorder inventory<br />
          <span className="text-[#58a6ff]">before stockouts happen</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Predictive inventory management for Shopify stores. Automatically generate purchase orders based on real-time sales velocity and supplier lead times — no spreadsheets needed.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Free Trial — $19/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[#8b949e]">
          <li>✓ Real-time Shopify sync</li>
          <li>✓ Auto purchase orders</li>
          <li>✓ Sales velocity analytics</li>
          <li>✓ Lead time tracking</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need for 50–500 SKUs</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              "Unlimited purchase order generation",
              "Real-time Shopify webhook sync",
              "Sales velocity & trend analysis",
              "Supplier lead time management",
              "Low-stock email alerts",
              "CSV export for any PO"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">7-day free trial · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does Inventory Autopilot connect to my Shopify store?</h3>
            <p className="text-sm text-[#8b949e]">We use Shopify's official Admin API and webhooks. After subscribing, you'll install our Shopify app with one click — no code required. Inventory levels and order data sync in real time.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How are reorder points calculated?</h3>
            <p className="text-sm text-[#8b949e]">Our engine analyzes your rolling 30/60/90-day sales velocity per SKU and combines it with your supplier lead times to calculate the exact reorder point and suggested order quantity — automatically updated as your sales change.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I customize purchase orders before they're sent?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Every generated purchase order sits in a review queue where you can edit quantities, swap suppliers, or discard it entirely. You stay in full control — autopilot just does the heavy lifting.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Shopify Inventory Autopilot · $19/mo · Built for Shopify merchants
      </footer>
    </main>
  );
}
