import SelectInput from "@components/form/fields/SelectInput";
import Image from "next/image";

const PageHeader = () => {
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

export default PageHeader