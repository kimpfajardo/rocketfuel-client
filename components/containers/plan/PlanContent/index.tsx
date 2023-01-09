import PlanChart from "../PlanChart";
import PlanChartDetails from "../PlanChartDetails";

const PlanContent = () => {
    return (
      <div className="flex border-t border-l-outline-default">
        <PlanChart />
        <PlanChartDetails />
      </div>
    );
}

export default PlanContent