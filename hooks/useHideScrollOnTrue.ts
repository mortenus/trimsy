import React from 'react';

export default function useHideScrollOnTrue(stateBool: boolean) {
  function preventDefault(e: any) {
    e.preventDefault();
  }

  function disableScroll() {
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
  }
  function enableScroll() {
    document.body.removeEventListener('touchmove', preventDefault);
  }

  React.useEffect(() => {
    if (stateBool) {
      document.body.style.setProperty('overflow-y', `hidden !important`);
      disableScroll();
    } else {
      document.body.style.removeProperty('overflow-y');
      enableScroll();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateBool]);
}
