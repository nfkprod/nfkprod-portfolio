"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import PricingCompare from "@/components/PricingCompare";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { serviceAddonsEn, servicePackagesEn } from "@/data/services.en";
import { withLocalePath } from "@/lib/i18n";

const sectionReveal = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" } }
};

const gridReveal = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06
    }
  }
};

const itemReveal = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" } }
};

export default function ServicesPageEn() {
  return (
    <main className="pt-10">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={sectionReveal}>
        <SectionHeader
          eyebrow="Services"
          title="Service packages and custom production"
          description="Choose a ready-made package or build an individual scope around your deadline, platform, and KPI."
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
        variants={gridReveal}
        className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-4"
      >
        {servicePackagesEn.map((item) => (
          <motion.div key={item.id} variants={itemReveal} className="h-full">
            <ServiceCard item={item} locale="en" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
        <PricingCompare packages={servicePackagesEn} locale="en" />
      </motion.div>

      <section className="mt-10">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionReveal}
          className="font-display text-3xl font-bold tracking-[-0.02em] text-[var(--text-main)]"
        >
          Add-ons
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridReveal}
          className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4"
        >
          {serviceAddonsEn.map((addon) => (
            <motion.article key={addon.id} variants={itemReveal} className="glass-card rounded-xl p-4">
              <h3 className="text-base font-semibold text-[var(--text-main)]">{addon.name}</h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{addon.note}</p>
              <p className="mt-3 text-sm font-semibold text-[var(--text-main)]">{addon.price}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionReveal}
        className="glass-panel mt-10 rounded-3xl p-6 md:p-8"
      >
        <h3 className="font-display text-3xl font-bold tracking-[-0.02em] text-[var(--text-main)]">Need a quote for your case?</h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-muted)]">
          Fill in the brief to get a realistic estimate for timing and budget with a transparent production plan.
        </p>
        <div className="mt-6">
          <Button href={withLocalePath("/contact", "en")} variant="primary" size="lg">
            Fill the brief
          </Button>
        </div>
      </motion.div>
    </main>
  );
}
