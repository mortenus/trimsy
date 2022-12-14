// import React from 'react';

// export default function useOnScreen(ref) {
//   const [isIntersecting, setIntersecting] = useState(false);

//   const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

//   React.useEffect(() => {
//     observer.observe(ref.current);
//     // Remove the observer as soon as the component is unmounted
//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return isIntersecting;
// }
import React from 'react';

const useOnScreen = () => {
  return false;
};

export default useOnScreen;
