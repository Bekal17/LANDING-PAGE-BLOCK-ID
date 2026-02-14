import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "complete",
    items: ["Identity SDK launch", "Trust Score v1", "Mainnet deployment"],
  },
  {
    phase: "Phase 2",
    title: "Intelligence",
    status: "active",
    items: ["AI Agent framework", "Social reputation module", "Multi-chain expansion"],
  },
  {
    phase: "Phase 3",
    title: "Scale",
    status: "upcoming",
    items: ["Smart Router v2", "Enterprise APIs", "Governance integration"],
  },
  {
    phase: "Phase 4",
    title: "Autonomy",
    status: "upcoming",
    items: ["Autonomous agent network", "Cross-protocol trust mesh", "Decentralized scoring"],
  },
];

const RoadmapSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="roadmap" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Roadmap</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Building in Phases
          </h2>
        </motion.div>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Line */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px timeline-line" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="hidden lg:flex justify-center mb-8">
                  <div className={phase.status === "upcoming" ? "timeline-dot-inactive" : "timeline-dot"} />
                </div>

                <div className={`glass-panel p-5 h-full ${phase.status === "active" ? "glow-border" : ""}`}>
                  <span className={`text-xs font-mono font-bold ${phase.status === "complete" ? "text-primary" : phase.status === "active" ? "text-accent" : "text-muted-foreground"}`}>
                    {phase.phase}
                  </span>
                  <h3 className="font-display text-lg font-semibold mt-1 mb-3">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full ${phase.status === "complete" ? "bg-primary" : phase.status === "active" ? "bg-accent" : "bg-muted-foreground/30"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {phase.status === "active" && (
                    <div className="mt-4 text-xs font-medium text-accent">● In Progress</div>
                  )}
                  {phase.status === "complete" && (
                    <div className="mt-4 text-xs font-medium text-primary">✓ Complete</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
