/* eslint-disable react/prop-types */
export const WorkWithUs = ({ classd }) => {
  return (
    <a
      href=""
      className={`${classd} flex items-center group hover:text-[#FFCC00] transition-all ease-out`}
      style={{ opacity: 0, transform: "translateX(-4px)" }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 25 25"
        className="mr-[2px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2345_131343)">
          <path
            d="M24.3945 12.6523C24.3945 19.1797 18.9805 24.6054 12.4414 24.6054C5.91406 24.6054 0.488281 19.1797 0.488281 12.6523C0.488281 6.11328 5.90234 0.699219 12.4297 0.699219C18.9688 0.699219 24.3945 6.11328 24.3945 12.6523ZM12.4414 9.14844C11.8321 8.04688 10.836 7.3086 9.53516 7.3086C7.48437 7.3086 6.00781 8.85547 6.00781 11C6.00781 14.164 9.35937 17.0937 11.8321 18.664C12.043 18.793 12.3125 18.957 12.4649 18.957C12.6172 18.957 12.8516 18.8047 13.0391 18.664C15.5 17.0586 18.875 14.164 18.875 11C18.875 8.85547 17.3867 7.3086 15.3477 7.3086C14.0586 7.3086 13.0391 8.04688 12.4414 9.14844Z"
            fill="currentColor"
            fillOpacity="0.85"
          />
        </g>
        <defs>
          <clipPath id="clip0_2345_131343">
            <rect
              width="24.2578"
              height="23.918"
              fill="white"
              transform="translate(0.488281 0.699219)"
            />
          </clipPath>
        </defs>
      </svg>
      <p>Trabaja con nosotros</p>
    </a>
  );
};
