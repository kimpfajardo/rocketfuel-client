export interface PlanFilterObject {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  label: string;
  menu?: FilterMenuObject[];
  placeholder: string
  defaultValue?: FilterMenuObject
  width?: string
  dynamicAdornment?: boolean
}

export interface FilterMenuObject {
  label: string
  value: any
  startAdornment?: React.ReactNode
  disabled?: boolean
}