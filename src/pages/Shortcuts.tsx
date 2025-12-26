import { motion } from "framer-motion";
import { Keyboard } from "lucide-react";

const shortcuts = [
    { key: "Ctrl + P", action: "Quick Open File" },
    { key: "Ctrl + S", action: "Save File" },
    { key: "Ctrl + W", action: "Close Tab" },
    { key: "Ctrl + Shift + F", action: "Global Search" },
    { key: "Ctrl + B", action: "Toggle Sidebar" },
    { key: "Ctrl + /", action: "Toggle Comment" },
    { key: "Ctrl + D", action: "Select Next Occurrence" },
    { key: "Alt + Up/Down", action: "Move Line" },
    { key: "Ctrl + `", action: "Toggle Terminal" },
    { key: "Ctrl + K Z", action: "Zen Mode" },
];

export function ShortcutsPage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-4xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12"
            >
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Master the <span className="text-primary text-glow">Keyboard</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Zenpad is designed to be used without a mouse. Learn these shortcuts to become a power user.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {shortcuts.map((shortcut, index) => (
                        <motion.div
                            key={shortcut.key}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="glass p-4 rounded-lg flex items-center justify-between group hover:bg-white/10 transition-colors"
                        >
                            <span className="text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                                {shortcut.action}
                            </span>
                            <kbd className="px-3 py-1.5 rounded-md bg-secondary text-sm font-mono text-primary font-bold shadow-sm border border-white/5">
                                {shortcut.key}
                            </kbd>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center p-8 rounded-xl bg-primary/5 border border-primary/20">
                    <Keyboard className="w-8 h-8 text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">
                        You can customize these keybindings in your <code className="text-primary">settings.json</code> file.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
