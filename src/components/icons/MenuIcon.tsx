function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <g
        fill="#fff"
        stroke="#fff"
        strokeWidth="0.3"
        clipPath="url(#clip0_0_142)"
      >
        <path d="M12 .6h0A11.4 11.4 0 1023.4 12v0A11.413 11.413 0 0012 .6zm0 23.25A11.85 11.85 0 1123.85 12 11.863 11.863 0 0112 23.85z"></path>
        <path d="M17.813 8.1H6.188a.225.225 0 010-.45h11.625a.225.225 0 110 .45zm0 4.125H6.188a.225.225 0 110-.45h11.625a.225.225 0 110 .45zm0 4.125H6.188a.225.225 0 110-.45h11.625a.225.225 0 110 .45z"></path>
      </g>
      <defs>
        <clipPath id="clip0_0_142">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default MenuIcon;
