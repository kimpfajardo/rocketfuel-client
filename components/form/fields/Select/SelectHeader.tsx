import Image from "next/image";
import AdornmentContainer from "../AdornmentContainer";
import { CHEVRON } from "@helpers/constants/images/url";

const SelectHeader = (props: any) => {
  const { startAdornment, displayValue } = props;
  return (
    <div className="flex items-center gap-4">
      <AdornmentContainer startAdornment={startAdornment}>
        <p className="text-sm text-l-label-secondary">{displayValue}</p>
      </AdornmentContainer>
      <Image src={CHEVRON} width={16} height={16} alt="" />
    </div>
  );
};

export default SelectHeader