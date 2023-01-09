import Image from "next/image";

const Logo = () => {
    return (
      <div className="w-full flex justify-center items-center py-5 border-b border-gray">
        <Image
          alt="RocketFuel logo"
          src="/images/logo.svg"
          width={30}
          height={24}
        />
      </div>
    );
}

export default Logo