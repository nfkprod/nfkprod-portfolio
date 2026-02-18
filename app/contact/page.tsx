import ContactBriefForm from "@/components/ContactBriefForm";
import SectionHeader from "@/components/SectionHeader";

export default function ContactPage() {
  return (
    <main className="pt-10">
      <SectionHeader
        eyebrow="Brief / Contact"
        title="Расскажите о проекте"
        description="Чем подробнее бриф, тем точнее оценка по срокам, бюджету и формату deliverables."
      />
      <div className="mt-6">
        <ContactBriefForm />
      </div>
      <p className="mt-4 text-sm text-[var(--text-muted)]">
        Для production-почты:{" "}
        <a href="mailto:nfkprod@yandex.ru" className="text-[var(--text-main)]">
          nfkprod@yandex.ru
        </a>
      </p>
    </main>
  );
}
