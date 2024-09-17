import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
// import CommentModal from '../Helpers/Comment'
import { IoMdClose } from "react-icons/io";
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

const CommentModalStyle = styled.div`
  width: 600px; 
  height: 500px; 
  position: relative;
  /* background-color: #333;  */
  border-radius: 8px;
  padding: 16px;
  overflow-y: auto;
`
const CloseIcoModalStyle = styled.div`
  color: white;
   position: absolute;
   right: 20px;
   top: 30px;
   svg {
    width: 30px;  
    height: 40px; 
  }
`

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

interface CommentProps {
  postTitle: string;
  onclose: () => void;
}


const Comment: React.FC<CommentProps> = ({ postTitle, onclose }) => {
  const [postdata, setPostData] = useState(''); 

  const UserLoginStatus = localStorage.getItem('isLoggedIn');
  

  const UserPostData = {
    postdata,
    UserLoginStatus,
    username,
    lastName,
    Mobile,
    UserId,
    Email,
  };

  console.log(UserPostData)

  const USERCOMMENTS = "http://localhost:8001/UserComments";

  const handlePostSubmit = async () => {
    try {
      const postresponse = await axios.post(USERCOMMENTS, UserPostData);
      console.log('Comment posted successfully:', postresponse.data);
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <CommentModalStyle>
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div onClick={onclose}>
          <CloseIcoModalStyle>
            <IoMdClose />
          </CloseIcoModalStyle>
        </div>

        <h2 className="text-white font-bold mt-[-10px] my-4 ml-4">{postTitle}</h2>
        
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion</h2>
          </div>
          <form className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">Your comment</label>
              <textarea
                id="comment"
                rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                value={postdata}
                onChange={(e) => setPostData(e.target.value)} 
                required
              />
            </div>
            <button
              onClick={handlePostSubmit}
              type="button"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Post Comment
            </button>
          </form>
        </div>
      </section>
    </CommentModalStyle>
  );
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
  const dispatch = useDispatch<AppDispatch>();
  // const { data: Likes, loading, error } = useSelector((state: RootState) => state.Likes)

  // console.log("the likes data from the redux",Likes)
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(initiallyLiked);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [selectedPostData, setSelectedPostData] = useState<{ postTitle: string } | null>(null);
  const UserLoginStatus = localStorage.getItem('isLoggedIn');

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
  useEffect(() => {
    dispatch(FetchUserLikes());
  }, [dispatch])

  const handleCommentModal = () => {
    setSelectedPostData({ postTitle });
    setIsCommentModalOpen(true);
  };

  const closeModal = () => {
    setIsCommentModalOpen(false);
    setSelectedPostData(null);
  };


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
        <p>Likes: {likeCount}</p>
      </PostInfo>
      {UserLoginStatus && (
        <>
          <div className='' onClick={handleLike}>
            <LikeButtonStyle liked={liked}>
              <AiFillLike />
            </LikeButtonStyle>
          </div>
          <div className='hover:animate-pulse' onClick={handleCommentModal}>
            <CommentButtonStyle>
              <FaCommentAlt />
            </CommentButtonStyle>
          </div>
        </>
      )}
      {isCommentModalOpen && selectedPostData && (
        <Comment postTitle={selectedPostData.postTitle} onclose={closeModal} />
      )}
    </Card>
  );
};

export default PostCard;
