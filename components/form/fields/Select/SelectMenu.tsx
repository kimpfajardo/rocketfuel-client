import { FilterMenuObject } from "@helpers/types/plan";
import SelectMenuItem from "./SelectMenuItem";
import { Fragment } from "react";
import SelectMenuDivider from "./SelectMenuDivider";

const SelectMenu = (props: any) => {
  const { showMenu, menu, onChange, menuCn, width, isDefaultValueSeparate } =
    props;
  const isListRenderable = menu && menu.length > 0;
  const style = {
    boxShadow: "0px 7px 12px 1px rgba(0,0,0,0.16)",
    width,
  };

  return (
    <>
      {showMenu && (
        <div
          className={`${menuCn} mt-1 py-4 text-sm text-l-label-primary absolute top-full z-10 bg-white border border-l-outline-default rounded mb-2`}
          style={style}
        >
          {isListRenderable &&
            menu.map((item: FilterMenuObject, index: number) => (
              <Fragment key={`${item.label}-${item.value}-${index}`}>
                <SelectMenuItem item={item} onChange={onChange} />
                <SelectMenuDivider
                  isDefaultValueSeparate={isDefaultValueSeparate}
                  index={index}
                />
              </Fragment>
            ))}
        </div>
      )}
    </>
  );
};

export default SelectMenu;
