/* eslint-disable react/prop-types */
export const SearchButton = ({ className, onClick, isActive }) => {
  return (
    <div
      className={`${className} ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_147_316)">
          <path
            d="M0 9.35156C0 14.5078 4.19531 18.7031 9.35156 18.7031C11.3906 18.7031 13.2539 18.0469 14.7891 16.9453L20.5547 22.7227C20.8242 22.9922 21.1758 23.1211 21.5508 23.1211C22.3477 23.1211 22.8984 22.5234 22.8984 21.7383C22.8984 21.3633 22.7578 21.0234 22.5117 20.7773L16.7812 15.0117C17.9883 13.4414 18.7031 11.4844 18.7031 9.35156C18.7031 4.19531 14.5078 0 9.35156 0C4.19531 0 0 4.19531 0 9.35156ZM2.00391 9.35156C2.00391 5.29688 5.29688 2.00391 9.35156 2.00391C13.4062 2.00391 16.6992 5.29688 16.6992 9.35156C16.6992 13.4062 13.4062 16.6992 9.35156 16.6992C5.29688 16.6992 2.00391 13.4062 2.00391 9.35156Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_147_316">
            <rect width="23.25" height="23.1211" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
