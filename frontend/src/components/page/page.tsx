import { Main } from "./main";
import { Title } from "./title";

type Props = { title: string; children: React.ReactNode };

export function Page({ title, children }: Props) {
  return (
    <Main>
      <Title>{title}</Title>
      {children}
    </Main>
  );
}
