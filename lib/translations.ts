export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];

export const defaultLocale: Locale = "es";

export type PlanDetail = {
  title: string;
  items: string[];
};

export type ServiceCopy = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  mainFeatures: string[];
  targetAudience: string;
  details: PlanDetail[];
  importantNote?: string;
};

export type ReviewCopy = {
  quote: string;
  name: string;
  rating: number;
  role?: string;
};

export type Messages = {
  meta: {
    title: string;
    description: string;
  };
  logoAlt: string;
  nav: {
    primary: string;
    sections: string;
    about: string;
    services: string;
    reviews: string;
    contact: string;
    whatsapp: string;
    process: string;
    forWhom: string;
  };
  trust: {
    kicker: string;
    title: string;
    subtitle: string;
    stats: { target: number; suffix: string; label: string; }[];
  };
  process: {
    kicker: string;
    title: string;
    subtitle: string;
    items: { step: string; title: string; description: string; }[];
  };
  forWhom: {
    kickerTarget: string;
    targetTitle: string;
    targetItems: { title: string; description: string; }[];
    kickerDiff: string;
    diffTitle: string;
    diffItems: { title: string; description: string; }[];
  };
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight: string;   // portion of title rendered as gradient
    subtitle: string;
    ctaWhatsApp: string;
    ctaServices: string;
    trustBadge: string;
  };
  about: {
    kicker: string;
    title: string;
    lineBeforeHighlight: string;
    highlight: string;
    lineAfterHighlight: string;
    bullet1: string;
    bullet2: string;
    statValue: string;
    statLabel: string;
    statValue2: string;
    statLabel2: string;
  };
  clients: {
    kicker: string;
    title: string;
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    items: ServiceCopy[];
  };
  reviews: {
    kicker: string;
    title: string;
    subtitle: string;
    googleBadge: string;
    starsAria: (rating: number) => string;
    viewMaps: string;
    items: ReviewCopy[];
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    subtitlePhone: string;
    subtitleAfterPhone: string;
    officeLabel: string;
    officeAddress: string;
    phoneLabel: string;
    phoneNumber: string;
    emailLabel: string;
    emails: { address: string; description: string }[];
    formTitle: string;
    formDescription: string;
    ctaWhatsAppAlt: string;
    ctaDiff: string;
    labelName: string;
    placeholderName: string;
    labelCompany: string;
    placeholderCompany: string;
    labelEmail: string;
    placeholderEmail: string;
    labelPhone: string;
    placeholderPhone: string;
    labelService: string;
    serviceOptions: Record<string, string>;
    labelMessage: string;
    placeholderMessage: string;
    privacyNoticeBefore: string;
    privacyNoticeLink: string;
    privacyNoticeAfter: string;
    submit: string;
    successMessage: string;
    errors: {
      required: string;
      email: string;
      minLength: string;
    };
    mapKicker: string;
    mapTitle: string;
    mapSubtitle: string;
    mapCta: string;
    mapAriaLabel: string;
    pinSrLabel: string;
  };
  footer: {
    rights: (year: number) => string;
    location: string;
    tagline: string;
    hoursLabel: string;
    hoursValue: string;
    backToTop: string;
    privacyPolicy: string;
    terms: string;
  };
  fab: {
    label: string;
    labelShort: string;
  };
  whatsappPrefill: string;
  whatsappServicePrefill: (serviceName: string) => string;
};

/* ──────────────────────────────────────────────────────────────────
   NOTA: las cifras (años, operaciones, etc.) son PLACEHOLDER.
   Ajustar con datos reales de Grupo LP antes de publicar.
────────────────────────────────────────────────────────────────── */

export const translations: Record<Locale, Messages> = {
  es: {
    meta: {
      title: "Grupo LP | Despacho de aduana y comercio exterior en Uruguay",
      description:
        "Despachantes de aduana en Montevideo. Importación, exportación y tránsito, clasificación arancelaria y asesoramiento integral en comercio exterior. Lavoriero & Perez SRL.",
    },
    logoAlt: "Grupo LP — Lavoriero & Perez SRL",
    nav: {
      primary: "Principal",
      sections: "Secciones",
      about: "Nosotros",
      services: "Servicios",
      reviews: "Testimonios",
      contact: "Contacto",
      whatsapp: "WhatsApp",
      process: "Proceso",
      forWhom: "Para quién",
    },
    trust: {
      kicker: "Confianza",
      title: "El respaldo aduanero que tu operación necesita.",
      subtitle:
        "Te brindamos la solidez técnica y la experiencia operativa para que cada despacho avance en regla, sin demoras ni sobrecostos.",
      stats: [
        { target: 20, suffix: "+", label: "años de trayectoria en aduana" },
        { target: 5000, suffix: "+", label: "operaciones aduaneras gestionadas" },
        { target: 100, suffix: "%", label: "representación ante la DNA" },
        { target: 24, suffix: "h", label: "respuesta a tu consulta" },
      ],
    },
    process: {
      kicker: "Expediente aduanero",
      title: "Del análisis previo a la liberación: cada decisión documentada.",
      subtitle:
        "El despacho no empieza cuando llega la carga. Empieza cuando se revisa la mercadería, se valida la documentación y se anticipan tributos, permisos e intervenciones.",
      items: [
        { step: "01", title: "Relevamos mercadería, origen y régimen", description: "Entendemos qué se importa, exporta o transita, bajo qué condición comercial y con qué documentación de base." },
        { step: "02", title: "Clasificamos, calculamos y prevenimos", description: "Definimos NCM, tributos, certificados, permisos e intervenciones para anticipar el costo real de la operación." },
        { step: "03", title: "Armamos y presentamos el despacho", description: "Preparamos el expediente, confeccionamos el DUA y actuamos como representantes ante la Dirección Nacional de Aduanas." },
        { step: "04", title: "Seguimos observaciones, inspección y liberación", description: "Coordinamos verificaciones, respondemos observaciones y acompañamos la salida de la mercadería hasta el cierre operativo." },
      ],
    },
    forWhom: {
      kickerTarget: "Para quién es",
      targetTitle: "Pensado para tu operativa: del primer despacho a la importación frecuente.",
      targetItems: [
        { title: "Importadores y exportadores.", description: "Gestionamos tus despachos de import, export y tránsito con respaldo técnico." },
        { title: "Empresas con operativa frecuente.", description: "Coordinamos volúmenes recurrentes con previsibilidad y un único interlocutor." },
        { title: "Primeras importaciones y e-commerce.", description: "Te guiamos paso a paso para que importes en regla y sin errores costosos." }
      ],
      kickerDiff: "Diferencial",
      diffTitle: "Por qué elegir a Grupo LP",
      diffItems: [
        { title: "Despachantes matriculados.", description: "Te representamos formalmente ante la Dirección Nacional de Aduanas." },
        { title: "Conocimiento normativo actualizado.", description: "Anticipamos requisitos y evitamos multas, demoras y observaciones." },
        { title: "Trato directo y personalizado.", description: "Hablás siempre con quien gestiona tu operación, no con un call center." }
      ],
    },
    hero: {
      eyebrow: "Despachantes de Aduana · Uruguay",
      title: "Despacho aduanero",
      titleHighlight: "sin improvisar",
      subtitle:
        "Lavoriero & Perez SRL representa y acompaña a importadores, exportadores y empresas ante Aduana. Clasificación, documentación, tributos, permisos y liberación con criterio técnico y trato directo.",
      ctaWhatsApp: "Consultá tu operación",
      ctaServices: "Ver alcance aduanero",
      trustBadge: "Importación · Exportación · Tránsito · DNA",
    },
    about: {
      kicker: "Sobre nosotros",
      title: "Lavoriero & Perez: despachantes de aduana de confianza",
      lineBeforeHighlight:
        "Somos un estudio de despachantes con base en Montevideo, enfocados en brindarte ",
      highlight: "asesoramiento técnico aduanero",
      lineAfterHighlight:
        " de principio a fin. Entendemos tu operación, anticipamos los requisitos y te acompañamos en cada etapa del comercio exterior.",
      bullet1:
        "Especialistas en despacho de importación, exportación y tránsito.",
      bullet2:
        "Comunicación directa con quien gestiona tu operación.",
      statValue: "+20",
      statLabel: "Años de trayectoria",
      statValue2: "+5K",
      statLabel2: "Operaciones gestionadas",
    },
    clients: {
      kicker: "Confían en nosotros",
      title: "Empresas que operan con Grupo LP",
    },
    services: {
      kicker: "Alcance aduanero",
      title: "Lo que resolvemos antes, durante y después del despacho",
      subtitle:
        "El centro de nuestro trabajo es aduanero: representar, clasificar, documentar, calcular, tramitar y liberar. La logística aparece como apoyo cuando la operación lo necesita.",
      items: [
        {
          id: "despacho",
          title: "Despacho de Aduana",
          subtitle: "IMPORTACIÓN · EXPORTACIÓN · TRÁNSITO",
          description: "Gestión integral de despachos de importación, exportación y tránsito, con representación formal ante la Dirección Nacional de Aduanas.",
          icon: "FileCheck",
          mainFeatures: ["Importación, exportación y tránsito", "Confección y presentación de DUA", "Seguimiento de observaciones e inspecciones"],
          targetAudience: "Empresas que necesitan liberar mercadería en regla, con visibilidad del expediente y un interlocutor técnico.",
          details: [
            {
              title: "Gestión aduanera",
              items: ["Armado del expediente documental.", "Presentación y seguimiento ante Aduana.", "Coordinación de verificaciones, canales y liberación."]
            },
            {
              title: "Operaciones",
              items: ["Importaciones definitivas o temporarias.", "Exportaciones, tránsitos y reembarcos.", "Puerto, aeropuerto, frontera y zonas francas."]
            }
          ],
          importantNote: "La carga se mueve mejor cuando el despacho está ordenado antes del arribo."
        },
        {
          id: "clasificacion-costos",
          title: "Clasificación, Tributos y Costos",
          subtitle: "NCM · ARANCEL · IVA · TASAS",
          description: "Análisis previo de mercadería, clasificación arancelaria y estructura de costos para evitar sorpresas después de comprar o embarcar.",
          icon: "Globe2",
          mainFeatures: ["Clasificación arancelaria NCM", "Cálculo de tributos y tasas", "Revisión de origen e Incoterms"],
          targetAudience: "Importadores que necesitan saber si la operación es viable y cuánto cuesta realmente nacionalizar.",
          details: [
            {
              title: "Antes de operar",
              items: ["Lectura técnica de descripción, uso y composición.", "Estimación de arancel, IVA, anticipos, tasas y gastos asociados."]
            },
            {
              title: "Prevención",
              items: ["Alertas por permisos o intervenciones.", "Revisión de factura, packing, flete, seguro y término de venta."]
            }
          ],
          importantNote: "La consulta temprana evita compras inviables, costos ocultos y demoras documentales."
        },
        {
          id: "organismos-regimenes",
          title: "Organismos y Regímenes Especiales",
          subtitle: "VUCE · LATU · MGAP · MSP · URSEC",
          description: "Gestión de permisos, certificados e intervenciones ante organismos de control según mercadería, sector y régimen aplicable.",
          icon: "Briefcase",
          mainFeatures: ["Permisos e intervenciones previas", "Certificados de origen", "Admisión temporaria y zonas francas"],
          targetAudience: "Empresas con productos regulados o trámites que deben resolverse antes de presentar el despacho.",
          details: [
            {
              title: "Tramitación",
              items: ["Gestiones ante VUCE y organismos competentes.", "Revisión de requisitos por partida y tipo de mercadería."]
            },
            {
              title: "Regímenes",
              items: ["Zonas francas, puerto y aeropuerto libre.", "Admisiones temporarias, tránsitos y operaciones especiales."]
            }
          ],
          importantNote: "Muchos atrasos no son logísticos: son permisos que no se detectaron a tiempo."
        },
        {
          id: "tramites",
          title: "Gestión Documental de Comercio Exterior",
          subtitle: "FACTURA · PACKING · BL/AWB · CERTIFICADOS",
          description: "Control documental para que factura, packing list, documento de transporte, seguro, origen y permisos lleguen consistentes al expediente.",
          icon: "FileCheck",
          mainFeatures: ["Checklist documental por operación", "Control de factura, packing y transporte", "Archivo y trazabilidad del expediente"],
          targetAudience: "Equipos administrativos o comerciales que necesitan ordenar documentación sin perder tiempo operativo.",
          details: [
            {
              title: "Documentos base",
              items: ["Factura comercial, packing list y comprobantes.", "BL, AWB, MIC/CRT, flete, seguro y certificados."]
            },
            {
              title: "Control",
              items: ["Detección de inconsistencias antes de presentar.", "Orden del expediente para consultas, auditorías y cierres."]
            }
          ],
          importantNote: "Un documento mal armado puede costar más que un flete: lo revisamos antes."
        },
        {
          id: "coordinacion-logistica",
          title: "Coordinación Logística como Soporte",
          subtitle: "CARGA · DEPÓSITO · ENTREGA",
          description: "Coordinamos transporte, depósito, seguros o entrega cuando ayuda a cerrar la operación aduanera, sin desplazar el foco del despacho.",
          icon: "Ship",
          mainFeatures: ["Coordinación con agentes de carga", "Depósito y entrega en plaza", "Seguros de carga a solicitud"],
          targetAudience: "Clientes que quieren alinear liberación y entrega sin convertir el despacho en una gestión fragmentada.",
          details: [
            {
              title: "Apoyo operativo",
              items: ["Enlace con forwarders, transportistas y depósitos.", "Coordinación de retiro posterior a la liberación."]
            },
            {
              title: "Criterio",
              items: ["La logística acompaña al despacho.", "Priorizamos cumplimiento, tiempos y costo total de la operación."]
            }
          ],
          importantNote: "No somos un forwarder primero: somos despachantes que coordinan lo necesario para que la operación cierre bien."
        },
      ],
    },
    reviews: {
      kicker: "Testimonios",
      title: "Lo que dicen quienes operan con nosotros",
      subtitle: "Experiencias de clientes que confían sus despachos a Grupo LP.",
      googleBadge: "Cliente",
      starsAria: (rating) => `${rating} de 5 estrellas`,
      viewMaps: "Ver más en Google",
      // TODO: reemplazar por reseñas reales (Google) cuando estén disponibles.
      items: [
        {
          quote:
            "Despachos siempre en regla y a tiempo. Nos asesoran en cada operación y resolvemos todo con un solo interlocutor. Muy recomendables.",
          name: "Importador del rubro industrial",
          role: "Cliente Grupo LP",
          rating: 5,
        },
        {
          quote:
            "Empezamos a importar con su acompañamiento y nos evitaron varios errores. Claridad y respuesta rápida en cada consulta.",
          name: "Empresa de e-commerce",
          role: "Cliente Grupo LP",
          rating: 5,
        },
      ],
    },
    contact: {
      kicker: "Contacto",
      title: "Hablemos de tu próxima operación",
      subtitle:
        "Completá el formulario o escribinos al ",
      subtitlePhone: "+598 99 123 456",
      subtitleAfterPhone:
        ". Respondemos con prioridad a consultas comerciales y operativas.",
      officeLabel: "Oficina",
      officeAddress: "Montevideo, Uruguay", // TODO: dirección exacta
      phoneLabel: "Teléfono",
      phoneNumber: "+598 99 123 456",
      emailLabel: "Email",
      emails: [
        { address: "info@grupolp.com.uy", description: "Consultas generales" },
        { address: "comercial@grupolp.com.uy", description: "Nuevos negocios" },
        { address: "despachos@grupolp.com.uy", description: "Operativa y despachos" },
        { address: "administracion@grupolp.com.uy", description: "Facturación y pagos" },
      ],
      formTitle: "Consultá sin compromiso",
      formDescription:
        "Contanos qué mercadería querés importar, exportar o transitar y revisamos el camino aduanero más conveniente.",
      ctaWhatsAppAlt: "Prefiero escribir por WhatsApp",
      ctaDiff: "Empezá tu consulta ahora",
      labelName: "Nombre y Apellido",
      placeholderName: "Tu nombre completo",
      labelCompany: "Empresa (Opcional)",
      placeholderCompany: "Tu empresa",
      labelEmail: "Email",
      placeholderEmail: "nombre@empresa.com",
      labelPhone: "Teléfono / WhatsApp (Opcional)",
      placeholderPhone: "+598 99 123 456",
      labelService: "Servicio de interés",
      serviceOptions: {
        despacho: "Despacho de Aduana",
        costos: "Clasificación, Tributos y Costos",
        organismos: "Organismos y Regímenes Especiales",
        documental: "Gestión Documental",
        logistica: "Coordinación logística de soporte",
        other: "Otro / Asesoramiento",
      },
      labelMessage: "Mensaje",
      placeholderMessage:
        "Mercadería, origen, destino, valor aproximado, vía de ingreso y si ya contás con factura/packing/documento de transporte.",
      privacyNoticeBefore: "Al enviar este formulario aceptás nuestra ",
      privacyNoticeLink: "Política de privacidad",
      privacyNoticeAfter: ".",
      submit: "Enviar consulta",
      successMessage: "¡Consulta enviada! Nos pondremos en contacto a la brevedad.",
      errors: {
        required: "Este campo es obligatorio",
        email: "Ingresá un email válido",
        minLength: "El mensaje debe ser más largo",
      },
      mapKicker: "Visitanos",
      mapTitle: "Encontranos en Montevideo",
      mapSubtitle: "Coordiná una reunión y conversemos sobre tu operativa.",
      mapCta: "Cómo llegar",
      mapAriaLabel: "Mapa de ubicación de Grupo LP",
      pinSrLabel: "Ver dirección exacta",
    },
    footer: {
      rights: (year) =>
        `© ${year} Grupo LP — Lavoriero & Perez SRL. Todos los derechos reservados.`,
      location: "Montevideo, Uruguay",
      tagline: "Despachantes de aduana. Comercio exterior, gestionado con rigor y claridad.",
      hoursLabel: "Horario",
      hoursValue: "Lunes a viernes, 9:00 a 18:00",
      backToTop: "Volver arriba",
      privacyPolicy: "Política de privacidad",
      terms: "Términos y condiciones",
    },
    fab: {
      label: "Consultar por WhatsApp",
      labelShort: "WhatsApp",
    },
    whatsappPrefill:
      "Hola Grupo LP, vengo desde la web y tengo una consulta.",
    whatsappServicePrefill: (serviceName) =>
      `Hola Grupo LP, vengo desde la web y estoy interesado en el servicio de ${serviceName}. Quisiera más información.`,
  },

  en: {
    meta: {
      title: "Grupo LP | Customs brokerage & foreign trade in Uruguay",
      description:
        "Licensed customs brokers in Montevideo. Import, export and transit clearance, tariff classification and full foreign-trade advisory. Lavoriero & Perez SRL.",
    },
    logoAlt: "Grupo LP — Lavoriero & Perez SRL",
    nav: {
      primary: "Primary",
      sections: "Sections",
      about: "About",
      services: "Services",
      reviews: "Testimonials",
      contact: "Contact",
      whatsapp: "WhatsApp",
      process: "Process",
      forWhom: "For whom",
    },
    trust: {
      kicker: "Trust",
      title: "The customs backing your operation needs.",
      subtitle:
        "We provide the technical solidity and operational experience so every clearance moves forward in compliance, with no delays or extra costs.",
      stats: [
        { target: 20, suffix: "+", label: "years of customs experience" },
        { target: 5000, suffix: "+", label: "customs operations handled" },
        { target: 100, suffix: "%", label: "representation before Customs" },
        { target: 24, suffix: "h", label: "response to your inquiry" },
      ],
    },
    process: {
      kicker: "Customs file",
      title: "From prior analysis to release: every decision documented.",
      subtitle:
        "Clearance does not start when cargo arrives. It starts when goods, documentation, taxes, permits and interventions are reviewed in advance.",
      items: [
        { step: "01", title: "We review goods, origin and regime", description: "We understand what is imported, exported or transited, under which commercial terms and with which base documents." },
        { step: "02", title: "We classify, calculate and prevent", description: "We define HS/NCM, taxes, certificates, permits and interventions to anticipate the real cost of the operation." },
        { step: "03", title: "We prepare and file the clearance", description: "We build the file, prepare the customs declaration and act as representatives before the National Customs Directorate." },
        { step: "04", title: "We follow observations, inspection and release", description: "We coordinate verifications, answer observations and support the goods release through operational closure." },
      ],
    },
    forWhom: {
      kickerTarget: "For whom",
      targetTitle: "Built for your operation: from the first clearance to frequent importing.",
      targetItems: [
        { title: "Importers and exporters.", description: "We handle your import, export and transit clearances with technical backing." },
        { title: "Companies with frequent operations.", description: "We coordinate recurring volumes with predictability and a single point of contact." },
        { title: "First imports and e-commerce.", description: "We guide you step by step so you import in compliance, without costly mistakes." }
      ],
      kickerDiff: "Differentiator",
      diffTitle: "Why choose Grupo LP",
      diffItems: [
        { title: "Licensed customs brokers.", description: "We formally represent you before the National Customs Directorate." },
        { title: "Up-to-date regulatory knowledge.", description: "We anticipate requirements and avoid fines, delays and observations." },
        { title: "Direct, personalized service.", description: "You always speak with the person handling your operation, not a call center." }
      ],
    },
    hero: {
      eyebrow: "Customs Brokers · Uruguay",
      title: "Customs clearance",
      titleHighlight: "without improvising",
      subtitle:
        "Lavoriero & Perez SRL represents and supports importers, exporters and companies before Customs. Classification, documentation, taxes, permits and release with technical criteria and direct service.",
      ctaWhatsApp: "Ask about your operation",
      ctaServices: "View customs scope",
      trustBadge: "Import · Export · Transit · Customs",
    },
    about: {
      kicker: "About us",
      title: "Lavoriero & Perez: customs brokers you can trust",
      lineBeforeHighlight:
        "We are a customs brokerage firm based in Montevideo, focused on providing you with ",
      highlight: "technical customs advisory",
      lineAfterHighlight:
        " end to end. We understand your operation, anticipate requirements and support you at every stage of foreign trade.",
      bullet1:
        "Specialists in import, export and transit clearance.",
      bullet2:
        "Direct communication with whoever handles your operation.",
      statValue: "+20",
      statLabel: "Years of experience",
      statValue2: "+5K",
      statLabel2: "Operations handled",
    },
    clients: {
      kicker: "Trusted by",
      title: "Companies operating with Grupo LP",
    },
    services: {
      kicker: "Customs scope",
      title: "What we solve before, during and after clearance",
      subtitle:
        "The center of our work is customs: representation, classification, documentation, cost assessment, filings and release. Logistics appears as support when the operation needs it.",
      items: [
        {
          id: "despacho",
          title: "Customs Clearance",
          subtitle: "IMPORT · EXPORT · TRANSIT",
          description: "Full management of import, export and transit clearances, with formal representation before the National Customs Directorate.",
          icon: "FileCheck",
          mainFeatures: ["Import, export and transit", "Customs declaration preparation and filing", "Observation and inspection follow-up"],
          targetAudience: "Companies that need to release goods in compliance, with visibility over the file and a technical point of contact.",
          details: [
            {
              title: "Customs management",
              items: ["Documentary file preparation.", "Filing and follow-up before Customs.", "Coordination of verifications, channels and release."]
            },
            {
              title: "Operations",
              items: ["Definitive or temporary imports.", "Exports, transit and re-embarkation.", "Port, airport, border and free-trade zones."]
            }
          ],
          importantNote: "Cargo moves better when clearance is organized before arrival."
        },
        {
          id: "clasificacion-costos",
          title: "Classification, Taxes and Costs",
          subtitle: "HS/NCM · DUTIES · VAT · FEES",
          description: "Prior analysis of goods, tariff classification and cost structure to avoid surprises after purchasing or shipping.",
          icon: "Globe2",
          mainFeatures: ["HS/NCM tariff classification", "Tax and fee assessment", "Origin and Incoterms review"],
          targetAudience: "Importers that need to know whether the operation is viable and how much nationalization will really cost.",
          details: [
            {
              title: "Before operating",
              items: ["Technical reading of description, use and composition.", "Estimate of duties, VAT, advances, fees and associated expenses."]
            },
            {
              title: "Prevention",
              items: ["Alerts for permits or interventions.", "Review of invoice, packing list, freight, insurance and sale term."]
            }
          ],
          importantNote: "Early consultation avoids unviable purchases, hidden costs and document delays."
        },
        {
          id: "organismos-regimenes",
          title: "Agencies and Special Regimes",
          subtitle: "VUCE · LATU · MGAP · MSP · URSEC",
          description: "Management of permits, certificates and interventions before control agencies according to goods, sector and applicable regime.",
          icon: "Briefcase",
          mainFeatures: ["Permits and prior interventions", "Certificates of origin", "Temporary admission and free-trade zones"],
          targetAudience: "Companies with regulated products or filings that must be solved before clearance is presented.",
          details: [
            {
              title: "Filings",
              items: ["Management before VUCE and competent agencies.", "Requirement review by tariff line and type of goods."]
            },
            {
              title: "Regimes",
              items: ["Free-trade zones, free port and free airport.", "Temporary admissions, transits and special operations."]
            }
          ],
          importantNote: "Many delays are not logistics problems: they are permits that were not detected in time."
        },
        {
          id: "tramites",
          title: "Foreign-Trade Document Management",
          subtitle: "INVOICE · PACKING · BL/AWB · CERTIFICATES",
          description: "Document control so invoice, packing list, transport document, insurance, origin and permits reach the file consistently.",
          icon: "FileCheck",
          mainFeatures: ["Document checklist by operation", "Invoice, packing and transport control", "File archive and traceability"],
          targetAudience: "Administrative or commercial teams that need to organize documentation without losing operating time.",
          details: [
            {
              title: "Base documents",
              items: ["Commercial invoice, packing list and payment records.", "BL, AWB, MIC/CRT, freight, insurance and certificates."]
            },
            {
              title: "Control",
              items: ["Detection of inconsistencies before filing.", "File order for inquiries, audits and closings."]
            }
          ],
          importantNote: "A poorly prepared document may cost more than freight: we review it beforehand."
        },
        {
          id: "coordinacion-logistica",
          title: "Logistics Coordination as Support",
          subtitle: "CARGO · WAREHOUSE · DELIVERY",
          description: "We coordinate transport, warehousing, insurance or delivery when it helps close the customs operation, without shifting the focus away from clearance.",
          icon: "Ship",
          mainFeatures: ["Coordination with freight agents", "Warehouse and local delivery", "Cargo insurance on request"],
          targetAudience: "Clients who want to align release and delivery without turning clearance into fragmented management.",
          details: [
            {
              title: "Operational support",
              items: ["Liaison with forwarders, carriers and warehouses.", "Coordination of pickup after release."]
            },
            {
              title: "Criteria",
              items: ["Logistics supports clearance.", "We prioritize compliance, timing and total operation cost."]
            }
          ],
          importantNote: "We are not a forwarder first: we are customs brokers coordinating what is needed for the operation to close well."
        },
      ],
    },
    reviews: {
      kicker: "Testimonials",
      title: "What those who operate with us say",
      subtitle: "Experiences from clients who trust their clearances to Grupo LP.",
      googleBadge: "Client",
      starsAria: (rating) => `${rating} out of 5 stars`,
      viewMaps: "See more on Google",
      // TODO: replace with real (Google) reviews once available.
      items: [
        {
          quote:
            "Clearances always compliant and on time. They advise us on every operation and we solve everything with a single contact. Highly recommended.",
          name: "Industrial-sector importer",
          role: "Grupo LP client",
          rating: 5,
        },
        {
          quote:
            "We started importing with their guidance and they saved us from several mistakes. Clarity and fast response on every query.",
          name: "E-commerce company",
          role: "Grupo LP client",
          rating: 5,
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk about your next operation",
      subtitle:
        "Fill out the form or reach us at ",
      subtitlePhone: "+598 99 123 456",
      subtitleAfterPhone:
        ". We respond with priority to commercial and operational inquiries.",
      officeLabel: "Office",
      officeAddress: "Montevideo, Uruguay",
      phoneLabel: "Phone",
      phoneNumber: "+598 99 123 456",
      emailLabel: "Email",
      emails: [
        { address: "info@grupolp.com.uy", description: "General inquiries" },
        { address: "comercial@grupolp.com.uy", description: "New business" },
        { address: "despachos@grupolp.com.uy", description: "Operations & clearance" },
        { address: "administracion@grupolp.com.uy", description: "Billing & payments" },
      ],
      formTitle: "Inquire with no commitment",
      formDescription:
        "Tell us what goods you want to import, export or transit and we will review the most convenient customs path.",
      ctaWhatsAppAlt: "I prefer to write via WhatsApp",
      ctaDiff: "Start your inquiry now",
      labelName: "First and Last Name",
      placeholderName: "Your full name",
      labelCompany: "Company (Optional)",
      placeholderCompany: "Your company",
      labelEmail: "Email",
      placeholderEmail: "name@company.com",
      labelPhone: "Phone / WhatsApp (Optional)",
      placeholderPhone: "+598 99 123 456",
      labelService: "Service of interest",
      serviceOptions: {
        despacho: "Customs Clearance",
        costos: "Classification, Taxes and Costs",
        organismos: "Agencies and Special Regimes",
        documental: "Document Management",
        logistica: "Support logistics coordination",
        other: "Other / Advisory",
      },
      labelMessage: "Message",
      placeholderMessage:
        "Goods, origin, destination, approximate value, entry mode and whether you already have invoice/packing/transport document.",
      privacyNoticeBefore: "By submitting this form, you accept our ",
      privacyNoticeLink: "Privacy policy (ES)",
      privacyNoticeAfter: ".",
      submit: "Send inquiry",
      successMessage: "Inquiry sent! We'll get back to you shortly.",
      errors: {
        required: "This field is required",
        email: "Please enter a valid email",
        minLength: "Message must be longer",
      },
      mapKicker: "Come visit",
      mapTitle: "Find us in Montevideo",
      mapSubtitle: "Schedule a meeting and let's discuss your operation.",
      mapCta: "Get directions",
      mapAriaLabel: "Grupo LP location map",
      pinSrLabel: "Show exact address",
    },
    footer: {
      rights: (year) => `© ${year} Grupo LP — Lavoriero & Perez SRL. All rights reserved.`,
      location: "Montevideo, Uruguay",
      tagline: "Licensed customs brokers. Foreign trade, managed with rigor and clarity.",
      hoursLabel: "Hours",
      hoursValue: "Monday to Friday, 9:00 AM to 6:00 PM",
      backToTop: "Back to top",
      privacyPolicy: "Privacy policy (ES)",
      terms: "Terms and conditions (ES)",
    },
    fab: {
      label: "Chat on WhatsApp",
      labelShort: "WhatsApp",
    },
    whatsappPrefill:
      "Hello Grupo LP, I'm coming from the website and have a query.",
    whatsappServicePrefill: (serviceName) =>
      `Hello Grupo LP, I'm coming from the website and I am interested in the ${serviceName} service. I would like more information.`,
  },
};

export function getMessages(locale: Locale): Messages {
  return translations[locale];
}
