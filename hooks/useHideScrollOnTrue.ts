import React from 'react';

export default function useHideScrollOnTrue(stateBool: boolean) {
  React.useEffect(() => {
    function preventDefault(e: any) {
      e.preventDefault();
    }

    if (stateBool) {
      document.body.style.setProperty('overflow-y', `hidden !important`);
      document.body.addEventListener('touchmove', preventDefault, { passive: false });
    } else {
      document.body.style.removeProperty('overflow-y');
      document.body.removeEventListener('touchmove', preventDefault);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateBool]);
}
