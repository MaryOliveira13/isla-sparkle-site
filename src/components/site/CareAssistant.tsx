import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ASSISTANT_STEPS } from "@/content/site";

/**
 * Fluxo do assistente.
 * Somente a primeira etapa está aprovada nesta versão — novas etapas entram
 * em ASSISTANT_STEPS e o índice avança sem mudar este componente.
 */
export function CareAssistant() {
  const [stepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const step = ASSISTANT_STEPS[stepIndex] ?? ASSISTANT_STEPS[0]!;
  const selected = answers[step.id];

  return (
    <div className="rounded-[2rem] border border-ink/8 bg-card p-6 shadow-[0_30px_70px_-50px_var(--petrol-deep)] sm:p-10">
      <div className="space-y-3">
        {step.messages.map((message) => (
          <p
            key={message}
            className="max-w-[46ch] rounded-[1.25rem] rounded-bl-md bg-secondary px-5 py-4 text-[0.97rem] leading-relaxed text-ink"
          >
            {message}
          </p>
        ))}
      </div>

      <ul
        role="radiogroup"
        aria-label={step.messages[step.messages.length - 1]}
        className="mt-8 grid gap-3 sm:grid-cols-2"
      >
        {step.options.map((option) => {
          const isSelected = selected === option.id;
          return (
            <li key={option.id}>
              <button
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setAnswers((prev) => ({ ...prev, [step.id]: option.id }))}
                className={cn(
                  "flex min-h-14 w-full items-center justify-between gap-3 rounded-full border px-6 py-3 text-left text-[0.93rem] transition-all duration-500 ease-out",
                  isSelected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-ink/12 text-ink/85 hover:border-ink/30 hover:bg-secondary",
                )}
              >
                <span>{option.label}</span>
                {isSelected ? <Check className="size-4 shrink-0" /> : null}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
