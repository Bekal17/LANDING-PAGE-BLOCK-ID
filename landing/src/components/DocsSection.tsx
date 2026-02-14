import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const codeSnippet = `import { BlockID } from '@blockid/sdk';

const client = new BlockID({
  apiKey: process.env.BLOCKID_API_KEY,
  network: 'mainnet',
});

// Get wallet trust score
const score = await client.identity.getTrustScore(
  '0x1234...abcd'
);

console.log(score);
// {
//   address: "0x1234...abcd",
//   trustScore: 87,
//   level: "HIGH",
//   factors: { ... }
// }`;

const DocsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="docs" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Documentation</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Built for Developers
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Comprehensive SDKs, clear documentation, and production-ready examples.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Code block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="code-block overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                <span className="w-3 h-3 rounded-full bg-destructive/50" />
                <span className="w-3 h-3 rounded-full bg-primary/30" />
                <span className="w-3 h-3 rounded-full bg-primary/50" />
                <span className="ml-3 text-xs text-muted-foreground">quickstart.ts</span>
              </div>
              <pre className="p-5 text-xs sm:text-sm leading-relaxed overflow-x-auto">
                <code className="text-muted-foreground">
                  {codeSnippet.split('\n').map((line, i) => (
                    <div key={i} className="flex">
                      <span className="w-8 text-right mr-4 text-muted-foreground/30 select-none">{i + 1}</span>
                      <span className={line.includes('//') ? 'text-muted-foreground/60' : line.includes("'") || line.includes('"') ? 'text-primary/80' : 'text-foreground/80'}>
                        {line}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            {[
              { title: "TypeScript SDK", desc: "Full type safety with auto-generated types from our API schema." },
              { title: "REST & GraphQL", desc: "Choose your preferred protocol. Both fully supported with identical coverage." },
              { title: "Webhooks", desc: "Real-time event notifications for trust score changes and agent actions." },
              { title: "Sandbox Mode", desc: "Test against simulated wallet data before going live." },
            ].map((item) => (
              <div key={item.title} className="glass-panel-hover p-5">
                <h4 className="font-display font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DocsSection;
