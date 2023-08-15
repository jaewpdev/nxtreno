import { useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';

export default function useAnimater({}) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
        animate({scope.current, {}})
    }
  }, [isInView])

  return scope;
}
