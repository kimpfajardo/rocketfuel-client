const SelectMenuItem = (props: any) => {
  const { item, onChange } = props;
  const { label } = item;
  return (
    <div className="px-6 py-2 cursor-pointer" onClick={() => onChange(item)}>
      {label}
    </div>
  );
};


export default SelectMenuItem