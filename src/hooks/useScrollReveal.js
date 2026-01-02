import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');

        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: Unobserve if you only want it to happen once
                    // observer.unobserve(entry.target);
                } else {
                    // Optional: Remove active class to re-animate on scroll up (if desired)
                    entry.target.classList.remove('active');
                }
            });
        };

        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

        revealElements.forEach(el => revealObserver.observe(el));

        return () => {
            revealElements.forEach(el => revealObserver.unobserve(el));
        };
    }); // Run on every render/update to catch new elements if necessary, or empty dep array if static.
    // Given React re-renders, adding simple empty dep array might miss conditional renders. 
    // Ideally this should be a ref-based solution, but for porting the global class logic, this works.
};

export default useScrollReveal;
