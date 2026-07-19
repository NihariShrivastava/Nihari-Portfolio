import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        const revealCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        };

        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

        const observeElements = () => {
            document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
        };

        // Initial observation
        observeElements();

        // Use MutationObserver to catch elements added by HMR or React state changes
        const mutationObserver = new MutationObserver(() => {
            observeElements();
        });
        
        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            revealObserver.disconnect();
            mutationObserver.disconnect();
        };
    }, []); 
};

export default useScrollReveal;
