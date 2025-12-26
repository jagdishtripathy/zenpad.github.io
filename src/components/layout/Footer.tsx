import { Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background py-8 mt-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="font-mono font-bold text-sm">Zenpad</span>
                    <p className="text-xs text-muted-foreground">
                        Distraction-free coding for minimalists.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/jagdishtripathy/zenpad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 text-center">
                <p className="text-[10px] text-muted-foreground/50">
                    Released under GPL 2.0 License.
                </p>
            </div>
        </footer>
    );
}
