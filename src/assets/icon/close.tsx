const close = ( {className }: {className?: string}) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.757812 11.2428L6.00081 5.99984L11.2438 11.2428M11.2438 0.756836L5.99981 5.99984L0.757812 0.756836"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default close;
