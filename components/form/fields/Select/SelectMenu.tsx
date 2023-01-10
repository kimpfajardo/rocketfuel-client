import { FilterMenuObject } from "@helpers/types/plan";
import SelectMenuItem from "./SelectMenuItem";



const SelectMenu = (props: any) => {
  const { showMenu, menu, onChange, menuCn,width } = props;
  const isListRenderable = menu && menu.length > 0;
  const style = {
    boxShadow: "0px 7px 12px 1px rgba(0,0,0,0.16)",
    width
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
              <SelectMenuItem
                key={`${item.label}-${item.value}-${index}`}
                item={item}
                onChange={onChange}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default SelectMenu;
