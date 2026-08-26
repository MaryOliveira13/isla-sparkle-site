import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type AssistantContextValue = {
  open: boolean;
  openAssistant: () => void;
  toggleAssistant: () => void;
};

const AssistantContext = createContext<AssistantContextValue | null>(null);

export function AssistantProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openAssistant = useCallback(() => {
    setOpen(true);
    requestAnimationFrame(() => {
      document.getElementById("assistente")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const toggleAssistant = useCallback(() => setOpen((v) => !v), []);

  const value = useMemo(
    () => ({ open, openAssistant, toggleAssistant }),
    [open, openAssistant, toggleAssistant],
  );

  return <AssistantContext.Provider value={value}>{children}</AssistantContext.Provider>;
}

export function useAssistant() {
  const ctx = useContext(AssistantContext);
  if (!ctx) throw new Error("useAssistant precisa estar dentro de AssistantProvider");
  return ctx;
}
