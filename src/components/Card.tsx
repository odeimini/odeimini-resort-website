interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md border border-northwoods-sand overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
