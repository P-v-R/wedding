import React from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function BodyTwo() {
  return (
    <div className="bg-darkGreen py-64 h-screentext-base text-3xl md:text-5xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.75 }}
      >
        <Parallax speed={10}>
          <svg
            className="w-1/3 mx-auto my-20"
            viewBox="0 0 57 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.6012 27.9935C6.3592 28.0605 6.1482 28.1125 5.9812 28.1485C5.7892 28.1875 5.6152 28.2475 5.4572 28.3195C5.3932 27.8965 5.3122 27.1915 5.3112 26.3535C5.6312 26.8965 6.0742 27.5375 6.6012 27.9935ZM15.7842 22.3705C15.5452 22.4575 15.3342 22.5425 15.1552 22.6255C15.1232 22.3065 15.0922 21.8645 15.1062 21.4505C15.3242 21.7465 15.5792 22.0935 15.7842 22.3705ZM17.3002 20.8715L17.9022 21.7095C17.6962 21.7685 17.4952 21.8275 17.3002 21.8855V20.8715ZM10.5632 31.0215C10.8292 31.8925 10.8812 32.6025 10.8852 32.9915C10.4682 32.9345 10.0362 32.8725 9.6022 32.8065C10.0362 32.2315 10.3562 31.5505 10.5632 31.0215ZM22.3812 29.2335C22.5812 29.6385 22.8282 30.1315 23.0142 30.5005C22.7512 30.5435 22.4842 30.5955 22.2152 30.6535C22.2392 30.2535 22.2892 29.7085 22.3812 29.2335ZM24.6532 29.0085L25.2822 30.2565C24.9982 30.3065 24.7262 30.3395 24.4682 30.3565L24.6532 29.0085ZM55.7802 11.0365C55.2822 10.6515 54.6482 10.5755 53.8962 10.8115C53.8012 10.8425 53.7242 10.9175 53.6932 11.0135C53.6662 11.0995 53.0062 13.1425 52.8792 13.7725C52.8662 13.8385 52.8532 13.9075 52.8412 13.9775C52.7872 14.2845 52.7102 14.7035 52.5452 14.8005C52.4652 14.8475 52.3332 14.8145 52.2362 14.7795L51.8632 15.2805C51.7872 15.2375 51.7092 15.1825 51.6312 15.1185C51.7652 15.2295 51.8972 15.3185 52.0262 15.3655C52.3482 15.4805 52.6282 15.4725 52.8562 15.3395C53.2712 15.0985 53.3732 14.5375 53.4552 14.0885C53.4662 14.0215 53.4772 13.9565 53.4892 13.8945C53.5902 13.3965 54.0762 11.8605 54.2352 11.3625C54.7172 11.2405 55.0972 11.2965 55.3992 11.5295C56.0722 12.0515 56.1922 13.3295 56.1572 14.0035C56.1302 14.5085 55.5492 15.5925 54.9862 16.6415C54.3402 17.8475 53.6072 19.2135 53.3762 20.2715C53.1842 21.1485 53.0092 21.3465 52.6242 21.7765C52.1792 22.2755 51.5082 23.0305 50.3692 25.2125C49.1032 27.6345 46.4812 29.4265 42.5752 30.5385C42.4282 30.5805 42.3162 30.6105 42.2462 30.6365C41.7032 30.8145 38.3822 30.5095 36.8072 30.3125C36.2902 30.2465 34.7172 30.9335 34.1572 31.1885C33.7282 31.2195 32.5482 31.5625 30.1772 32.2745C28.5082 32.7775 26.7822 33.2975 26.1232 33.4125C24.6592 33.6665 15.6892 34.8975 14.5762 34.9565C14.4562 34.9625 14.2992 34.9725 14.1112 34.9835C12.5902 35.0835 8.5462 35.3475 6.6692 34.4875C5.8112 34.0965 5.3142 33.3705 5.0282 32.6755C6.7522 32.9865 12.1002 33.9275 13.7972 33.8745C14.6992 33.8475 16.1122 33.3295 17.7482 32.7305C19.0952 32.2365 20.5552 31.7035 21.9442 31.3575C21.9472 31.3565 21.9502 31.3565 21.9542 31.3555C22.4882 31.2235 23.0112 31.1195 23.5132 31.0565H23.5152C23.7722 31.0235 24.0232 31.0035 24.2672 30.9945C27.9122 30.8665 34.4342 27.3755 36.1432 25.4375C37.1212 25.0985 38.6912 24.1035 39.9622 23.2995C40.5342 22.9365 41.0282 22.6235 41.3132 22.4715C41.5942 22.3205 41.7992 22.1345 41.9772 21.9585C41.9782 21.9585 41.9782 21.9575 41.9792 21.9575C42.0022 21.9345 42.0262 21.9115 42.0492 21.8895C42.3442 21.5975 42.5972 21.3485 43.1472 21.2865H43.1492C43.1562 21.2865 43.1622 21.2855 43.1692 21.2845C43.4122 21.2595 43.7102 21.2685 44.0942 21.3275C44.1242 21.3325 44.1542 21.3325 44.1842 21.3275C44.2582 21.3165 45.9832 21.0655 46.8282 20.6115C47.0022 20.5185 47.3362 20.4325 47.6892 20.3425C48.8362 20.0475 50.5692 19.6015 50.4602 17.9645C50.4482 17.7795 50.3862 17.5915 50.2892 17.4005L49.8392 18.0055C49.9082 19.0435 48.8362 19.4035 47.5342 19.7385C47.1262 19.8445 46.7732 19.9345 46.5332 20.0645C45.8532 20.4305 44.4102 20.6635 44.1392 20.7055C43.8862 20.6685 43.6642 20.6525 43.4612 20.6515L42.8382 20.7105C42.3502 20.8135 42.0452 21.0375 41.7912 21.2725L41.3362 21.7055C41.2402 21.7855 41.1382 21.8585 41.0202 21.9225C40.7152 22.0855 40.2122 22.4035 39.6292 22.7735C38.4192 23.5405 36.7612 24.5905 35.8692 24.8735C35.8132 24.8915 35.7622 24.9255 35.7252 24.9705C34.4312 26.5125 29.4922 29.2805 25.9132 30.1235L24.7602 27.8355C24.6982 27.7135 24.5632 27.6465 24.4302 27.6685C24.2962 27.6905 24.1922 27.7985 24.1742 27.9325L23.8342 30.3975C23.7792 30.4005 23.7232 30.4075 23.6692 30.4145C23.3282 29.7465 22.5932 28.2635 22.5852 28.2465C22.5312 28.1395 22.4312 28.0765 22.3022 28.0735C22.1822 28.0755 22.0742 28.1455 22.0232 28.2545C21.7012 28.9485 21.6082 30.2695 21.5832 30.8085C20.2282 31.1615 18.8302 31.6715 17.5342 32.1455C15.9492 32.7255 14.5792 33.2275 13.7772 33.2525C13.2912 33.2665 12.4682 33.1915 11.5092 33.0715C11.5112 32.8465 11.4982 32.5035 11.4362 32.0765C12.3492 31.8145 13.8722 30.7675 15.7262 29.4485C16.6812 28.7695 17.5832 28.1285 17.9232 28.0015C18.2682 27.8725 18.6462 27.6295 19.0842 27.3475C19.9902 26.7655 21.2312 25.9695 23.0782 25.5985C24.9982 25.2155 27.4522 23.4645 29.0762 22.3065C29.7542 21.8205 30.4562 21.3205 30.6432 21.2775C31.0732 21.1815 31.5832 20.7985 32.0762 20.4285C32.4182 20.1715 32.9342 19.7825 33.1142 19.7825C33.5632 19.7825 35.8092 19.7265 35.9052 18.6335C35.9692 18.3665 37.2062 17.8725 38.5522 17.5675L38.0642 17.0425C36.9722 17.3125 35.3492 17.8375 35.2852 18.5765C35.2572 18.9055 34.0952 19.1595 33.1142 19.1595C32.7262 19.1595 32.2522 19.5165 31.7022 19.9305C31.2822 20.2455 30.8052 20.6035 30.5062 20.6725C30.2092 20.7375 29.7152 21.0855 28.7142 21.7995C27.1342 22.9275 24.7452 24.6315 22.9562 24.9875C20.9942 25.3815 19.6952 26.2155 18.7472 26.8235C18.3402 27.0865 17.9872 27.3115 17.7052 27.4185C17.2892 27.5735 16.4402 28.1785 15.3662 28.9405C14.0082 29.9075 12.2002 31.1905 11.3232 31.4625C11.2222 31.0135 11.0712 30.5085 10.8402 29.9665C10.7872 29.8445 10.6622 29.7715 10.5322 29.7765C10.3992 29.7875 10.2882 29.8795 10.2532 30.0065C10.2482 30.0235 9.7762 31.7195 8.8862 32.6955C7.0762 32.4125 5.3682 32.1045 4.8042 32.0015C4.6492 31.3985 4.6362 30.9355 4.6362 30.9235C4.6342 30.8475 4.5942 29.0695 6.1072 28.7585C7.4992 28.4705 11.6122 27.0165 12.8392 26.5785C13.3972 26.3795 13.6952 25.7275 14.0112 25.0395C14.2992 24.4095 14.5972 23.7575 15.0942 23.3715C15.5262 23.0345 17.1622 22.5665 18.7442 22.1165C21.1642 21.4255 23.6672 20.7105 24.5332 19.8825C25.8122 18.6575 28.8742 15.1405 29.5752 14.3305L28.9522 14.0975C28.0472 15.1405 25.2702 18.3145 24.1032 19.4315C23.3482 20.1525 20.7002 20.9105 18.5732 21.5175C18.5612 21.5205 18.5502 21.5235 18.5382 21.5265L17.2412 19.7225C17.1622 19.6125 17.0202 19.5655 16.8922 19.6075C16.7642 19.6485 16.6772 19.7695 16.6772 19.9035V22.0735C16.5832 22.1025 16.4912 22.1315 16.4022 22.1605C15.9762 21.5835 15.1532 20.4635 15.1532 20.4635C15.0832 20.3685 14.9652 20.3205 14.8472 20.3425C14.7302 20.3615 14.6362 20.4485 14.6032 20.5625C14.3862 21.3215 14.5132 22.5545 14.5712 23.0035C14.0432 23.4815 13.7252 24.1675 13.4442 24.7785C13.1852 25.3465 12.9402 25.8815 12.6302 25.9915C11.9642 26.2295 9.2172 27.2055 7.3492 27.7735C6.2232 27.1015 5.3482 25.0685 5.3402 25.0485C5.2842 24.9175 5.1442 24.8395 5.0062 24.8615C4.8642 24.8855 4.7572 24.9995 4.7432 25.1405C4.5882 26.7955 4.8002 28.2135 4.8872 28.6985C4.1802 29.3475 3.9922 30.3545 4.0132 30.9385C4.0152 31.0625 4.0912 33.9945 6.4102 35.0555C7.5782 35.5885 9.4112 35.7265 11.0812 35.7265C12.2992 35.7265 13.4292 35.6525 14.1512 35.6055C14.3362 35.5945 14.4902 35.5845 14.6092 35.5785C15.7792 35.5165 24.7092 34.2895 26.2292 34.0235C26.9262 33.9035 28.6692 33.3805 30.3552 32.8725C31.9332 32.3975 33.8952 31.8075 34.1962 31.8075H34.2002C34.2552 31.8135 34.3092 31.8035 34.3592 31.7795C35.3072 31.3455 36.4862 30.8975 36.7302 30.9305C36.7782 30.9355 41.5692 31.5185 42.4422 31.2255C42.5082 31.2045 42.6112 31.1755 42.7462 31.1375C46.8222 29.9755 49.5732 28.0795 50.9212 25.5005C52.0242 23.3885 52.6652 22.6685 53.0892 22.1905C53.5062 21.7235 53.7582 21.4405 53.9842 20.4035C54.1972 19.4305 54.9082 18.1055 55.5352 16.9355C56.1842 15.7245 56.7462 14.6795 56.7782 14.0355C56.8302 13.0505 56.6002 11.6735 55.7802 11.0365ZM46.7008 26.8871C46.1778 27.2151 44.8448 27.5121 43.7668 27.7041L47.4628 24.9061C47.4008 25.6171 47.2088 26.5721 46.7008 26.8871ZM47.9298 23.9821C47.8238 23.9301 47.6998 23.9441 47.6068 24.0131L42.4038 27.9561C42.2908 28.0421 42.2498 28.1931 42.3048 28.3241C42.3518 28.4421 42.4678 28.5161 42.5928 28.5161C42.6048 28.5161 42.6188 28.5151 42.6338 28.5131C42.7688 28.4951 45.9948 28.0641 47.0308 27.4151C48.1408 26.7221 48.1128 24.5031 48.1058 24.2531C48.1028 24.1361 48.0348 24.0331 47.9298 23.9821Z"
              fill="#F6F4EF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.3942 8.6713C1.6172 8.7983 1.8652 8.9403 2.1322 9.0823C2.0282 9.9153 2.0872 10.5763 2.1862 11.0523C1.6182 10.4213 1.2572 9.29329 1.0752 8.49129C1.1772 8.54729 1.2842 8.6083 1.3942 8.6713ZM4.2972 9.98429C4.5942 10.0643 4.8952 10.1203 5.1992 10.1493C5.1012 10.6083 4.8422 11.4693 4.2142 11.9483C4.3062 11.4913 4.3762 10.8253 4.2972 9.98429ZM10.7582 8.7683C10.8532 8.8173 11.0192 8.90629 11.2372 9.02429L10.8492 10.1033L10.3062 8.85229C10.5152 8.8083 10.6692 8.78129 10.7582 8.7683ZM13.0052 9.9853C13.2142 10.1023 13.4282 10.2203 13.6402 10.3403C13.6182 10.8323 13.3022 11.3233 13.0052 11.6773V9.9853ZM16.6832 12.1233C16.8822 12.1903 17.1042 12.2283 17.3442 12.2423C17.2462 12.6593 16.9372 13.2213 16.6212 13.6973C16.5622 13.0993 16.6262 12.4983 16.6832 12.1233ZM20.6902 11.5763L20.4672 12.4253L20.2612 11.7223C20.4062 11.6753 20.5502 11.6263 20.6902 11.5763ZM24.6542 10.9223L23.9562 11.9063L23.7752 10.6783C24.1092 10.7313 24.4242 10.8303 24.6542 10.9223ZM2.6802 12.0903C2.7072 12.0983 2.7342 12.1013 2.7612 12.1013C2.8562 12.1013 2.9492 12.0573 3.0092 11.9793C3.0852 11.8783 3.0942 11.7413 3.0292 11.6333C3.0242 11.6243 2.5922 10.8583 2.7252 9.3863C3.0182 9.5263 3.3272 9.6613 3.6462 9.7783C3.8602 11.4223 3.4422 12.3963 3.4382 12.4043C3.3882 12.5143 3.4062 12.6433 3.4842 12.7343C3.5442 12.8053 3.6322 12.8453 3.7212 12.8453C3.7482 12.8453 3.7752 12.8413 3.8032 12.8343C5.2662 12.4403 5.7132 10.8073 5.8332 10.1623C6.2162 10.1403 6.5962 10.0623 6.9682 9.9093C8.0872 9.4503 9.0192 9.1673 9.6902 8.9953L10.5912 11.0713C10.6392 11.1863 10.7522 11.2593 10.8762 11.2593H10.8862C11.0132 11.2553 11.1262 11.1733 11.1692 11.0533L11.7912 9.32129C11.9742 9.4213 12.1742 9.5293 12.3832 9.6443V12.4383C12.3832 12.5583 12.4522 12.6683 12.5612 12.7193C12.6032 12.7383 12.6492 12.7483 12.6942 12.7483C12.7642 12.7483 12.8362 12.7243 12.8922 12.6773C12.9442 12.6343 14.0002 11.7453 14.2232 10.6693C14.9662 11.0933 15.6572 11.5033 16.1042 11.8053C16.0142 12.2903 15.8402 13.5193 16.1532 14.5543C16.1862 14.6653 16.2792 14.7483 16.3922 14.7703C16.4122 14.7743 16.4312 14.7753 16.4512 14.7753C16.5452 14.7753 16.6362 14.7323 16.6952 14.6573C16.8212 14.4983 17.8252 13.2053 17.9782 12.2323C18.5132 12.1883 19.0942 12.0643 19.6652 11.9033L20.1842 13.6743C20.2222 13.8073 20.3442 13.8983 20.4822 13.8983H20.4872C20.6272 13.8963 20.7482 13.8013 20.7842 13.6653L21.4042 11.3093C21.9322 11.1003 22.3742 10.9013 22.6532 10.7713C22.8032 10.7013 22.9692 10.6643 23.1412 10.6493L23.4522 12.7643C23.4712 12.8903 23.5642 12.9923 23.6872 13.0223C23.7122 13.0273 23.7362 13.0303 23.7612 13.0303C23.8592 13.0303 23.9552 12.9823 24.0142 12.8993L25.1822 11.2533C25.2672 11.3323 25.3652 11.4273 25.4622 11.5203C25.9992 12.0373 26.8092 12.8193 27.8592 13.5333C28.1392 13.7253 28.5122 13.9173 28.9522 14.0983L29.5752 14.3313C31.2772 14.9093 33.6262 15.2673 35.5042 14.8123C35.9212 15.2213 37.2592 16.5153 37.9642 16.9683C37.9962 16.9893 38.0302 17.0153 38.0642 17.0423L38.5522 17.5673C39.0122 18.1663 39.4652 18.9893 39.6492 19.3603C39.6572 19.3773 39.6662 19.3923 39.6762 19.4043L41.3362 21.7053L41.7912 21.2733L40.1952 19.0623C40.0462 18.7623 39.1282 16.9773 38.3002 16.4443C37.7522 16.0913 36.7292 15.1313 36.1832 14.6033C36.3262 14.5483 36.4652 14.4893 36.5982 14.4223C38.1092 13.6663 39.2562 13.1733 40.0402 12.8803V14.8253C40.0402 14.9443 40.1072 15.0533 40.2142 15.1053C41.3832 15.6743 42.7032 16.4713 42.8382 16.7673V20.7103L43.4612 20.6513V16.7453C43.4612 16.4103 42.9692 15.7743 40.6622 14.6313V12.6643C40.9452 12.5763 41.1362 12.5343 41.2292 12.5343C41.4152 12.5343 41.6092 12.4763 41.8142 12.4143C42.2812 12.2743 42.8092 12.1153 43.4942 12.4953C43.7172 12.6193 43.9862 12.7613 44.2792 12.9143C45.3262 13.4633 46.9092 14.2923 47.2122 14.8523C47.4042 15.2083 47.8372 15.6223 48.3392 16.1033C48.9922 16.7293 49.8052 17.5073 49.8392 18.0053L50.2892 17.4003C49.9952 16.8273 49.3742 16.2333 48.7692 15.6533C48.3452 15.2463 47.9052 14.8253 47.7602 14.5563C47.3672 13.8293 45.8142 13.0163 44.5682 12.3623C44.2802 12.2123 44.0152 12.0733 43.7962 11.9513C42.8822 11.4433 42.1322 11.6693 41.6362 11.8183C41.4742 11.8663 41.3242 11.9123 41.2292 11.9123C40.6212 11.9123 38.6932 12.6793 36.3202 13.8653C36.0642 13.9933 35.7852 14.0943 35.4932 14.1733C35.4872 14.1753 35.4812 14.1753 35.4752 14.1773C33.6622 14.6643 31.2672 14.2753 29.6242 13.6903C29.5982 13.6773 29.5712 13.6673 29.5452 13.6613C28.9922 13.4603 28.5292 13.2363 28.2102 13.0193C27.2042 12.3353 26.4162 11.5743 25.8942 11.0713C25.6162 10.8033 25.4422 10.6383 25.3112 10.5513C25.3082 10.5493 25.3062 10.5473 25.3032 10.5453C25.3012 10.5433 25.2982 10.5423 25.2952 10.5403L25.2832 10.5313C25.0642 10.4003 24.2632 10.0453 23.4292 10.0193H23.4212C23.0682 10.0093 22.7122 10.0573 22.3892 10.2073C21.9622 10.4063 21.5182 10.5973 21.0762 10.7693C21.0452 10.7753 21.0152 10.7863 20.9882 10.8023C20.5932 10.9543 20.1972 11.0933 19.8142 11.2103C19.8052 11.2123 19.7972 11.2133 19.7882 11.2153C19.7792 11.2183 19.7712 11.2223 19.7622 11.2263C18.9952 11.4583 18.2802 11.6063 17.7042 11.6273C17.6912 11.6263 17.6792 11.6253 17.6672 11.6263C17.6612 11.6273 17.6552 11.6293 17.6492 11.6293C17.2142 11.6403 16.8602 11.5753 16.6322 11.4123C15.3292 10.4823 11.1372 8.2643 10.9602 8.1693C10.9032 8.1403 10.8402 8.12829 10.7772 8.1363C10.7122 8.1443 9.1582 8.33829 6.7312 9.3343C5.4082 9.8773 3.8482 9.27229 2.6342 8.64229C2.6312 8.64129 2.6292 8.6403 2.6262 8.6383C2.2872 8.4623 1.9742 8.28529 1.7032 8.13029C1.2822 7.89129 0.976201 7.7183 0.757201 7.6563C0.749201 7.6533 0.741201 7.6493 0.732201 7.6483H0.730201C0.650201 7.6273 0.627201 7.6063 0.626201 7.6063C0.596201 7.5373 0.685201 7.26629 0.743201 7.0863C0.832201 6.8163 0.941201 6.4793 0.966201 6.1113C1.0052 5.5233 2.1062 4.2523 2.8032 3.57629C3.4952 2.82829 7.3552 2.9323 9.0042 2.97629C9.3902 2.98629 9.7162 2.9953 9.9462 2.9953C10.5392 2.9953 12.3852 3.26729 14.3402 3.55529C17.0122 3.94729 20.0442 4.39829 21.2302 4.3573C22.3382 4.3243 24.0442 3.80429 25.6942 3.30029C27.1462 2.85729 28.5172 2.43829 29.2122 2.43829C30.0172 2.43829 30.4062 2.2423 30.9452 1.9723C31.5372 1.6753 32.3472 1.2683 34.2392 0.818295C36.8452 0.199295 37.6982 1.1963 38.3212 1.92429C38.5422 2.18129 38.7322 2.4033 38.9712 2.53629C39.8202 3.0083 41.2382 2.6783 41.4672 2.6203C43.2842 2.48029 44.4982 2.67829 45.0732 3.21029C45.4172 3.5283 45.5632 3.96329 45.5632 4.6663C45.5632 5.83229 46.4672 7.1553 46.9522 7.8663C47.0512 8.0113 47.1622 8.1733 47.1882 8.2283C47.2442 8.4173 47.4162 8.52429 47.6522 8.67029C48.0112 8.89429 48.5052 9.2003 48.5392 9.7643L48.5522 10.0063C48.5892 10.7003 48.6002 10.7643 48.9522 11.2143C49.0092 11.2863 49.0762 11.3733 49.1572 11.4813C49.3122 11.6883 49.5402 12.0763 49.8022 12.5263C50.5872 13.8713 51.2472 14.9333 51.8632 15.2803L52.2362 14.7793C51.7342 14.6013 50.8612 13.1063 50.3392 12.2123C50.0672 11.7463 49.8322 11.3433 49.6552 11.1073C49.5712 10.9963 49.5012 10.9063 49.4422 10.8313C49.2032 10.5243 49.2032 10.5243 49.1732 9.9733L49.1592 9.7283C49.1072 8.8423 48.4022 8.40329 47.9802 8.14229C47.9082 8.09729 47.8112 8.0363 47.7682 8.0023C47.7302 7.9043 47.6462 7.7793 47.4672 7.5163C47.0182 6.8603 46.1862 5.6403 46.1862 4.6663C46.1862 4.1183 46.1152 3.32529 45.4962 2.75329C44.7632 2.07629 43.4602 1.83829 41.3902 2.0023C41.3712 2.00329 41.3522 2.00729 41.3342 2.0123C40.9562 2.1133 39.8452 2.30929 39.2742 1.9923C39.1332 1.9133 38.9752 1.73129 38.7952 1.51929C38.1082 0.718295 37.0712 -0.493705 34.0952 0.213295C32.1332 0.679295 31.2502 1.1223 30.6662 1.4153C30.1522 1.6733 29.8712 1.81529 29.2122 1.81529C28.4252 1.81529 27.0102 2.24729 25.5112 2.70429C23.9012 3.1963 22.2362 3.7043 21.2112 3.7353C20.0842 3.7683 17.0782 3.32829 14.4302 2.9393C12.3672 2.6353 10.5852 2.37229 9.9462 2.37229C9.7192 2.37229 9.4002 2.3633 9.0202 2.3543C6.0902 2.2753 3.1612 2.27229 2.3592 3.14229C2.1602 3.33429 0.412201 5.0513 0.344201 6.0703C0.325201 6.3593 0.233201 6.6443 0.151201 6.8943C0.0312008 7.2633 -0.0817992 7.6123 0.0812008 7.9063C0.144201 8.0233 0.246201 8.1103 0.377201 8.1763C0.510201 8.9193 1.1032 11.6663 2.6802 12.0903ZM6.4347 4.0423C5.4447 3.6803 3.1827 3.8103 2.5237 4.5883C2.4537 4.6703 2.4317 4.7813 2.4647 4.8843C2.6247 5.3893 3.1477 6.2453 4.0437 6.2453C4.1507 6.2453 4.2607 6.2343 4.3767 6.2083C4.6027 6.1583 4.8447 6.1173 5.0787 6.0783C6.0257 5.9193 7.0987 5.7383 7.0987 4.7893C7.0987 4.5603 6.9837 4.2433 6.4347 4.0423ZM4.9747 5.4643C4.7337 5.5053 4.4837 5.5473 4.2427 5.60129C3.6247 5.7363 3.2737 5.1793 3.1317 4.8763C3.7167 4.48429 5.4017 4.32629 6.2197 4.6273C6.4127 4.6973 6.4767 4.77229 6.4767 4.7893C6.4767 5.1823 5.8817 5.3123 4.9747 5.4643ZM42.403 4.099C41.447 3.442 40.834 4.054 40.428 4.458C40.303 4.584 40.184 4.703 40.072 4.778C39.716 5.014 38.23 5.176 37.377 5.222C37.238 5.23 37.121 5.33 37.09 5.468C37.06 5.604 37.126 5.744 37.25 5.809C37.548 5.964 40.177 7.32599 40.961 7.391C40.968 7.39199 41.226 7.413 41.578 7.413C42.215 7.413 43.158 7.345 43.46 6.967C43.644 6.735 43.634 6.35399 43.592 6.075C43.501 5.45199 43.139 4.606 42.403 4.099ZM42.976 6.575C42.831 6.72099 41.876 6.845 41.012 6.771C40.647 6.74099 39.519 6.239 38.519 5.751C39.23 5.671 40.065 5.52999 40.416 5.297C40.581 5.186 40.727 5.04 40.87 4.89799C41.308 4.45899 41.542 4.263 42.049 4.613C42.921 5.211 43.072 6.396 42.976 6.575Z"
              fill="#F6F4EF"
            />
          </svg>
        </Parallax>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <Link
          to="/Lagniappe"
          className="hover:border-b-2 hover:border-base cursor-pointer md:mx-14 border-b-2 border-darkGreen my-auto text-base text-4xl"
        >
          Places to stay, Things to do.
        </Link>
      </motion.div>
    </div>
  );
}

export default BodyTwo;
