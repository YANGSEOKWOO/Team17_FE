import { instance } from './index';

type ReviewProps = {
  userId: number;
  receiveMemberId: number;
  reviewContent: string;
  reviewEval: {
    eval1: boolean;
    eval2: boolean;
    eval3: boolean;
    eval4: boolean;
  };
  notificationId: number;
  dogBowl: number;
};

export const PostReview = (info: ReviewProps) => {
  return instance.post('api/review', info);
};

export const getNotReviewed = () => {
  return instance.get('api/walk/notReviewed');
};
