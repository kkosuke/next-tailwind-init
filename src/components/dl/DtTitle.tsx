import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DtTitle: FC<Props> = (props) => {
  const { children } = props;
  return <dt className="text-lg font-bold mt-8 mb-2">{children}</dt>;
};

export default DtTitle;
