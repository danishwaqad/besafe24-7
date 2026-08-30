"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { QuoteForm } from "./QuoteForm";

type QuoteContextValue = {
  openQuote: (jobType?: string) => void;
};

const QuoteContext = createContext<QuoteContextValue>({ openQuote: () => {} });

export function useQuote() {
  return useContext(QuoteContext);
}

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [jobType, setJobType] = useState("Boiler Repair");

  const value = useMemo(
    () => ({
      openQuote: (type?: string) => {
        if (type) setJobType(type);
        setOpen(true);
      },
    }),
    []
  );

  return (
    <QuoteContext.Provider value={value}>
      {children}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink-950/60 p-0 sm:items-center sm:p-6">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-cream-50 p-5 shadow-2xl sm:rounded-3xl sm:p-8">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-500">Fast AM/PM quote</p>
                <h2 className="font-display text-3xl">Tell us what’s wrong</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-ink-900/10 px-3 py-1 text-sm"
              >
                Close
              </button>
            </div>
            <QuoteForm defaultJobType={jobType} onDone={() => setOpen(false)} />
          </div>
        </div>
      )}
    </QuoteContext.Provider>
  );
}
