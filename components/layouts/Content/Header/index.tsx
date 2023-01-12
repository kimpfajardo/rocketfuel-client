import Select from "@components/form/fields/Select";
import PlanEditMenu from "@helpers/constants/filters/planEditFilters";
import { EDIT, MAP } from "@helpers/constants/images/url";
import Image from "next/image";

const PageHeaderTitle = (props: any) => {
  const { title } = props;
  return (
    <h1 className="text-xl inter font-semibold text-l-label-primary">
      {title}
    </h1>
  );
};

const PageHeaderIcon = (props: any) => {
  const { icon, alt } = props;
  return <Image src={icon} width={24} height={24} alt={alt} />;
};

const PageHeader = (props: any) => {
  const { title = "Plan", icon = MAP, headerContent } = props;
  const HeaderContent = () => {
    return headerContent ?? <></>;
  };

  return (
    <div className="h-[64px] w-full flex justify-between items-center bg-white px-6 border-b border-gray">
      <div className="flex gap-x-5">
        <PageHeaderIcon icon={icon} alt={`${title}-icon`} />
        <PageHeaderTitle title={title} />
      </div>
      <HeaderContent />
      
    </div>
  );
};

export default PageHeader;
