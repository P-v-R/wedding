import React from "react";
import { Parallax } from "react-scroll-parallax";

function DressCode() {
  return (
    <div className="bg-lightPink py-24">
      <div className="w-screen absolute hidden md:block">
        <svg
          className="ml-auto w-1/2 2xl:hidden opacity-40 -mt-20 -z-10"
          viewBox="0 0 42 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.531 12.5784C17.289 13.2164 16.884 14.6344 17.453 15.8964C17.885 16.8584 18.802 17.5604 20.181 17.9864C20.08 16.1954 19.41 14.4804 17.531 12.5784ZM20.635 19.9584L20.107 19.8964C20.161 19.4374 20.193 18.9874 20.195 18.5444C18.569 18.0784 17.483 17.2614 16.967 16.1114C16.105 14.1934 17.157 12.0844 17.203 11.9954L17.365 11.6754L17.624 11.9244C20.74 14.9234 20.913 17.5574 20.635 19.9584ZM21.1902 22.2659C19.7312 22.2659 18.6152 21.6199 18.5452 21.5789L18.8162 21.1209C18.8382 21.1339 21.1622 22.4709 23.3522 21.1229L23.6302 21.5759C22.7912 22.0929 21.9442 22.2659 21.1902 22.2659Z"
            fill="#fffcec"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.7293 28.6536C6.6743 25.8476 7.6583 23.6246 8.4913 22.2536C9.4883 20.6146 10.8453 19.2706 12.1223 18.6596C16.1083 16.7496 19.6963 19.0536 20.4363 19.5846C21.4783 19.0816 27.6133 16.3676 31.3173 20.1676L30.9373 20.5386C27.1773 16.6806 20.5993 20.0936 20.5333 20.1296L20.3783 20.2116L20.2423 20.1006C20.2053 20.0716 16.5003 17.1496 12.3513 19.1376C10.2443 20.1476 7.1673 23.8676 7.2603 28.6426L6.7293 28.6536ZM15.6843 41.6223C13.7223 40.3633 12.0533 39.0063 10.7263 37.5873L11.1133 37.2253C12.4123 38.6113 14.0453 39.9403 15.9703 41.1753L15.6843 41.6223Z"
            fill="#fffcec"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.074 40.7128L28.71 40.3268C31.843 37.3668 33.657 33.2618 33.688 29.0638V29.0528C32.722 28.7318 31.587 28.6638 30.469 28.8628C28.247 29.2588 26.239 30.4888 24.298 31.6798C23.897 31.9248 23.499 32.1688 23.101 32.4038C19.615 34.4678 16.017 36.5968 11.691 37.4058C8.482 38.0078 4.196 37.6828 1.788 34.9708C-0.194001 32.7378 -0.561001 29.3338 0.850999 26.2978C1.222 25.4988 1.69 24.8028 2.239 24.2268C4.192 22.1818 7.076 20.8158 9.954 20.5718L9.999 21.1018C7.288 21.3308 4.462 22.6688 2.624 24.5938C2.114 25.1268 1.679 25.7748 1.333 26.5218C0.00999868 29.3658 0.343999 32.5438 2.184 34.6178C4.446 37.1638 8.527 37.4588 11.594 36.8848C15.828 36.0918 19.385 33.9868 22.825 31.9508C23.226 31.7138 23.622 31.4708 24.02 31.2268C26.004 30.0108 28.055 28.7538 30.375 28.3398C31.652 28.1118 32.956 28.2098 34.045 28.6148L34.216 28.6788L34.22 29.0628C34.187 33.4098 32.312 37.6538 29.074 40.7128Z"
            fill="#fffcec"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.5945 40.1162L29.5155 39.5912C33.2075 39.0312 36.8395 36.8392 38.9945 33.8702C41.2195 30.8052 41.2995 26.8852 39.1935 24.1142C37.4155 21.7772 34.3295 20.4362 31.1465 20.6132C28.9915 20.7342 27.0995 21.4212 25.6915 22.0062C23.3355 22.9842 21.1515 24.2762 19.0385 25.5262C16.0145 27.3162 13.1635 29.0042 10.2205 29.5542C9.1395 29.7582 8.1195 29.6722 7.4215 29.3182C6.8755 29.0422 6.5225 28.5462 6.4955 28.2252C6.4805 28.0442 6.5105 27.7832 6.8905 27.3862L7.2745 27.7532C7.1005 27.9352 7.0155 28.0792 7.0255 28.1802C7.0325 28.2792 7.2405 28.6322 7.6605 28.8452C8.2575 29.1462 9.1545 29.2152 10.1215 29.0332C12.9745 28.4992 15.7855 26.8352 18.7615 25.0732C20.8965 23.8102 23.0975 22.5082 25.4885 21.5142C26.9345 20.9142 28.8825 20.2082 31.1165 20.0842C34.4765 19.8962 37.7335 21.3172 39.6155 23.7932C41.8655 26.7512 41.7875 30.9272 39.4245 34.1822C37.1895 37.2622 33.4225 39.5362 29.5945 40.1162Z"
            fill="#fffcec"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3933 48.6054C10.9143 48.6054 8.9403 47.6464 7.9683 45.9154C7.1443 44.4464 7.1243 42.8014 7.9123 41.1604C8.5683 39.7904 9.7703 38.5004 11.2093 37.6234L11.4863 38.0764C7.9123 40.2554 7.2453 43.5384 8.4323 45.6554C9.9803 48.4154 13.6863 48.1264 14.7853 47.9734C16.4503 47.7414 18.0503 47.0994 19.5993 46.4794C21.0543 45.8964 22.5603 45.2924 24.1493 45.0074C26.4693 44.5904 29.6853 44.4464 31.8263 46.1324C32.3813 46.5554 33.1533 46.9264 33.3653 46.7784C33.3893 46.7614 33.5933 46.5844 33.2833 45.5724C32.4603 42.8854 30.7843 41.2534 28.1573 40.5844C24.2193 39.5794 19.7823 39.9604 15.9843 41.6324C15.7433 41.7394 15.4933 41.8664 15.2283 42.0004C14.0023 42.6234 12.4773 43.3974 11.1493 42.1804L11.5073 41.7894C12.5653 42.7574 13.7963 42.1314 14.9883 41.5264C15.2593 41.3884 15.5153 41.2584 15.7703 41.1464C19.6753 39.4284 24.2373 39.0364 28.2883 40.0694C31.0713 40.7794 32.9223 42.5784 33.7903 45.4174C33.9763 46.0224 34.1653 46.8684 33.6683 47.2144C33.0223 47.6644 31.7483 46.7424 31.5003 46.5524C29.5113 44.9864 26.4563 45.1314 24.2433 45.5304C22.7063 45.8064 21.2273 46.3994 19.7963 46.9724C18.2183 47.6044 16.5863 48.2574 14.8593 48.5004C14.3543 48.5704 13.8653 48.6054 13.3933 48.6054Z"
            fill="#fffcec"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.4138 29.8821C15.3118 29.8821 15.2158 29.8231 15.1718 29.7251C15.1108 29.5911 15.1718 29.4341 15.3058 29.3741C16.8098 28.6991 18.5698 27.8751 20.2258 26.8701C20.3508 26.7941 20.5148 26.8341 20.5908 26.9591C20.6668 27.0841 20.6268 27.2481 20.5018 27.3241C18.8208 28.3441 17.0418 29.1781 15.5218 29.8591C15.4868 29.8741 15.4498 29.8821 15.4138 29.8821ZM37.0701 27.8108C36.9301 27.8108 36.8131 27.7018 36.8051 27.5608C36.7781 27.0908 36.5081 26.6108 36.0641 26.2428C35.5961 25.8548 34.9981 25.6268 34.5281 25.4718C34.3881 25.4258 34.3131 25.2758 34.3591 25.1358C34.4051 24.9978 34.5551 24.9218 34.6941 24.9678C35.2091 25.1378 35.8671 25.3888 36.4031 25.8328C36.9601 26.2948 37.2991 26.9138 37.3361 27.5298C37.3441 27.6758 37.2321 27.8018 37.0861 27.8108H37.0701Z"
            fill="#fffcec"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.072 21.0009C34.847 13.7569 32.565 9.61389 31.593 8.16989C29.521 5.08589 26.332 2.80189 22.369 1.56389C18.809 0.452888 14.712 0.229888 10.829 0.933888C10.71 0.964888 9.44099 1.30289 8.58499 1.70989C8.17399 1.90589 7.66099 2.06589 7.16499 2.22189C6.53199 2.41989 5.87699 2.62489 5.52999 2.87889C4.72399 3.46989 4.33499 4.08889 4.45899 4.57689C4.58999 5.08989 5.26999 5.46589 6.32599 5.60689C7.99999 5.83289 9.70899 5.91889 11.406 5.86489C11.465 5.86289 11.652 5.83789 11.85 5.81189C13.467 5.59489 14.404 5.54089 14.725 5.87589C14.824 5.97889 14.864 6.11289 14.839 6.25489C14.704 7.01489 13.591 7.74789 12.777 8.28289C12.582 8.41089 12.414 8.52189 12.297 8.60889L9.04699 11.0309C8.80099 11.2149 8.55099 11.4329 8.56199 11.6579C8.57199 11.8519 8.78599 12.0069 8.98699 12.0449C9.24499 12.0939 9.52699 12.0209 9.81899 11.9349C11.578 11.4169 13.257 10.5239 14.826 9.65489C15.142 9.47989 15.462 9.29389 15.784 9.10589C17.101 8.34189 18.463 7.55089 19.936 7.24889C21.808 6.86689 23.609 7.96189 25.292 10.5039C26.913 12.9529 27.737 15.8709 27.553 18.5119L27.024 18.4749C27.2 15.9489 26.407 13.1499 24.849 10.7969C23.298 8.45289 21.678 7.43489 20.043 7.76989C18.655 8.05289 17.331 8.82189 16.051 9.56589C15.725 9.75489 15.402 9.94189 15.084 10.1189C13.488 11.0029 11.78 11.9109 9.96799 12.4439C9.62699 12.5449 9.25999 12.6379 8.88799 12.5659C8.48099 12.4889 8.05599 12.1619 8.03199 11.6859C8.00399 11.1469 8.49399 10.7809 8.72899 10.6049L11.979 8.18389C12.109 8.08689 12.283 7.97289 12.485 7.83889C13.111 7.42789 14.141 6.74889 14.301 6.22189C14.062 6.11889 13.262 6.15789 11.921 6.33789C11.649 6.37389 11.505 6.39389 11.423 6.39589C9.69599 6.45089 7.95799 6.36289 6.25499 6.13389C4.95499 5.95889 4.13399 5.45189 3.94399 4.70789C3.75999 3.98789 4.21299 3.18689 5.21699 2.45089C5.63399 2.14489 6.30099 1.93589 7.00599 1.71489C7.48399 1.56489 7.97899 1.40989 8.35699 1.22989C9.29799 0.781888 10.648 0.431888 10.706 0.416888L10.724 0.412888C14.692 -0.309112 18.885 -0.0791119 22.527 1.05789C26.606 2.33089 29.894 4.68889 32.035 7.87389C33.031 9.35589 35.374 13.6029 35.602 20.9839L35.072 21.0009Z"
            fill="#fffcec"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.3797 8.46219C7.3477 8.46219 7.3157 8.45619 7.2847 8.44419C5.9547 7.93919 5.0467 5.81119 5.0087 5.72119C4.9517 5.58519 5.0157 5.43019 5.1507 5.37319C5.2847 5.31619 5.4417 5.37919 5.4977 5.51519C5.5047 5.53019 6.0417 6.78719 6.8217 7.51819C6.5977 6.93819 6.3287 6.21019 6.2927 5.94119C6.2737 5.79619 6.3747 5.66219 6.5207 5.64319C6.6657 5.62319 6.7997 5.72519 6.8187 5.87019C6.8587 6.15619 7.3337 7.38719 7.6247 8.09619C7.6647 8.19319 7.6437 8.30619 7.5687 8.38219C7.5187 8.43519 7.4487 8.46219 7.3797 8.46219ZM4.6863 9.73949C4.5403 9.73949 4.4203 9.62049 4.4203 9.47349C4.4203 9.32749 4.5403 9.20849 4.6863 9.20849C7.2883 9.20849 11.9063 7.51049 13.4233 6.95149C13.7523 6.83049 13.9013 6.77549 13.9713 6.75649C14.1133 6.71549 14.2593 6.79749 14.2993 6.93849C14.3393 7.07949 14.2573 7.22649 14.1173 7.26649C14.0623 7.28249 13.8613 7.35549 13.6073 7.44949C12.0673 8.01549 7.3823 9.73949 4.6863 9.73949Z"
            fill="#fffcec"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.50859 10.9866C3.44459 10.9866 3.37959 10.9646 3.32859 10.9176C3.22059 10.8186 3.21359 10.6506 3.31259 10.5426C3.57659 10.2526 3.93359 9.8776 4.18559 9.6126C3.76359 9.4986 3.49859 9.4256 3.33359 9.3806C3.25959 9.3596 3.19159 9.3406 3.13059 9.3206C3.12059 9.3196 3.11059 9.3176 3.10059 9.3146L3.08759 9.3116L3.08859 9.3056C2.92659 9.2446 2.84159 9.1636 2.88959 8.9836C2.91259 8.8956 3.01559 8.7436 3.23559 8.8006C3.24359 8.8036 3.25359 8.8066 3.26259 8.8096C3.35959 8.8376 3.68759 8.9266 4.75559 9.2176C4.84659 9.2426 4.91659 9.3126 4.94259 9.4036C4.96659 9.4936 4.94259 9.5906 4.87659 9.6586C4.86959 9.6656 4.15359 10.4096 3.70359 10.9006C3.65259 10.9586 3.57959 10.9866 3.50859 10.9866ZM19.0388 8.0374C18.9208 8.0374 18.8128 7.9584 18.7818 7.8394C18.7448 7.6964 18.8308 7.5524 18.9728 7.5154C19.9318 7.2664 21.3898 6.6794 21.4728 6.2044C21.4978 6.0594 21.6358 5.9644 21.7798 5.9884C21.9248 6.0144 22.0208 6.1514 21.9958 6.2964C21.8238 7.2794 19.5578 7.9124 19.1048 8.0294C19.0828 8.0354 19.0598 8.0374 19.0388 8.0374ZM16.5359 3.1321C16.4619 3.1321 16.3889 3.1021 16.3359 3.0411C16.2399 2.9311 16.2509 2.7641 16.3609 2.6671C16.4939 2.5501 16.4729 2.4641 16.4339 2.3941C16.3509 2.2451 16.1469 2.1531 16.0699 2.1771C15.5949 2.3201 14.6919 2.8881 14.6819 2.8941C14.5589 2.9721 14.3939 2.9351 14.3159 2.8111C14.2379 2.6871 14.2749 2.5231 14.3989 2.4451C14.4389 2.4191 15.3729 1.8321 15.9179 1.6691C16.2529 1.5681 16.7029 1.7821 16.8989 2.1371C17.0749 2.4551 17.0029 2.8111 16.7109 3.0671C16.6609 3.1111 16.5979 3.1321 16.5359 3.1321Z"
            fill="#fffcec"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6775 2.69459C15.6275 2.69459 15.5765 2.68059 15.5325 2.65159L15.2005 2.43659C15.0775 2.35659 15.0425 2.19259 15.1225 2.06959C15.2025 1.94659 15.3675 1.91159 15.4905 1.99159L15.8225 2.20659C15.9455 2.28659 15.9795 2.45059 15.9005 2.57359C15.8495 2.65259 15.7635 2.69459 15.6775 2.69459Z"
            fill="#fffcec"
          />
        </svg>
      </div>
      <Parallax speed={4}>
        <svg
          className="w-28 mx-auto"
          viewBox="0 0 42 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.531 12.5784C17.289 13.2164 16.884 14.6344 17.453 15.8964C17.885 16.8584 18.802 17.5604 20.181 17.9864C20.08 16.1954 19.41 14.4804 17.531 12.5784ZM20.635 19.9584L20.107 19.8964C20.161 19.4374 20.193 18.9874 20.195 18.5444C18.569 18.0784 17.483 17.2614 16.967 16.1114C16.105 14.1934 17.157 12.0844 17.203 11.9954L17.365 11.6754L17.624 11.9244C20.74 14.9234 20.913 17.5574 20.635 19.9584ZM21.1902 22.2659C19.7312 22.2659 18.6152 21.6199 18.5452 21.5789L18.8162 21.1209C18.8382 21.1339 21.1622 22.4709 23.3522 21.1229L23.6302 21.5759C22.7912 22.0929 21.9442 22.2659 21.1902 22.2659Z"
            fill="#48704f"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.7293 28.6536C6.6743 25.8476 7.6583 23.6246 8.4913 22.2536C9.4883 20.6146 10.8453 19.2706 12.1223 18.6596C16.1083 16.7496 19.6963 19.0536 20.4363 19.5846C21.4783 19.0816 27.6133 16.3676 31.3173 20.1676L30.9373 20.5386C27.1773 16.6806 20.5993 20.0936 20.5333 20.1296L20.3783 20.2116L20.2423 20.1006C20.2053 20.0716 16.5003 17.1496 12.3513 19.1376C10.2443 20.1476 7.1673 23.8676 7.2603 28.6426L6.7293 28.6536ZM15.6843 41.6223C13.7223 40.3633 12.0533 39.0063 10.7263 37.5873L11.1133 37.2253C12.4123 38.6113 14.0453 39.9403 15.9703 41.1753L15.6843 41.6223Z"
            fill="#48704f"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.074 40.7128L28.71 40.3268C31.843 37.3668 33.657 33.2618 33.688 29.0638V29.0528C32.722 28.7318 31.587 28.6638 30.469 28.8628C28.247 29.2588 26.239 30.4888 24.298 31.6798C23.897 31.9248 23.499 32.1688 23.101 32.4038C19.615 34.4678 16.017 36.5968 11.691 37.4058C8.482 38.0078 4.196 37.6828 1.788 34.9708C-0.194001 32.7378 -0.561001 29.3338 0.850999 26.2978C1.222 25.4988 1.69 24.8028 2.239 24.2268C4.192 22.1818 7.076 20.8158 9.954 20.5718L9.999 21.1018C7.288 21.3308 4.462 22.6688 2.624 24.5938C2.114 25.1268 1.679 25.7748 1.333 26.5218C0.00999868 29.3658 0.343999 32.5438 2.184 34.6178C4.446 37.1638 8.527 37.4588 11.594 36.8848C15.828 36.0918 19.385 33.9868 22.825 31.9508C23.226 31.7138 23.622 31.4708 24.02 31.2268C26.004 30.0108 28.055 28.7538 30.375 28.3398C31.652 28.1118 32.956 28.2098 34.045 28.6148L34.216 28.6788L34.22 29.0628C34.187 33.4098 32.312 37.6538 29.074 40.7128Z"
            fill="#48704f"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.5945 40.1162L29.5155 39.5912C33.2075 39.0312 36.8395 36.8392 38.9945 33.8702C41.2195 30.8052 41.2995 26.8852 39.1935 24.1142C37.4155 21.7772 34.3295 20.4362 31.1465 20.6132C28.9915 20.7342 27.0995 21.4212 25.6915 22.0062C23.3355 22.9842 21.1515 24.2762 19.0385 25.5262C16.0145 27.3162 13.1635 29.0042 10.2205 29.5542C9.1395 29.7582 8.1195 29.6722 7.4215 29.3182C6.8755 29.0422 6.5225 28.5462 6.4955 28.2252C6.4805 28.0442 6.5105 27.7832 6.8905 27.3862L7.2745 27.7532C7.1005 27.9352 7.0155 28.0792 7.0255 28.1802C7.0325 28.2792 7.2405 28.6322 7.6605 28.8452C8.2575 29.1462 9.1545 29.2152 10.1215 29.0332C12.9745 28.4992 15.7855 26.8352 18.7615 25.0732C20.8965 23.8102 23.0975 22.5082 25.4885 21.5142C26.9345 20.9142 28.8825 20.2082 31.1165 20.0842C34.4765 19.8962 37.7335 21.3172 39.6155 23.7932C41.8655 26.7512 41.7875 30.9272 39.4245 34.1822C37.1895 37.2622 33.4225 39.5362 29.5945 40.1162Z"
            fill="#48704f"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3933 48.6054C10.9143 48.6054 8.9403 47.6464 7.9683 45.9154C7.1443 44.4464 7.1243 42.8014 7.9123 41.1604C8.5683 39.7904 9.7703 38.5004 11.2093 37.6234L11.4863 38.0764C7.9123 40.2554 7.2453 43.5384 8.4323 45.6554C9.9803 48.4154 13.6863 48.1264 14.7853 47.9734C16.4503 47.7414 18.0503 47.0994 19.5993 46.4794C21.0543 45.8964 22.5603 45.2924 24.1493 45.0074C26.4693 44.5904 29.6853 44.4464 31.8263 46.1324C32.3813 46.5554 33.1533 46.9264 33.3653 46.7784C33.3893 46.7614 33.5933 46.5844 33.2833 45.5724C32.4603 42.8854 30.7843 41.2534 28.1573 40.5844C24.2193 39.5794 19.7823 39.9604 15.9843 41.6324C15.7433 41.7394 15.4933 41.8664 15.2283 42.0004C14.0023 42.6234 12.4773 43.3974 11.1493 42.1804L11.5073 41.7894C12.5653 42.7574 13.7963 42.1314 14.9883 41.5264C15.2593 41.3884 15.5153 41.2584 15.7703 41.1464C19.6753 39.4284 24.2373 39.0364 28.2883 40.0694C31.0713 40.7794 32.9223 42.5784 33.7903 45.4174C33.9763 46.0224 34.1653 46.8684 33.6683 47.2144C33.0223 47.6644 31.7483 46.7424 31.5003 46.5524C29.5113 44.9864 26.4563 45.1314 24.2433 45.5304C22.7063 45.8064 21.2273 46.3994 19.7963 46.9724C18.2183 47.6044 16.5863 48.2574 14.8593 48.5004C14.3543 48.5704 13.8653 48.6054 13.3933 48.6054Z"
            fill="#48704f"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.4138 29.8821C15.3118 29.8821 15.2158 29.8231 15.1718 29.7251C15.1108 29.5911 15.1718 29.4341 15.3058 29.3741C16.8098 28.6991 18.5698 27.8751 20.2258 26.8701C20.3508 26.7941 20.5148 26.8341 20.5908 26.9591C20.6668 27.0841 20.6268 27.2481 20.5018 27.3241C18.8208 28.3441 17.0418 29.1781 15.5218 29.8591C15.4868 29.8741 15.4498 29.8821 15.4138 29.8821ZM37.0701 27.8108C36.9301 27.8108 36.8131 27.7018 36.8051 27.5608C36.7781 27.0908 36.5081 26.6108 36.0641 26.2428C35.5961 25.8548 34.9981 25.6268 34.5281 25.4718C34.3881 25.4258 34.3131 25.2758 34.3591 25.1358C34.4051 24.9978 34.5551 24.9218 34.6941 24.9678C35.2091 25.1378 35.8671 25.3888 36.4031 25.8328C36.9601 26.2948 37.2991 26.9138 37.3361 27.5298C37.3441 27.6758 37.2321 27.8018 37.0861 27.8108H37.0701Z"
            fill="#48704f"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.072 21.0009C34.847 13.7569 32.565 9.61389 31.593 8.16989C29.521 5.08589 26.332 2.80189 22.369 1.56389C18.809 0.452888 14.712 0.229888 10.829 0.933888C10.71 0.964888 9.44099 1.30289 8.58499 1.70989C8.17399 1.90589 7.66099 2.06589 7.16499 2.22189C6.53199 2.41989 5.87699 2.62489 5.52999 2.87889C4.72399 3.46989 4.33499 4.08889 4.45899 4.57689C4.58999 5.08989 5.26999 5.46589 6.32599 5.60689C7.99999 5.83289 9.70899 5.91889 11.406 5.86489C11.465 5.86289 11.652 5.83789 11.85 5.81189C13.467 5.59489 14.404 5.54089 14.725 5.87589C14.824 5.97889 14.864 6.11289 14.839 6.25489C14.704 7.01489 13.591 7.74789 12.777 8.28289C12.582 8.41089 12.414 8.52189 12.297 8.60889L9.04699 11.0309C8.80099 11.2149 8.55099 11.4329 8.56199 11.6579C8.57199 11.8519 8.78599 12.0069 8.98699 12.0449C9.24499 12.0939 9.52699 12.0209 9.81899 11.9349C11.578 11.4169 13.257 10.5239 14.826 9.65489C15.142 9.47989 15.462 9.29389 15.784 9.10589C17.101 8.34189 18.463 7.55089 19.936 7.24889C21.808 6.86689 23.609 7.96189 25.292 10.5039C26.913 12.9529 27.737 15.8709 27.553 18.5119L27.024 18.4749C27.2 15.9489 26.407 13.1499 24.849 10.7969C23.298 8.45289 21.678 7.43489 20.043 7.76989C18.655 8.05289 17.331 8.82189 16.051 9.56589C15.725 9.75489 15.402 9.94189 15.084 10.1189C13.488 11.0029 11.78 11.9109 9.96799 12.4439C9.62699 12.5449 9.25999 12.6379 8.88799 12.5659C8.48099 12.4889 8.05599 12.1619 8.03199 11.6859C8.00399 11.1469 8.49399 10.7809 8.72899 10.6049L11.979 8.18389C12.109 8.08689 12.283 7.97289 12.485 7.83889C13.111 7.42789 14.141 6.74889 14.301 6.22189C14.062 6.11889 13.262 6.15789 11.921 6.33789C11.649 6.37389 11.505 6.39389 11.423 6.39589C9.69599 6.45089 7.95799 6.36289 6.25499 6.13389C4.95499 5.95889 4.13399 5.45189 3.94399 4.70789C3.75999 3.98789 4.21299 3.18689 5.21699 2.45089C5.63399 2.14489 6.30099 1.93589 7.00599 1.71489C7.48399 1.56489 7.97899 1.40989 8.35699 1.22989C9.29799 0.781888 10.648 0.431888 10.706 0.416888L10.724 0.412888C14.692 -0.309112 18.885 -0.0791119 22.527 1.05789C26.606 2.33089 29.894 4.68889 32.035 7.87389C33.031 9.35589 35.374 13.6029 35.602 20.9839L35.072 21.0009Z"
            fill="#48704f"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.3797 8.46219C7.3477 8.46219 7.3157 8.45619 7.2847 8.44419C5.9547 7.93919 5.0467 5.81119 5.0087 5.72119C4.9517 5.58519 5.0157 5.43019 5.1507 5.37319C5.2847 5.31619 5.4417 5.37919 5.4977 5.51519C5.5047 5.53019 6.0417 6.78719 6.8217 7.51819C6.5977 6.93819 6.3287 6.21019 6.2927 5.94119C6.2737 5.79619 6.3747 5.66219 6.5207 5.64319C6.6657 5.62319 6.7997 5.72519 6.8187 5.87019C6.8587 6.15619 7.3337 7.38719 7.6247 8.09619C7.6647 8.19319 7.6437 8.30619 7.5687 8.38219C7.5187 8.43519 7.4487 8.46219 7.3797 8.46219ZM4.6863 9.73949C4.5403 9.73949 4.4203 9.62049 4.4203 9.47349C4.4203 9.32749 4.5403 9.20849 4.6863 9.20849C7.2883 9.20849 11.9063 7.51049 13.4233 6.95149C13.7523 6.83049 13.9013 6.77549 13.9713 6.75649C14.1133 6.71549 14.2593 6.79749 14.2993 6.93849C14.3393 7.07949 14.2573 7.22649 14.1173 7.26649C14.0623 7.28249 13.8613 7.35549 13.6073 7.44949C12.0673 8.01549 7.3823 9.73949 4.6863 9.73949Z"
            fill="#48704f"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.50859 10.9866C3.44459 10.9866 3.37959 10.9646 3.32859 10.9176C3.22059 10.8186 3.21359 10.6506 3.31259 10.5426C3.57659 10.2526 3.93359 9.8776 4.18559 9.6126C3.76359 9.4986 3.49859 9.4256 3.33359 9.3806C3.25959 9.3596 3.19159 9.3406 3.13059 9.3206C3.12059 9.3196 3.11059 9.3176 3.10059 9.3146L3.08759 9.3116L3.08859 9.3056C2.92659 9.2446 2.84159 9.1636 2.88959 8.9836C2.91259 8.8956 3.01559 8.7436 3.23559 8.8006C3.24359 8.8036 3.25359 8.8066 3.26259 8.8096C3.35959 8.8376 3.68759 8.9266 4.75559 9.2176C4.84659 9.2426 4.91659 9.3126 4.94259 9.4036C4.96659 9.4936 4.94259 9.5906 4.87659 9.6586C4.86959 9.6656 4.15359 10.4096 3.70359 10.9006C3.65259 10.9586 3.57959 10.9866 3.50859 10.9866ZM19.0388 8.0374C18.9208 8.0374 18.8128 7.9584 18.7818 7.8394C18.7448 7.6964 18.8308 7.5524 18.9728 7.5154C19.9318 7.2664 21.3898 6.6794 21.4728 6.2044C21.4978 6.0594 21.6358 5.9644 21.7798 5.9884C21.9248 6.0144 22.0208 6.1514 21.9958 6.2964C21.8238 7.2794 19.5578 7.9124 19.1048 8.0294C19.0828 8.0354 19.0598 8.0374 19.0388 8.0374ZM16.5359 3.1321C16.4619 3.1321 16.3889 3.1021 16.3359 3.0411C16.2399 2.9311 16.2509 2.7641 16.3609 2.6671C16.4939 2.5501 16.4729 2.4641 16.4339 2.3941C16.3509 2.2451 16.1469 2.1531 16.0699 2.1771C15.5949 2.3201 14.6919 2.8881 14.6819 2.8941C14.5589 2.9721 14.3939 2.9351 14.3159 2.8111C14.2379 2.6871 14.2749 2.5231 14.3989 2.4451C14.4389 2.4191 15.3729 1.8321 15.9179 1.6691C16.2529 1.5681 16.7029 1.7821 16.8989 2.1371C17.0749 2.4551 17.0029 2.8111 16.7109 3.0671C16.6609 3.1111 16.5979 3.1321 16.5359 3.1321Z"
            fill="#48704f"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6775 2.69459C15.6275 2.69459 15.5765 2.68059 15.5325 2.65159L15.2005 2.43659C15.0775 2.35659 15.0425 2.19259 15.1225 2.06959C15.2025 1.94659 15.3675 1.91159 15.4905 1.99159L15.8225 2.20659C15.9455 2.28659 15.9795 2.45059 15.9005 2.57359C15.8495 2.65259 15.7635 2.69459 15.6775 2.69459Z"
            fill="#48704f"
          />
        </svg>

        <p className="text-3xl py-4">What to Wear</p>
        <p className="text-lg md:text-2xl md:mx-40 py-6">
          Tuxedo Shirts, Assless Chaps, Fedoras & Trenchcoats
        </p>
      </Parallax>
    </div>
  );
}

export default DressCode;
