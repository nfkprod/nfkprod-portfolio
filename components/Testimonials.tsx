const testimonials = [
  {
    author: "Мария, Product Marketing Lead",
    text: "Команда получила не просто ролик, а рабочую визуальную систему. Сроки и качество совпали с обещаниями."
  },
  {
    author: "Илья, Founder",
    text: "Сильный продакшен-дисциплина: понятные этапы, точные апдейты и чистый визуальный результат."
  },
  {
    author: "Анна, Brand Manager",
    text: "Очень аккуратная работа с композицией и ритмом. Видео смотрится дорого и конвертит лучше старых креативов."
  }
];

export default function Testimonials() {
  return (
    <section className="mt-16 grid gap-4 lg:grid-cols-3">
      {testimonials.map((item) => (
        <blockquote key={item.author} className="glass-card rounded-2xl p-5">
          <p className="text-sm leading-7 text-[var(--text-main)]">“{item.text}”</p>
          <footer className="mt-4 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">{item.author}</footer>
        </blockquote>
      ))}
    </section>
  );
}