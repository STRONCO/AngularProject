export interface CommentsResult {
  data: Comments[];
 
}

export interface Meta {
  page: number;
}

export interface Comments {
  id_comments: number;
  titleComment: string;
  textComment: string;
  ownComment: string;
  avatar_comment: string;
  id_posts: number;
}