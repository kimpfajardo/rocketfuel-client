import Image from "next/image"
import { CALENDAR, COINS } from "../images/url";
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
    label: 'Test Value',
    value: 'Test Value'
  },
  {
    label: 'Test Value',
    value: 'Test Value'
  },
  {
    label: 'Test Value',
    value: 'Test Value'
  },
  {
    label: 'Test Value',
    value: 'Test Value'
  },
  {
    label: 'Test Value',
    value: 'Test Value'
  },
  {
    label: 'Test Value',
    value: 'Test Value'
  },
  {
    label: 'Test Value',
    value: 'Test Value'
  },
  {
    label: 'Test Value',
    value: 'Test Value'
  },
  {
    label: 'Test Value',
    value: 'Test Value'
  },
  {
    label: 'Test Value',
    value: 'Test Value'
  },
  {
    label: 'Test Value',
    value: 'Test Value'
  },
  {
    label: 'Test Value',
    value: 'Test Value'
  },
  {
    label: 'Test Value',
    value: 'Test Value'
  },
  {
    label: 'Test Value',
    value: 'Test Value'
  },
]

const planFilters: PlanFilterObject[] = [
  {
    startAdornment: <Image src={CALENDAR} width={16} height={16} alt="" />,
    label: "Date",
    menu: MockMenu,
    placeholder: "Select one",
    defaultValue: {
      label: 'November 2020',
      value: 'November 2020'
    }
  },
  {
    startAdornment: <Image src={COINS} width={16} height={16} alt="" />,
    label: "Efficiency",
    menu: MockMenu,
    placeholder: "Efficiency",
  },
  {
    label: "Types",
    menu: MockMenu,
    placeholder: "All types",
  },
  {
    label: "Sources",
    menu: MockMenu,
    placeholder: "All sources",
  },
  {
    label: "Duration",
    menu: MockMenu,
    placeholder: "4 Months",
  },
];

export default planFilters