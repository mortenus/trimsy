import React from 'react';

import styles from './Button.module.scss';

type TButton = {
  //   children: React.ReactNode;
  name: string;
  value: string;
  handleChange: (e: any) => string;
};

const Button = ({ name, handleChange }: TButton) => {
  const [activeType, setActiveType] = React.useState<number | null>(null);

  const handleChangeType = (e: any, activeTypeId: number) => {
    handleChange(e);
    setActiveType(activeTypeId);
  };

  //   React.useEffect(() => {

  //   }, [activeType])

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        // onClick={() => setActiveType(0)}
        name={name}
        id={name}
        value={`Career Opportunities`}
        onClick={(e: any) => handleChangeType(e, 0)}>
        {activeType === 0 ? (
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 22C18.866 22 22 18.866 22 15C22 11.134 18.866 8 15 8C11.134 8 8 11.134 8 15C8 18.866 11.134 22 15 22Z"
              fill="black"
            />
            <path
              d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 27C8.37 27 3 21.63 3 15C3 8.37 8.37 3 15 3C21.63 3 27 8.37 27 15C27 21.63 21.63 27 15 27Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 27C8.37 27 3 21.63 3 15C3 8.37 8.37 3 15 3C21.63 3 27 8.37 27 15C27 21.63 21.63 27 15 27Z"
              fill="black"
            />
          </svg>
        )}
        Career Opportunities
      </button>
      <button
        className={styles.button}
        // onClick={() => setActiveType(1)}
        name={name}
        id={name}
        value={`Partnerships`}
        onClick={(e: any) => handleChangeType(e, 1)}>
        {activeType === 1 ? (
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 22C18.866 22 22 18.866 22 15C22 11.134 18.866 8 15 8C11.134 8 8 11.134 8 15C8 18.866 11.134 22 15 22Z"
              fill="black"
            />
            <path
              d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 27C8.37 27 3 21.63 3 15C3 8.37 8.37 3 15 3C21.63 3 27 8.37 27 15C27 21.63 21.63 27 15 27Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 27C8.37 27 3 21.63 3 15C3 8.37 8.37 3 15 3C21.63 3 27 8.37 27 15C27 21.63 21.63 27 15 27Z"
              fill="black"
            />
          </svg>
        )}
        Partnerships
      </button>
    </div>
  );
};

export default Button;
