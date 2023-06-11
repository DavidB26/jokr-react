function ChevronDown({size,color}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16.9683L4.5 9.46833L5.55 8.41833L12 14.8683L18.45 8.41833L19.5 9.46833L12 16.9683Z"
        fill={color}
      />
    </svg>
  );
}

export default ChevronDown;
