import Image from "next/image";

const PlanChartDetails = () => {
    return (
      <div className="w-[30%] grid grid-cols-1 grid-rows-[auto_1fr_1fr] border-l border-l-outline-default">
        <div className="p-4 border-b border-l-outline-default">
          <p className="inter font-bold">November 2022</p>
        </div>
        <div className="flex flex-col border-b border-l-outline-default">
          <div className="h-full w-full text-center flex items-center justify-center">
            <div>
              <p className="font-semibold text-l-label-link text-2xl mb-1">
                $11,800
              </p>
              <p className="text-l-label-link mb-1">
                <span>
                  <b>Revenue</b> forecast
                </span>
              </p>
              <div className="flex items-centera justify-center mb-6">
                <Image src="/images/star.svg" width={14} height={14} alt="" />
                <span className="text-xs text-l-label-dangerous">
                  13% short of $11,000 goal
                </span>
              </div>
              <p className="text-xs text-l-label-secondary">
                $3,800 month to date
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[390px]">
          <div className="h-full w-full text-center flex items-center justify-center">
            <div>
              <p className="font-semibold text-l-label-link text-2xl mb-1">
                $11,800
              </p>
              <p className="text-l-label-link mb-1">
                <span>
                  <b>Revenue</b> forecast
                </span>
              </p>
              <div className="flex items-centera justify-center mb-6">
                <Image src="/images/star.svg" width={14} height={14} alt="" />
                <span className="text-xs text-l-label-dangerous">
                  13% short of $11,000 goal
                </span>
              </div>
              <p className="text-xs text-l-label-secondary">
                $3,800 month to date
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PlanChartDetails