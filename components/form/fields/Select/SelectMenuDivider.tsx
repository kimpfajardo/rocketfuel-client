import Divider from "@components/common/Divider";
import { MenuDividerProps } from "@helpers/types/select";

const SelectMenuDivider = (props: MenuDividerProps) => {
  const { isDefaultValueSeparate, index } = props;
  const isFirstElement = index === 0;
  const isDividerVisible = isDefaultValueSeparate && isFirstElement;
  return <>{isDividerVisible && <Divider />}</>;
};

export default SelectMenuDivider;
