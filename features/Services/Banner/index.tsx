import Link from 'next/link';
import React from 'react';

import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={'global-wrapper'}>
      {/* <svg
        width="57"
        height="40"
        viewBox="0 0 57 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="57" height="40" fill="url(#ukraine-svg)" />
        <defs>
          <pattern id="ukraine-svg" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use
              xlinkHref="#image0_75_7"
              transform="translate(0 -0.275) scale(0.037037 0.0527778)"
            />
          </pattern>
          <image
            id="image0_75_7"
            width="27"
            height="28"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAEXklEQVRIie2WvW8cRRjGf/Pu67nNYVnHxUSOk0CIrAgalAKJCgkJpaBLS8dHhRAF/AOcREVJQZEKGppUIAqgoqBEdKAElEQmH47jOGazvoz35mbfpdg73yUYBUFK3tOj06zmnt97s8/MLvxfj6HcY3MaDORvrtt/g02NBwAzs0fVQ7CBtAYHAg40/fr8+e66LvXuhYXVZPWRkTU5tVnT1MUzx5fX33n9tfUpywG8Mfgs/3zwZvWozj69cGGxLDsrKbEWaz2TyM7ERk7F1CxXVVoOMXWrvbGklMDGcTHXrRMr/RvXb9z46IuP3/5GAS5evPrWuXc/OXfqxNFvVetrXe8LAMTyOrmTTdZZTU6fvnIrO1277NTYssPRhJiEZEKVEiFEqqohhBFVTFRx1FnK3YnN4c6JsL39MtDCrm/dX2kOHT0bt+ysV8eCb5KK4qSjiIIoxlQCTmx+Ta0WRBwijkwzFszRWEbdSIoJn3AVgAJ4XUghws17FjVzuqCo94KoopqZqqIiaCaoCgKIzMKXREAykEwcDkeGIyPLREQcKso+DBEQaQ3FoSKICCqg4kSFFiKAExpxjZsPl3O0Q9dCmRvPlU4WYvY7nEzhrfuDEhGcm3cxsqyZqCZz4/Y7q3GuRmThQdhfvOdrbtzOmTVmpiRTQlTKoVAMoQyQkpKisHwoJ9f6QdhOUHzydCbOU1Np44AIGEJIOakSEgYWWfQFvXzISregv7JFT7dIqSRUic1t5VY4SjE6zp0yzmDP9y+zJ0/we7GGZELXK+o9KoqIkPtEPw+s9gtOHdnh9MoGq/0t1pZ3WOmVIBWkAFVFDIGqMmJM5J0lruw8xfc/Ch98NYG9/+p3rK39wp3xYa7/8STReojmdL2x2h9ypD/keD/SW4rgE6QIZhCNNBRiMqoqEqpICIlYRWKs6OQjFjs1p4/szv7Z1k7B8Up4YbXgxWPQ7eZ4L4gX2g3Vbt5RmQN+LjBtQBozHEY2lRiZgMMIlTGs5qKvqqQEd3cTLlM0JLxX1AteFNWpZC4gzSTatp/mgw5PEdlvS+cnOUAwVFrJvtFEk4mNo2ka56ZAM0eyBptTSg1OGlw2a2ECaz8NNrE1koGf+Ju1SrPFcyKYCHivmAmqtIcATirNoMHyvJOiqcJoBss1J/ddXAZQm1kDE4k2iDSoOvK8g6oCTqrKZBgSYXtMOYwURaAcBvbuj2w8HguYLPezvN/PaJpM92F3C/zmdmJxsecXvJF7be+ZKqCYQVkKG5sjinKXokjpfmRz915a37y9c6nYjRt7e2nz3u5oYzyuk7W9rfSWypMnn/XnXJbKfdjV6+HLazfDsV8v7z23tOhXu4cWur6j0uBsnCga62yHUb1163bx23CYfi7uukuX18trP/zErQMy8VBd+3DwXj+fZsJNogWw+MpL9DqHyJc6EBJ2vyTcuEK4vEN5kNVgMDvQBpOn/P7DfgCDAf/uHWTfeGb6j98//q/HVn8CR6Afpt9wIk0AAAAASUVORK5CYII="
          />
        </defs>
      </svg> */}

      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <svg
              fill="#000000"
              width="800px"
              height="800px"
              viewBox="0 0 512 512"
              id="Laptop_protection"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M31,364.9v8.1233A35.9749,35.9749,0,0,0,66.9736,409H445.022A35.9787,35.9787,0,0,0,481,373.0232V364.9Z" />
              <path d="M445,129.999A27.0005,27.0005,0,0,0,418,103H93.9956A26.9968,26.9968,0,0,0,67,129.999V345.1H445ZM337,225.04a83.0078,83.0078,0,0,1-43.1851,72.8315L256,318.5508l-37.8193-20.68A83.0124,83.0124,0,0,1,175,225.04V164.3884l81-25.8376,81,25.8376Z" />
              <path d="M221.1162,225.27a9.894,9.894,0,1,0-13.9922,13.9922l25.4444,25.4443a9.8984,9.8984,0,0,0,14.0009,0l58.3155-58.3242a9.9,9.9,0,1,0-14.01-13.9922l-51.31,51.3193Z" />
            </svg>
          </div>
          <p className={styles.description}>
            Safeguard your visitors and transactions with an SSL certificate.
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <svg
              height="800px"
              width="800px"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve">
              <g>
                <path
                  d="M510.746,110.361c-2.128-10.754-6.926-20.918-13.926-29.463c-1.422-1.794-2.909-3.39-4.535-5.009
		c-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951,0-34.834,7-47.539,19.708c-1.608,1.604-3.099,3.216-4.575,5.067
		c-6.97,8.509-11.747,18.659-13.824,29.428C0.438,114.62,0,119.002,0,123.435v265.137c0,9.224,1.874,18.206,5.589,26.745
		c3.215,7.583,8.093,14.772,14.112,20.788c1.516,1.509,3.022,2.901,4.63,4.258c12.034,9.966,27.272,15.45,42.913,15.45h377.51
		c15.742,0,30.965-5.505,42.967-15.56c1.604-1.298,3.091-2.661,4.578-4.148c5.818-5.812,10.442-12.49,13.766-19.854l0.438-1.05
		c3.646-8.377,5.497-17.33,5.497-26.628V123.435C512,119.06,511.578,114.649,510.746,110.361z M34.823,99.104
		c0.951-1.392,2.165-2.821,3.714-4.382c7.689-7.685,17.886-11.914,28.706-11.914h377.51c10.915,0,21.115,4.236,28.719,11.929
		c1.313,1.327,2.567,2.8,3.661,4.272l2.887,3.88l-201.5,175.616c-6.212,5.446-14.21,8.443-22.523,8.443
		c-8.231,0-16.222-2.99-22.508-8.436L32.19,102.939L34.823,99.104z M26.755,390.913c-0.109-0.722-0.134-1.524-0.134-2.341V128.925
		l156.37,136.411L28.199,400.297L26.755,390.913z M464.899,423.84c-6.052,3.492-13.022,5.344-20.145,5.344H67.244
		c-7.127,0-14.094-1.852-20.142-5.344l-6.328-3.668l159.936-139.379l17.528,15.246c10.514,9.128,23.922,14.16,37.761,14.16
		c13.89,0,27.32-5.032,37.827-14.16l17.521-15.253L471.228,420.18L464.899,423.84z M485.372,388.572
		c0,0.803-0.015,1.597-0.116,2.304l-1.386,9.472L329.012,265.409l156.36-136.418V388.572z"
                />
              </g>
            </svg>
          </div>
          <p className={styles.description}>
            Build trust with personalized email addresses for your business.
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg">
              <g fill-rule="evenodd" clip-rule="evenodd" stroke="none" stroke-width="1">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M746.667 106.667V1493.33H1173.33V106.667H746.667ZM1056 224H864V1376H1056V224ZM106.667 533.333H533.333V1493.33H106.667V533.333ZM224 650.667H416V1376H224V650.667Z"
                />
                <path d="M1920 1706.67H0V1824H1920V1706.67Z" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1386.67 746.667H1813.33V1493.33H1386.67V746.667ZM1504 864H1696V1376H1504V864Z"
                />
              </g>
            </svg>
          </div>
          <p className={styles.description}>
            Understand your audience better with integrated analytics.
          </p>
        </div>
      </div>

      {/* <Link className={styles.link} href="/stands-with-ukraine" passHref>
        <span>More</span>
        <svg
          width="40"
          height="30"
          viewBox="0 0 40 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M25 30L21.5 26.375L30.375 17.5H0V12.5H30.375L21.5 3.625L25 0L40 15L25 30Z"
            fill="white"
          />
        </svg>
      </Link> */}
    </div>
  );
};

export default React.memo(Banner);
