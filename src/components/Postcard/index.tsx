import React from 'react';
import { COMMENT_TEXT } from './constants';
import  ChatBubble from '../../assets/chatBubble.svg';

interface CommentObj {
  name: string;
  content: string;
  time: string;
  likes: number;
  replyComment: Array<any>;
}

interface PostCardProps {
  name: string;
  time: string;
  content: string;
  comments: Array<CommentObj>; 
  emoji: string;
  image: string;
}

const PostCard: React.FC<PostCardProps> = ({
  name,
  time,
  content,
  comments,
  emoji,
  image,
}) => {
  return (
    <div className="bg-black-1200 p-4 rounded-lg  border-2 border-black-1100">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-600 rounded-full mr-3">
            <img src={image} alt="" />
          </div>
          <div>
            <h3 className="font-semibold text-white-1100">{name}</h3>
            <p className="text-white-1200 text-sm">{time}</p>
          </div>
        </div>
        <button className="text-white-1100">...</button>
      </div>
      <div className="bg-black-1300 p-3 rounded-md">
        <div className="flex items-start">
          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-black-1200 rounded-full mr-3">
            {emoji}
          </span>
          <p>{content}</p>
        </div>
      </div>
      {!!comments.length && (
        <p className="mt-3 text-gray-400 flex">
          <img src={ChatBubble} alt="chat bubble" className="mr-2" />{' '}
          {comments.length} {COMMENT_TEXT}
        </p>
      )}
    </div>
  );
};

export default PostCard;
