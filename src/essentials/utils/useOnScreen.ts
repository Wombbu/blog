import { useEffect, useState, useRef } from "react";

type Props = {
  /**
   * Only intersect visibility once.
   * If true, the observer will be disconnected after the first time the element is visible.
   */
  onlyOnce?: boolean;
  intersectionObserverOptions?: IntersectionObserverInit;
};

export const useOnScreen = ({
  onlyOnce,
  intersectionObserverOptions: options,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting && onlyOnce) {
        observer.disconnect();
      }
    }, options);

    const currentElement = containerRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [containerRef, options, setIsVisible]);

  return { containerRef, isVisible };
};
