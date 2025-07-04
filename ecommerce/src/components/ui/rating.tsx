import { Star } from "lucide-react";

export default function Rating({ rating }: { rating: number }) {
  const validRating = Math.max(0, Math.floor(rating || 0));

  return (
    <section className="grid grid-flow-col gap-1 place-items-center">
      {Array.from({ length: validRating }).map((_, index) => (
        <Star key={index} className="size-4 fill-primary" />
      ))}
    </section>
  );
}