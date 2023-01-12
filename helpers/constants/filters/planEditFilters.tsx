import Image from "next/image";
import { COINS_GRAY, SETTINGS, STAR } from "../images/url";

const PlanEditMenu = [
  {
    label: "Goals and budgets",
    startAdornment: (
      <div className="w-4 fill-black">
        <Image className="w-4" src={STAR} width={16} height={16} alt="" />
      </div>
    ),
    value: "goals-budgets",
  },
  {
    label: "Manually input spend",
    startAdornment: (
      <div className="w-4">
        <Image className="w-4" src={COINS_GRAY} width={16} height={16} alt="" />
      </div>
    ),
    value: "input-spend",
    disabled: true,
  },
  {
    label: "Manage sources",
    startAdornment: (
      <div className="w-4">
        <Image className="w-4" src={SETTINGS} width={16} height={16} alt="" />
      </div>
    ),
    value: "manage-sources",
  },
];

export default PlanEditMenu;
