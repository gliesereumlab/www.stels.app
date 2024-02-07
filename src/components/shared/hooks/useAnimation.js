import { useEffect } from "react";

export const useAnimation = (animation) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("data-animation-id")
                    entry.target.classList.add(animation[id].animationClass)
                }
            })
        }, {});
        for (const key in animation) {
            if (animation[key].refs) {
                animation[key].refs.forEach(ref => {
                    if (ref.current) {
                        observer.observe(ref.current);
                    }
                })
            } else {
                if (animation[key].ref.current) {
                    observer.observe(animation[key].ref.current);
                }
            }
        }
        return () => observer.disconnect(); 
    }, []);
}