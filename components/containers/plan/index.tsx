import PlanContent from "./PlanContent";
import PlanFilters from "./PlanFilters";

const PlanPage = () => {
  return (
    <div className="h-full grid grid-cols-1 grid-row-2 grid-rows-[auto_1fr]">
      <PlanFilters />
      <PlanContent />
    </div>
  );
};

export default PlanPage;
