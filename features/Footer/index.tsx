import FooterLinks from 'components/FooterLinks';
import Link from 'next/link';
import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <Link href="/" className={styles.logo}>
            <svg
              className={styles.logo}
              width="289"
              height="87"
              viewBox="0 0 289 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.6211 63.9595C15.4993 63.0917 15.4993 62.166 15.6211 61.1824C18.6661 60.8931 20.8281 60.6328 22.107 60.4014C23.3859 60.1121 24.1776 59.5335 24.4821 58.6657C24.7866 57.7979 24.9389 56.3225 24.9389 54.2397V6.8559H18.3616C15.1339 6.8559 12.576 7.28982 10.6881 8.15765C8.86106 8.96764 7.369 10.2115 6.21188 11.8893C5.11567 13.5672 4.01945 15.7078 2.92324 18.3113C1.94882 18.427 0.974413 18.427 0 18.3113C0.365405 15.5343 0.700359 12.8729 1.00486 10.3272C1.37027 7.78159 1.67477 5.32273 1.91837 2.95064C5.87693 3.18206 10.2618 3.3267 15.0729 3.38456C19.8841 3.38456 24.878 3.38456 30.0543 3.38456C35.2918 3.38456 40.3161 3.38456 45.1273 3.38456C49.9993 3.3267 54.3842 3.18206 58.2818 2.95064C58.5254 5.26487 58.769 7.72374 59.0126 10.3272C59.2562 12.8729 59.5607 15.5343 59.9262 18.3113C58.8908 18.427 57.886 18.427 56.9116 18.3113C55.7545 15.65 54.5973 13.4804 53.4402 11.8026C52.2831 10.1248 50.791 8.88085 48.964 8.07087C47.1979 7.26089 44.701 6.8559 41.4732 6.8559H34.9873V53.1115C34.9873 54.9051 35.0482 56.3225 35.17 57.3639C35.2918 58.4053 35.6267 59.1575 36.1748 59.6203C36.7839 60.0832 37.7278 60.4303 39.0067 60.6617C40.2856 60.8353 42.0518 61.0089 44.3051 61.1824C44.4878 62.1081 44.4878 63.0338 44.3051 63.9595C43.0262 63.9595 41.4732 63.9306 39.6462 63.8727C37.8801 63.8727 36.1139 63.8727 34.3478 63.8727C32.5817 63.8149 31.0896 63.7859 29.8716 63.7859C28.7145 63.7859 27.2531 63.8149 25.487 63.8727C23.7818 63.8727 22.0156 63.8727 20.1886 63.8727C18.4225 63.9306 16.9 63.9595 15.6211 63.9595ZM58.0184 63.9595C57.8357 63.0338 57.8357 62.137 58.0184 61.2692C60.0891 61.1535 61.6116 60.9799 62.586 60.7485C63.5604 60.4592 64.1999 59.8807 64.5044 59.0128C64.8089 58.145 64.9611 56.7565 64.9611 54.8472V35.4077C64.9611 33.1513 64.8393 31.4735 64.5957 30.3743C64.413 29.275 63.8345 28.5229 62.8601 28.1179C61.9465 27.655 60.3631 27.279 58.1098 26.9897C57.9271 26.1797 57.9271 25.4276 58.1098 24.7333C60.5458 24.2705 62.921 23.7498 65.2352 23.1712C67.5494 22.5348 69.9854 21.7248 72.5433 20.7413L74.0963 21.262V28.8989C78.3593 23.7498 82.7137 21.1752 87.1595 21.1752C89.291 21.1752 90.8744 21.7248 91.9097 22.8241C92.945 23.8655 93.4627 25.0515 93.4627 26.3822C93.4627 27.9443 92.9146 29.1593 91.8184 30.0271C90.7222 30.8371 89.4737 31.2421 88.073 31.2421C86.9159 31.2421 85.7588 30.9528 84.6016 30.3743C83.5054 29.7957 82.6833 28.8989 82.1352 27.684C80.0645 27.684 78.2071 28.465 76.5627 30.0271C74.9793 31.5314 74.1876 33.296 74.1876 35.3209V53.9794C74.1876 56.2358 74.3094 57.8557 74.553 58.8393C74.8575 59.8228 75.5883 60.4592 76.7454 60.7485C77.9634 60.9799 79.9123 61.1535 82.5919 61.2692C82.7137 62.0792 82.7137 62.976 82.5919 63.9595C80.5213 63.9595 78.3898 63.9306 76.1973 63.8727C74.0049 63.8149 71.7516 63.7859 69.4373 63.7859C67.184 63.7859 65.1743 63.8149 63.4082 63.8727C61.7029 63.9306 59.9064 63.9595 58.0184 63.9595ZM118.325 63.9595C116.619 63.9595 114.853 63.9306 113.026 63.8727C111.199 63.8149 109.22 63.7859 107.089 63.7859C105.14 63.7859 103.16 63.8149 101.151 63.8727C99.2018 63.9306 97.3139 63.9595 95.4869 63.9595C95.3042 63.0338 95.3042 62.137 95.4869 61.2692C97.5575 61.1535 99.08 60.9799 100.054 60.7485C101.029 60.4592 101.668 59.8807 101.973 59.0128C102.277 58.145 102.43 56.7565 102.43 54.8472V35.4077C102.43 33.1513 102.338 31.4735 102.156 30.3743C101.973 29.275 101.394 28.5229 100.42 28.1179C99.5064 27.655 97.8925 27.279 95.5783 26.9897C95.3956 26.1797 95.3956 25.4276 95.5783 24.7333C98.2579 24.2705 100.816 23.6919 103.252 22.9976C105.688 22.3034 108.032 21.5513 110.286 20.7413L111.839 21.262C111.778 23.0555 111.717 24.7333 111.656 26.2954C111.656 27.8575 111.656 29.3329 111.656 30.7214V53.9794C111.656 56.2358 111.778 57.8557 112.021 58.8393C112.326 59.8228 112.935 60.4592 113.848 60.7485C114.823 60.9799 116.315 61.1535 118.325 61.2692C118.507 62.137 118.507 63.0338 118.325 63.9595ZM100.054 5.98806C100.054 4.31025 100.663 2.89278 101.881 1.73567C103.16 0.578556 104.683 0 106.449 0C108.154 0 109.616 0.578556 110.834 1.73567C112.113 2.89278 112.752 4.28132 112.752 5.90128C112.752 7.40553 112.143 8.79407 110.925 10.0669C109.707 11.2819 108.154 11.8893 106.266 11.8893C104.561 11.8893 103.099 11.3108 101.881 10.1537C100.663 8.99656 100.054 7.60802 100.054 5.98806ZM178.146 63.9595C177.963 63.0338 177.963 62.137 178.146 61.2692C179.973 61.1535 181.343 60.9799 182.257 60.7485C183.17 60.4592 183.779 59.8807 184.084 59.0128C184.449 58.145 184.632 56.7565 184.632 54.8472V37.3169C184.632 33.9035 184.084 31.3289 182.988 29.5932C181.952 27.8575 179.79 26.9897 176.502 26.9897C172.421 26.9897 168.95 28.4361 166.088 31.3289C166.209 32.2546 166.27 33.2381 166.27 34.2795V53.9794C166.27 56.2358 166.392 57.8557 166.636 58.8393C166.94 59.8228 167.549 60.4592 168.463 60.7485C169.376 60.9799 170.777 61.1535 172.665 61.2692C172.787 62.137 172.787 63.0338 172.665 63.9595C170.96 63.9595 169.255 63.9306 167.549 63.8727C165.844 63.8149 163.834 63.7859 161.52 63.7859C159.267 63.7859 157.288 63.8149 155.582 63.8727C153.938 63.9306 152.355 63.9595 150.832 63.9595C150.649 63.0338 150.649 62.137 150.832 61.2692C152.598 61.1535 153.908 60.9799 154.76 60.7485C155.674 60.4592 156.283 59.8807 156.587 59.0128C156.892 58.145 157.044 56.7565 157.044 54.8472V37.3169C157.044 33.9035 156.526 31.3289 155.491 29.5932C154.456 27.8575 152.263 26.9897 148.914 26.9897C145.077 26.9897 141.727 28.465 138.865 31.4157V53.9794C138.865 56.2358 138.987 57.8557 139.23 58.8393C139.535 59.8228 140.144 60.4592 141.057 60.7485C142.032 60.9799 143.493 61.1535 145.442 61.2692C145.564 62.137 145.564 63.0338 145.442 63.9595C143.737 63.9595 141.971 63.9306 140.144 63.8727C138.378 63.8149 136.338 63.7859 134.023 63.7859C131.831 63.7859 129.852 63.8149 128.086 63.8727C126.319 63.9306 124.523 63.9595 122.696 63.9595C122.513 63.0338 122.513 62.137 122.696 61.2692C124.766 61.1535 126.289 60.9799 127.263 60.7485C128.238 60.4592 128.877 59.8807 129.182 59.0128C129.486 58.145 129.639 56.7565 129.639 54.8472V35.4077C129.639 33.1513 129.517 31.4735 129.273 30.3743C129.09 29.275 128.512 28.5229 127.537 28.1179C126.624 27.655 125.041 27.279 122.787 26.9897C122.605 26.1797 122.605 25.4276 122.787 24.7333C125.345 24.2705 127.812 23.7208 130.187 23.0844C132.562 22.448 134.906 21.667 137.221 20.7413L138.774 21.262V27.684C143.707 23.3448 148.853 21.1752 154.212 21.1752C157.562 21.1752 160.089 21.8405 161.794 23.1712C163.499 24.5019 164.687 26.1508 165.357 28.1179C167.976 25.7458 170.655 24.0101 173.396 22.9109C176.136 21.7537 178.907 21.1752 181.709 21.1752C185.728 21.1752 188.743 22.3034 190.752 24.5598C192.823 26.8161 193.858 30.056 193.858 34.2795V53.9794C193.858 56.2358 193.98 57.8557 194.224 58.8393C194.467 59.8228 195.046 60.4592 195.96 60.7485C196.873 60.9799 198.274 61.1535 200.162 61.2692C200.344 62.137 200.344 63.0338 200.162 63.9595C198.456 63.9595 196.751 63.9306 195.046 63.8727C193.341 63.8149 191.362 63.7859 189.108 63.7859C186.794 63.7859 184.754 63.8149 182.988 63.8727C181.282 63.9306 179.669 63.9595 178.146 63.9595ZM208.793 50.1609C209.706 53.9794 211.168 56.9011 213.178 58.926C215.187 60.8931 217.776 61.8767 220.943 61.8767C223.318 61.8767 225.327 61.356 226.972 60.3146C228.616 59.2153 229.438 57.5086 229.438 55.1944C229.438 53.4587 228.981 52.0701 228.068 51.0287C227.215 49.9873 225.997 49.1195 224.414 48.4252C222.891 47.6731 221.156 46.921 219.207 46.1689C216.954 45.301 214.822 44.3753 212.812 43.3918C210.863 42.3504 209.25 41.0776 207.971 39.5733C206.753 38.0112 206.144 36.0152 206.144 33.5852C206.144 30.8082 206.905 28.5229 208.427 26.7293C210.011 24.878 212.021 23.4894 214.457 22.5637C216.954 21.638 219.603 21.1752 222.404 21.1752C223.805 21.1752 225.206 21.262 226.606 21.4355C228.007 21.6091 228.768 21.6959 228.89 21.6959C230.108 21.8695 231.235 21.9852 232.27 22.043C233.305 22.043 233.854 22.043 233.914 22.043C233.975 22.043 234.097 22.043 234.28 22.043C234.523 22.043 234.828 22.0141 235.193 21.9562C235.193 23.8076 235.224 25.6879 235.285 27.5972C235.346 29.5064 235.467 31.5314 235.65 33.672C235.589 33.672 235.467 33.672 235.285 33.672C234.737 33.7299 234.219 33.7877 233.732 33.8456C233.305 33.8456 232.879 33.8167 232.453 33.7588C231.661 30.5189 230.474 28.1757 228.89 26.7293C227.368 25.2251 225.206 24.473 222.404 24.473C219.907 24.473 217.897 24.9937 216.375 26.0351C214.913 27.0765 214.183 28.5229 214.183 30.3743C214.183 31.8785 214.67 33.1224 215.644 34.1059C216.619 35.0316 217.806 35.8127 219.207 36.4491C220.608 37.0855 221.947 37.6351 223.226 38.098C225.601 38.9658 227.855 39.9494 229.986 41.0486C232.179 42.09 233.945 43.4496 235.285 45.1275C236.685 46.8053 237.386 49.0616 237.386 51.8966C237.386 54.9051 236.564 57.3929 234.919 59.36C233.336 61.2692 231.296 62.6867 228.799 63.6124C226.302 64.4802 223.683 64.9141 220.943 64.9141C219.359 64.9141 217.776 64.7984 216.192 64.567C214.67 64.3356 213.848 64.2198 213.726 64.2198C213.604 64.2198 213.086 64.162 212.173 64.0463C211.32 63.9306 210.346 63.8149 209.25 63.6991C208.214 63.5834 207.301 63.5256 206.509 63.5256C206.509 61.732 206.418 59.736 206.235 57.5375C206.113 55.339 205.961 52.9091 205.778 50.2477C205.9 50.2477 206.052 50.2477 206.235 50.2477C206.783 50.1898 207.24 50.1609 207.605 50.1609C208.032 50.1031 208.427 50.1031 208.793 50.1609ZM249.429 86.0025C247.785 86.0025 246.506 85.5397 245.592 84.614C244.74 83.7462 244.313 82.7048 244.313 81.4898C244.313 79.8698 245.227 78.2788 247.054 76.7167C248.881 75.2124 251.865 74.4603 256.006 74.4603C256.798 73.1296 257.559 71.6832 258.29 70.1211C259.082 68.6169 259.995 66.7366 261.03 64.4802C260.361 62.8602 259.508 60.7774 258.473 58.2318C257.437 55.6861 256.25 52.8801 254.91 49.8138C253.631 46.6896 252.322 43.4786 250.982 40.1808C249.642 36.8252 248.333 33.5852 247.054 30.461C246.323 28.6097 245.501 27.3368 244.587 26.6426C243.735 25.9483 242.06 25.4854 239.563 25.254C239.38 24.444 239.38 23.5473 239.563 22.5637C241.329 22.5637 243.126 22.5927 244.953 22.6505C246.78 22.7084 248.668 22.7373 250.616 22.7373C252.383 22.7373 254.301 22.7084 256.372 22.6505C258.442 22.5927 260.208 22.5637 261.67 22.5637C261.792 23.4316 261.792 24.3283 261.67 25.254C259.599 25.3697 258.138 25.5722 257.285 25.8615C256.493 26.1508 256.098 26.7293 256.098 27.5972C256.098 28.4072 256.402 29.6511 257.011 31.3289C258.594 35.4366 260.117 39.2262 261.579 42.6975C263.101 46.1689 264.624 49.727 266.146 53.3719C268.095 49.1484 269.8 45.3589 271.262 42.0033C272.784 38.6476 274.307 35.1474 275.829 31.5024C276.499 29.8246 276.834 28.5807 276.834 27.7707C276.834 26.9608 276.377 26.3822 275.464 26.0351C274.55 25.6879 272.937 25.4276 270.622 25.254C270.44 24.3283 270.44 23.4316 270.622 22.5637C272.145 22.5637 273.698 22.5927 275.281 22.6505C276.926 22.7084 278.661 22.7373 280.488 22.7373C281.706 22.7373 283.016 22.7084 284.416 22.6505C285.878 22.5927 287.187 22.5637 288.345 22.5637C288.527 23.4316 288.527 24.3283 288.345 25.254C285.787 25.4276 284.051 25.9772 283.137 26.9029C282.224 27.7707 281.371 29.1014 280.58 30.895L264.959 65.5216C264.654 66.2159 264.106 67.373 263.314 68.9929C262.523 70.6708 261.67 72.3775 260.756 74.1132C259.904 75.9067 259.173 77.382 258.564 78.5391C257.041 81.3741 255.549 83.3122 254.088 84.3536C252.626 85.4529 251.073 86.0025 249.429 86.0025Z"
                fill="black"
              />
            </svg>

            {/* <svg
            width="50"
            height="20"
            viewBox="0 0 50 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.31123 13.012C8.29523 12.892 8.29523 12.764 8.31123 12.628C8.71123 12.588 8.99523 12.552 9.16323 12.52C9.33123 12.48 9.43523 12.4 9.47523 12.28C9.51523 12.16 9.53523 11.956 9.53523 11.668V5.116H8.67123C8.24723 5.116 7.91123 5.176 7.66323 5.296C7.42323 5.408 7.22723 5.58 7.07523 5.812C6.93123 6.044 6.78723 6.34 6.64323 6.7C6.51523 6.716 6.38723 6.716 6.25923 6.7C6.30723 6.316 6.35123 5.948 6.39123 5.596C6.43923 5.244 6.47923 4.904 6.51123 4.576C7.03123 4.608 7.60723 4.628 8.23923 4.636C8.87123 4.636 9.52723 4.636 10.2072 4.636C10.8952 4.636 11.5552 4.636 12.1872 4.636C12.8272 4.628 13.4032 4.608 13.9152 4.576C13.9472 4.896 13.9792 5.236 14.0112 5.596C14.0432 5.948 14.0832 6.316 14.1312 6.7C13.9952 6.716 13.8632 6.716 13.7352 6.7C13.5832 6.332 13.4312 6.032 13.2792 5.8C13.1272 5.568 12.9312 5.396 12.6912 5.284C12.4592 5.172 12.1312 5.116 11.7072 5.116H10.8552V11.512C10.8552 11.76 10.8632 11.956 10.8792 12.1C10.8952 12.244 10.9392 12.348 11.0112 12.412C11.0912 12.476 11.2152 12.524 11.3832 12.556C11.5512 12.58 11.7832 12.604 12.0792 12.628C12.1032 12.756 12.1032 12.884 12.0792 13.012C11.9112 13.012 11.7072 13.008 11.4672 13C11.2352 13 11.0032 13 10.7712 13C10.5392 12.992 10.3432 12.988 10.1832 12.988C10.0312 12.988 9.83923 12.992 9.60723 13C9.38323 13 9.15123 13 8.91123 13C8.67923 13.008 8.47923 13.012 8.31123 13.012ZM13.8806 13.012C13.8566 12.884 13.8566 12.76 13.8806 12.64C14.1526 12.624 14.3526 12.6 14.4806 12.568C14.6086 12.528 14.6926 12.448 14.7326 12.328C14.7726 12.208 14.7926 12.016 14.7926 11.752V9.064C14.7926 8.752 14.7766 8.52 14.7446 8.368C14.7206 8.216 14.6446 8.112 14.5166 8.056C14.3966 7.992 14.1886 7.94 13.8926 7.9C13.8686 7.788 13.8686 7.684 13.8926 7.588C14.2126 7.524 14.5246 7.452 14.8286 7.372C15.1326 7.284 15.4526 7.172 15.7886 7.036L15.9926 7.108V8.164C16.5526 7.452 17.1246 7.096 17.7086 7.096C17.9886 7.096 18.1966 7.172 18.3326 7.324C18.4686 7.468 18.5366 7.632 18.5366 7.816C18.5366 8.032 18.4646 8.2 18.3206 8.32C18.1766 8.432 18.0126 8.488 17.8286 8.488C17.6766 8.488 17.5246 8.448 17.3726 8.368C17.2286 8.288 17.1206 8.164 17.0486 7.996C16.7766 7.996 16.5326 8.104 16.3166 8.32C16.1086 8.528 16.0046 8.772 16.0046 9.052V11.632C16.0046 11.944 16.0206 12.168 16.0526 12.304C16.0926 12.44 16.1886 12.528 16.3406 12.568C16.5006 12.6 16.7566 12.624 17.1086 12.64C17.1246 12.752 17.1246 12.876 17.1086 13.012C16.8366 13.012 16.5566 13.008 16.2686 13C15.9806 12.992 15.6846 12.988 15.3806 12.988C15.0846 12.988 14.8206 12.992 14.5886 13C14.3646 13.008 14.1286 13.012 13.8806 13.012ZM21.8025 13.012C21.5785 13.012 21.3465 13.008 21.1065 13C20.8665 12.992 20.6065 12.988 20.3265 12.988C20.0705 12.988 19.8105 12.992 19.5465 13C19.2905 13.008 19.0425 13.012 18.8025 13.012C18.7785 12.884 18.7785 12.76 18.8025 12.64C19.0745 12.624 19.2745 12.6 19.4025 12.568C19.5305 12.528 19.6145 12.448 19.6545 12.328C19.6945 12.208 19.7145 12.016 19.7145 11.752V9.064C19.7145 8.752 19.7025 8.52 19.6785 8.368C19.6545 8.216 19.5785 8.112 19.4505 8.056C19.3305 7.992 19.1185 7.94 18.8145 7.9C18.7905 7.788 18.7905 7.684 18.8145 7.588C19.1665 7.524 19.5025 7.444 19.8225 7.348C20.1425 7.252 20.4505 7.148 20.7465 7.036L20.9505 7.108C20.9425 7.356 20.9345 7.588 20.9265 7.804C20.9265 8.02 20.9265 8.224 20.9265 8.416V11.632C20.9265 11.944 20.9425 12.168 20.9745 12.304C21.0145 12.44 21.0945 12.528 21.2145 12.568C21.3425 12.6 21.5385 12.624 21.8025 12.64C21.8265 12.76 21.8265 12.884 21.8025 13.012ZM19.4025 4.996C19.4025 4.764 19.4825 4.568 19.6425 4.408C19.8105 4.248 20.0105 4.168 20.2425 4.168C20.4665 4.168 20.6585 4.248 20.8185 4.408C20.9865 4.568 21.0705 4.76 21.0705 4.984C21.0705 5.192 20.9905 5.384 20.8305 5.56C20.6705 5.728 20.4665 5.812 20.2185 5.812C19.9945 5.812 19.8025 5.732 19.6425 5.572C19.4825 5.412 19.4025 5.22 19.4025 4.996ZM29.6607 13.012C29.6367 12.884 29.6367 12.76 29.6607 12.64C29.9007 12.624 30.0807 12.6 30.2007 12.568C30.3207 12.528 30.4007 12.448 30.4407 12.328C30.4887 12.208 30.5127 12.016 30.5127 11.752V9.328C30.5127 8.856 30.4407 8.5 30.2967 8.26C30.1607 8.02 29.8767 7.9 29.4447 7.9C28.9087 7.9 28.4527 8.1 28.0767 8.5C28.0927 8.628 28.1007 8.764 28.1007 8.908V11.632C28.1007 11.944 28.1167 12.168 28.1487 12.304C28.1887 12.44 28.2687 12.528 28.3887 12.568C28.5087 12.6 28.6927 12.624 28.9407 12.64C28.9567 12.76 28.9567 12.884 28.9407 13.012C28.7167 13.012 28.4927 13.008 28.2687 13C28.0447 12.992 27.7807 12.988 27.4767 12.988C27.1807 12.988 26.9207 12.992 26.6967 13C26.4807 13.008 26.2727 13.012 26.0727 13.012C26.0487 12.884 26.0487 12.76 26.0727 12.64C26.3047 12.624 26.4767 12.6 26.5887 12.568C26.7087 12.528 26.7887 12.448 26.8287 12.328C26.8687 12.208 26.8887 12.016 26.8887 11.752V9.328C26.8887 8.856 26.8207 8.5 26.6847 8.26C26.5487 8.02 26.2607 7.9 25.8207 7.9C25.3167 7.9 24.8767 8.104 24.5007 8.512V11.632C24.5007 11.944 24.5167 12.168 24.5487 12.304C24.5887 12.44 24.6687 12.528 24.7887 12.568C24.9167 12.6 25.1087 12.624 25.3647 12.64C25.3807 12.76 25.3807 12.884 25.3647 13.012C25.1407 13.012 24.9087 13.008 24.6687 13C24.4367 12.992 24.1687 12.988 23.8647 12.988C23.5767 12.988 23.3167 12.992 23.0847 13C22.8527 13.008 22.6167 13.012 22.3767 13.012C22.3527 12.884 22.3527 12.76 22.3767 12.64C22.6487 12.624 22.8487 12.6 22.9767 12.568C23.1047 12.528 23.1887 12.448 23.2287 12.328C23.2687 12.208 23.2887 12.016 23.2887 11.752V9.064C23.2887 8.752 23.2727 8.52 23.2407 8.368C23.2167 8.216 23.1407 8.112 23.0127 8.056C22.8927 7.992 22.6847 7.94 22.3887 7.9C22.3647 7.788 22.3647 7.684 22.3887 7.588C22.7247 7.524 23.0487 7.448 23.3607 7.36C23.6727 7.272 23.9807 7.164 24.2847 7.036L24.4887 7.108V7.996C25.1367 7.396 25.8127 7.096 26.5167 7.096C26.9567 7.096 27.2887 7.188 27.5127 7.372C27.7367 7.556 27.8927 7.784 27.9807 8.056C28.3247 7.728 28.6767 7.488 29.0367 7.336C29.3967 7.176 29.7607 7.096 30.1287 7.096C30.6567 7.096 31.0527 7.252 31.3167 7.564C31.5887 7.876 31.7247 8.324 31.7247 8.908V11.632C31.7247 11.944 31.7407 12.168 31.7727 12.304C31.8047 12.44 31.8807 12.528 32.0007 12.568C32.1207 12.6 32.3047 12.624 32.5527 12.64C32.5767 12.76 32.5767 12.884 32.5527 13.012C32.3287 13.012 32.1047 13.008 31.8807 13C31.6567 12.992 31.3967 12.988 31.1007 12.988C30.7967 12.988 30.5287 12.992 30.2967 13C30.0727 13.008 29.8607 13.012 29.6607 13.012ZM33.6865 11.104C33.8065 11.632 33.9985 12.036 34.2625 12.316C34.5265 12.588 34.8665 12.724 35.2825 12.724C35.5945 12.724 35.8585 12.652 36.0745 12.508C36.2905 12.356 36.3985 12.12 36.3985 11.8C36.3985 11.56 36.3385 11.368 36.2185 11.224C36.1065 11.08 35.9465 10.96 35.7385 10.864C35.5385 10.76 35.3105 10.656 35.0545 10.552C34.7585 10.432 34.4785 10.304 34.2145 10.168C33.9585 10.024 33.7465 9.848 33.5785 9.64C33.4185 9.424 33.3385 9.148 33.3385 8.812C33.3385 8.428 33.4385 8.112 33.6385 7.864C33.8465 7.608 34.1105 7.416 34.4305 7.288C34.7585 7.16 35.1065 7.096 35.4745 7.096C35.6585 7.096 35.8425 7.108 36.0265 7.132C36.2105 7.156 36.3105 7.168 36.3265 7.168C36.4865 7.192 36.6345 7.208 36.7705 7.216C36.9065 7.216 36.9785 7.216 36.9865 7.216C36.9945 7.216 37.0105 7.216 37.0345 7.216C37.0665 7.216 37.1065 7.212 37.1545 7.204C37.1545 7.46 37.1585 7.72 37.1665 7.984C37.1745 8.248 37.1905 8.528 37.2145 8.824C37.2065 8.824 37.1905 8.824 37.1665 8.824C37.0945 8.832 37.0265 8.84 36.9625 8.848C36.9065 8.848 36.8505 8.844 36.7945 8.836C36.6905 8.388 36.5345 8.064 36.3265 7.864C36.1265 7.656 35.8425 7.552 35.4745 7.552C35.1465 7.552 34.8825 7.624 34.6825 7.768C34.4905 7.912 34.3945 8.112 34.3945 8.368C34.3945 8.576 34.4585 8.748 34.5865 8.884C34.7145 9.012 34.8705 9.12 35.0545 9.208C35.2385 9.296 35.4145 9.372 35.5825 9.436C35.8945 9.556 36.1905 9.692 36.4705 9.844C36.7585 9.988 36.9905 10.176 37.1665 10.408C37.3505 10.64 37.4425 10.952 37.4425 11.344C37.4425 11.76 37.3345 12.104 37.1185 12.376C36.9105 12.64 36.6425 12.836 36.3145 12.964C35.9865 13.084 35.6425 13.144 35.2825 13.144C35.0745 13.144 34.8665 13.128 34.6585 13.096C34.4585 13.064 34.3505 13.048 34.3345 13.048C34.3185 13.048 34.2505 13.04 34.1305 13.024C34.0185 13.008 33.8905 12.992 33.7465 12.976C33.6105 12.96 33.4905 12.952 33.3865 12.952C33.3865 12.704 33.3745 12.428 33.3505 12.124C33.3345 11.82 33.3145 11.484 33.2905 11.116C33.3065 11.116 33.3265 11.116 33.3505 11.116C33.4225 11.108 33.4825 11.104 33.5305 11.104C33.5865 11.096 33.6385 11.096 33.6865 11.104ZM39.0245 16.06C38.8085 16.06 38.6405 15.996 38.5205 15.868C38.4085 15.748 38.3525 15.604 38.3525 15.436C38.3525 15.212 38.4725 14.992 38.7125 14.776C38.9525 14.568 39.3445 14.464 39.8885 14.464C39.9925 14.28 40.0925 14.08 40.1885 13.864C40.2925 13.656 40.4125 13.396 40.5485 13.084C40.4605 12.86 40.3485 12.572 40.2125 12.22C40.0765 11.868 39.9205 11.48 39.7445 11.056C39.5765 10.624 39.4045 10.18 39.2285 9.724C39.0525 9.26 38.8805 8.812 38.7125 8.38C38.6165 8.124 38.5085 7.948 38.3885 7.852C38.2765 7.756 38.0565 7.692 37.7285 7.66C37.7045 7.548 37.7045 7.424 37.7285 7.288C37.9605 7.288 38.1965 7.292 38.4365 7.3C38.6765 7.308 38.9245 7.312 39.1805 7.312C39.4125 7.312 39.6645 7.308 39.9365 7.3C40.2085 7.292 40.4405 7.288 40.6325 7.288C40.6485 7.408 40.6485 7.532 40.6325 7.66C40.3605 7.676 40.1685 7.704 40.0565 7.744C39.9525 7.784 39.9005 7.864 39.9005 7.984C39.9005 8.096 39.9405 8.268 40.0205 8.5C40.2285 9.068 40.4285 9.592 40.6205 10.072C40.8205 10.552 41.0205 11.044 41.2205 11.548C41.4765 10.964 41.7005 10.44 41.8925 9.976C42.0925 9.512 42.2925 9.028 42.4925 8.524C42.5805 8.292 42.6245 8.12 42.6245 8.008C42.6245 7.896 42.5645 7.816 42.4445 7.768C42.3245 7.72 42.1125 7.684 41.8085 7.66C41.7845 7.532 41.7845 7.408 41.8085 7.288C42.0085 7.288 42.2125 7.292 42.4205 7.3C42.6365 7.308 42.8645 7.312 43.1045 7.312C43.2645 7.312 43.4365 7.308 43.6205 7.3C43.8125 7.292 43.9845 7.288 44.1365 7.288C44.1605 7.408 44.1605 7.532 44.1365 7.66C43.8005 7.684 43.5725 7.76 43.4525 7.888C43.3325 8.008 43.2205 8.192 43.1165 8.44L41.0645 13.228C41.0245 13.324 40.9525 13.484 40.8485 13.708C40.7445 13.94 40.6325 14.176 40.5125 14.416C40.4005 14.664 40.3045 14.868 40.2245 15.028C40.0245 15.42 39.8285 15.688 39.6365 15.832C39.4445 15.984 39.2405 16.06 39.0245 16.06Z"
              fill="black"
            />
          </svg> */}
          </Link>

          <ul className={styles.nav}>
            <li className={styles.item}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={styles.item}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.item}>
              <Link href="/blog">Contact Trimsy</Link>
            </li>
          </ul>
        </div>
        <div className={styles.rightSide}>
          <FooterLinks />
        </div>
      </div>
      <div className={styles.notice}>
        <ul className={styles.links}>
          {/* <li>
            <Link href="#">Legal</Link>
          </li> */}
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-of-use">Terms of Use</Link>
          </li>
        </ul>
        <p className={styles.copyright}>Copyright © 2023 Trimsy inc. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
