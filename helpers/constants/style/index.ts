export interface InputVariantArgs {
  textColor?: string;
  color?: string;
}

export const inputVariantObject = (style?: InputVariantArgs) => {
  return {
    outline: {
      border: {
        default: "border border-l-outline-default",
        disabled: "border border-l-label-disabled",
      },
      label: {
        default: style?.textColor ?? "text-l-label-secondary",
        disabled: "text-l-label-disabled",
      },
    },
    flat: {
      border: {
        default: `border-0 ${style?.color}`,
        disabled: "border border-l-label-disabled",
      },
      label: {
        default: style?.textColor ?? "text-l-label-secondary",
        disabled: "text-l-label-disabled",
      },
    },
    error: {
      border: {
        default: "border border-l-outline-error",
        disabled: "",
      },
    },
  };
};
