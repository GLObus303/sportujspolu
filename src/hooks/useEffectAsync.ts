import { useEffect } from 'react';

export const useEffectAsync = (fn: () => PromiseLike<any>, deps?: any[]) =>
  useEffect(() => {
    fn();
  }, deps);
