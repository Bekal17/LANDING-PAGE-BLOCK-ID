import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Brain, Route, Bot, Users } from "lucide-react";

const products = [
  {
    icon: Shield,
    title: "Wallet Identity Layer",
    description: "Composable on-chain identity profiles aggregating activity, holdings, and reputation across chains.",
  },
  {
    icon: Brain,
    title: "AI Trust Score",
    description: "ML-powered scoring engine that evaluates wallet trustworthiness in real-time using behavioral signals.",
  },
  {
    icon: Route,
    title: "Smart Router",
    description: "Intelligent transaction routing that adapts based on trust context, gas optimization, and risk parameters.",
  },
  {
    icon: Bot,
    title: "AI Agent System",
    description: "Autonomous agents that monitor, verify, and act on wallet reputation data across protocols.",
  },
  {
    icon: Users,
    title: "Social Reputation",
    description: "Cross-platform social graph analysis mapping on-chain and off-chain reputation into a unified score.",
  },
];

const ProductSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="product" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Product</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Modular Trust Stack
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Five composable primitives that form the backbone of Web3 identity infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-panel-hover p-6 ${i >= 3 ? "lg:col-span-1" : ""}`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <product.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
