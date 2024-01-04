import { useState, useEffect, useRef } from 'react';

function useOnScreen(options) {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Update state when observer callback fires
      // We check for isIntersecting on the first entry in the array
      setIntersecting(entries[0].isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]); // Dependencies: ref and options

  return [ref, isIntersecting];
}

export default useOnScreen