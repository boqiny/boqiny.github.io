import { useEffect, useState, RefObject } from "react";
import { useInView } from "framer-motion";

interface UseScrollAnimationOptions {
  margin?: string;
}

/**
 * SEO-friendly scroll animation hook.
 *
 * On first render (before useEffect fires), isVisible is true so that search
 * crawlers (e.g. Googlebot) see all content as visible. After the component
 * mounts on the client, isVisible follows the IntersectionObserver so that
 * elements animate in when scrolled into view.
 */
export function useScrollAnimation(
  ref: RefObject<Element | null>,
  options: UseScrollAnimationOptions = {}
) {
  const [mounted, setMounted] = useState(false);
  const isInView = useInView(ref, { once: true, margin: options.margin ?? "-100px" });

  useEffect(() => {
    setMounted(true);
  }, []);

  const isVisible = !mounted || isInView;

  return { isVisible, isInView };
}
