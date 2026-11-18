import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../data/site";

export function Analytics() {
  const location = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    if (!siteConfig.gtmId) return;
    window.dataLayer = window.dataLayer || [];
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    window.dataLayer.push({
      event: "virtual_page_view",
      page_path: `${location.pathname}${location.search}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  return null;
}
