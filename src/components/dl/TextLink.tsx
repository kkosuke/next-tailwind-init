import Link from "next/link";
import React, { FC } from "react";

type Props = {
  href: string;
};

export const TextLink: FC<Props> = (props) => {
  const { href } = props;
  return (
    <Link
      href={href}
      className="text-blue-500 underline hover:text-blue-300 hover:no-underline"
      target="_blank"
    >
      {href}
    </Link>
  );
};
