import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-primary-foreground">
            <Navbar />
            <main className="flex-1 flex flex-col pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
}
