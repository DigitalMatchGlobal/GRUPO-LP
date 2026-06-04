import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { CONTACT } from "@/lib/site";

const title = "Política de privacidad";
const description =
  "Información sobre cómo Grupo LP recibe, usa y protege los datos enviados a través de este sitio web.";

export const metadata: Metadata = {
  title: `${title} | Grupo LP`,
  description,
  alternates: {
    canonical: "/politica-de-privacidad",
  },
  openGraph: {
    title: `${title} | Grupo LP`,
    description,
    url: "/politica-de-privacidad",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={title}
      description={description}
      lastUpdated="17 de mayo de 2026"
      sections={[
        {
          title: "Responsable",
          paragraphs: [
            "Grupo LP, con sede en Montevideo, Uruguay, es responsable del tratamiento de los datos personales recibidos a través de este sitio web y sus canales de contacto.",
            `Para consultas vinculadas a privacidad podés escribir a ${CONTACT.email}.`,
          ],
        },
        {
          title: "Datos que podemos recibir",
          items: [
            "Datos de contacto, como nombre, empresa, correo electrónico, teléfono o WhatsApp.",
            "Información incluida voluntariamente en mensajes, consultas comerciales o solicitudes de cotización.",
            "Datos técnicos básicos asociados al uso del sitio, como fecha, hora, navegador, dispositivo y páginas visitadas, cuando sean recogidos por herramientas de hosting, seguridad o analítica.",
          ],
        },
        {
          title: "Finalidades",
          items: [
            "Responder consultas y solicitudes enviadas desde el formulario, WhatsApp, correo electrónico u otros canales de contacto.",
            "Preparar propuestas, cotizaciones o información relacionada con servicios logísticos.",
            "Dar seguimiento comercial y operativo a comunicaciones iniciadas por la persona usuaria o su empresa.",
            "Mantener la seguridad, disponibilidad y mejora del sitio web.",
          ],
        },
        {
          title: "Base y conservación",
          paragraphs: [
            "Tratamos los datos enviados voluntariamente para responder a una solicitud concreta, iniciar o mantener una relación comercial y cumplir obligaciones aplicables.",
            "Conservamos la información por el tiempo necesario para gestionar la consulta, mantener registros comerciales razonables y cumplir requisitos legales, contables u operativos cuando corresponda.",
          ],
        },
        {
          title: "Encargados y terceros",
          paragraphs: [
            "Podemos utilizar proveedores tecnológicos para operar el sitio, recibir formularios, enviar correos y mantener la infraestructura digital. Estos proveedores procesan información solo en la medida necesaria para prestar sus servicios.",
            "No vendemos datos personales. Podemos compartir información cuando sea necesario para responder una solicitud, coordinar servicios logísticos, cumplir obligaciones legales o proteger derechos e intereses legítimos.",
          ],
        },
        {
          title: "Derechos de las personas",
          paragraphs: [
            `Podés solicitar acceso, actualización, rectificación o eliminación de tus datos escribiendo a ${CONTACT.email}. Atenderemos la solicitud conforme a la normativa aplicable y a las obligaciones de conservación que correspondan.`,
          ],
        },
        {
          title: "Seguridad",
          paragraphs: [
            "Aplicamos medidas razonables para proteger la información recibida. Aun así, ningún sistema de transmisión o almacenamiento digital puede garantizar seguridad absoluta.",
          ],
        },
        {
          title: "Cambios",
          paragraphs: [
            "Esta política puede actualizarse para reflejar cambios operativos, normativos o tecnológicos. La versión vigente será la publicada en esta página.",
          ],
        },
      ]}
    />
  );
}
