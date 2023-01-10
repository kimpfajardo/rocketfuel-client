export interface PlanFilterObject {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  label: string;
  menu?: FilterMenuObject[];
  placeholder: string
  defaultValue?: FilterMenuObject
}

export interface FilterMenuObject {
  label: string
  value: any
}