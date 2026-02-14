import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const endpoints = [
  {
    method: "GET",
    path: "/v1/identity/{address}",
    description: "Retrieve full identity profile for a wallet address",
    response: `{
  "address": "0x1234...abcd",
  "trustScore": 87,
  "level": "HIGH",
  "identity": {
    "ens": "alice.eth",
    "chains": ["ethereum", "polygon", "arbitrum"],
    "firstSeen": "2021-03-15T00:00:00Z"
  }
}`,
  },
  {
    method: "POST",
    path: "/v1/agents/deploy",
    description: "Deploy an AI monitoring agent for a wallet set",
    response: `{
  "agentId": "agent_7xk2m9",
  "status": "active",
  "monitoring": 142,
  "triggers": ["score_drop", "anomaly"]
}`,
  },
];

const methodColor: Record<string, string> = {
  GET: "text-green-400",
  POST: "text-accent",
};

const ApiSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="api" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">API Reference</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            One API. Full Stack Trust.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            RESTful endpoints designed for speed, reliability, and developer experience.
          </p>
        </motion.div>

        <div className="space-y-6">
          {endpoints.map((ep, i) => (
            <motion.div
              key={ep.path}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-panel overflow-hidden"
            >
              <div className="p-5 border-b border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`font-mono text-xs font-bold ${methodColor[ep.method] || "text-foreground"}`}>
                    {ep.method}
                  </span>
                  <span className="font-mono text-sm text-foreground/80">{ep.path}</span>
                </div>
                <p className="text-sm text-muted-foreground">{ep.description}</p>
              </div>
              <div className="code-block border-0 rounded-none">
                <pre className="p-5 text-xs sm:text-sm leading-relaxed overflow-x-auto">
                  <code className="text-muted-foreground">{ep.response}</code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiSection;
