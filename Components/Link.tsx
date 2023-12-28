// components/Link.tsx
import { FC, ReactNode } from "react";
import { useRouter } from "next/router";

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Link: FC<LinkProps> = ({ href, children }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
