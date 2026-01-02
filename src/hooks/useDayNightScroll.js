import { useEffect, useRef } from "react";

export default function useDayNightScroll() {
    const triggerRef = useRef(null);

    useEffect(() => {
        const el = triggerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.boundingClientRect.top <= 0) {
                    document.body.classList.add("dark");
                    document
                        .querySelector('meta[name="theme-color"]')
                        ?.setAttribute("content", "#111315");
                } else {
                    document.body.classList.remove("dark");
                    document
                        .querySelector('meta[name="theme-color"]')
                        ?.setAttribute("content", "#F2F3F1");
                }
            },
            { threshold: 0 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return triggerRef;
}
