import ContactBriefForm from "@/components/ContactBriefForm";
import SectionHeader from "@/components/SectionHeader";
import ProfileLinks from "@/components/ProfileLinks";
import { contactEmail } from "@/lib/contact";

export default function ContactPage() {
  return (
    <main className="pt-10">
      <SectionHeader
        as="h1"
        eyebrow="Brief / Contact"
        title="Расскажите о проекте"
        description="Чем подробнее бриф, тем точнее оценка по срокам, бюджету и формату deliverables."
      />
      <div className="mt-6">
        <ContactBriefForm locale="ru" />
      </div>
      <p className="mt-4 text-sm text-[var(--text-muted)]">
        Для production-почты:{" "}
        <a href={`mailto:${contactEmail}`} className="text-[var(--text-main)]">
          {contactEmail}
        </a>
      </p>
      <ProfileLinks />
    </main>
  );
}
