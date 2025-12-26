import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FilePlus, FolderOpen, Download, Undo, Redo,
    Scissors, Copy, Clipboard, Search, X, Minus, Square
} from "lucide-react";

export function Preview() {
    const [phase, setPhase] = useState<"terminal" | "editor">("terminal");
    const [typedText, setTypedText] = useState("");
    const [editorLines, setEditorLines] = useState<string[]>([]);

    // Typing content
    const terminalCommand = "zenpad source.py";
    const editorCode = [
        "import React from 'react';",
        "",
        "function Zenpad() {",
        "  return 'Simple';",
        "}"
    ];

    // Stage 1: Type terminal command
    useEffect(() => {
        if (phase === "terminal") {
            let i = 0;
            const interval = setInterval(() => {
                setTypedText(terminalCommand.slice(0, i + 1));
                i++;
                if (i > terminalCommand.length) {
                    clearInterval(interval);
                    setTimeout(() => setPhase("editor"), 800);
                }
            }, 100);
            return () => clearInterval(interval);
        }
    }, [phase]);

    // Stage 2: Type editor code
    useEffect(() => {
        if (phase === "editor") {
            let lineIndex = 0;
            let charIndex = 0;

            const interval = setInterval(() => {
                if (lineIndex >= editorCode.length) {
                    clearInterval(interval);
                    return;
                }

                const currentLine = editorCode[lineIndex];

                if (charIndex <= currentLine.length) {
                    setEditorLines(prev => {
                        const newLines = [...prev];
                        newLines[lineIndex] = currentLine.slice(0, charIndex);
                        return newLines;
                    });
                    charIndex++;
                } else {
                    lineIndex++;
                    charIndex = 0;
                    setEditorLines(prev => [...prev, ""]);
                }
            }, 50);

            return () => clearInterval(interval);
        }
    }, [phase]);

    return (
        <section className="py-24 overflow-hidden relative min-h-[600px] flex items-center justify-center">

            <div className="container mx-auto px-4 bg-transparent z-10 w-full max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        From Terminal to <span className="text-primary">Flow</span>
                    </h2>
                </div>

                <motion.div
                    layout
                    initial={{ width: 600, height: 400, borderRadius: 12 }}
                    animate={{
                        width: phase === "editor" ? "100%" : 600,
                        height: phase === "editor" ? 500 : 350,
                        backgroundColor: phase === "editor" ? "#fbfbfb" : "#0f0f0f",
                        borderColor: phase === "editor" ? "#d4d4d4" : "rgba(255,255,255,0.1)"
                    }}
                    transition={{ duration: 2.0, type: "spring", bounce: 0.4 }}
                    className="mx-auto rounded-xl overflow-hidden flex flex-col relative shadow-2xl"
                >
                    <AnimatePresence mode="wait">
                        {phase === "terminal" ? (
                            <motion.div
                                key="terminal-content"
                                exit={{ opacity: 0 }}
                                className="flex flex-col h-full bg-black/90"
                            >
                                {/* Terminal Title Bar */}
                                <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="ml-4 text-xs font-mono text-muted-foreground/50">
                                        bash
                                    </div>
                                </div>

                                {/* Terminal Body */}
                                <div className="p-6 font-mono text-sm md:text-base flex-1">
                                    <div className="text-green-500">
                                        <span className="text-blue-400">user@linux:~$</span> {typedText}
                                        <motion.span
                                            animate={{ opacity: [1, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.8 }}
                                            className="inline-block w-2.5 h-5 bg-green-500 align-middle ml-1"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="editor-content"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col h-full font-sans text-sm text-[#2e3436] bg-[#f2f2f2]"
                            >
                                {/* GTK Header Bar */}
                                <div className="h-10 bg-[#e8e8e7] border-b border-[#dadada] flex items-center justify-between px-4 select-none">
                                    <div className="w-16" /> {/* Spacer for centering */}
                                    <span className="font-bold text-[#2e3436] drop-shadow-sm">Zenpad</span>
                                    <div className="flex gap-4 text-[#5e5c64]">
                                        <Minus className="w-3 h-3" />
                                        <Square className="w-3 h-3" />
                                        <X className="w-3 h-3" />
                                    </div>
                                </div>

                                {/* Menu Bar */}
                                <div className="h-7 bg-[#f6f5f4] border-b border-[#dadada] flex items-center px-2 gap-4 text-xs text-[#2e3436]">
                                    <span className="cursor-pointer hover:bg-black/5 px-2 py-1 rounded">File</span>
                                    <span className="cursor-pointer hover:bg-black/5 px-2 py-1 rounded">Edit</span>
                                    <span className="cursor-pointer hover:bg-black/5 px-2 py-1 rounded">Search</span>
                                    <span className="cursor-pointer hover:bg-black/5 px-2 py-1 rounded">View</span>
                                    <span className="cursor-pointer hover:bg-black/5 px-2 py-1 rounded">Document</span>
                                    <span className="cursor-pointer hover:bg-black/5 px-2 py-1 rounded">Help</span>
                                </div>

                                {/* Toolbar */}
                                <div className="h-10 bg-[#f6f5f4] border-b border-[#dadada] flex items-center px-2 gap-1 text-[#5e5c64]">
                                    <button className="p-1.5 hover:bg-black/5 rounded"><FilePlus className="w-4 h-4" /></button>
                                    <button className="p-1.5 hover:bg-black/5 rounded"><FolderOpen className="w-4 h-4" /></button>
                                    <button className="p-1.5 hover:bg-black/5 rounded"><Download className="w-4 h-4" /></button>
                                    <div className="w-px h-5 bg-[#dadada] mx-1" />
                                    <button className="p-1.5 hover:bg-black/5 rounded"><Undo className="w-4 h-4" /></button>
                                    <button className="p-1.5 hover:bg-black/5 rounded"><Redo className="w-4 h-4" /></button>
                                    <div className="w-px h-5 bg-[#dadada] mx-1" />
                                    <button className="p-1.5 hover:bg-black/5 rounded"><Scissors className="w-4 h-4" /></button>
                                    <button className="p-1.5 hover:bg-black/5 rounded"><Copy className="w-4 h-4" /></button>
                                    <button className="p-1.5 hover:bg-black/5 rounded"><Clipboard className="w-4 h-4" /></button>
                                    <div className="w-px h-5 bg-[#dadada] mx-1" />
                                    <button className="p-1.5 hover:bg-black/5 rounded"><Search className="w-4 h-4" /></button>
                                </div>

                                {/* Tabs */}
                                <div className="h-8 bg-[#e1e1e1] flex items-end px-1 gap-1 border-b border-[#dadada]">
                                    <div className="bg-[#ffffff] px-3 py-1.5 rounded-t-md text-xs font-medium flex items-center gap-2 border-l border-r border-t border-[#cecece] relative top-px">
                                        <span>Untitled</span>
                                        <X className="w-3 h-3 hover:bg-black/10 rounded-full p-0.5 cursor-pointer" />
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
                                    </div>
                                    <div className="px-3 py-1.5 text-xs font-medium text-[#5e5c64] hover:bg-[#eaeaea] rounded-t-md cursor-pointer flex items-center gap-2">
                                        <X className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                                    </div>
                                </div>

                                {/* Main Editor Area */}
                                <div className="flex-1 flex bg-white overflow-hidden">
                                    {/* Line Numbers */}
                                    <div className="w-10 bg-[#f3f3f3] border-r border-[#efefef] flex flex-col items-end pr-2 pt-2 text-[#b0b0b0] font-mono text-xs select-none">
                                        {editorLines.length > 0 ? editorLines.map((_, i) => (
                                            <div key={i} className="leading-6">{i + 1}</div>
                                        )) : <div className="leading-6">1</div>}
                                    </div>

                                    {/* Code Content */}
                                    <div className="flex-1 p-2 font-mono text-sm overflow-auto">
                                        {editorLines.map((line, i) => (
                                            <div key={i} className="leading-6 text-[#2e3436 whitespace-pre">
                                                {line}
                                                {i === editorLines.length - 1 && (
                                                    <motion.span
                                                        animate={{ opacity: [1, 0] }}
                                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                                        className="inline-block w-0.5 h-4 bg-black align-middle ml-0.5"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Status Bar */}
                                <div className="h-6 bg-[#f6f5f4] border-t border-[#dadada] flex items-center px-4 text-[11px] text-[#5e5c64]">
                                    Line {editorLines.length}, Column {editorLines[editorLines.length - 1]?.length || 1}
                                </div>

                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
