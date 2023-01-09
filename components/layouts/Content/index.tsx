import { LayoutProps } from "@helpers/types/layout";
import PageHeader from "./Header";
import Main from "./Main";

const Content = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className="w-full h-full grid-cols-1 grid grid-rows-[auto_1fr]">
      <PageHeader />
      <Main>{children}</Main>
    </div>
  );
};

export default Content