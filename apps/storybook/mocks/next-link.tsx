import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, children, ...props },
  ref,
) {
  return (
    <a href={href} ref={ref} {...props}>
      {children}
    </a>
  );
});

export default Link;
