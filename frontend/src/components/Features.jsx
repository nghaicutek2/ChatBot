import { Sparkles, Compass, Shield, Zap, Brain, Layers } from "lucide-react";

const features = [
    {
        icon: Sparkles,
        title: "Contextual Memory",
        desc: "Our models remember your project's history, style preferences, and constraints across multiple sessions.",
        color: "blue",
        gradient: "from-blue-500/20 to-cyan-500/10",
        border: "border-blue-500/20",
        text: "text-blue-400",
        glow: "group-hover:from-blue-500/15 group-hover:to-cyan-500/10",
    },
    {
        icon: Compass,
        title: "Blueprint Generation",
        desc: "Turn high-level concepts into technical documentation and structured layouts with architectural accuracy.",
        color: "purple",
        gradient: "from-purple-500/20 to-violet-500/10",
        border: "border-purple-500/20",
        text: "text-purple-400",
        glow: "group-hover:from-purple-500/15 group-hover:to-violet-500/10",
    },
    {
        icon: Shield,
        title: "Private Workspace",
        desc: "Enterprise-grade security ensuring your intellectual property remains within your controlled environment.",
        color: "pink",
        gradient: "from-pink-500/20 to-rose-500/10",
        border: "border-pink-500/20",
        text: "text-pink-400",
        glow: "group-hover:from-pink-500/15 group-hover:to-rose-500/10",
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        desc: "Responses generated in milliseconds with optimized inference pipelines and edge-deployed architecture.",
        color: "amber",
        gradient: "from-amber-500/20 to-yellow-500/10",
        border: "border-amber-500/20",
        text: "text-amber-400",
        glow: "group-hover:from-amber-500/15 group-hover:to-yellow-500/10",
    },
    {
        icon: Brain,
        title: "Deep Reasoning",
        desc: "Multi-step logical reasoning that breaks complex problems into structured, verifiable solutions.",
        color: "emerald",
        gradient: "from-emerald-500/20 to-teal-500/10",
        border: "border-emerald-500/20",
        text: "text-emerald-400",
        glow: "group-hover:from-emerald-500/15 group-hover:to-teal-500/10",
    },
    {
        icon: Layers,
        title: "Multi-Modal",
        desc: "Seamlessly process text, images, code, and documents within a single unified conversation thread.",
        color: "indigo",
        gradient: "from-indigo-500/20 to-blue-500/10",
        border: "border-indigo-500/20",
        text: "text-indigo-400",
        glow: "group-hover:from-indigo-500/15 group-hover:to-blue-500/10",
    },
];

export default function Features() {
    return (
        <section className="relative py-32 px-6 md:px-12 bg-black text-white overflow-hidden">

            {/* Background decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[200px] rounded-full pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            ></div>

            <div className="relative z-10 max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between py-16 mb-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-xl">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                            <span className="text-xs uppercase tracking-widest text-gray-400">
                                Core Capabilities
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold font-headline leading-tight">
                            Designed for <br />
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                                Precision Engineering
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-400 max-w-xl text-lg leading-relaxed">
                            Architect AI isn't just a chatbot. It's an expansive
                            ecosystem built for the builders, the designers, and the
                            visionaries.
                        </p>
                    </div>

                    <a
                        href="#"
                        className="mt-8 md:mt-0 group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-xl transition-all duration-300"
                    >
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Explore all features</span>
                        <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                </div>

                {/* Features Grid — Bento Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feat, i) => {
                        const Icon = feat.icon;
                        const isLarge = i === 0 || i === 3;

                        return (
                            <div
                                key={feat.title}
                                className={`group relative rounded-3xl p-8 md:p-10 border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-500 cursor-pointer overflow-hidden ${isLarge ? "lg:col-span-2 lg:flex lg:items-start lg:gap-10" : ""
                                    }`}
                            >
                                {/* Hover glow */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent to-transparent ${feat.glow} transition-all duration-700 opacity-0 group-hover:opacity-100`}></div>

                                {/* Corner accent line */}
                                <div className={`absolute top-0 left-8 w-16 h-[2px] bg-gradient-to-r ${feat.gradient} rounded-full`}></div>

                                <div className="relative z-10 flex-shrink-0">
                                    <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${feat.gradient} border ${feat.border} group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                                        <Icon className={`w-8 h-8 ${feat.text}`} />
                                    </div>
                                </div>

                                <div className="relative z-10 mt-8 lg:mt-0">
                                    <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-white transition-colors">
                                        {feat.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-[15px]">
                                        {feat.desc}
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        <span className={`text-sm ${feat.text}`}>
                                            Learn more
                                        </span>
                                        <span className={`text-sm ${feat.text} group-hover:translate-x-1 transition-transform duration-300`}>→</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats Bar */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: "99.9%", label: "Uptime SLA" },
                        { value: "<50ms", label: "Avg Response" },
                        { value: "10M+", label: "Queries Processed" },
                        { value: "256-bit", label: "Encryption" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="text-center p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
                        >
                            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-500 mt-2 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}