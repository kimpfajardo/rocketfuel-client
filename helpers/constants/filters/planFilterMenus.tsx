import Image from "next/image";
import {
  APPLE,
  BING,
  COINS,
  FB,
  FUNNEL,
  GOOGLE,
  INSTRAGRAM,
  LINKEDIN,
  MISC,
} from "../images/url";
import { FilterMenuObject } from "@helpers/types/plan";

export const SourcesMenu: FilterMenuObject[] = [
  {
    label: "All sources",
    value: "",
    defaultValue: true,
  },
  {
    label: "Apple Ads",
    value: "",
    startAdornment: <Image src={APPLE} width={16} height={16} alt="" />,
  },
  {
    label: "Bing",
    value: "",
    startAdornment: <Image src={BING} width={16} height={16} alt="" />,
  },
  {
    label: "Capterra",
    value: "",
    startAdornment: <Image src={MISC} width={16} height={16} alt="" />,
  },
  {
    label: "Google",
    value: "",
    startAdornment: <Image src={GOOGLE} width={16} height={16} alt="" />,
  },
  {
    label: "Facebook",
    value: "",
    startAdornment: <Image src={FB} width={16} height={16} alt="" />,
  },
  {
    label: "Instagram",
    value: "",
    startAdornment: <Image src={INSTRAGRAM} width={16} height={16} alt="" />,
  },
  {
    label: "LinkedIn",
    value: "",
    startAdornment: <Image src={LINKEDIN} width={16} height={16} alt="" />,
  },
];

export const EfficiencyMenu: FilterMenuObject[] = [
  {
    label: "Efficiency",
    value: "Efficiency",
    startAdornment: <Image src={COINS} width={16} height={16} alt="" />,
  },
  {
    label: "Funnel",
    value: "Funnel",
    startAdornment: <Image src={FUNNEL} width={16} height={16} alt="" />,
  },
];

export const TypesMenu: FilterMenuObject[] = [
  {
    label: "All types",
    value: "",
    defaultValue: true,
  },
  {
    label: "Paid search",
    value: "",
  },
  {
    label: "Paid social",
    value: "",
  },
  {
    label: "Organic search",
    value: "",
  },
  {
    label: "Organic social",
    value: "",
  },
  {
    label: "Email marketing",
    value: "",
  },
  {
    label: "Referrals",
    value: "",
  },
  {
    label: "Direct traffic",
    value: "",
  },
  {
    label: "Offline sources",
    value: "",
  },
  {
    label: "Other campaigns",
    value: "",
  },
];

export const DurationMenu: FilterMenuObject[] = [
  {
    label: "3 month",
    value: 3,
  },
  {
    label: "4 month",
    value: 4,
  },
  {
    label: "9 month",
    value: 9,
  },
  {
    label: "12 month",
    value: 12,
  },
];
