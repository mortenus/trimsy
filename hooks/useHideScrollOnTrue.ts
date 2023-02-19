import React from 'react';

export default function useHideScrollOnTrue(stateBool: boolean) {
  React.useEffect(() => {
    if (stateBool) {
      document.body.style.setProperty('overflow-y', `hidden`);
      document.ontouchmove = function (e) {
        e.preventDefault();
      };
    } else {
      document.body.style.setProperty('overflow-y', `scroll`);
      document.ontouchmove = function (e) {
        return true;
      };
    }
  }, [stateBool]);
}
