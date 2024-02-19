import PropTypes from "prop-types";

const Button = ({ text, icon, isOutline, ...rest }) => {
  return (
    <button
      className={
        isOutline
          ? "w-full bg-transparent text-black text-sm leading-4 flex justify-center items-center gap-2 font-semibold  border border-black rounded-md min-h-12 py-[8px] px-[18px]"
          : "w-1/2 bg-black text-white text-sm leading-4 flex justify-center items-center gap-2 font-semibold rounded-md cursor-pointer min-h-12 py-[8px] px-[14px]"
      }
      {...rest}
    >
      {icon}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  isOutline: PropTypes.bool.isRequired,
};

export default Button;
