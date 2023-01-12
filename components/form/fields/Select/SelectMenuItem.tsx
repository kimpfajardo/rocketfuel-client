const SelectMenuItem = (props: any) => {
  const { item, onChange } = props;
  const { label, startAdornment, disabled = false } = item;
  const showStartAdornment = !!startAdornment;

  const clickHandler = () => {
    onChange(item)
    item?.clickEvent?.()
  }

  return (
    <div
      className={`px-6 py-2 ${
        disabled ? "cursor-not-allowed text-l-label-disabled" : "cursor-pointer"
      } flex items-center gap-4 w-full hover:bg-l-surface-hover`}
      onClick={!disabled ? clickHandler : undefined}
    >
      {showStartAdornment && (
        <div className={`${disabled ? "opacity-50" : ""} w-4`}>
          {startAdornment ?? ""}
        </div>
      )}

      <p className="whitespace-nowrap">{label}</p>
    </div>
  );
};

export default SelectMenuItem;
