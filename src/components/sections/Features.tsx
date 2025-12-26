import { motion } from "framer-motion";
import { Cpu, Keyboard, Zap, Layers, Lock, Monitor } from "lucide-react";

const features = [
    {
        icon: Keyboard,
        title: "Keyboard Centric",
        description: "Keep your hands on the keys. Every action is hotkey-driven for maximum speed.",
        color: "text-blue-400",
        bg: "bg-blue-500/10"
    },
    {
        icon: Zap,
        title: "Blazing Fast",
        description: "Built with performance in mind. Opens instantly, handles large files with ease.",
        color: "text-amber-400",
        bg: "bg-amber-500/10"
    },
    {
        icon: Layers,
        title: "Distraction Free",
        description: "Minimalist by design. No toolbars, no clutter, just you and your code.",
        color: "text-purple-400",
        bg: "bg-purple-500/10"
    },
    {
        icon: Cpu,
        title: "Lightweight",
        description: "Uses minimal system resources. Runs smoothly on any hardware.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10"
    },
    {
        icon: Lock,
        title: "Local First",
        description: "No cloud dependencies. Your files stay on your machine, always.",
        color: "text-rose-400",
        bg: "bg-rose-500/10"
    },
    {
        icon: Monitor,
        title: "Linux Native",
        description: "Seamlessly integrates with GNOME and GTK workflows.",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10"
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-transparent relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Designed for <span className="text-primary">Flow State</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to stay productive, without the bloat.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all hover:bg-white/10 group hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon className={`w-7 h-7 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
