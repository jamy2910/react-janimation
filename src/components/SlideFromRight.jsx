import React, { useEffect, useRef, useState } from 'react';
import styles from './styles/SlideFromRight.module.css';

const SlideFromRight = ({ children, hideOverflow, threshold }) => {

    const [inView, setInView] = useState(false);
    const intersectionRef = useRef();

    const callback = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setInView(true);
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, { root: null, rootMargin: '0px', threshold: threshold || 0.5 });

        if (intersectionRef.current) {
            observer.observe(intersectionRef.current);
        }

        return () => {
            if (intersectionRef.current) {
                observer.unobserve(intersectionRef.current);
            }
        }
    }, [])

    return (
        <div ref={intersectionRef} className={styles.mainContainer} style={hideOverflow ? {overflowX: 'hidden'} : {overflowX: 'visible'}}>
            <div className={inView ? `${styles.containerView} ${styles.container}` : styles.container}>
                {children}
            </div>

        </div>
    )
}

export default SlideFromRight