import { motion } from 'framer-motion';
import { Code, ArrowRight, Lock } from 'lucide-react';

export default function HowItWorksSection() {
    const steps = [
        {
            icon: Code,
            title: "Mint Your Token",
            description: "Define your token’s name, symbol, and initial supply, then deploy it to the blockchain with a single transaction using our intuitive interface.",
            color: "text-emerald-400",
        },
        {
            icon: ArrowRight,
            title: "Wrap Existing Tokens",
            description: "Convert your ERC20 tokens into the Coins ecosystem, unlocking advanced features like governance and seamless transfers.",
            color: "text-purple-400",
        },
        {
            icon: Lock,
            title: "Govern with Ease",
            description: "Securely manage your token by updating metadata or transferring ownership, all protected by robust smart contract controls.",
            color: "text-blue-400",
        },
    ];

    return (
        <section
            className="relative bg-gray-900 py-20 text-white overflow-hidden"
            aria-label="How It Works"
        >
            {/* Subtle Background Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,#10b981_1px,transparent_1px)] bg-[length:30px_30px] animate-pulse-slow" />
            </div>

            <div className="relative z-10 container mx-auto px-6">
                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400"
                >
                    How It Works
                </motion.h2>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-800/80 transition-all duration-300"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-emerald-600 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                            </div>

                            {/* Icon */}
                            <step.icon className={`w-10 h-10 ${step.color} mb-4 mx-auto`} aria-hidden="true" />

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>

                            {/* Description */}
                            <p className="text-gray-300 text-center text-sm md:text-base">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Optional CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="#get-started"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-600 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                        Start Minting Today
                    </a>
                </motion.div>
            </div>

            <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
        </section>
    );
}