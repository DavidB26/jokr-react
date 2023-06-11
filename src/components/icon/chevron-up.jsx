function ChevronUp({size, color}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 7.96835L19.5 15.4684L18.45 16.5184L12 10.0684L5.55 16.5184L4.5 15.4684L12 7.96835Z"
        fill={color}
      />
    </svg>
  );
}

export default ChevronUp;
