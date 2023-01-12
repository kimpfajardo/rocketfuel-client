import { useEffect, useMemo } from "react";

enum DividerOrientation {
  h = "horizontal",
  v = "vertical",
}

export type OrientationType = DividerOrientation.h | DividerOrientation.v;

export interface DividerProp {
  orienatation?: OrientationType;
}

const Divider = (props: any) => {
  const { orientation = "horizontal" } = props;

  const className = useMemo(() => {
    const isHorizontal = orientation === DividerOrientation.h;
    const generatedClassName = isHorizontal
      ? "my-2 border-b border-l-outline-default"
      : "mx-2 border-r border-l-outline-default";
    return generatedClassName;
  }, [orientation]);


  return <div className={className}></div>;
};

export default Divider;
