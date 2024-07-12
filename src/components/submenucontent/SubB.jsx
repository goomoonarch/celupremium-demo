/* eslint-disable react/prop-types */
export const SubB = ({ b }) => {
  const { title, url, classd } = b;
  return (
    <a
      href={url}
      target="_blank"
      className={`${classd} flex w-fit justify-start items-center mb-[5px] group hover:text-[#FFCC00] transition-all ease-out`}
      style={{ opacity: 0, transform: 'translateX(-10px)' }}
    >
      <svg
        width="16"
        height="15"
        viewBox="0 0 11 9"
        className="mr-[6px] rotate-[-45deg]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_314_82)">
          <path
            d="M10.8251 4.49704C10.8251 4.34872 10.7668 4.21227 10.6503 4.09955L6.78536 0.177983C6.65712 0.0474622 6.5347 0 6.39482 0C6.10914 0 5.88763 0.21358 5.88763 0.510218C5.88763 0.652604 5.93429 0.789057 6.02756 0.883982L7.33333 2.23666L9.64756 4.38432L9.76416 4.08768L7.88713 3.96903H0.512983C0.209857 3.96903 0 4.18854 0 4.49704C0 4.80555 0.209857 5.02506 0.512983 5.02506H7.88713L9.76416 4.90641L9.64756 4.6157L7.33333 6.75745L6.02756 8.11009C5.93429 8.19909 5.88763 8.3415 5.88763 8.48386C5.88763 8.78053 6.10914 8.99408 6.39482 8.99408C6.5347 8.99408 6.65712 8.94072 6.77372 8.82797L10.6503 4.89454C10.7668 4.78182 10.8251 4.64536 10.8251 4.49704Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_314_82">
            <rect width="11" height="9" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p>{title}</p>
    </a>
  );
};
