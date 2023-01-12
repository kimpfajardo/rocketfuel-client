import { FilterMenuObject } from "@helpers/types/plan";
import _ from "lodash";
import { useEffect, useState } from "react";

export const useInitializeSelect = (
  menu: FilterMenuObject[],
  defaultValue: FilterMenuObject
) => {
  const [initialMenu, setInitialMenu] = useState<FilterMenuObject[]>(menu);
  const [initialValue, setInitialValue] = useState<FilterMenuObject>(defaultValue);
  useEffect(() => {
    const firstDefaultValue =
      menu.find((item: FilterMenuObject) => {
        return !!item.defaultValue;
      }) ?? undefined;

    const [fallbackDefault] = menu;
    const previewValue = firstDefaultValue ?? defaultValue ?? fallbackDefault;
    const sortedFilterMenu = menu.filter(
      (item: FilterMenuObject) => !_.isEqual(item, firstDefaultValue)
    );
    let finalMenu = [...sortedFilterMenu];
    if (!_.isEmpty(firstDefaultValue)) {
      finalMenu = [firstDefaultValue, ...finalMenu];
    }
    setInitialMenu(finalMenu);
    setInitialValue(previewValue);
  }, []);
  return { initialMenu, initialValue };
};