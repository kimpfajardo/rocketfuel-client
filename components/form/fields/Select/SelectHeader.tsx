import Image from "next/image";
import AdornmentContainer from "../AdornmentContainer";
import { CHEVRON, CHEVRON_WHITE } from "@helpers/constants/images/url";
import React from "react";

const SelectHeader = (props: any) => {
  const { startAdornment, displayValue, isSolid, isDynamicAdornment, value } =
    props;
  const chevronIcon = isSolid ? CHEVRON_WHITE : CHEVRON;
  const adornment = isDynamicAdornment
    ? value?.startAdornment ?? startAdornment
    : startAdornment;
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      <AdornmentContainer startAdornment={adornment}>
        <p className="text-sm">{displayValue}</p>
      </AdornmentContainer>
      <Image src={chevronIcon} width={16} height={16} alt="" />
    </div>
  );
};

export default SelectHeader;
