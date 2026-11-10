export const briefServiceOptions = ["Motion", "CGI", "3D", "VFX", "AI", "Explainer", "Social"] as const;

export type BudgetError = "required" | "invalid" | "range";
export type BudgetValidation =
  | { valid: true; from?: number; to?: number; legacy?: number }
  | { valid: false; error: BudgetError };

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

// Spaces are allowed as thousands separators; commas or dots may mark decimals.
function positiveAmount(value: string): number | undefined {
  const normalized = value.replace(/[\s\u00a0\u202f]/g, "").replace(",", ".");
  if (!/^\d+(?:\.\d{1,2})?$/.test(normalized)) return undefined;
  const amount = Number(normalized);
  return Number.isFinite(amount) && amount > 0 ? amount : undefined;
}

export function validateBudgetRange(payload: {
  budgetFrom?: unknown;
  budgetTo?: unknown;
  budget?: unknown;
}): BudgetValidation {
  const fromText = text(payload.budgetFrom);
  const toText = text(payload.budgetTo);
  if (!fromText && !toText) {
    const legacyText = text(payload.budget);
    if (!legacyText) return { valid: false, error: "required" };
    const legacy = positiveAmount(legacyText);
    return legacy === undefined
      ? { valid: false, error: "invalid" }
      : { valid: true, legacy };
  }
  const from = fromText ? positiveAmount(fromText) : undefined;
  const to = toText ? positiveAmount(toText) : undefined;
  if ((fromText && from === undefined) || (toText && to === undefined)) {
    return { valid: false, error: "invalid" };
  }
  if (from !== undefined && to !== undefined && to < from) {
    return { valid: false, error: "range" };
  }
  return { valid: true, from, to };
}
