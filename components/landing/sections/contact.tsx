"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail, Phone } from "lucide-react";

import { AnimatedBackdrop } from "@/components/landing/animated-backdrop";
import { ContactMapBand } from "@/components/landing/sections/contact-map-band";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/components/i18n/language-context";
import { getWhatsAppUrl } from "@/lib/site";

export function ContactSection() {
  const { t, locale } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const errors: Record<string, string> = {};
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    if (!name.trim()) errors.name = t.contact.errors.required;
    if (!email.trim()) errors.email = t.contact.errors.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = t.contact.errors.email;
    if (message.trim().length < 10) errors.message = t.contact.errors.minLength;
    setFieldErrors(errors);
    if (Object.keys(errors).length) return;

    setIsSubmitting(true);
    setErrorMsg("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (!response.ok) throw new Error("Failed to send");
      setIsSuccess(true);
      event.currentTarget.reset();
    } catch {
      setErrorMsg("Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = "h-12 border-primary/20 bg-white px-4 focus-visible:ring-0";

  return (
    <MotionSection id="contacto" className="relative scroll-mt-24 overflow-hidden bg-muted pt-(--section-py)">
      <AnimatedBackdrop variant="light" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <MotionItem>
            <p className="eyebrow">{t.contact.kicker}</p>
            <h2 className="section-title mt-6">{t.contact.title}</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-7 sm:text-base">
              {t.contact.subtitle}
              <a href={`tel:${t.contact.subtitlePhone.replace(/\s/g, "")}`} className="font-bold text-primary hover:text-accent">
                {t.contact.subtitlePhone}
              </a>
              {t.contact.subtitleAfterPhone}
            </p>

            <div className="mt-8 border-t border-primary/20 sm:mt-10">
              {t.contact.emails.map((entry) => (
                <a
                  key={entry.address}
                  href={`mailto:${entry.address}`}
                  className="group grid grid-cols-[auto_1fr] gap-4 border-b border-primary/20 py-4"
                >
                  <Mail className="mt-1 size-4 text-accent" />
                  <span>
                    <span className="block font-mono text-[0.56rem] uppercase tracking-[0.16em] text-muted-foreground">{entry.description}</span>
                    <span className="mt-1 block text-sm font-semibold text-primary group-hover:text-accent">{entry.address}</span>
                  </span>
                </a>
              ))}
            </div>

            <a href={getWhatsAppUrl(locale)} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-7 max-sm:w-full sm:mt-8">
              <Phone className="size-4" />
              {t.contact.ctaWhatsAppAlt}
            </a>
          </MotionItem>

          <MotionItem>
            <div className="facet-card p-5 sm:p-10 lg:p-12">
              <div className="flex items-start justify-between gap-6 border-b border-primary/15 pb-5 sm:gap-8 sm:pb-7">
                <div>
                  <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.18em] text-accent sm:text-[0.6rem] sm:tracking-[0.2em]">Nueva consulta / 01</p>
                  <h3 className="font-display mt-3 text-xl tracking-tight sm:text-3xl">{t.contact.formTitle}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{t.contact.formDescription}</p>
                </div>
              </div>

              {isSuccess ? (
                <div className="flex min-h-96 flex-col items-center justify-center text-center">
                  <CheckCircle2 className="size-14 text-accent" />
                  <h4 className="font-display mt-6 text-2xl">¡Mensaje enviado!</h4>
                  <p className="mt-3 max-w-sm text-sm text-muted-foreground">{t.contact.successMessage}</p>
                  <button type="button" onClick={() => setIsSuccess(false)} className="btn-ghost mt-7">Enviar otro mensaje</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                    <Field label={t.contact.labelName} error={fieldErrors.name} required>
                      <Input name="name" placeholder={t.contact.placeholderName} className={fieldClass} />
                    </Field>
                    <Field label={t.contact.labelCompany}>
                      <Input name="company" placeholder={t.contact.placeholderCompany} className={fieldClass} />
                    </Field>
                    <Field label={t.contact.labelEmail} error={fieldErrors.email} required>
                      <Input name="email" type="email" placeholder={t.contact.placeholderEmail} className={fieldClass} />
                    </Field>
                    <Field label={t.contact.labelPhone}>
                      <Input name="phone" type="tel" placeholder={t.contact.placeholderPhone} className={fieldClass} />
                    </Field>
                  </div>
                  <Field label={t.contact.labelService}>
                    <select name="service" defaultValue="" className="h-12 w-full border border-primary/20 bg-white px-4 text-sm text-primary">
                      <option value="" disabled>Seleccionar...</option>
                      {Object.entries(t.contact.serviceOptions).map(([value, label]) => <option key={value} value={label}>{label}</option>)}
                    </select>
                  </Field>
                  <Field label={t.contact.labelMessage} error={fieldErrors.message} required>
                    <Textarea name="message" placeholder={t.contact.placeholderMessage} className="min-h-32 resize-none border-primary/20 bg-white p-4 focus-visible:ring-0" />
                  </Field>
                  {errorMsg && <p className="text-sm font-medium text-red-600">{errorMsg}</p>}
                  <div className="flex flex-col gap-5 border-t border-primary/15 pt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
                    <p className="max-w-sm text-[0.65rem] leading-relaxed text-muted-foreground">
                      {t.contact.privacyNoticeBefore}<a href="/politica-de-privacidad" className="font-bold text-primary hover:text-accent">{t.contact.privacyNoticeLink}</a>{t.contact.privacyNoticeAfter}
                    </p>
                    <button type="submit" disabled={isSubmitting} className="btn-primary shrink-0 disabled:opacity-60 max-sm:w-full">
                      {isSubmitting ? <><Loader2 className="size-4 animate-spin" /> Enviando...</> : <>{t.contact.submit}<ArrowRight className="size-4" /></>}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </MotionItem>
        </div>
      </div>
      <ContactMapBand />
    </MotionSection>
  );
}

function Field({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <Label className="mb-2 block font-mono text-[0.58rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
        {label}{required && <span className="ml-1 text-accent">*</span>}
      </Label>
      {children}
      {error && <p className="mt-2 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}
