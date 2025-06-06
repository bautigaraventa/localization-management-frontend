import { Skeleton } from "@/components/ui/skeleton";

export function TableLoader() {
  return (
    <div className="flex flex-col gap-2 align-start">
      <Skeleton className="h-10 w-[50%] align-left rounded-xl mb-6" />
      <Skeleton className="h-8 w-full rounded-xl mb-3" />
      <Skeleton className="h-6 w-full rounded-xl" />
      <Skeleton className="h-6 w-full rounded-xl" />
      <Skeleton className="h-6 w-full rounded-xl" />
      <Skeleton className="h-6 w-full rounded-xl" />
    </div>
  );
}
