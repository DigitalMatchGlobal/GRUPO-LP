import Link from "next/link";

import { BrandLogo } from "@/components/brand/logo";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageProps) {
  const year = new Date().getFullYear();

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center" aria-label="Grupo LP">
            <BrandLogo variant="dark" />
          </Link>
          <Link
            href="/"
            className="btn-ghost px-4 py-2 text-xs sm:text-sm"
          >
            Volver al sitio
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="font-display mt-5 max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
        <p className="mt-4 text-sm font-medium text-primary">
          Última actualización: {lastUpdated}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Documento canónico disponible en español. Una versión en inglés
          puede solicitarse por nuestros canales de contacto.
        </p>

        <div className="mt-12 space-y-8">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <h2 className="font-display text-2xl text-foreground">
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
              {section.items ? (
                <ul className="mt-5 space-y-3 text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </section>

      <footer className="mt-auto border-t border-border bg-white/80 px-4 py-8 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
        © {year} Grupo LP — Lavoriero &amp; Perez SRL. Todos los derechos reservados.
      </footer>
    </main>
  );
}
