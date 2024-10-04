type Props = {
  children: React.ReactNode;
};

export function Main({ children }: Props) {
  return <main className="container mx-auto p-4 prose">{children}</main>;
}
