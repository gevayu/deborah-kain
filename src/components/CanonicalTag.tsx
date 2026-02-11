import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DOMAIN = "https://dvora.yuvalgeva.com";

const CanonicalTag = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = `${DOMAIN}${pathname === "/" ? "" : pathname}`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }, [pathname]);

  return null;
};

export default CanonicalTag;
