import { useEffect } from "react";

const JSON_LD_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://dvora.yuvalgeva.com/#organization",
      name: "SoulRoad - דבורה קיין-רייניש",
      url: "https://dvora.yuvalgeva.com",
      logo: "https://dvora.yuvalgeva.com/favicon.png",
      description:
        "דבורה קיין-רייניש - פסיכולוגית ופוטותרפיסטית. ליווי אישי, סדנאות קבוצתיות, פוטותרפיה וסול קולאז׳",
      areaServed: {
        "@type": "Country",
        name: "Israel",
      },
      knowsLanguage: ["he", "en"],
      serviceType: [
        "פסיכולוגיה",
        "פוטותרפיה",
        "סול קולאז׳",
        "סדנאות קבוצתיות",
        "ליווי אישי",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://dvora.yuvalgeva.com/#website",
      url: "https://dvora.yuvalgeva.com",
      name: "SoulRoad",
      publisher: {
        "@id": "https://dvora.yuvalgeva.com/#organization",
      },
      inLanguage: "he",
    },
    {
      "@type": "WebPage",
      "@id": "https://dvora.yuvalgeva.com/#webpage",
      url: "https://dvora.yuvalgeva.com",
      name: "SoulRoad | דבורה קיין-רייניש - פסיכולוגית ופוטותרפיסטית",
      isPartOf: {
        "@id": "https://dvora.yuvalgeva.com/#website",
      },
      about: {
        "@id": "https://dvora.yuvalgeva.com/#organization",
      },
      inLanguage: "he",
    },
  ],
};

const JsonLd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(JSON_LD_DATA);
    script.id = "json-ld-schema";
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("json-ld-schema");
      if (existing) existing.remove();
    };
  }, []);

  return null;
};

export default JsonLd;
