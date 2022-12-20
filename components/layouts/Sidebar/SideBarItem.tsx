import Image from "next/image";

interface SidebarItemProps {
    icon: string
    title: string
}

const SidebarItem = (props: SidebarItemProps) => {
  const { icon, title } = props;
  return (
    <li className="px-5">
      <Image src={icon} fill alt={title} />
    </li>
  );
};

export default SidebarItem
