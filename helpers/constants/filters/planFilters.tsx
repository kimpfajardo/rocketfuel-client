import Image from "next/image";
import {
  APPLE,
  BING,
  CALENDAR,
  COINS,
  COINS_GRAY,
  FB,
  FUNNEL,
  GOOGLE,
  INSTRAGRAM,
  LINKEDIN,
  MISC,
} from "../images/url";
import { PlanFilterObject } from "@helpers/types/plan";
import {
  DurationMenu,
  EfficiencyMenu,
  SourcesMenu,
  TypesMenu,
} from "./planFilterMenus";

const planFilters: PlanFilterObject[] = [
  {
    startAdornment: <Image src={CALENDAR} width={16} height={16} alt="" />,
    label: "Date",
    menu: [
      {
        label: "November 2020",
        value: "",
      },
    ],
    placeholder: "Select one",
    width: "253px",
  },
  {
    startAdornment: <Image src={COINS_GRAY} width={16} height={16} alt="" />,
    label: "Efficiency",
    menu: EfficiencyMenu,
    placeholder: "Efficiency",
    width: "253px",
    isDynamicAdornment: true,
  },
  {
    label: "Types",
    menu: TypesMenu,
    placeholder: "All types",
    width: "216px",
    isDefaultValueSeparate: true,
  },
  {
    label: "Sources",
    menu: SourcesMenu,
    placeholder: "All sources",
    width: "216px",
    isDynamicAdornment: true,
    isDefaultValueSeparate: true,
  },
  {
    label: "Duration",
    menu: DurationMenu,
    placeholder: "4 Months",
    width: "127px",
  },
];

export default planFilters;
