import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Rocket, Code2 } from 'lucide-react';

export default function GetStartedSection() {
    const [activeStep, setActiveStep] = useState<any>(null);

    const steps = [
        {
            icon: Wallet,
            title: "Connect Wallet",
            description: "Link your Ethereum wallet securely.",
            color: "text-emerald-400",
        },
        {
            icon: Rocket,
            title: "Mint Token",
            description: "Deploy your token to the blockchain.",
            color: "text-purple-400",
        },
        {
            icon: Code2,
            title: "Explore Code",
            description: "Customize your smart contract.",
            color: "text-blue-400",
        }
    ];

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden">
            {/* Blockchain-inspired Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,#10b981_1px,transparent_1px)] bg-[length:20px_20px] animate-pulse-slow" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-24 grid lg:grid-cols-1 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-blue-400">
                        Begin Your Web3 Journey
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-lg">
                        Mint, manage, and customize your blockchain tokens with the power of decentralization.
                    </p>

                    {/* Step Highlights */}
                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <motion.button
                                key={step.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className={`
                                    w-full text-left p-6 rounded-lg border border-gray-800 
                                    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500
                                    ${activeStep === index
                                        ? 'bg-gray-800/80 ring-2 ring-emerald-500'
                                        : 'hover:bg-gray-800/50'}
                                `}
                                onClick={() => setActiveStep(activeStep === index ? null : index)}
                                aria-expanded={activeStep === index}
                                aria-controls={`step-desc-${index}`}
                            >
                                <div className="flex items-center space-x-4">
                                    <step.icon className={`w-8 h-8 ${step.color}`} aria-hidden="true" />
                                    <span className="font-semibold text-xl">{step.title}</span>
                                </div>
                                {activeStep === index && (
                                    <motion.p
                                        id={`step-desc-${index}`}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-gray-400 mt-2 pl-10"
                                    >
                                        {step.description}
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
            </div>

            {/* Transition to next section smoothly */}
            <div className="relative container mx-auto px-6 py-24 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-t-3xl -mt-16 z-20">
                <div className="flex flex-col items-center text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl text-white font-bold">
                        Ready to Mint Your Tokens?
                    </h2>
                    <p className="text-lg text-gray-200 max-w-md">
                        Start your minting process now and step into the world of decentralized tokens.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                        Get Started
                    </motion.button>
                </div>
            </div>

            <style>{`
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
