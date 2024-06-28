const QuestionIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke={props.color ? props.color : "#33333"}
        stroke-width="1.2"
      />
      <circle
        cx="12"
        cy="18"
        r="0.6"
        fill={props.color ? props.color : "#333333"}
        stroke={props.color ? props.color : "#333333"}
        stroke-width="0.2"
      />
      <path
        d="M12 16V15.1432C12 14.429 12.357 13.762 12.9512 13.3659L13.5497 12.9669C14.4558 12.3628 15 11.3459 15 10.2569V10C15 8.34315 13.6569 7 12 7V7C10.3431 7 9 8.34315 9 10V10"
        stroke={props.color ? props.color : "#333333"}
        stroke-width="1.2"
      />
    </svg>
  );
};

export default QuestionIcon;