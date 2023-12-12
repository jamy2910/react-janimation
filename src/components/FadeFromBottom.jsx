import React, { useEffect, useRef, useState } from 'react';
import styles from './styles/FadeFromBottom.module.css';

const FadeFromBottom = ({children, hideOverflow, threshold}) => {

    const intersectionRef = useRef();
    const [inView, setInView] = useState();

    const callback = (entries) => {
        const [entry] = entries;
        if(entry.isIntersecting) {
          setInView(true);
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, {root: null, rootMargin: '0px', threshold: threshold || .5});
        if (intersectionRef.current) observer.observe(intersectionRef.current);

        return () => {
           if(intersectionRef.current) observer.unobserve(intersectionRef.current);
        }
    }, []);

  return (
    <div ref={intersectionRef} style={hideOverflow ? {overflowY: 'hidden'} : {overflowY: 'visible'}}>
      <div className={inView ? `${styles.containerView} ${styles.container}` : `${styles.container}`}>
        {children}
      </div>
    </div>
  )
}

export default FadeFromBottom