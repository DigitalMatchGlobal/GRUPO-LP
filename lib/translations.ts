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
    items: [ServiceCopy, ServiceCopy, ServiceCopy, ServiceCopy];
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
      kicker: "Proceso",
      title: "Un despacho ordenado, claro y sin sorpresas.",
      subtitle:
        "Trabajamos con un método simple para que cada operación de comercio exterior avance con previsibilidad de punta a punta.",
      items: [
        { step: "01", title: "Analizamos tu operación y mercadería", description: "Revisamos producto, origen, documentación y régimen para anticipar requisitos." },
        { step: "02", title: "Clasificamos y preparamos la documentación", description: "Clasificación arancelaria correcta, liquidación de tributos y armado del DUA." },
        { step: "03", title: "Gestionamos el despacho ante la Aduana", description: "Presentamos, coordinamos inspecciones y te representamos ante la DNA." },
        { step: "04", title: "Liberamos y entregamos tu mercadería", description: "Seguimos cada paso hasta el retiro, con trazabilidad y comunicación directa." },
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
      eyebrow: "Despacho de Aduana · Comercio Exterior",
      title: "Tu despacho de aduana",
      titleHighlight: "en manos expertas",
      subtitle:
        "Lavoriero & Perez SRL — despachantes de aduana en Uruguay. Gestionamos tus importaciones y exportaciones con rigor técnico, claridad y trato directo.",
      ctaWhatsApp: "Consultá tu operación",
      ctaServices: "Ver servicios",
      trustBadge: "Despachantes de aduana · Montevideo, Uruguay",
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
      kicker: "Servicios",
      title: "Comercio exterior, gestionado de punta a punta",
      subtitle:
        "Desde el despacho ante la Aduana hasta la logística y los trámites: un solo equipo para toda tu operativa.",
      items: [
        {
          id: "despacho",
          title: "Despacho de Aduana",
          subtitle: "IMPORTACIÓN · EXPORTACIÓN · TRÁNSITO",
          description: "Gestión integral del despacho y representación ante la Dirección Nacional de Aduanas.",
          icon: "FileCheck",
          mainFeatures: ["Despachos de importación y exportación", "Tránsitos y zonas francas", "Liquidación de tributos"],
          targetAudience: "Empresas e importadores que necesitan operar en aduana en tiempo y forma, sin observaciones.",
          details: [
            {
              title: "¿Qué gestionamos?",
              items: ["Confección y presentación del DUA.", "Representación formal ante la DNA.", "Coordinación de inspecciones y verificaciones."]
            },
            {
              title: "Resultado",
              items: ["Liberación ágil de la mercadería.", "Operativa en regla, sin sorpresas."]
            }
          ],
          importantNote: "Anticipamos los requisitos antes del embarque para evitar demoras."
        },
        {
          id: "comercio-exterior",
          title: "Asesoramiento en Comercio Exterior",
          subtitle: "NORMATIVA · CLASIFICACIÓN",
          description: "Clasificación arancelaria, regímenes y normativa para que importes y exportes con seguridad.",
          icon: "Globe2",
          mainFeatures: ["Clasificación arancelaria (NCM)", "Regímenes especiales", "Certificados de origen"],
          targetAudience: "Empresas que buscan optimizar costos y operar con previsibilidad normativa.",
          details: [
            {
              title: "Asesoría técnica",
              items: ["Clasificación correcta para tributación adecuada.", "Admisión temporaria, draw-back y otros regímenes."]
            },
            {
              title: "Cumplimiento",
              items: ["Gestión de certificados y permisos.", "Análisis previo de viabilidad de la operación."]
            }
          ],
          importantNote: "Recomendamos consultar la clasificación antes de confirmar la compra en origen."
        },
        {
          id: "logistica",
          title: "Logística & Transporte",
          subtitle: "MARÍTIMO · AÉREO · TERRESTRE",
          description: "Coordinación de transporte, depósito y entregas en plaza, integrada a tu despacho.",
          icon: "Ship",
          mainFeatures: ["Coordinación multimodal", "Depósito y almacenaje", "Entregas en todo el país"],
          targetAudience: "Clientes que prefieren resolver el despacho y la logística con un único proveedor.",
          details: [
            {
              title: "Coordinación integral",
              items: ["Enlace con agentes de carga y transportistas.", "Gestión de depósito y desconsolidación."]
            },
            {
              title: "Cobertura",
              items: ["Entregas en plaza coordinadas.", "Seguros de carga a solicitud."]
            }
          ],
          importantNote: "Servicio coordinado con la operativa aduanera para no perder tiempos."
        },
        {
          id: "tramites",
          title: "Gestión Documental & Trámites",
          subtitle: "ORGANISMOS · OUTSOURCING",
          description: "Tramitación ante organismos y gestión documental del comercio exterior.",
          icon: "Briefcase",
          mainFeatures: ["Trámites ante organismos (LATU, MGAP, MSP)", "Gestión documental", "Outsourcing de comex"],
          targetAudience: "Empresas que quieren delegar la parte administrativa y documental de sus operaciones.",
          details: [
            {
              title: "Qué resolvemos",
              items: ["Permisos e intervenciones previas.", "Gestión y archivo de documentación."]
            },
            {
              title: "Beneficios",
              items: ["Un único punto de contacto.", "Menos carga administrativa para tu equipo."]
            }
          ],
          importantNote: "Adaptamos el alcance a las necesidades de cada empresa."
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
        "Contanos sobre tu operación y nos comunicamos en menos de 24 horas.",
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
        comex: "Asesoramiento en Comercio Exterior",
        logistica: "Logística & Transporte",
        tramites: "Gestión Documental & Trámites",
        other: "Otro / Asesoramiento",
      },
      labelMessage: "Mensaje",
      placeholderMessage:
        "Tipo de mercadería, origen/destino y régimen (si aplica).",
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
      kicker: "Process",
      title: "An orderly, clear clearance with no surprises.",
      subtitle:
        "We work with a simple method so every foreign-trade operation moves forward predictably, end to end.",
      items: [
        { step: "01", title: "We analyze your operation and goods", description: "We review product, origin, documentation and regime to anticipate requirements." },
        { step: "02", title: "We classify and prepare the documentation", description: "Correct tariff classification, tax assessment and customs declaration." },
        { step: "03", title: "We handle clearance before Customs", description: "We file, coordinate inspections and represent you before the customs authority." },
        { step: "04", title: "We release and deliver your goods", description: "We track every step through pickup, with traceability and direct communication." },
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
      eyebrow: "Customs Brokerage · Foreign Trade",
      title: "Your customs clearance",
      titleHighlight: "in expert hands",
      subtitle:
        "Lavoriero & Perez SRL — licensed customs brokers in Uruguay. We handle your imports and exports with technical rigor, clarity and direct service.",
      ctaWhatsApp: "Ask about your operation",
      ctaServices: "View services",
      trustBadge: "Customs brokers · Montevideo, Uruguay",
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
      kicker: "Services",
      title: "Foreign trade, managed end to end",
      subtitle:
        "From customs clearance to logistics and paperwork: a single team for your entire operation.",
      items: [
        {
          id: "despacho",
          title: "Customs Clearance",
          subtitle: "IMPORT · EXPORT · TRANSIT",
          description: "Full clearance management and representation before the National Customs Directorate.",
          icon: "FileCheck",
          mainFeatures: ["Import and export clearance", "Transit and free-trade zones", "Tax assessment"],
          targetAudience: "Companies and importers that need to clear customs on time, with no observations.",
          details: [
            {
              title: "What we handle",
              items: ["Preparation and filing of the customs declaration.", "Formal representation before Customs.", "Coordination of inspections and verifications."]
            },
            {
              title: "Outcome",
              items: ["Swift release of goods.", "Compliant operation, no surprises."]
            }
          ],
          importantNote: "We anticipate requirements before shipment to avoid delays."
        },
        {
          id: "comercio-exterior",
          title: "Foreign Trade Advisory",
          subtitle: "REGULATIONS · CLASSIFICATION",
          description: "Tariff classification, regimes and regulations so you import and export with confidence.",
          icon: "Globe2",
          mainFeatures: ["Tariff classification (HS/NCM)", "Special regimes", "Certificates of origin"],
          targetAudience: "Companies looking to optimize costs and operate with regulatory predictability.",
          details: [
            {
              title: "Technical advisory",
              items: ["Correct classification for proper taxation.", "Temporary admission, drawback and other regimes."]
            },
            {
              title: "Compliance",
              items: ["Management of certificates and permits.", "Prior feasibility analysis of the operation."]
            }
          ],
          importantNote: "We recommend confirming classification before purchasing at origin."
        },
        {
          id: "logistica",
          title: "Logistics & Transport",
          subtitle: "SEA · AIR · ROAD",
          description: "Transport coordination, warehousing and local delivery, integrated with your clearance.",
          icon: "Ship",
          mainFeatures: ["Multimodal coordination", "Warehousing and storage", "Nationwide delivery"],
          targetAudience: "Clients who prefer to handle clearance and logistics with a single provider.",
          details: [
            {
              title: "Integrated coordination",
              items: ["Liaison with freight forwarders and carriers.", "Warehouse and deconsolidation management."]
            },
            {
              title: "Coverage",
              items: ["Coordinated local deliveries.", "Cargo insurance on request."]
            }
          ],
          importantNote: "Coordinated with customs operations so no time is lost."
        },
        {
          id: "tramites",
          title: "Documentation & Paperwork",
          subtitle: "AGENCIES · OUTSOURCING",
          description: "Filing before agencies and document management for foreign trade.",
          icon: "Briefcase",
          mainFeatures: ["Filing before agencies (LATU, MGAP, MSP)", "Document management", "Foreign-trade outsourcing"],
          targetAudience: "Companies that want to delegate the administrative and documentary side of their operations.",
          details: [
            {
              title: "What we solve",
              items: ["Permits and prior interventions.", "Management and archiving of documentation."]
            },
            {
              title: "Benefits",
              items: ["A single point of contact.", "Less administrative load for your team."]
            }
          ],
          importantNote: "We tailor the scope to each company's needs."
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
        "Tell us about your operation and we'll get back to you within 24 hours.",
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
        comex: "Foreign Trade Advisory",
        logistica: "Logistics & Transport",
        tramites: "Documentation & Paperwork",
        other: "Other / Advisory",
      },
      labelMessage: "Message",
      placeholderMessage:
        "Type of goods, origin/destination and regime (if applicable).",
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
