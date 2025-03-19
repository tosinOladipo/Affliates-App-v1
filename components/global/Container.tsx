import { cn } from '@/lib/utils';

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('px-2', className)}>
      {children}
    </div>
  );
}
export default Container;
