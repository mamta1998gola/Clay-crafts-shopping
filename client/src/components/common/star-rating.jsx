import { StarIcon } from "lucide-react";
import { Button } from "../ui/button";

function StarRatingComponent({ rating, handleRatingChange, onlyrating }) {

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        onlyrating ? (
          <StarIcon
            key={star}
            className={`w-3 h-3 ${star <= rating ? "fill-yellow-500" : "fill-black"}`}
          />
        ) : (
          <Button
            key={star}
            className={`p-2 rounded-full transition-colors ${star <= rating
                ? "text-yellow-500 hover:bg-black"
                : "text-black hover:bg-primary hover:text-primary-foreground"
              }`}
            variant="outline"
            size="icon"
            onClick={handleRatingChange ? () => handleRatingChange(star) : null}
          >
            <StarIcon
              className={`w-6 h-6 ${star <= rating ? "fill-yellow-500" : "fill-black"}`}
            />
          </Button>
        )
      ))}
    </div>
  );
}

export default StarRatingComponent;
