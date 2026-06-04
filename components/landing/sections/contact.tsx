"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import { useLanguage } from "@/components/i18n/language-context";
import { getWhatsAppUrl } from "@/lib/site";
import { ContactMapBand } from "@/components/landing/sections/contact-map-band";

export function ContactSection() {
  const { t, locale } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const errors: Record<string, string> = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim() === "") {
      errors.name = t.contact.errors.required;
    }

    if (!email || email.trim() === "") {
      errors.email = t.contact.errors.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = t.contact.errors.email;
    }

    if (!message || message.trim().length < 10) {
      errors.message = t.contact.errors.minLength;
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setErrorMsg("Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MotionSection
      id="contacto"
      className="border-t border-border/80 scroll-mt-24"
      style={{ background: "var(--muted)" }}
    >
      <div className="mx-auto max-w-6xl px-4 pt-(--section-py) sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: info */}
          <MotionItem>
            <p className="eyebrow">{t.contact.kicker}</p>
            <h2 className="font-display mt-5 text-3xl tracking-tight text-foreground sm:text-4xl">
              {t.contact.title}
            </h2>
            <div className="section-divider" />
            <p className="mt-7 max-w-prose text-pretty text-muted-foreground">
              {t.contact.subtitle}
              <a href={`tel:${t.contact.subtitlePhone.replace(/\s/g, '')}`} className="text-primary font-semibold underline-offset-4 hover:underline">
                {t.contact.subtitlePhone}
              </a>
              {t.contact.subtitleAfterPhone}
            </p>

            <ul className="mt-9 space-y-5">
              {t.contact.emails.map((entry) => (
                <li key={entry.address}>
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {entry.description}
                  </p>
                  <a
                    href={`mailto:${entry.address}`}
                    className="mt-1 inline-block text-base text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    {entry.address}
                  </a>
                </li>
              ))}
            </ul>

            {/* WhatsApp shortcut */}
            <div className="mt-10">
              <a
                href={getWhatsAppUrl(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex text-sm"
                style={{ maxWidth: "fit-content" }}
              >
                {t.contact.ctaWhatsAppAlt}
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>
          </MotionItem>

          {/* Right: form */}
          <MotionItem>
            <div className="card-elevated p-7 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {t.contact.formTitle}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {t.contact.formDescription}
              </p>

              {isSuccess ? (
                <div className="mt-7 flex flex-col items-center justify-center rounded-2xl bg-primary/10 p-8 text-center border border-primary/20">
                  <CheckCircle2 className="size-12 text-primary mb-4" />
                  <h4 className="text-lg font-semibold text-foreground">¡Mensaje enviado!</h4>
                  <p className="mt-2 text-sm text-muted-foreground font-medium">{t.contact.successMessage}</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm font-medium text-primary hover:underline underline-offset-4"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form
                  className="mt-7 space-y-5"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        {t.contact.labelName} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder={t.contact.placeholderName}
                        className={`rounded-xl bg-background transition-all focus-visible:ring-2 focus-visible:ring-primary ${
                          fieldErrors.name ? "border-red-500 ring-1 ring-red-500" : "border-border"
                        }`}
                      />
                      {fieldErrors.name && (
                        <p className="text-xs text-red-500 font-medium animate-in fade-in">{fieldErrors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="company"
                        className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        {t.contact.labelCompany}
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder={t.contact.placeholderCompany}
                        className="rounded-xl border-border bg-background transition-all focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        {t.contact.labelEmail} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={t.contact.placeholderEmail}
                        className={`rounded-xl bg-background transition-all focus-visible:ring-2 focus-visible:ring-primary ${
                          fieldErrors.email ? "border-red-500 ring-1 ring-red-500" : "border-border"
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="text-xs text-red-500 font-medium animate-in fade-in">{fieldErrors.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        {t.contact.labelPhone}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder={t.contact.placeholderPhone}
                        className="rounded-xl border-border bg-background transition-all focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="service"
                      className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      {t.contact.labelService}
                    </Label>
                    <select
                      id="service"
                      name="service"
                      className="flex h-10 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                      defaultValue=""
                    >
                      <option value="" disabled>Seleccionar...</option>
                      {Object.entries((t.contact.serviceOptions as Record<string, string>) || {}).map(([key, label]) => (
                        <option key={key} value={label}>{label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Message */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      {t.contact.labelMessage} <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder={t.contact.placeholderMessage}
                      className={`min-h-[120px] resize-none rounded-xl bg-background transition-all focus-visible:ring-2 focus-visible:ring-primary ${
                        fieldErrors.message ? "border-red-500 ring-1 ring-red-500" : "border-border"
                      }`}
                    />
                    {fieldErrors.message && (
                      <p className="text-xs text-red-500 font-medium animate-in fade-in">{fieldErrors.message}</p>
                    )}
                  </div>

                  {errorMsg && (
                    <p className="text-sm text-red-500 font-medium">{errorMsg}</p>
                  )}

                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {t.contact.privacyNoticeBefore}
                    <a
                      href="/politica-de-privacidad"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {t.contact.privacyNoticeLink}
                    </a>
                    {t.contact.privacyNoticeAfter}
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        Enviando...
                        <Loader2 className="size-4 animate-spin" aria-hidden />
                      </>
                    ) : (
                      <>
                        {t.contact.submit}
                        <ArrowRight className="size-4" aria-hidden />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </MotionItem>
        </div>

      </div>

      {/* Map band — full-bleed on desktop, contained on mobile */}
      <ContactMapBand />
    </MotionSection>
  );
}
