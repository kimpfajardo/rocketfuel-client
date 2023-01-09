import { NAV_AVATAR_MOCK } from "@helpers/constants/images/url";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="w-full flex justify-center py-2">
      <Image src={NAV_AVATAR_MOCK} height={32} width={32} alt="avatar" />
    </div>
  );
};

export default Avatar;
