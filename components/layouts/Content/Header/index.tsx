import Select from "@components/form/fields/Select";
import SelectInput from "@components/form/fields/SelectInput";
import {
  COINS_GRAY,
  EDIT,
  SETTINGS,
  STAR,
} from "@helpers/constants/images/url";
import Image from "next/image";

const PageHeader = () => {
  const style = {
    color: "bg-l-int-default",
    textColor: "text-l-label-reverse",
  };

  const planEditMenu = [
    {
      label: "Goals and budgets",
      startAdornment: (
        <div className="w-4 fill-black">
          <Image className="w-4" src={STAR} width={16} height={16} alt="" />
        </div>
      ),
      value: "goals-budgets",
    },
    {
      label: "Manually input spend",
      startAdornment: (
        <div className="w-4">
          <Image
            className="w-4"
            src={COINS_GRAY}
            width={16}
            height={16}
            alt=""
          />
        </div>
      ),
      value: "input-spend",
      disabled: true,
    },
    {
      label: "Manage sources",
      startAdornment: (
        <div className="w-4">
          <Image className="w-4" src={SETTINGS} width={16} height={16} alt="" />
        </div>
      ),
      value: "manage-sources",
    },
  ];
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
        <Select
          variant="solid"
          placeholder="Edit"
          placeholderOnly
          startAdornment={<Image src={EDIT} width={16} height={16} alt="" />}
          cn={"font-medium text-l-label-reverse"}
          menu={planEditMenu}
          menuCn={"right-0"}
          width={"230px"}
        />
      </div>
    </div>
  );
};

export default PageHeader;
