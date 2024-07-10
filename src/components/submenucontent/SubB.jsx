/* eslint-disable react/prop-types */
export const SubB = ({ b }) => {
  const { title, url } = b;
  return (
    <a
      href={url}
      className="flex justify-start items-center mb-[5px] group hover:text-[#FFCC00] transition-all ease-out"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        className="mr-[6px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8.91656L11.9921 0.937748C11.9921 0.381457 11.6267 0 11.0549 0H3.07346C2.53342 0 2.16016 0.405298 2.16016 0.882119C2.16016 1.35099 2.56519 1.7404 3.04964 1.7404H5.90073L9.26803 1.62914L7.82263 2.90066L0.285903 10.4503C0.103243 10.6411 0 10.8636 0 11.0861C0 11.555 0.428855 12 0.913302 12C1.13567 12 1.35804 11.9046 1.54864 11.7219L9.09332 4.17219L10.3799 2.72583L10.2449 5.95232V8.9404C10.2449 9.43311 10.634 9.84636 11.1185 9.84636C11.595 9.84636 12 9.44106 12 8.91656Z"
          fill="currentColor"
        />
      </svg>
      <p>{title}</p>
    </a>
  );
};
