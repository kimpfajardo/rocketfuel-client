import { inter } from "../../../helpers/constants/font/inter";
import { inputVariantObject } from "../../../helpers/constants/style";
import styles from "../../../styles/Select.module.css";

export interface SelectProps<OptionsType> {
  label?: string;
  value?: any;
  error?: string;
  variant?: "outline" | "flat";
  disabled?: boolean;
  defaultValue?: string;
  options?: OptionsType[];
  icon?: string;
  width?: string;
}

interface OptionsProp {
  label: string;
  value: string;
}

const SelectInput = (props: SelectProps<OptionsProp>) => {
  const {
    label = "",
    value,
    error = undefined,
    variant = "outline",
    disabled = false,
    defaultValue = "",
    options,
    icon = undefined,
  } = props;

  const generateClass = () => {
    return `focus:shadow-[0_0_0_2px_#9AB5F9] focus:outline-none focus:border-l-outline-active ${
      inputVariantObject[error !== undefined ? "error" : variant].border[
        !disabled ? "default" : "disabled"
      ]
    }`;
  };

  const inputClassName = `px-4 py-2 flex items-center text-sm pr-10 rounded disabled:text-l-label-disabled ${generateClass()}`;

  const inputProps = {
    disabled,
    defaultValue,
  };

  return (
    <>
      <div>
        {label !== "" ? (
          <p
            className={`mb-2 text-sm font-medium ${
              inputVariantObject[variant].label[
                !disabled ? "default" : "disabled"
              ]
            }`}
            aria-disabled={disabled}
          >
            {label}
          </p>
        ) : (
          ""
        )}
        <div className={`${styles.selectWrapper} ${inputClassName}`}>
          {icon !== undefined ? (
            <img className="absolute z-[-1]" src={icon} alt={"icon"} />
          ) : (
            ""
          )}
          <select
            className={`border-transparent bg-transparent text-l-label-secondary ${
              inter.className
            } focus:outline-none w-full ${
              icon !== undefined ? "pl-[34px]" : ""
            }`}
            {...inputProps}
          >
            <option value="">{defaultValue}</option>
            {options?.map((item: any) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
          <img
            className="absolute right-[12px] z-[-1]"
            src="/images/chevron.svg"
            alt="V"
            onClick={(e) => e.preventDefault()}
          />
        </div>
      </div>
      {error && !disabled ? (
        <p className="text-l-label-dangerous text-xs mt-2">{error}</p>
      ) : (
        ""
      )}
    </>
  );
};

export default SelectInput;
