import { useState } from 'react';
import { motion } from 'framer-motion';
import { Coins, Key, Shield } from 'lucide-react';
import eth from "./assets/eth.png";

export default function CoinMintingHero() {
    const [activeFeature, setActiveFeature] = useState<any>(null);

    const features = [
        {
            icon: Coins,
            title: "Create Tokens",
            description: "Mint your own ERC6909 tokens with custom metadata and supply.",
            color: "text-emerald-400",
        },
        {
            icon: Key,
            title: "Wrap Existing",
            description: "Convert ERC20 tokens into the Coins ecosystem seamlessly.",
            color: "text-purple-400",
        },
        {
            icon: Shield,
            title: "Secure Governance",
            description: "Control ownership and metadata with robust permissions.",
            color: "text-blue-400",
        },
    ];

    return (
        <section
            className="relative min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden"
            aria-label="Coin Minting Hero"
        >
            {/* Blockchain-inspired Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,#10b981_1px,transparent_1px)] bg-[length:20px_20px] animate-pulse-slow" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCwwIEwxMDAsMTAwIEwyMDAsMCBMMTAwLDEwMCBMMCwyMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] bg-repeat" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-blue-400">
                        Forge Your Crypto Legacy
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-lg">
                        Deploy, wrap, and govern your own tokens with the power of Coins—your gateway to the future of blockchain.
                    </p>

                    {/* Feature Highlights */}
                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <motion.button
                                key={feature.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className={`
                  w-full text-left p-4 rounded-lg border border-gray-800 
                  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500
                  ${activeFeature === index
                                        ? 'bg-gray-800/80 ring-2 ring-emerald-500'
                                        : 'hover:bg-gray-800/50'}
                `}
                                onClick={() => setActiveFeature(activeFeature === index ? null : index)}
                                aria-expanded={activeFeature === index}
                                aria-controls={`feature-desc-${index}`}
                            >
                                <div className="flex items-center space-x-4">
                                    <feature.icon className={`w-6 h-6 ${feature.color}`} aria-hidden="true" />
                                    <span className="font-semibold text-lg">{feature.title}</span>
                                </div>
                                {activeFeature === index && (
                                    <motion.p
                                        id={`feature-desc-${index}`}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-gray-400 mt-2 pl-10"
                                    >
                                        {feature.description}
                                    </motion.p>
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                            Mint Now
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border border-gray-700 text-gray-300 rounded-lg font-semibold hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            View Docs
                        </motion.button>
                    </div>
                </motion.div>

                {/* Visual Element - Coin Stack */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:flex items-center justify-center relative"
                    aria-hidden="true"
                >
                    <div className="relative w-80 h-80">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                        />
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-48 h-48 bg-gray-800 rounded-full shadow-xl border border-emerald-500/50 transform -translate-x-1/2 -translate-y-1/2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <img src={eth} />

                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <style >{`
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