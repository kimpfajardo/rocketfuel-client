import { SidebarItemProps } from "@helpers/types/layout";
import Image from "next/image";

const SidebarItem = (props: SidebarItemProps) => {
  const { url, title } = props;
  return (
    <li className="w-full h-12 flex justify-center">
      <Image src={url} alt={title} width={16} height={16} />
    </li>
  );
};

export default SidebarItem;
