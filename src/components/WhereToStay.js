import React from "react";
import { Parallax } from "react-scroll-parallax";

function WhereToStay() {
  return (
    <div className="bg-base py-24">
      <Parallax speed={7}>
        <svg
          className="w-28 mx-auto"
          viewBox="0 0 75 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.83428 62.8165H72.9441V58.5291H5.83428V62.8165ZM56.6145 122.183H46.7007V64.4563H68.2165L56.6145 122.183ZM39.3895 128.175C35.0613 128.175 31.3481 126.252 30.6501 123.822H48.1284C47.4303 126.252 43.7178 128.175 39.3895 128.175ZM41.4251 131.328L42.5955 132.908C42.0086 133.35 40.8316 133.726 39.3915 133.726C37.9501 133.726 36.7711 133.348 36.1849 132.906L37.3547 131.328C37.5264 131.094 37.5639 130.787 37.4501 130.519L37.0836 129.652C37.8244 129.755 38.5935 129.814 39.3895 129.814C40.1849 129.814 40.954 129.755 41.6948 129.652L41.329 130.519C41.2159 130.787 41.252 131.094 41.4251 131.328ZM39.3224 143.376C38.7014 143.376 38.1974 142.871 38.1974 142.249C38.1974 141.627 38.7014 141.122 39.3224 141.122C39.9428 141.122 40.4481 141.627 40.4481 142.249C40.4481 142.871 39.9428 143.376 39.3224 143.376ZM36.9356 135.041C37.6652 135.25 38.4994 135.365 39.3915 135.365C40.2817 135.365 41.1139 135.251 41.8428 135.043L39.8724 139.538C39.6941 139.502 39.5106 139.482 39.3224 139.482C39.1784 139.482 39.0395 139.503 38.9014 139.524L36.9356 135.041ZM10.5619 64.4563H45.0632V122.183H22.1639L10.5619 64.4563ZM25.754 36.4172H53.0231L66.4448 56.8893H12.3316L25.754 36.4172ZM39.3902 30.9395C43.5606 30.9395 47.3928 32.4693 49.3047 34.7774H29.4757C31.3869 32.4693 35.2192 30.9395 39.3902 30.9395ZM35.5244 28.4508H43.254C43.4297 28.4508 43.5724 28.5938 43.5724 28.7698C43.5724 28.9458 43.4297 29.0888 43.254 29.0888H35.5244C35.3494 29.0888 35.2066 28.9458 35.2066 28.7698C35.2066 28.5938 35.3494 28.4508 35.5244 28.4508ZM37.1619 23.9934L37.9777 21.7129C38.0093 21.6246 38.0257 21.531 38.0257 21.4361V17.8836H40.754V21.4361C40.754 21.531 40.7698 21.6246 40.8014 21.7129L41.6172 23.9934V26.811H37.1619V23.9934ZM74.5816 56.8893H68.4034L53.9067 34.7774H51.2968C50.0566 32.6519 47.6632 30.9923 44.6968 30.0807C45.0113 29.7327 45.2093 29.276 45.2093 28.7698C45.2093 27.6896 44.3323 26.811 43.254 26.811V23.8504C43.254 23.7561 43.2382 23.6625 43.206 23.5742L42.4402 21.4328C42.4481 21.4315 42.4527 21.4302 42.4619 21.4275C44.6823 20.9306 46.577 19.5972 47.7968 17.6727C49.0159 15.7481 49.4145 13.4631 48.9185 11.2386C48.5119 9.41626 47.4211 7.86081 45.8474 6.86031C44.2738 5.85915 42.406 5.53224 40.5863 5.93956C38.9652 6.30206 37.5797 7.34935 36.7869 8.81319C36.5711 9.21128 36.7192 9.70824 37.1159 9.92508C37.5132 10.1399 38.0099 9.99362 38.2264 9.59553C38.7935 8.5489 39.7836 7.79885 40.9428 7.53983C42.3349 7.22808 43.7659 7.47919 44.9705 8.2444C46.1751 9.01026 47.0093 10.2006 47.3205 11.5959C47.7211 13.3932 47.4001 15.2393 46.4145 16.7941C45.483 18.2646 44.0599 19.3 42.3909 19.7488V17.0637C42.3909 16.6109 42.0238 16.2438 41.5724 16.2438H37.2073C36.7553 16.2438 36.3889 16.6109 36.3889 17.0637V19.5775C34.0705 18.4102 32.3882 16.2939 31.7849 13.7221C31.7816 13.6898 31.7764 13.6582 31.7691 13.6259C30.756 9.0854 28.0395 5.21126 24.1185 2.71792C20.1981 0.225239 15.5428 -0.589398 11.0099 0.424284C7.34152 1.24551 4.21126 3.44819 2.19678 6.62831C0.182308 9.8071 -0.475587 13.5824 0.343492 17.2581C1.00862 20.2405 2.79349 22.7859 5.36915 24.4238C7.2231 25.6029 9.32507 26.2099 11.4685 26.2099C12.304 26.2099 13.1461 26.117 13.9816 25.9304C19.0113 24.8047 22.1086 19.9222 21.0409 14.8557C20.9376 14.2046 20.6284 13.6826 20.1474 13.3458C19.6507 12.9991 19.0093 12.8791 18.3422 13.0116C17.7409 13.1296 17.2205 13.4749 16.879 13.9844C16.5363 14.4939 16.4132 15.1069 16.5303 15.7093C16.7191 16.6748 17.5001 17.413 18.4724 17.5468C18.9238 17.6114 19.333 17.2937 19.3948 16.8455C19.456 16.396 19.1422 15.9828 18.6941 15.9215C18.4152 15.8839 18.1909 15.6717 18.1369 15.3942C18.0672 15.0376 18.3001 14.6903 18.6573 14.6204C18.8816 14.5769 19.0843 14.602 19.2099 14.6896C19.3198 14.7668 19.3922 14.9085 19.431 15.1523C20.3191 19.3712 17.7691 23.4022 13.6244 24.3302C11.0731 24.9009 8.45336 24.4422 6.24612 23.0397C4.03955 21.6358 2.5106 19.4562 1.94152 16.9002C1.21718 13.6522 1.7981 10.3166 3.57836 7.50688C5.35928 4.69651 8.12441 2.75022 11.3665 2.02456C19.806 0.135602 28.2119 5.44985 30.1488 13.8836C30.1527 13.9165 30.1573 13.9488 30.1652 13.9811C30.9145 17.3425 33.2119 20.0619 36.3626 21.3669L35.5724 23.5742C35.5409 23.6625 35.5244 23.7561 35.5244 23.8504V26.811C34.4468 26.811 33.5698 27.6896 33.5698 28.7698C33.5698 29.276 33.7672 29.7334 34.0823 30.0814C31.1165 30.9923 28.7238 32.6519 27.4843 34.7774H24.8705L10.3738 56.8893H4.1981V64.4563H8.89218L20.8231 123.822H28.9652C29.4034 126.287 31.7895 128.31 35.1356 129.248L35.7606 130.727L34.4705 132.469C34.458 132.486 34.452 132.505 34.4409 132.523C34.4224 132.553 34.4047 132.583 34.3902 132.615C34.3757 132.645 34.3645 132.675 34.354 132.706C34.3455 132.732 34.3409 132.759 34.3349 132.785C34.3185 132.859 34.3132 132.933 34.3172 133.009C34.3178 133.02 34.3165 133.033 34.3178 133.044C34.3224 133.083 34.3323 133.122 34.3428 133.161C34.3474 133.181 34.3534 133.202 34.3606 133.223C34.3678 133.244 34.3705 133.266 34.379 133.286L37.4297 140.245C36.8968 140.749 36.5606 141.459 36.5606 142.249C36.5606 143.775 37.7994 145.016 39.3224 145.016C40.8448 145.016 42.0843 143.775 42.0843 142.249C42.0843 141.506 41.7876 140.834 41.3093 140.336L44.4007 133.286C44.4053 133.275 44.406 133.262 44.4106 133.251C44.4284 133.206 44.4402 133.162 44.4494 133.117C44.4534 133.098 44.458 133.081 44.4606 133.063C44.4692 133 44.4705 132.938 44.4639 132.875C44.4626 132.861 44.458 132.847 44.4566 132.832C44.4488 132.783 44.4369 132.735 44.4211 132.688C44.4139 132.669 44.4067 132.65 44.3988 132.631C44.3777 132.583 44.352 132.538 44.3224 132.494C44.3178 132.486 44.3145 132.476 44.3086 132.469L43.0185 130.727L43.6435 129.248C46.9895 128.31 49.3757 126.287 49.8139 123.822H57.9553L69.8863 64.4563H74.5816V56.8893Z"
            fill="#719259"
          />
        </svg>

        <p className="text-4xl md:text-5xl text-olive py-10">Where to Stay</p>
        <p className="text-lg md:text-2xl md:mx-40 py-6 px-3">
          We will have two reserved room blocks in the French Quarter, both within walking distance of Brennan's. Please book your rooms quickly. Hotels in New Orleans fill up often!
        </p>
        <div className="flex justify-center mx-auto text-2xl">
        <a className="mx-6 hover:text-coral border-b cursor-pointer" href="/">The Monteleone</a>
        <a className="mx-6 hover:text-coral border-b cursor-pointer" href="/">Bienneville House</a>
        </div>
      </Parallax>
    </div>
  );
}

export default WhereToStay;
