import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Preview } from "@/components/sections/Preview";
import { OpenSource } from "@/components/sections/OpenSource";

export function HomePage() {
    return (
        <>
            <Hero />
            <Features />
            <Preview />
            <OpenSource />
        </>
    );
}
