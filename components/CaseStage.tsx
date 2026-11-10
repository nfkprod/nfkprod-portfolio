import type { ReactNode } from "react";

export default function CaseStage({ children }: { children: ReactNode }) {
  return <div className="case-stage mt-8">{children}</div>;
}
