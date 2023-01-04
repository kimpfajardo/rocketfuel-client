import { InputVariantArgs, inputVariantObject } from "../../../helpers/constants/style";

export interface InputProps {
  type?: any;
  label: string;
  value?: any;
  error?: string;
  variant?: "outline" | "flat";
  disabled?: boolean;
  placeholder?: string;
  style: InputVariantArgs
}

const Input = (props: InputProps) => {
  const {
    type = "text",
    label = "",
    value,
    error = undefined,
    variant = "outline",
    disabled = false,
    placeholder = "Value",
    style
  } = props;

  const generateClass = () => {
    return `focus:shadow-[0_0_0_2px_#9AB5F9] focus:outline-none focus:border-l-outline-active ${
      inputVariantObject(style)[error !== undefined ? "error" : variant].border[
        !disabled ? "default" : "disabled"
      ]
    }`;
  };

  const inputClassName = `px-4 py-2 text-sm rounded disabled:text-l-label-disabled ${generateClass()}`;

  const inputProps = {
    className: inputClassName,
    type,
    disabled,
    placeholder,
  };

  return (
    <>
      <label>
        <p
          className={`mb-2 text-sm font-medium ${
            inputVariantObject(style)[variant].label[
              !disabled ? "default" : "disabled"
            ]
          }`}
          aria-disabled={disabled}
        >
          {label}
        </p>
        <input {...inputProps} />
      </label>
      {error && !disabled ? (
        <p className="text-l-label-dangerous text-xs mt-2">{error}</p>
      ) : (
        ""
      )}
    </>
  );
};

export default Input;
