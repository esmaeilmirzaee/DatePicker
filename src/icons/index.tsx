export const ChevronLeft = ({
  style = { height: "16px", width: "16px" },
  className = "h-6 w-6"
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

export const ChevronRight = ({
  style = { height: "16px", width: "16px" },
  className = "h-6 w-6"
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);
