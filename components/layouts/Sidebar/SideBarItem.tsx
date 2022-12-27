import Image from "next/image";

interface SidebarItemProps {
  icon: string;
  title: string;
}

const SidebarItem = (props: SidebarItemProps) => {
  const { icon, title } = props;
  return (
    <li className="px-5 py-4">
      <Image src={icon} alt={title} width={24} height={24} />
    </li>
  );
};

export default SidebarItem;
