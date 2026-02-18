import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <div className=" w-full max-w-6xl px-4">{children}</div>;
}
