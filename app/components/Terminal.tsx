'use client';

import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { commands } from './commands';

interface HistoryItem {
  command: string;  
  output: React.ReactNode;
}

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Focus input when clicking anywhere
  useEffect(() => {
    const handleClick = () => inputRef.current?.focus();
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Get command suggestions
  useEffect(() => {
    if (input) {
      const availableCommands = Object.keys(commands);
      const matches = availableCommands.filter(cmd => 
        cmd.startsWith(input.toLowerCase())
      );
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  }, [input]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    const commandFunc = commands[trimmedCmd as keyof typeof commands];
    const output = commandFunc 
      ? commandFunc()
      : <span className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</span>;

    setHistory(prev => [...prev, { command: cmd, output }]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Tab completion
    if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length === 1) {
        setInput(suggestions[0]);
      }
    }

    // Up arrow - previous command
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    }

    // Down arrow - next command
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }

    // Enter - execute
    if (e.key === 'Enter' && input.trim()) {
      executeCommand(input);
      setInput('');
    }
  };

  return (
    <div 
      ref={terminalRef}
      className="w-full h-screen bg-black text-green-400 font-mono p-4 overflow-y-auto"
    >
      {/* Welcome ASCII Art */}
      <pre className="text-cyan-400 text-xs mb-4">
{`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ███████╗ █████╗ ███╗   ██╗███████╗ █████╗             ║
║   ██╔════╝██╔══██╗████╗  ██║██╔════╝██╔══██╗            ║
║   ███████╗███████║██╔██╗ ██║███████╗███████║            ║
║   ╚════██║██╔══██║██║╚██╗██║╚════██║██╔══██║            ║
║   ███████║██║  ██║██║ ╚████║███████║██║  ██║            ║
║   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝            ║
║                                                           ║
║          Welcome to Sansa's Terminal Portfolio           ║
║                      v1.0.0                               ║
╚═══════════════════════════════════════════════════════════╝
`}
      </pre>
      <div className="text-yellow-400 text-sm mb-4">
        Type <span className="text-white bg-gray-800 px-1">'help'</span> to get started
      </div>

      {/* Command History */}
      {history.map((item, index) => (
        <div key={index} className="mb-2">
          <div className="flex gap-2">
            <span className="text-cyan-400">~</span>
            <span className="text-white">$</span>
            <span className="text-green-400">{item.command}</span>
          </div>
          <div className="ml-4 mt-1">{item.output}</div>
        </div>
      ))}

      {/* Current Input */}
      <div className="flex gap-2 items-center">
        <span className="text-cyan-400">~</span>
        <span className="text-white">$</span>
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent outline-none text-green-400 w-full"
            autoFocus
            spellCheck={false}
          />
          {/* Ghost suggestion */}
          {suggestions.length === 1 && input && (
            <span className="absolute left-0 text-gray-600 pointer-events-none">
              {input}<span>{suggestions[0].slice(input.length)}</span>
            </span>
          )}
        </div>
        <span className="animate-pulse">█</span>
      </div>
    </div>
  );
}