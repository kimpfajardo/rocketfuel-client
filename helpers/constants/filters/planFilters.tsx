import Image from "next/image";
import { APPLE, BING, CALENDAR, COINS, COINS_GRAY, FB, FUNNEL, GOOGLE, INSTRAGRAM, LINKEDIN, MISC } from "../images/url";
import { PlanFilterObject } from "@helpers/types/plan";

const DateMenu = [
  {
    label: "January 2020",
    value: "January 2020",
  },
  {
    label: "February 2020",
    value: "February 2020",
  },
];

const MockMenu = [
  {
    label: "Test Value",
    value: "Test Value",
  },
  {
    label: "Test Value",
    value: "Test Value",
  },
  {
    label: "Test Value",
    value: "Test Value",
  },
  {
    label: "Test Value",
    value: "Test Value",
  },
  {
    label: "Test Value",
    value: "Test Value",
  },
  {
    label: "Test Value",
    value: "Test Value",
  },
  {
    label: "Test Value",
    value: "Test Value",
  },
  {
    label: "Test Value",
    value: "Test Value",
  },
  {
    label: "Test Value",
    value: "Test Value",
  },
  {
    label: "Test Value",
    value: "Test Value",
  },
  {
    label: "Test Value",
    value: "Test Value",
  },
  {
    label: "Test Value",
    value: "Test Value",
  },
  {
    label: "Test Value",
    value: "Test Value",
  },
  {
    label: "Test Value",
    value: "Test Value",
  },
];

const SourcesMenu = [
  {
    label: "All sources",
    value: "",
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

const EfficiencyMenu = [
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

const planFilters: PlanFilterObject[] = [
  {
    startAdornment: <Image src={CALENDAR} width={16} height={16} alt="" />,
    label: "Date",
    menu: [
      {
        label: 'November 2020',
        value: ''
      }
    ],
    placeholder: "Select one",
    defaultValue: {
      label: "November 2020",
      value: "November 2020",
    },
    width: "253px",
  },
  {
    startAdornment: <Image src={COINS_GRAY} width={16} height={16} alt="" />,
    label: "Efficiency",
    menu: EfficiencyMenu,
    placeholder: "Efficiency",
    defaultValue: {
      label: "Efficiency",
      value: "Efficiency",
      startAdornment: <Image src={COINS} width={16} height={16} alt="" />,
    },
    width: "253px",
    dynamicAdornment: true,
  },
  {
    label: "Types",
    menu: [
      {
        label: 'All types',
        value: ''
      },
      {
        label: 'Paid search',
        value: ''
      },
      {
        label: 'Paid social',
        value: ''
      },
      {
        label: 'Organic search',
        value: ''
      },
      {
        label: 'Organic social',
        value: ''
      },
      {
        label: 'Email marketing',
        value: ''
      },
      {
        label: 'Referrals',
        value: ''
      },
      {
        label: 'Direct traffic',
        value: ''
      },
      {
        label: 'Offline sources',
        value: ''
      },
      {
        label: 'Other campaigns',
        value: ''
      },
    ],
    placeholder: "All types",
    width: "216px",
  },
  {
    label: "Sources",
    menu: SourcesMenu,
    placeholder: "All sources",
    width: "216px",
  },
  {
    label: "Duration",
    menu: [
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
    ],
    placeholder: "4 Months",
    width: "127px",
  },
];

export default planFilters;
