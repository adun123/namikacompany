import { Container } from "../components/Container";

export function Portfolio() {
  return (
    <div className="py-16">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight">Portfolio</h2>
        <p className="mt-4 text-black/70">
          Isi dengan case study (problem → approach → result).
        </p>
      </Container>
    </div>
  );
}
