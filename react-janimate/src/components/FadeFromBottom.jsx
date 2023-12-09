import React, { useEffect, useRef, useState } from 'react';
import styles from './styles/FadeFromBottom.module.css';

const FadeFromBottom = ({children}) => {

    const intersectionRef = useRef();
    const [inView, setInView] = useState();

    const callback = (entries) => {
        const [entry] = entries;
        if(entry.isIntersecting) {
          setInView(true);
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, {root: null, rootMargin: '0px', threshold: .8});
        if (intersectionRef.current) observer.observe(intersectionRef.current);

        return () => {
           if(intersectionRef.current) observer.unobserve(intersectionRef.current);
        }
    }, []);

  return (
    <div ref={intersectionRef} >
      <div className={inView ? `${styles.containerView} ${styles.container}` : `${styles.container}`}>
        {children}
      </div>
    </div>
  )
}

export default FadeFromBottom