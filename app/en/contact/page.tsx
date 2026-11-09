import ContactBriefForm from "@/components/ContactBriefForm";
import SectionHeader from "@/components/SectionHeader";
import ProfileLinks from "@/components/ProfileLinks";
import { contactEmail } from "@/lib/contact";

export default function ContactPageEn() {
  return (
    <main className="pt-10">
      <SectionHeader
        as="h1"
        eyebrow="Brief / Contact"
        title="Tell me about your project"
        description="The more detailed the brief is, the more accurate the timeline, budget, and deliverables estimate will be."
      />
      <div className="mt-6">
        <ContactBriefForm locale="en" />
      </div>
      <p className="mt-4 text-sm text-[var(--text-muted)]">
        For production email:{" "}
        <a href={`mailto:${contactEmail}`} className="text-[var(--text-main)]">
          {contactEmail}
        </a>
      </p>
      <ProfileLinks />
    </main>
  );
}
