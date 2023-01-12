import useClickAway from "../../../../hooks/useClickAway";
import { FilterMenuObject } from "@helpers/types/plan";
import { useMemo, useRef, Fragment } from "react";
import { useState } from "react";
import SelectMenu from "./SelectMenu";
import SelectHeader from "./SelectHeader";
import _ from "lodash";
import { useInitializeSelect } from "./hooks";
import { InputVariant } from "@helpers/types/input";

export interface SelectProps {
  startAdornment?: React.ReactNode;
  defaultValue?: FilterMenuObject;
  label?: string;
  displayLabel?: boolean;
  name: string;
  menu: FilterMenuObject[];
  placeholder?: string;
  placeholderOnly?: boolean;
  variant: InputVariant;
  bgColor?: string;
  cn?: string;
  menuCn?: string;
  width?: string;
  isDynamicAdornment?: boolean;
  isDefaultValueSeparate?: boolean;
}

const Select = (props: SelectProps) => {
  const {
    startAdornment,
    defaultValue,
    label = "",
    displayLabel = true,
    name,
    menu,
    placeholder,
    placeholderOnly = false,
    variant = "outline", // outline solid flat
    bgColor = "bg-l-int-default",
    cn,
    menuCn,
    width,
    isDynamicAdornment = false,
    isDefaultValueSeparate = false,
  } = props;
  const selectRef = useRef<HTMLDivElement>(null);
  const { initialMenu, initialValue } = useInitializeSelect(
    menu,
    defaultValue as FilterMenuObject
  );
  const [showMenu, setShowMenu] = useState(false);
  const [value, setValue] = useState<FilterMenuObject | null>(
    initialValue ?? null
  );
  const initialDefaultValue = initialValue;
  const filterMenu = initialMenu;
  const nonPlaceHolderValue = value
    ? value.label
    : defaultValue?.label ?? placeholder;
  const displayValue = placeholderOnly ? placeholder : nonPlaceHolderValue;
  const isOutline = variant === "outline";
  const isSolid = variant === "solid";

  useClickAway(selectRef, () => {
    setShowMenu(false);
  });

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const onChangeHandler = (newValue: any) => {
    if (placeholderOnly) return;
    setValue(newValue);
  };

  const className = useMemo(() => {
    const border = isOutline ? "border border-l-outline-default" : "";
    const bg = isSolid ? bgColor : "bg-transparent";
    const textColor = isSolid ? "text-l-label-reverse" : "text-l-label-primary";
    const additionalClassName = "rounded pl-4 p-2 relative select-none";
    const generatedClassName = `${border} ${bg} ${textColor} ${additionalClassName} ${cn} `;

    return generatedClassName;
  }, []);

  return (
    <div className='flex flex-col gap-1'>
      {displayLabel && <p>{label}</p>}
      <div className={className} id={name} ref={selectRef} onClick={toggleMenu}>
        <SelectHeader
          startAdornment={startAdornment}
          displayValue={displayValue}
          value={value}
          isSolid={isSolid}
          isDynamicAdornment={isDynamicAdornment}
        />
        <SelectMenu
          showMenu={showMenu}
          menu={filterMenu}
          onChange={onChangeHandler}
          menuCn={`${menuCn}`}
          width={width}
          initialDefaultValue={initialDefaultValue}
          isDefaultValueSeparate={isDefaultValueSeparate}
        />
      </div>
    </div>
  );
};

export default Select;
