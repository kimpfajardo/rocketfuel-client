import SelectInput from "@components/form/fields/SelectInput";

const PlanFilters = () => {
    return (
      <div className="h-auto py-2 pl-8 flex gap-2">
        <SelectInput
          icon="/images/calendar-date.svg"
          defaultValue="November 2022"
          name='plan-date'
        />
        <SelectInput icon="/images/coins.svg" defaultValue="Efficiency" name='plan-efficiency' />
        <SelectInput defaultValue="All types" name='plan-types' />
        <SelectInput defaultValue="All sources" name='plan-sources' />
        <SelectInput defaultValue="4 months" name='plan-duration' />
      </div>
    );
}

export default PlanFilters