import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { CONTACT } from "@/lib/site";

const title = "Términos y condiciones";
const description =
  "Condiciones generales de uso del sitio web de Grupo LP y de la información publicada sobre sus servicios.";

export const metadata: Metadata = {
  title: `${title} | Grupo LP`,
  description,
  alternates: {
    canonical: "/terminos-y-condiciones",
  },
  openGraph: {
    title: `${title} | Grupo LP`,
    description,
    url: "/terminos-y-condiciones",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={title}
      description={description}
      lastUpdated="17 de mayo de 2026"
      sections={[
        {
          title: "Aceptación",
          paragraphs: [
            "Al navegar este sitio web aceptás estos términos y condiciones. Si no estás de acuerdo, te recomendamos no utilizar el sitio.",
          ],
        },
        {
          title: "Información del sitio",
          paragraphs: [
            "El contenido publicado tiene finalidad informativa y comercial. Describe de forma general servicios de despacho de aduana y comercio exterior, procesos y canales de contacto de Grupo LP.",
            "La información puede cambiar sin aviso previo y no constituye una oferta vinculante, cotización definitiva ni asesoramiento legal, aduanero, tributario o financiero.",
          ],
        },
        {
          title: "Cotizaciones y servicios",
          items: [
            "Toda cotización, propuesta o servicio queda sujeto a confirmación expresa por parte de Grupo LP.",
            "Los costos, tiempos, rutas, disponibilidad y condiciones operativas pueden variar según origen, destino, tipo de carga, documentación, proveedores, autoridades y otros factores externos.",
            "La contratación de servicios puede requerir información adicional, documentación específica y aceptación de condiciones particulares.",
          ],
        },
        {
          title: "Uso permitido",
          items: [
            "No se permite utilizar el sitio para fines ilegales, fraudulentos o que afecten su funcionamiento.",
            "No se permite intentar acceder a sistemas, datos o áreas no públicas del sitio.",
            "La persona usuaria es responsable de que la información enviada por formularios o canales de contacto sea verdadera, actualizada y no infrinja derechos de terceros.",
          ],
        },
        {
          title: "Propiedad intelectual",
          paragraphs: [
            "Las marcas, logos, textos, imágenes, diseño y demás contenidos del sitio pertenecen a Grupo LP o se utilizan con autorización correspondiente.",
            "No se permite copiar, reproducir, modificar o distribuir contenido del sitio sin autorización previa, salvo usos permitidos por la normativa aplicable.",
          ],
        },
        {
          title: "Enlaces externos",
          paragraphs: [
            "El sitio puede incluir enlaces a plataformas externas, como WhatsApp, Google Maps, redes sociales u otros proveedores. Grupo LP no controla ni es responsable por el contenido, disponibilidad o prácticas de privacidad de esos sitios.",
          ],
        },
        {
          title: "Limitación de responsabilidad",
          paragraphs: [
            "Procuramos mantener el sitio disponible, seguro y actualizado, pero no garantizamos que funcione sin interrupciones, errores o vulnerabilidades.",
            "Grupo LP no será responsable por daños derivados del uso o imposibilidad de uso del sitio, ni por decisiones tomadas exclusivamente en base a información general publicada en esta web.",
          ],
        },
        {
          title: "Contacto",
          paragraphs: [
            `Por consultas sobre estos términos podés comunicarte a ${CONTACT.email}.`,
          ],
        },
      ]}
    />
  );
}
