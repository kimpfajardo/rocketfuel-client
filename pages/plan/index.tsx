import Layout from "../../components/layouts/Main";
import SelectInput from "../../components/form/fields/SelectInput";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { config } from "../../helpers/constants/charts/planPage";
import Image from "next/image";

const Plan = () => {
  return (
    <Layout>
      <div className="flex flex-col h-full">
        <div className="py-2 pl-8 flex gap-2">
          <SelectInput
            icon="/images/calendar-date.svg"
            defaultValue="November 2022"
          />
          <SelectInput icon="/images/coins.svg" defaultValue="Efficiency" />
          <SelectInput defaultValue="All types" />
          <SelectInput defaultValue="All sources" />
          <SelectInput defaultValue="4 months" />
        </div>
        <div className="flex flex-1">
          <div className="h-full w-2/3 pt-[19px] border-t border-l-outline-default ">
            <HighchartsReact
              highcharts={Highcharts}
              containerProps={{ style: { minHeight: "100%" } }}
              options={config}
            />
          </div>
          <div className="h-full w-1/3 border border-l-outline-default">
            <div className="p-4 border-b border-inherit">
              <p className="inter font-bold">November 2022</p>
            </div>
            <div className="flex flex-col h-full">
              <div className="h-full w-full text-center flex items-center justify-center">
                <div>
                  <p className="font-semibold text-l-label-link text-2xl">
                    $11,800
                  </p>
                  <p className="text-l-label-link">
                    <span>
                      <b>Revenue</b> forecast
                    </span>
                  </p>
                  <div className="flex items-centera justify-center">
                    <Image
                      src="/images/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <span className="text-xs text-l-label-dangerous">
                      13% short of $11,000 goal
                    </span>
                  </div>
                  <p className="text-xs text-l-label-secondary">
                    $3,800 month to date
                  </p>
                </div>
              </div>
              <div className="h-1/2 w-full text-center flex items-center justify-center">
                <div>
                  <p className="font-semibold text-l-label-link text-2xl">
                    $11,800
                  </p>
                  <p className="text-l-label-link">
                    <span>
                      <b>Revenue</b> forecast
                    </span>
                  </p>
                  <div className="flex items-centera justify-center">
                    <Image
                      src="/images/star.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
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
        </div>
      </div>
    </Layout>
  );
};

export default Plan;
