import React from "react";

function Registry() {
  return (
    <div id="registry" className="bg-flowers bg-fixed py-20 text-darkGreen ">
      <div className="border-2 w-3/4 mx-auto bg-base border-olive">
        <p className="text-5xl py-10">Registry</p>
        <svg
          className="md:w-1/6 w-1/2 mx-auto mb-10"
          viewBox="0 0 175 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M136.88 44.0541C138.851 40.7819 141.967 38.9954 145.405 37.7502C146.459 37.3692 147.553 37.0714 148.513 36.4997C151.28 34.8581 154.231 34.4662 157.326 35.0444C158.983 35.3523 160.628 35.7812 162.253 36.2462C163.34 36.5571 164.289 37.1107 165.155 37.9008C166.749 39.3719 168.472 40.7118 170.17 42.0657C171.398 43.0459 171.719 44.3633 171.331 45.7398C170.853 47.4131 169.902 48.96 168.761 50.208C166.342 52.874 163.64 55.2783 161.146 57.8727C160.285 58.771 159.314 59.4226 158.264 60.0219C157.324 60.5575 155.712 62.4869 155.274 63.5811C154.898 64.526 154.192 65.1551 153.24 65.5013L153.211 65.3795L153.299 65.4755C152.182 67.3303 151.13 69.14 148.705 69.6932C147.812 69.8996 147.061 70.8894 146.339 71.6177C145.72 72.2288 145.159 72.4309 144.234 72.2875C142.645 72.039 141.153 72.51 140.333 74.0299C139.45 75.6677 137.781 75.8739 136.309 76.3088C134.895 76.718 134.361 75.385 133.85 74.4309C133.313 73.4181 133.451 72.2026 134.522 71.6812C137.636 70.1737 140.327 68.0045 143.299 66.2933C143.875 65.9605 144.386 66.1385 144.935 66.254C147.014 66.685 148.347 65.6851 149.253 63.9604C149.633 63.2339 150.171 62.653 150.626 61.9981C153.634 57.7091 157.553 54.2739 161.371 50.791C162.835 49.4536 163.827 47.7933 165.318 46.5145C166.702 45.3214 166.624 44.607 165.436 43.2029C163.941 41.4374 161.968 40.569 159.76 39.8449C156.01 38.6158 152.756 39.7548 149.232 40.8216C143.355 42.5955 139.928 46.9797 136.636 51.5553C135.748 52.7879 135.22 54.4168 134.993 56.0432C134.646 58.4657 134.351 58.7181 131.893 58.9311C131.373 58.9786 130.965 59.1492 130.658 59.5639C129.156 61.5435 127.011 62.3679 124.691 62.8766C123.284 63.184 122.112 64.2375 120.55 64.0791C120.228 64.0448 119.937 64.3604 119.936 64.7121C119.932 65.1559 120.216 65.4491 120.636 65.582C121.133 65.7354 121.582 65.5243 122.043 65.3886C125.74 64.2954 129.535 63.4974 132.748 61.1158C133.742 60.3773 135.114 60.1227 136.347 59.7688C137.468 59.4471 138.977 60.2329 139.407 61.2173C139.831 62.1895 139.391 63.4487 137.987 63.9016C133.103 65.4852 129.085 69.0183 123.87 69.9028C122.384 70.158 120.799 70.8628 119.563 71.9613C118.628 72.7881 117.518 73.2263 116.35 73.5667C114.676 74.0615 113.306 75.1238 111.862 76.0735C108.873 78.039 105.967 80.3164 101.9 79.075C100.531 78.6577 99.0356 78.7551 97.4707 79.3826C96.1133 79.9309 94.3117 79.4292 92.7123 79.3333C88.5563 79.0825 84.4443 78.357 80.2217 78.782C78.1152 78.9957 75.9432 78.6021 73.8926 77.599C72.0081 76.6714 69.798 76.8471 67.7652 76.3975C67.2962 76.2929 66.7461 76.4151 66.3346 76.2121C63.1002 74.6031 59.6219 74.14 56.0869 73.7343C53.5348 73.4461 51.1435 72.3624 48.7488 71.4849C45.732 70.3791 42.708 69.2611 39.8782 67.6877C38.527 66.9335 36.9056 66.9974 35.4429 66.5447C33.1667 65.8437 32.2929 64.8134 32.53 63.0343C32.6759 61.9451 32.9803 60.9603 34.4393 61.0394C35.2052 61.0783 35.6066 60.699 35.5548 59.8468C35.3723 56.5377 37.7872 54.9365 40.1807 53.7643C43.4445 52.1622 46.4965 50.3068 49.51 48.2858C51.6948 46.8096 53.7032 45.1413 55.7831 43.5541C56.6672 42.8794 57.6619 42.4101 58.8041 42.1252C61.9511 41.3095 65.1444 40.6304 68.2509 39.6176C69.5651 39.1922 70.9195 39.8955 72.0575 40.6341C72.7009 41.0543 72.7965 41.8975 72.6224 42.6273C72.4146 43.4827 71.697 43.6119 70.906 43.6284C66.2938 43.6905 62.2652 45.7923 58.0853 47.3361C56.6261 47.878 56.7038 48.6336 57.9125 49.8051C60.1675 51.9806 63.171 52.555 65.8986 53.6974C66.848 54.0958 68.0523 54.7797 68.8331 54.4913C69.7943 54.1477 68.7603 52.8262 69.0737 51.8852C69.7856 49.6843 70.5947 47.6233 72.8361 46.5555C74.3514 45.8423 75.4599 44.327 77.3228 44.3276C77.9438 44.3278 78.7542 44.006 79.0329 44.7843C79.3283 45.5773 79.5882 46.4644 78.7055 47.212C77.8472 47.9454 77.0881 48.8501 76.0122 49.2356C74.5362 49.7627 74.0386 50.8511 74.0239 52.2238C74.0094 53.1308 74.0639 53.9733 73.3827 54.7023C72.7905 55.3308 73.1215 55.7193 73.8423 55.8497C77.2361 56.4351 80.5996 57.4058 84.0822 56.5348C84.8372 56.3431 85.4857 56.744 86.1891 56.9008C87.4316 57.1705 88.0173 56.6438 87.9018 55.3709C87.6207 52.3149 87.7519 49.2655 87.7182 46.2135C87.6881 43.8456 87.7269 43.5454 85.473 43.5749C83.5199 43.6019 81.7195 43.3281 79.9123 42.7316C79.4756 42.584 78.9899 42.4646 78.4893 42.6725C77.9205 42.9036 77.3381 42.9137 77.0627 42.2398C76.7402 41.4706 76.9672 40.7756 77.6463 40.3256C78.8428 39.5272 80.2355 39.3506 81.5985 39.5179C82.7315 39.6549 83.8543 39.52 84.959 39.608C89.1672 39.9348 93.3954 40.0702 97.5905 40.7558C100.339 41.1999 103.006 42.1813 105.869 42.1179C107.473 42.0804 109.04 42.6852 110.038 44.1832C110.215 44.448 110.421 44.7618 110.689 44.8849C113.55 46.1871 115.97 48.324 118.962 49.3299C121.773 50.2772 124.641 51.0847 127.529 51.7833C128.686 52.0614 129.021 52.8647 129.527 53.683C130.212 54.7976 130.433 54.7842 131.076 53.5792C131.986 51.8764 132.313 49.9144 133.411 48.2825C134.443 46.7465 135.371 45.1313 136.926 44.0355L136.936 44.1521L136.865 44.0709L136.88 44.0541ZM105.752 53.8756C104.481 53.1325 102.691 53.7103 101.681 52.5711C100.449 51.176 98.8955 50.1712 97.6141 48.8458C96.7886 47.9836 96.3528 47.1737 96.8215 46.0775C97.1993 45.2055 97.0597 44.6817 96.08 44.5133C95.1608 44.3506 94.1061 43.2616 93.3763 44.7539C92.4765 46.5733 91.0729 48.1858 91.7021 50.5584C92.036 51.8275 91.7733 53.2375 92.0208 54.5974C92.3358 56.2859 92.1632 56.3122 93.7834 56.0203C96.7705 55.4932 99.7834 55.0246 102.75 54.4195C103.736 54.217 104.895 54.837 105.704 53.8215C108.054 52.8136 110.444 52.3133 112.998 52.9435C113.365 53.0415 113.793 52.9489 114.189 52.8995C114.586 52.85 115.088 52.8289 115.202 52.4038C115.336 51.9014 114.786 51.8272 114.489 51.5823C112.136 49.6187 109.131 48.7023 106.779 46.6975C105.642 45.7212 104.052 45.8243 102.59 45.9101C101.57 45.9691 101.495 46.5597 102.058 47.1654C102.869 48.0443 103.81 48.8235 104.707 49.6116C106.056 50.7999 106.67 52.1438 105.733 53.8705L105.752 53.8756ZM66.2461 71.4272C69.1407 71.9829 68.6979 72.8272 70.4988 69.5716C70.921 68.8046 71.4636 68.0904 71.9676 67.3659C72.3201 66.8597 72.3254 66.3747 71.6794 66.2746C70.2108 66.0377 69.1296 64.9313 67.6817 64.6171C65.4724 64.1306 63.4482 63.145 61.4994 61.9932C59.9447 61.0709 58.4263 61.3692 57.2463 62.8033C56.3854 63.8569 55.7041 65.0516 54.8669 66.1322C53.8391 67.462 54.2568 68.3395 55.8354 69.1336C57.0507 69.7376 58.3009 69.8231 59.5842 69.6689C60.9936 69.5071 62.3315 69.7298 63.5525 70.4285C64.4155 70.9177 65.3585 71.1074 66.2364 71.4247L66.2461 71.4272ZM77.0792 74.1546C79.0655 74.7782 80.8293 74.4522 82.5647 74.3877C85.4628 74.2715 88.3344 74.6036 91.2156 74.7831C93.2318 74.9074 93.8607 74.1025 93.3461 72.1537C93.0553 71.0721 92.5797 70.0239 92.5736 68.8837C92.5733 67.8382 91.9795 67.659 91.1498 67.8204C90.6022 67.9329 90.061 68.0989 89.5411 68.3016C87.5305 69.0481 85.6688 69.1203 83.5183 68.2976C81.6402 67.5787 79.3862 67.9186 77.382 68.5634C75.9531 69.0305 74.6885 71.0527 74.8278 72.3527C74.9909 73.835 76.392 73.7433 77.0695 74.152L77.0792 74.1546ZM115.396 67.8778C115.575 66.7042 113.593 65.1711 112.291 65.4753C110.888 65.8046 109.538 66.4792 108.129 66.6411C105.193 66.975 102.3 67.2271 99.4213 68.1247C96.825 68.9322 96.5036 69.012 97.4683 71.6398C97.6382 72.0889 97.8422 72.5263 98.0218 72.9779C98.509 74.2155 99.283 74.8052 100.653 74.2498C101.419 73.937 102.185 73.8619 103.005 74.1637C104.217 74.6221 105.323 74.3171 106.466 73.7217C109.469 72.1639 111.941 69.7704 115.022 68.3473C115.21 68.263 115.321 68.0028 115.415 67.883L115.396 67.8778ZM48.2456 66.2374C49.0255 66.7665 49.671 66.5973 49.8318 65.6466C50.2274 63.351 51.1827 61.5567 53.5863 60.8116C54.025 60.6804 54.3505 60.198 54.2599 59.6459C54.1744 59.0745 53.7145 58.8586 53.243 58.7637C51.9619 58.4837 50.8226 57.8276 49.7194 57.1914C47.3855 55.8539 45.0354 56.2821 42.7394 56.9731C40.9285 57.5142 39.5714 58.7976 38.7354 60.5719C38.2409 61.6095 38.5364 62.2473 39.5533 62.6638C42.4452 63.85 45.3467 65.0389 48.236 66.2348L48.2456 66.2374ZM89.4036 63.8556C89.6226 63.8106 89.9505 63.7843 90.2481 63.6775C91.8272 63.0744 93.4362 63.3282 95.0065 63.5716C97.6706 63.9828 100.257 64.1042 102.716 62.7633C103.154 62.518 103.635 62.6154 104.115 62.6401C105.148 62.6881 106.201 62.6588 107.231 62.5613C109.619 62.3399 109.832 61.9309 108.851 59.6715C108.479 58.8166 108.352 57.706 106.921 58.1416C103.092 59.303 98.9505 58.725 95.1758 60.2632C94.607 60.4943 93.8919 60.4586 93.2671 60.3953C92.1702 60.2783 91.2302 60.8139 90.2226 61.0209C89.1713 61.237 88.9842 62.1703 88.8582 63.0682C88.8066 63.4167 88.965 63.6764 89.401 63.8652L89.4036 63.8556ZM126.694 57.1598C126.937 56.6349 126.602 56.3797 126.253 56.1728C124.999 55.4445 123.774 54.6826 122.341 54.3105C121.037 53.9622 119.956 54.0565 119.327 55.4824C118.763 56.7808 117.665 57.1708 116.336 56.9919C115.617 56.8931 114.901 56.7846 114.182 56.9963C113.79 57.1089 113.436 57.2318 113.31 57.7052C112.881 59.309 114.749 61.2673 116.35 60.815C119.287 59.9741 122.207 59.0772 125.134 58.1925C125.763 58.0085 126.319 57.6705 126.703 57.1624L126.694 57.1598ZM76.0261 62.788C78.1277 63.4838 80.4426 64.0399 82.9176 63.6865C83.9071 63.547 84.7213 63.4436 84.6148 62.2145C84.5148 61.0389 83.8191 60.8531 82.7395 61.0202C80.7405 61.3352 78.6038 61.6237 76.7617 60.9247C74.7967 60.1826 72.8029 60.4782 70.8648 60.0228C70.6716 59.9712 70.307 60.0187 70.2322 60.1437C70.0176 60.5211 70.386 60.6919 70.6378 60.873C72.1969 61.9725 74.0584 62.2108 76.0332 62.8003L76.0261 62.788ZM56.7155 55.644C57.4008 55.8684 58.0906 56.1147 58.7811 56.3198C58.9163 56.3559 59.0922 56.2787 59.243 56.2568C59.194 56.1299 59.1851 55.9309 59.0936 55.8857C56.788 54.7525 54.8052 52.9913 52.2514 52.3611C51.8166 52.245 51.2079 52.2377 51.0859 52.8882C50.9962 53.3404 51.3626 53.6349 51.7484 53.7793C53.3998 54.417 55.059 55.0257 56.7058 55.6414L56.7155 55.644ZM64.1985 57.9321C64.0484 57.9127 63.2041 57.3146 63.0861 57.7178C62.8604 58.4856 63.8176 58.5446 64.3747 58.7451C64.8185 58.905 65.3029 58.9515 65.7724 59.0148C65.9927 59.0426 66.2511 58.9667 66.2653 58.6807C66.2692 58.5886 66.0773 58.4545 65.9543 58.4113C65.5054 58.2707 65.0365 58.1662 64.2056 57.9443L64.1985 57.9321ZM130.112 55.7542C130.096 55.6981 130.092 55.635 130.076 55.5789C130.034 55.6195 129.966 55.6427 129.943 55.6884C129.93 55.7367 129.956 55.7953 129.97 55.861L130.102 55.7516L130.112 55.7542ZM88.8351 40.8294L88.9556 40.727L88.8352 40.6741L88.8422 40.8416L88.8351 40.8294Z"
            fill="#7B9A62"
          />
          <path
            d="M14.3186 93.8283C14.9544 91.8349 15.934 90.3369 18.1843 89.6233C22.9555 88.1131 27.4892 85.9807 31.7963 83.4564C34.4114 81.9191 35.6247 79.1587 36.8985 76.5593C37.4954 75.3317 38.2429 74.3928 39.4271 73.7568C40.3716 73.2431 40.9538 73.5435 41.2878 74.5021C41.6218 75.4607 41.5268 76.398 41.1722 77.3383C39.833 80.8414 37.3894 83.6355 35.2555 86.6262C34.7567 87.3314 33.6951 87.4309 32.9291 87.8577C29.5614 89.7323 26.3469 91.8859 22.6104 93.0099C22.2497 93.1206 21.7459 93.2241 21.7934 93.7439C21.8267 94.2393 22.3149 94.349 22.6905 94.3768C25.307 94.5787 26.4111 96.3744 27.0699 98.5583C27.4199 99.7282 28.0132 99.6382 28.8695 99.1838C29.968 98.5973 30.5127 97.449 31.5378 96.7498C32.7639 95.918 33.7483 95.6426 34.9698 96.7658C36.306 98.0024 37.6305 97.6937 39.3648 97.0907C42.0429 96.1705 42.9388 94.5984 42.9488 92.0031C42.9509 91.2585 43.4749 90.4979 43.8166 89.7611C45.5371 86.0701 48.565 83.2974 50.7415 79.9144C51.1843 79.2253 52.0118 77.9869 53.0325 78.777C53.8208 79.3912 53.7759 80.6833 53.3375 81.7048C53.1183 82.2155 52.7947 82.7295 52.3959 83.0991C49.9885 85.2922 48.8035 88.2569 47.3184 91.0275C46.7183 92.1507 46.7694 93.3546 46.6968 94.5566C46.5763 96.6359 46.526 98.7236 45.5732 100.663C44.6179 102.613 43.6928 102.977 41.8393 101.933C41.3079 101.636 40.8616 101.486 40.2599 101.646C38.3575 102.142 36.4334 102.177 34.5946 101.427C33.3992 100.942 32.5501 101.253 31.8818 102.245C31.3352 103.051 30.6741 103.744 29.879 104.318C28.1786 105.53 25.9976 105.248 24.7531 103.591C24.0738 102.685 23.5762 101.641 23.2635 100.564C22.8929 99.3163 22.2239 98.6822 20.8609 98.6701C19.6531 98.6581 18.4576 98.4838 17.2375 98.4788C14.3607 98.4765 13.6615 97.6067 14.0999 94.7635C14.1534 94.4466 14.2676 94.1355 14.3501 93.8264L14.3186 93.8283Z"
            fill="#7B9A62"
          />
          <path
            d="M146.582 96.7927C142.569 95.6177 140.053 93.0621 138.37 89.4039C137.425 87.361 136.846 85.188 135.864 83.1663C135.578 82.5723 135.632 82.1002 136.085 81.6417C136.549 81.1858 137.12 81.1003 137.649 81.3659C138.624 81.8642 139.497 82.3148 139.888 83.6406C140.638 86.2213 141.849 88.6251 143.676 90.6967C144.567 91.7006 145.354 92.3972 146.834 92.513C148.569 92.6451 150.501 93.3163 151.778 94.1954C153.764 95.554 155.851 97.1567 157.175 99.3318C157.657 100.123 158.18 101.267 156.984 101.868C155.942 102.398 155.227 104.494 153.587 102.886C152.6 101.929 152.213 102.602 151.81 103.375C151.11 104.719 150.486 105.971 148.829 106.594C146.193 107.588 144.177 106.687 142.267 105.08C141.312 104.277 140.343 103.759 139.022 103.82C138.09 103.861 137.247 104.112 137.137 104.952C136.98 106.235 136.183 106.198 135.296 106.303C132.637 106.607 130.587 105.604 129.256 103.262C128.437 101.832 127.025 100.648 127.256 98.7738C127.389 97.7329 127.067 96.7672 126.964 95.7977C126.716 93.2783 125.248 91.603 123.844 89.7686C122.794 88.391 121.504 86.9805 122.506 84.9711C123.068 83.8376 123.555 83.7192 124.539 84.5306C124.599 84.5776 124.693 84.6131 124.728 84.6743C126.448 88.1971 129.677 90.8709 130.532 94.8772C130.711 95.7217 130.737 96.6293 130.673 97.4918C130.525 99.4397 131.525 100.618 133 101.684C134.153 102.52 135.07 102.341 136.027 101.509C136.692 100.921 137.332 100.305 137.994 99.7264C139.64 98.2925 141.012 98.3071 142.574 99.8214C143.379 100.606 144.108 101.483 144.927 102.251C145.812 103.087 146.73 103.136 147.719 102.303C148.704 101.479 148.921 100.047 150.169 99.4067C150.494 99.2348 150.401 98.5372 149.87 98.1988C149.339 97.8604 148.899 97.3391 148.328 97.1141C147.756 96.8891 147.036 97.1833 146.569 96.7998L146.582 96.7927Z"
            fill="#7B9A62"
          />
          <path
            d="M104.865 90.7244C104.652 91.2886 104.247 91.7188 103.661 91.821C100.784 92.3256 98.1723 93.6156 95.4472 94.5957C93.4784 95.3016 91.6493 94.3992 89.8072 94.0107C88.7289 93.7849 87.6701 93.2537 86.7163 92.6782C85.2628 91.8036 83.6899 91.5698 82.0839 91.7309C80.5823 91.8889 79.095 91.7608 77.8243 91.1317C75.3673 89.9063 72.6985 90.0941 70.1336 89.6989C67.9558 89.3658 65.7928 89.0159 63.8633 88.0245C61.9627 87.0409 60.0228 86.3986 57.9371 86.0693C57.3806 85.9828 56.8299 85.8358 56.3043 85.6333C54.7515 85.053 54.2423 84.1304 54.7541 82.9112C55.337 81.5039 56.6396 81.0445 58.0094 82.0002C59.1512 82.802 60.4796 82.4011 61.6904 82.9832C65.1084 84.6412 68.7146 85.7491 72.6066 85.6706C74.1378 85.6344 75.5946 86.3029 77.0123 86.6918C79.5384 87.3871 82.0823 87.2798 84.6072 87.5918C86.101 87.7734 87.4689 88.3871 88.5792 89.1907C90.2529 90.4036 91.9547 90.7753 93.7631 90.0886C96.2427 89.1361 98.8897 88.7976 101.343 87.6724C103.369 86.7539 105.181 85.3542 107.411 84.8731C108.114 84.7194 108.767 84.252 109.462 84.1685C112.533 83.8295 115.135 82.5369 117.451 80.5679C118.027 80.0798 118.799 79.7477 119.384 80.4629C119.986 81.193 120.632 82.0692 119.702 83.0319C119.142 83.6173 118.625 84.2348 118.283 84.9716C117.819 85.9757 117.054 86.4341 115.932 86.2172C115.086 86.0533 114.303 85.9996 114.055 87.1236C113.896 87.8366 113.227 87.7822 112.696 87.9096C109.954 88.5644 107.385 89.6998 104.798 90.7791C104.745 90.6303 105.054 90.4436 104.745 90.3198C104.779 90.4635 104.826 90.6001 104.86 90.7437L104.865 90.7244Z"
            fill="#7B9A62"
          />
          <path
            d="M18.6876 65.724C19.7774 65.984 20.8421 66.2994 21.939 66.5716C23.0719 66.8638 23.9513 66.6328 24.8804 66.0219C26.7875 64.7716 28.251 65.0278 29.1316 66.6913C30.0502 68.4064 29.5361 70.3703 27.6523 71.0679C24.6753 72.1773 21.6487 73.2011 18.4704 71.4209C16.0109 70.0499 13.4759 68.8451 10.4798 69.3284C9.59205 69.4743 8.932 68.884 8.83571 67.9268C8.72208 66.8407 8.84548 65.7972 10.0013 65.2675C11.5089 64.5833 13.1013 64.3564 14.7238 64.6759C16.061 64.9398 17.3665 65.3609 18.6902 65.7144L18.6876 65.724Z"
            fill="#7B9A62"
          />
          <path
            d="M151.858 47.6918C150.25 47.2416 149.388 44.8895 150.475 43.6067C151.917 41.8905 154.082 41.3405 156.025 40.4619C156.438 40.272 156.799 40.5859 156.984 40.9769C157.338 41.7443 157.516 42.8993 156.823 43.1696C155.239 43.7919 155.394 44.9927 155.178 46.2288C154.954 47.535 153.428 48.1316 151.868 47.6943L151.858 47.6918Z"
            fill="#7B9A62"
          />
          <path
            d="M138.325 105.114C138.185 105.212 138.021 105.323 137.854 105.444C137.822 105.332 137.727 105.183 137.76 105.098C137.81 104.987 137.953 104.88 138.067 104.839C138.238 104.781 138.324 104.886 138.315 105.112L138.325 105.114Z"
            fill="#7B9A62"
          />
        </svg>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <a
            className="border-2 p-4 m-5 text-2xl hover:text-lightPink"
            href="https://www.heathceramics.com/apps/registry/anne-perry-s-wedding?shared_url=true"
          >
            Heath Ceramics
          </a>
          <a
            className="border-2 p-4 m-5 text-2xl hover:text-lightPink"
            href="https://www.williams-sonoma.com/registry/59tktd9mkn/registry-list.html"
          >
            Williams Sonoma
          </a>

          <a
            className="border-2 p-4 m-5 text-2xl hover:text-lightPink"
            href="https://weezietowels.com/apps/giftregistry/registry/232742?sid=bqpN2HlY7RGswkbj%2F%2B1VuQ"
          >
            Weezie Towels
          </a>
          <p className="border-2 p-4 m-5 text-2xl" href="">
            Berings (Coming Soon)
          </p>
        </div>
        <div className="h-10"></div>
      </div>
    </div>
  );
}

export default Registry;
