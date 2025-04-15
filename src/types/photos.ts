
export interface Photo {
  id: string;
  user_id: string;
  photo_url: string;
  uploaded_at: string;
}

export interface Vote {
  id: string;
  user_id: string;
  photo_id: string;
  vote_type: 'like' | 'dislike';
  voted_at: string;
}

export interface PhotoWithVotes extends Photo {
  likes: number;
  dislikes: number;
  userVote?: 'like' | 'dislike' | null;
}

export type SortOption = 'likes' | 'date';
