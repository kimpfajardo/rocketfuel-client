import Select from "@components/form/fields/Select";
import planFilters from "@helpers/constants/filters/planFilters";

const PlanFilters = () => {
  const filters = planFilters
  return (
    <div className="h-auto py-2 pl-8 flex gap-2">
      {
        filters.map((item: any)=> {
          return <Select {...item} menuCn='left-0' />;
        })
      }
    </div>
  );
};

export default PlanFilters;
