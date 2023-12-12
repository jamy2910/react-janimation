import React, { useRef, useState, useEffect } from 'react'
import styles from './styles/Expand.module.css';

const Expand = ({ children }) => {
    const intersectionRef = useRef();
    const [inView, setInView] = useState();

    const callback = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setInView(true);
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, { root: null, rootMargin: '0px', threshold: .8 });
        if (intersectionRef.current) observer.observe(intersectionRef.current);

        return () => {
            if (intersectionRef.current) observer.unobserve(intersectionRef.current);
        }
    }, []);

    return (
        <div ref={intersectionRef} className={inView ? `${styles.containerView} ${styles.container}` : `${styles.container}`}>

            {children}

        </div>
    )
}

export default Expand