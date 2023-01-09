import { MainProps } from "@helpers/types/layout";

const Main = (props: MainProps) => {
  const { children } = props;
  return <main className="bg-lightgray overflow-y-scroll">{children}</main>;
};

export default Main