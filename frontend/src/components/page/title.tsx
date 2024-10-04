type Props = {
  children: React.ReactNode;
};

export function Title({ children }: Props) {
  return <h1>{children}</h1>;
}
