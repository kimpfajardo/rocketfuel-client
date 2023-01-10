import { FilterMenuObject } from "@helpers/types/plan";
import SelectMenuItem from "./SelectMenuItem";

const style = {
  boxShadow: "0px 7px 12px 1px rgba(0,0,0,0.16)",
};

const SelectMenu = (props: any) => {
  const { showMenu, menu, onChange } = props;
  const isListRenderable = menu && menu.length > 0;
  return (
    <>
      {showMenu && (
        <div
          className="py-4 text-sm text-l-label-primary absolute top-full left-0 z-10 w-full bg-white border border-l-outline-default rounded mb-2"
          style={style}
        >
          {isListRenderable &&
            menu.map((item: FilterMenuObject) => (
              <SelectMenuItem item={item} onChange={onChange} />
            ))}
        </div>
      )}
    </>
  );
};

export default SelectMenu;
