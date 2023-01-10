export interface SelectProps<T> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  defaultValue: T;
  name: string;
}

export interface InputAdornmentProps {
  startAdornment?: React.ReactNode;
  children: React.ReactNode;
}

const StartAdornment = (props: any) => {
  const { startAdornment } = props;
  return <>{startAdornment ?? ""}</>;
};

const EndAdornment = (props: any) => {
  const { endAdornment } = props;
  return <>{endAdornment ?? ""}</>;
};

const AdornmentContainer = (props: InputAdornmentProps) => {
  const { startAdornment, children } = props;
  return (
    <>
      <StartAdornment startAdornment={startAdornment} />
      {children}
      <EndAdornment startAdornment={startAdornment} />
    </>
  );
};

export default AdornmentContainer