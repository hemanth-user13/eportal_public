import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
import { AppDispatch } from '../../store';
import { FetchUserLikes } from '../Home/Categories/Posts/PostLikeSlice';

const Card = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const PostInfo = styled.div`
  flex: 1;
  margin-left: 20px;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 5px;
    font-size: 0.875rem;
  }

  .author {
    color: #6b7280; 
  }

  .description {
    color: #374151; 
    margin-top: 8px;
  }

  .date {
    color: #9ca3af; 
    margin-top: 10px;
    font-size: 0.75rem;
  }
`;

const PostMedia = styled.div`
  width: 230px;
  height: auto;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`;

const LikeButtonStyle = styled.div<{ liked: boolean }>`
  margin-right: 60px;
  margin-top: 90px;
  svg {
    width: 30px;  
    height: 40px; 
    color: ${props => (props.liked ? 'blue' : 'gray')};
    cursor: pointer;
  }
`;

const CommentButtonStyle = styled.div`
  margin-left: -40px;
  margin-top: 90px;
  svg {
    width: 30px;  
    height: 25px; 
  }
`;

interface PostCardProps {
  postId: string;  
  postTitle: string;
  createdDate: string;
  description: string;
  firstName: string;
  url: string;
  urlType: string;
  onMediaClick: () => void;
  initialLikeCount: number;  
  initiallyLiked: boolean;  
}

const UserLoginStatus = localStorage.getItem('isLoggedIn');
const username = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lastName");
const Mobile = localStorage.getItem("mobile");
const UserId = localStorage.getItem("user_id");
const Email = localStorage.getItem("email");

const InitialData = {
  UserLoginStatus,
  username,
  lastName,
  Mobile,
  UserId,
  Email,
};

const PostCard: React.FC<PostCardProps> = ({
  postId,
  postTitle,
  createdDate,
  description,
  firstName,
  url,
  urlType,
  onMediaClick,
  initialLikeCount,
  initiallyLiked
}) => {
  const dispatch=useDispatch<AppDispatch>();
  const {data:Likes,loading,error}=useSelector((state:RootState)=>state.Likes)

  console.log("the likes data from the redux",Likes)
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [liked, setLiked] = useState(initiallyLiked);

  const handleLike = async () => {
    const USERPOSTURl = "http://localhost:8001/UserLikes";
    try {
      if (liked) {
        await axios.delete(`${USERPOSTURl}/${postId}`, { data: InitialData });
        setLikeCount(likeCount - 1);
      } else {
        await axios.post(USERPOSTURl, InitialData);
        setLikeCount(likeCount + 1);
      }
      setLiked(!liked);
    } catch (error) {
      console.log("Error updating like status:", error);
    }
  };

  const renderMedia = () => {
    switch (urlType) {
      case "image":
        return <img src={url} alt={postTitle} className="object-cover w-full h-auto" onClick={onMediaClick} />;
      case "video":
        return (
          <ReactPlayer
            url={url}
            className="object-cover w-full h-full"
            width="100%"
            height="100%"
            controls
            onClick={onMediaClick}
          />
        );
      case "audio":
        return (
          <audio controls className="w-full" onClick={onMediaClick}>
            <source src={url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        );
      default:
        return null;
    }
  };
  useEffect(()=>{
    dispatch(FetchUserLikes());
  },[dispatch])
  

  return (
    <Card>
      <PostMedia onClick={onMediaClick}>
        {renderMedia()}
      </PostMedia>
      <PostInfo>
        <h3>{postTitle}</h3>
        <p className="author">By {firstName}</p>
        <p className="description">{description}</p>
        <p className="date">{new Date(createdDate).toDateString()}</p>
        <p>Likes: {likeCount}</p> {/* Display like count */}
      </PostInfo>
      <div className='' onClick={handleLike}>
        <LikeButtonStyle liked={liked}>
          <AiFillLike />
        </LikeButtonStyle>
      </div>
      <div className='hover:animate-pulse'>
        <CommentButtonStyle>
          <FaCommentAlt />
        </CommentButtonStyle>
      </div>
    </Card>
  );
};

export default PostCard;
