import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { withLocalePath } from "@/lib/i18n";
import { contactEmail, telegramChannelUrl } from "@/lib/contact";

export default function FinalCta({ locale = "ru" }: { locale?: Locale }) {
  const ru = locale === "ru";
  return (
    <section className="project-invitation">
      <div className="invitation-top">
        <span className="status-dot" />
        <span>
          {ru
            ? "Есть идея? Давайте придадим ей форму."
            : "Have an idea? Let's give it a form."}
        </span>
      </div>
      <Link
        href={withLocalePath("/contact", locale)}
        className="invitation-link"
      >
        <span>
          {ru ? (
            <>
              Обсудим ваш
              <br />
              следующий проект.
            </>
          ) : (
            <>
              Let's talk about
              <br />
              your next project.
            </>
          )}
        </span>
        <ArrowUpRight strokeWidth={1} />
      </Link>
      <div className="invitation-bottom">
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        <a href="https://t.me/Nfk23" target="_blank" rel="noreferrer">
          Telegram <ArrowUpRight size={15} />
        </a>
        <a href={telegramChannelUrl} target="_blank" rel="noreferrer">{ru ? "Telegram-канал" : "Telegram channel"}</a>
      </div>
    </section>
  );
}
