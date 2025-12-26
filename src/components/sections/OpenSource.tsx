import { Github, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function OpenSource() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                        Open Source & <span className="text-primary">Community Driven</span>
                    </h2>
                    <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10">
                        Zenpad is built by developers, for developers. We believe in transparency and collaboration.
                        The code is 100% open source under the GPL 2.0 license.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://github.com/jagdishtripathy/zenpad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-12 px-8 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-white/90 transition-colors shadow-lg shadow-white/10"
                        >
                            <Github className="w-5 h-5" />
                            Star on GitHub
                        </a>
                        <a
                            href="https://github.com/jagdishtripathy/zenpad/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-12 px-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-foreground font-medium flex items-center gap-2 transition-colors backdrop-blur-sm"
                        >
                            <Heart className="w-4 h-4 text-rose-500" />
                            Sponsor Project
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
