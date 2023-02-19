import React from 'react';

export default function useHideScrollOnTrue(stateBool: boolean) {
  React.useEffect(() => {
    if (stateBool) {
      document.body.style.setProperty('overflow-y', `hidden`);
    } else {
      document.body.style.setProperty('overflow-y', `scroll`);
    }
  }, [stateBool]);
}
