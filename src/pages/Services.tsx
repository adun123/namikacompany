import { Container } from "../components/Container";

const services = [
  { title: "Web Development", desc: "React/Next, dashboard, landing page." },
  { title: "UI Engineering", desc: "Design system, component library." },
  { title: "Performance", desc: "Audit, optimasi, best practices." },
];

export function Services() {
  return (
    <div className="py-16">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight">Services</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border p-5 shadow-sm">
              <p className="font-semibold">{s.title}</p>
              <p className="mt-2 text-sm text-black/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
