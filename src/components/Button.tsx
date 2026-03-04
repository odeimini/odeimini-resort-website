import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-northwoods-pine text-white hover:bg-northwoods-moss border-northwoods-pine",
  secondary:
    "bg-northwoods-bark text-white hover:bg-northwoods-bark/90 border-northwoods-bark",
  outline:
    "bg-transparent text-northwoods-pine border-2 border-northwoods-pine hover:bg-northwoods-pine hover:text-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 font-medium border-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-northwoods-pine focus:ring-offset-2";

  const combined = `${base} ${variantStyles[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combined}>
      {children}
    </Link>
  );
}
