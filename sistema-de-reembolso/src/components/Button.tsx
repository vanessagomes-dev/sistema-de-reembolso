type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
};

export function Button({
  isLoading,
  children,
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className="flex items-center justify-center bg-green-100 rounded-lg text-white cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-not-allowed h-12"
      {...rest}
    >
      {children}
    </button>
  );
}
