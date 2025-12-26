import * as Dialog from "@radix-ui/react-dialog";
import { Command, X } from "lucide-react";
import { motion } from "framer-motion";

const shortcuts = [
    { key: "Ctrl + P", action: "Quick Open File" },
    { key: "Ctrl + Shift + F", action: "Global Search" },
    { key: "Ctrl + B", action: "Toggle Sidebar" },
    { key: "Ctrl + /", action: "Toggle Comment" },
    { key: "Ctrl + D", action: "Select Next Occurrence" },
    { key: "Alt + Up/Down", action: "Move Line" },
    { key: "Ctrl + `", action: "Toggle Terminal" },
    { key: "Ctrl + K Z", action: "Zen Mode" },
];

export function Shortcuts() {
    return (
        <section id="shortcuts" className="py-24 bg-secondary/5 border-t border-white/5">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Built for <span className="text-primary">Speed</span>
                    </h2>
                    <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
                        Never leave your keyboard. Zenpad is designed to be controlled entirely through shortcuts.
                    </p>

                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <button className="h-12 px-8 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors flex items-center gap-2 mx-auto">
                                <Command className="w-4 h-4" />
                                View All Shortcuts
                            </button>
                        </Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-in fade-in duration-200" />
                            <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md max-h-[85vh] overflow-y-auto rounded-xl bg-background border border-white/10 p-6 shadow-2xl z-50 animate-in zoom-in-95 duration-200 focus:outline-none">
                                <div className="flex items-center justify-between mb-6">
                                    <Dialog.Title className="text-xl font-bold">Keyboard Shortcuts</Dialog.Title>
                                    <Dialog.Close asChild>
                                        <button className="p-2 rounded-full hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors">
                                            <X className="w-4 h-4" />
                                        </button>
                                    </Dialog.Close>
                                </div>

                                <div className="space-y-4">
                                    {shortcuts.map((shortcut) => (
                                        <div key={shortcut.key} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                            <span className="text-muted-foreground text-sm">{shortcut.action}</span>
                                            <kbd className="px-2 py-1 rounded bg-secondary/50 border border-white/10 text-xs font-mono text-foreground font-medium">
                                                {shortcut.key}
                                            </kbd>
                                        </div>
                                    ))}
                                </div>

                                <Dialog.Description className="mt-6 text-xs text-center text-muted-foreground">
                                    You can customize these in settings.json
                                </Dialog.Description>
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
                </motion.div>
            </div>
        </section>
    );
}
