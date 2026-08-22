import type { ReviewInterface } from '@/interfaces/ReviewInterface';
import { useReviewStore } from '@/stores/reviewstore.js';
import type { CreateReviewDTO } from '@/dtos/CreateReviewDTO.js';

export class ReviewService {

  static getReviews(): ReviewInterface[] {
    
    return useReviewStore().reviews;
  }

  static getReviewsByBookId(bookId: number): ReviewInterface[] {

    return useReviewStore().reviews.filter((review) => review.bookId === bookId);
  }

  static createReview(review: CreateReviewDTO): void {
    const store = useReviewStore();
    const nextId = store.reviews.length > 0 ? Math.max(...store.reviews.map((existingReview) => existingReview.id), 0) + 1 : 1;
    store.reviews.push({
      id: nextId,
      ...review,
      createdAt: new Date().toISOString(),
    });
  }


}
