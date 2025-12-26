import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function DocsPage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-4xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12"
            >
                <div className="border-b border-white/10 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Documentation
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Get started with Zenpad on your Linux machine.
                    </p>
                </div>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                        <span className="p-2 rounded bg-primary/10 text-primary">01</span>
                        Requirements
                    </h2>
                    <div className="glass p-6 rounded-xl">
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Python 3.6+</li>
                            <li>GTK+ 3.22+</li>
                            <li>GtkSourceView 4</li>
                            <li>PyGObject (python3-gi)</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                        <span className="p-2 rounded bg-primary/10 text-primary">02</span>
                        Installation
                    </h2>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-foreground">Debian / Ubuntu</h3>
                        <div className="glass p-4 rounded-xl font-mono text-sm overflow-x-auto">
                            <div className="flex gap-4 text-muted-foreground border-b border-white/5 pb-2 mb-2">
                                <Terminal className="w-4 h-4" />
                                <span>bash</span>
                            </div>
                            <p className="text-emerald-400"># Install .deb package</p>
                            <p>sudo dpkg -i zenpad_1.0.0_all.deb</p>
                            <p>sudo apt-get install -f</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-foreground">Build from Source</h3>
                        <div className="glass p-4 rounded-xl font-mono text-sm overflow-x-auto">
                            <div className="flex gap-4 text-muted-foreground border-b border-white/5 pb-2 mb-2">
                                <Terminal className="w-4 h-4" />
                                <span>bash</span>
                            </div>
                            <p className="text-muted-foreground mb-2"># Install build dependencies</p>
                            <p className="whitespace-pre-wrap">sudo apt install build-essential fakeroot debhelper dh-python python3-all python3-gi gir1.2-gtksource-4</p>
                            <br />
                            <p className="text-muted-foreground mb-2"># Build package</p>
                            <p>dpkg-buildpackage -us -uc</p>
                        </div>
                    </div>
                </section>
            </motion.div>
        </div>
    );
}
