export const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/faq", label: "FAQs" },
];

export interface MenuItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}
