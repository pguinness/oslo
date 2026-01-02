import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MoodReset() {
    const { pathname } = useLocation();

    useEffect(() => {
        // always scroll to top on route change
        window.scrollTo(0, 0);

        // reset mood for all pages except homepage
        if (pathname !== "/") {
            document.body.classList.remove("dark");
            document
                .querySelector('meta[name="theme-color"]')
                ?.setAttribute("content", "#F2F3F1");
        }
    }, [pathname]);

    return null;
}
