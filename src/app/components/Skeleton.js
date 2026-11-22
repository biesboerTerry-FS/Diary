export function Skeleton({ className = '', style }) {
  return <span className={`skeleton ${className}`} style={style} aria-hidden="true" />;
}

/** Placeholder that mirrors the shape of an ArchivePost row. */
export function PostListSkeleton({ count = 4 }) {
  return (
    <div className="space-y-8" aria-hidden="true" data-testid="post-list-skeleton">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex items-start gap-4 p-6 rounded-lg">
          <Skeleton className="skeleton--calendar" />
          <div className="flex-1 space-y-3 pt-1">
            <Skeleton className="h-5 w-2/3 max-w-sm" />
            <Skeleton className="h-3 w-28" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
