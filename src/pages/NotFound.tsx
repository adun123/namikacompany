import { Container } from "../components/Container";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="py-16">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight">404</h2>
        <p className="mt-4 text-black/70">Halaman tidak ditemukan.</p>
        <Link to="/" className="mt-6 inline-block rounded-xl border px-4 py-2 text-sm font-semibold">
          Kembali ke Home
        </Link>
      </Container>
    </div>
  );
}
