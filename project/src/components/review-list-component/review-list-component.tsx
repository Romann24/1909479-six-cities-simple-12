import { Reviews } from '../../types/reviews';
import ReviewComponent from '../review-component/review-component';

type ReviewListProps = {
    reviews: Reviews;
}

function ReviewListComponent ({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review, index) => (
        <ReviewComponent review={review} key={`${review.name}-${review.id}`} />
      ))}
    </ul>
  );
}

export default ReviewListComponent;
