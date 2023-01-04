import Image from "next/image";
import Sidebar from "./Sidebar";
import SelectInput from "../form/fields/SelectInput";

interface LayoutProps {
  children: React.ReactNode;
}

const Header = () => {
  const style = {
    color: "bg-l-int-default",
    textColor: "text-l-label-reverse",
  };
  return (
    <div className="h-[64px] w-full flex justify-between items-center bg-white px-6 border-b border-gray">
      <div className="flex gap-x-5">
        <Image
          src="/images/sidebar/map.svg"
          width={24}
          height={24}
          alt="plan"
        />
        <h1 className="text-xl inter font-semibold text-l-label-primary">
          Plan
        </h1>
      </div>
      <div className="flex items-center gap-x-7">
        <button>
          <Image
            className="fill-l-label-primary"
            src="/images/menu-dots.svg"
            width={11}
            height={1.5}
            alt="menu"
          />
        </button>
        <SelectInput
          icon="/images/edit-outline.svg"
          variant="flat"
          style={style}
          defaultValue="Edit"
        />
      </div>
    </div>
  );
};

export interface MainProps {
  children: React.ReactNode;
}
const Main = (props: MainProps) => {
  const { children } = props;
  return <main className="bg-lightgray overflow-y-scroll">{children}</main>;
};

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className={"flex h-screen inter"}>
      <Sidebar />
      <div className="w-full h-full grid-cols-1 grid grid-rows-[auto_1fr]">
        <Header />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default Layout;
