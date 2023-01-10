import useClickAway from "@components/common/ClickAwayListener";
import { FilterMenuObject } from "@helpers/types/plan";
import { useRef } from "react";
import { useState } from "react";
import SelectMenu from "./SelectMenu";
import SelectHeader from "./SelectHeader";

const Select = (props: any) => {
  const {
    startAdornment,
    defaultValue,
    label,
    name,
    menu,
    placeholder,
    placeholderOnly = false,
    variant = "outline", // outline solid flat
    bgColor = "bg-l-int-default",
    cn,
    menuCn,
    width,
    dynamicAdornment = false
  } = props;
  const selectRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [value, setValue] = useState<FilterMenuObject | null>(defaultValue ?? null);
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

  const className = () => {
    const border = isOutline ? "border border-l-outline-default" : "";
    const bg = isSolid ? bgColor : "bg-transparent";
    const textColor = isSolid ? "text-l-label-reverse" : "text-l-label-primary";
    const additionalClassName = "rounded pl-4 p-2 relative select-none";
    const generatedClassName = `${border} ${bg} ${textColor} ${additionalClassName} ${cn} `;

    return generatedClassName;
  };

  return (
    <div className={className()} id={name} ref={selectRef} onClick={toggleMenu}>
      <SelectHeader
        startAdornment={startAdornment}
        displayValue={displayValue}
        value={value}
        isSolid={isSolid}
        dynamicAdornment={dynamicAdornment}
      />
      <SelectMenu
        showMenu={showMenu}
        menu={menu}
        onChange={onChangeHandler}
        menuCn={`${menuCn}`}
        width={width}
      />
    </div>
  );
};

export default Select;
