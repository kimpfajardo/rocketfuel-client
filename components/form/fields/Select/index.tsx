import useClickAway from "@components/common/ClickAwayListener";
import { FilterMenuObject } from "@helpers/types/plan";
import { useRef } from "react";
import { useState } from "react";
import SelectMenu from "./SelectMenu";
import SelectHeader from "./SelectHeader";


const Select = (props: any) => {
  const { startAdornment, defaultValue, label, name, menu, placeholder } =
    props;
  const selectRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [value, setValue] = useState<FilterMenuObject | null>(null);
  const displayValue = value ? value.label : defaultValue?.label ?? placeholder;

  useClickAway(selectRef, () => {
    setShowMenu(false);
  });

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const onChangeHandler = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <div
      className="border border-l-outline-default rounded pl-4 p-2 relative select-none"
      id={name}
      ref={selectRef}
      onClick={toggleMenu}
    >
      <SelectHeader startAdornment={startAdornment} displayValue={displayValue} />
      <SelectMenu showMenu={showMenu} menu={menu} onChange={onChangeHandler} />
    </div>
  );
};

export default Select;
