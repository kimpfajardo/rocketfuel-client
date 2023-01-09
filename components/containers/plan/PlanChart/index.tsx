import { config } from "@helpers/constants/charts/Plan";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PlanChart = () => {
  return (
    <div className="w-[70%] h-full overflow-scroll highcharts-scrolling">
      <HighchartsReact
        highcharts={Highcharts}
        options={config}
        containerProps={{
          style: { height: "100%", paddingTop: "21px" },
        }}
      />
    </div>
  );
};

export default PlanChart