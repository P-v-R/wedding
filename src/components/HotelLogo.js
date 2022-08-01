import React from "react";
import { Parallax } from "react-scroll-parallax";

function HotelLogo() {
  return (
    <Parallax speed={0}>
    <div className="mx-auto text-olive pt-4 md:pt-10">
      <p className="text-2xl md:text-5xl">Brennan's</p>
      <p className="text-lg md:text-2xl pb-10 pt-2">New Orleans, Louisiana</p>
      <svg
        className="w-32 mx-auto"
        viewBox="0 0 85 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.3487 15.2702C37.8838 14.9766 37.371 14.7068 36.7891 14.4725C36.6107 14.3999 36.4292 14.3391 36.2493 14.2768C36.0679 13.7148 36.1488 13.055 36.4817 12.4842C36.7052 12.1031 37.0163 11.8027 37.3755 11.599C38.468 10.9793 39.8144 11.7354 39.8812 12.9453C39.9037 13.3827 39.8002 13.8335 39.5618 14.2427C39.2754 14.729 38.8405 15.0953 38.3487 15.2702ZM37.7893 34.7474C36.8341 38.5031 36.7067 42.0498 37.3815 46.2475C37.4744 46.8302 37.6304 47.4974 37.7953 48.2032C37.9033 48.6658 38.0173 49.1536 38.1207 49.6488C37.5089 48.7548 36.6977 47.8206 35.69 46.8583C32.6459 43.9522 28.1517 41.0875 23.0337 38.7967C16.4042 35.8253 9.02339 34.0787 4.43326 34.7874C5.52044 34.3396 6.9975 33.8666 9.03389 33.2913C12.4034 32.3409 15.2226 29.7447 17.3039 27.5888C18.802 26.0363 20.2386 24.3861 21.6271 22.7906C23.2197 20.958 24.8692 19.0645 26.6057 17.3283C29.0185 14.9144 33.0283 14.1686 36.3603 15.5104C42.9148 18.1556 40.595 25.5826 38.7326 31.5506C38.3757 32.6953 38.0368 33.7777 37.7893 34.7474ZM16.9156 52.1517C11.9145 49.9128 7.53434 47.1252 4.58021 44.3051C2.05197 41.8897 0.846324 39.6878 1.18372 38.1592C1.19872 38.0969 1.21521 38.0346 1.23021 37.9753C1.2572 37.8923 1.28419 37.8122 1.32018 37.7336C1.90501 36.4555 3.86943 35.7497 6.79506 35.7497C10.6864 35.7497 16.2767 37.0011 22.5674 39.8183C27.5684 42.0587 31.9486 44.8463 34.9027 47.6664C37.6724 50.3116 38.8615 52.7048 38.1627 54.2349C37.4624 55.7666 34.8577 56.462 31.0159 56.1477C26.9236 55.8111 21.9151 54.3921 16.9156 52.1517ZM36.6637 10.7598C36.2423 11.0489 35.7694 11.4626 35.4995 11.9237C35.1321 12.5539 34.9762 13.2656 35.0347 13.9447C31.6922 13.2389 28.1517 14.1849 25.7989 16.538C24.0339 18.3024 22.3724 20.2122 20.7679 22.0582C19.3883 23.6432 17.9622 25.2831 16.4822 26.8148C14.5013 28.8669 11.8291 31.3356 8.72198 32.2134C2.72077 33.9082 0.954292 34.7667 0.158029 37.6091C0.125038 37.7054 0.099546 37.8063 0.0785522 37.9056C-0.344322 39.8836 0.946794 42.3953 3.79145 45.1117C6.83704 48.0193 11.3312 50.8825 16.4477 53.1748C21.5627 55.4656 26.7046 56.9187 30.9214 57.2656C31.5557 57.3175 32.157 57.3427 32.7299 57.3427C36.1368 57.3427 38.4042 56.4264 39.1959 54.7005C40.0432 52.8397 39.4089 50.1292 38.9005 47.9511C38.7401 47.2646 38.5886 46.6152 38.5016 46.0725C37.8523 42.032 37.9723 38.6232 38.8915 35.0202C39.1314 34.0802 39.4628 33.0126 39.8167 31.8813C41.4483 26.6576 43.5911 19.7733 39.3594 16.0249C39.8377 15.7284 40.2486 15.3088 40.544 14.8017C40.8394 14.2946 40.9999 13.7371 41.0209 13.1811C41.0209 10.9993 38.5016 9.7632 36.6637 10.7598ZM16.993 33.7854C16.6846 33.7631 16.4162 33.998 16.394 34.3074C16.3717 34.6182 16.606 34.8874 16.9159 34.9082C17.0271 34.9171 28.13 35.7797 32.6079 42.8557C32.7147 43.0252 32.8971 43.1174 33.0824 43.1174C33.1847 43.1174 33.2885 43.0892 33.3819 43.0297C33.6444 42.8631 33.72 42.5151 33.5554 42.2534C31.5685 39.1124 28.0677 36.6526 23.4341 35.1387C19.9615 34.004 17.1116 33.7943 16.993 33.7854ZM8.4971 41.5102C8.36068 41.2306 8.0241 41.1161 7.74682 41.2514C7.46806 41.3883 7.35241 41.7259 7.48882 42.0054C7.54665 42.1229 8.93748 44.9248 12.3982 47.7876C15.5773 50.4155 21.1806 53.5817 29.8251 53.7467C30.1409 53.7467 30.39 53.5028 30.396 53.195C30.4034 52.8842 30.1572 52.6284 29.8473 52.6224C13.9892 52.3176 8.55048 41.6188 8.4971 41.5102Z"
          fill="#719259"
        />
        <path
          d="M46.4813 15.2702C46.9461 14.9766 47.459 14.7068 48.0408 14.4725C48.2192 14.3999 48.4007 14.3391 48.5806 14.2768C48.7621 13.7148 48.6811 13.055 48.3482 12.4842C48.1248 12.1031 47.8137 11.8027 47.4545 11.599C46.3619 10.9793 45.0155 11.7354 44.9487 12.9453C44.9262 13.3827 45.0297 13.8335 45.2681 14.2427C45.5545 14.729 45.9894 15.0953 46.4813 15.2702ZM47.0406 34.7474C47.9958 38.5031 48.1233 42.0498 47.4485 46.2475C47.3555 46.8302 47.1995 47.4974 47.0346 48.2032C46.9266 48.6658 46.8127 49.1536 46.7092 49.6488C47.321 48.7548 48.1323 47.8206 49.14 46.8583C52.1841 43.9522 56.6782 41.0875 61.7962 38.7967C68.4257 35.8253 75.8065 34.0787 80.3967 34.7874C79.3095 34.3396 77.8324 33.8666 75.796 33.2913C72.4265 32.3409 69.6074 29.7447 67.526 27.5888C66.0279 26.0363 64.5914 24.3861 63.2028 22.7906C61.6103 20.958 59.9607 19.0645 58.2243 17.3283C55.8115 14.9144 51.8017 14.1686 48.4697 15.5104C41.9151 18.1556 44.2349 25.5826 46.0974 31.5506C46.4543 32.6953 46.7932 33.7777 47.0406 34.7474ZM67.9144 52.1517C72.9154 49.9128 77.2956 47.1252 80.2497 44.3051C82.778 41.8897 83.9836 39.6878 83.6462 38.1592C83.6312 38.0969 83.6147 38.0346 83.5997 37.9753C83.5727 37.8923 83.5457 37.8122 83.5097 37.7336C82.9249 36.4555 80.9605 35.7497 78.0349 35.7497C74.1435 35.7497 68.5532 37.0011 62.2626 39.8183C57.2616 42.0587 52.8814 44.8463 49.9272 47.6664C47.1576 50.3116 45.9684 52.7048 46.6672 54.2349C47.3675 55.7666 49.9722 56.462 53.8141 56.1477C57.9064 55.8111 62.9149 54.3921 67.9144 52.1517ZM48.1663 10.7598C48.5876 11.0489 49.0605 11.4626 49.3304 11.9237C49.6978 12.5539 49.8538 13.2656 49.7953 13.9447C53.1378 13.2389 56.6782 14.1849 59.031 16.538C60.796 18.3024 62.4575 20.2122 64.062 22.0582C65.4416 23.6432 66.8677 25.2831 68.3478 26.8148C70.3287 28.8669 73.0009 31.3356 76.108 32.2134C82.1092 33.9082 83.8756 34.7667 84.6719 37.6091C84.7049 37.7054 84.7304 37.8063 84.7514 37.9056C85.1743 39.8836 83.8831 42.3953 81.0385 45.1117C77.9929 48.0193 73.4987 50.8825 68.3822 53.1748C63.2673 55.4656 58.1253 56.9187 53.9085 57.2656C53.2742 57.3175 52.6729 57.3427 52.1001 57.3427C48.6931 57.3427 46.4258 56.4264 45.634 54.7005C44.7868 52.8397 45.4211 50.1292 45.9294 47.9511C46.0899 47.2646 46.2413 46.6152 46.3283 46.0725C46.9776 42.032 46.8576 38.6232 45.9384 35.0202C45.6985 34.0802 45.3671 33.0126 45.0132 31.8813C43.3817 26.6576 41.2388 19.7733 45.4706 16.0249C44.9922 15.7284 44.5813 15.3088 44.2859 14.8017C43.9905 14.2946 43.83 13.7371 43.809 13.1811C43.809 10.9993 46.3283 9.7632 48.1663 10.7598ZM67.8369 33.7854C68.1453 33.7631 68.4137 33.998 68.436 34.3074C68.4582 34.6182 68.2239 34.8874 67.914 34.9082C67.8028 34.9171 56.6999 35.7797 52.222 42.8557C52.1152 43.0252 51.9329 43.1174 51.7475 43.1174C51.6452 43.1174 51.5414 43.0892 51.448 43.0297C51.1855 42.8631 51.1099 42.5151 51.2745 42.2534C53.2614 39.1124 56.7622 36.6526 61.3958 35.1387C64.8684 34.004 67.7183 33.7943 67.8369 33.7854ZM76.3328 41.5102C76.4693 41.2306 76.8058 41.1161 77.0831 41.2514C77.3619 41.3883 77.4775 41.7259 77.3411 42.0054C77.2833 42.1229 75.8925 44.9248 72.4317 47.7876C69.2527 50.4155 63.6493 53.5817 55.0048 53.7467C54.689 53.7467 54.4399 53.5028 54.434 53.195C54.4266 52.8842 54.6727 52.6284 54.9826 52.6224C70.8407 52.3176 76.2795 41.6188 76.3328 41.5102Z"
          fill="#719259"
        />
        <path
          d="M42.4217 13.3846C45.902 13.3846 48.7234 10.5548 48.7234 7.0641C48.7234 3.57338 45.902 0.743591 42.4217 0.743591C38.9414 0.743591 36.12 3.57338 36.12 7.0641C36.12 10.5548 38.9414 13.3846 42.4217 13.3846Z"
          stroke="#719259"
        />
      </svg>
      <p className="text-xl md:text-2xl py-10">October 21st 2023</p>
    </div>
    </Parallax>
  );
}

export default HotelLogo;
