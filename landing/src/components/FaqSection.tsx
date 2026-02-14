import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is blockID?",
    a: "blockID is an AI-powered trust and identity infrastructure for Web3. It provides programmable identity profiles, trust scoring, and autonomous AI agents that work across chains and protocols.",
  },
  {
    q: "How does the AI Trust Score work?",
    a: "Our ML engine analyzes on-chain activity, transaction patterns, holding behavior, social signals, and cross-chain data to generate a real-time trust score for any wallet address.",
  },
  {
    q: "What chains are supported?",
    a: "blockID currently supports Ethereum, Polygon, Arbitrum, Optimism, Base, and BNB Chain, with more networks being added through our multi-chain expansion roadmap.",
  },
  {
    q: "How do AI Agents work?",
    a: "AI Agents are autonomous monitoring services that can be deployed to track wallet sets, detect anomalies, and trigger actions based on configurable trust thresholds and behavioral patterns.",
  },
  {
    q: "Is there a free tier?",
    a: "Yes. blockID offers a generous free tier for developers including 10,000 API calls per month, sandbox mode, and basic trust score queries. Enterprise plans include dedicated support and custom SLAs.",
  },
  {
    q: "How can I integrate blockID into my dApp?",
    a: "Install our TypeScript SDK via npm, initialize with your API key, and start querying trust scores and identity data. Full integration typically takes less than 30 minutes.",
  },
];

const FaqSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Common Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className="glass-panel overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-display font-medium text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
