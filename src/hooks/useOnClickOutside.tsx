import { useEffect, RefObject } from 'react';

type Handler = (event: MouseEvent | TouchEvent) => void;

export const useOnClickOutside = (
  ref: RefObject<HTMLInputElement>,
  handler: Handler,
  isOutsideClose=true
): void => {
  useEffect(
    () => {
      if (!isOutsideClose) { return; }

      const listener = (event: MouseEvent | TouchEvent) => {
        const el = event.target;
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || (el instanceof Node && ref.current.contains(el))) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
};

export default useOnClickOutside;
