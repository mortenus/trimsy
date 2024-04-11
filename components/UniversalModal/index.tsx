import clsx from 'clsx';
import React from 'react';

import styles from './UniversalModal.module.scss';
import PostStyles from '/styles/blog/Post.module.scss';
import BlogWrapperStyles from '/styles/blog/BlogWrapper.module.scss';
import useHideScrollOnTrue from 'hooks/useHideScrollOnTrue';
import Image from 'next/image';

type TUniversalModal = {
  children: React.ReactNode;
  customRef?: any;
  onClick?: () => void;
  onClose: () => void;
  className?: string;
  showClose?: boolean;
  size?: 'small' | 'full';
};

const UniversalModal = ({
  customRef,
  children,
  onClick,
  onClose,
  className,
  showClose,
  size,
}: TUniversalModal) => {
  const [isModalVisible, setIsModalVisible] = React.useState(true);

  const handleModalChange = () => {
    onClose();
    setIsModalVisible(!isModalVisible);
  };

  useHideScrollOnTrue(isModalVisible);

  //   const {
  //     handleStateChange: handleOpenChange,
  //     handleKeyDown,
  //     state: open,
  //   } = useChangeStateOnSpace();

  //   const ref = React.useRef(null);
  //   const toNotCloseRef = React.useRef(null);

  //   useHideOnOutsideClick(opened, setIsOpened, ref, toNotCloseRef);

  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className={clsx(styles.overflow, className && className, {
        [styles.overlayVisible]: isModalVisible,
      })}>
      <div className={clsx({ ['global-wrapper--small']: !size })} ref={customRef}>
        <div className={clsx(styles.content, { [styles.full]: size === 'full' })} ref={modalRef}>
          {showClose && (
            <svg
              className={styles.close}
              onClick={handleModalChange}
              //   onKeyDown={handleKeyDownOverflowChange}
              tabIndex={1}
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.5 35L0 31.5L14 17.5L0 3.5L3.5 0L17.5 14L31.5 0L35 3.5L21 17.5L35 31.5L31.5 35L17.5 21L3.5 35Z"
                fill="black"
              />
            </svg>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default UniversalModal;
