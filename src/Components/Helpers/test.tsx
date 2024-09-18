// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { IoMdClose } from "react-icons/io";
// import axios from "axios";

// const CommentModalStyle = styled.div`
//   // Your existing styles
// `;

// const CloseIcoModalStyle = styled.div`
//   color: white;
//   position: absolute;
//   right: 300px;
//   top: 370px;
//   svg {
//     width: 30px;
//     height: 40px;
//   }
// `;

// interface CommentProps {
//   postTitle: string;
//   onclose: () => void;
// }

// const Comment: React.FC<CommentProps> = ({ postTitle, onclose }) => {
//   const [postdata, setPostData] = useState(''); // Capture the comment input

//   const UserLoginStatus = localStorage.getItem('isLoggedIn');
  

//   const UserPostData = {
//     postdata,
//     UserLoginStatus,
//     username,
//     lastName,
//     Mobile,
//     UserId,
//     Email,
//   };

//   const USERCOMMENTS = "http://localhost:8001/UserComments";

//   const handlePostSubmit = async () => {
//     try {
//       const postresponse = await axios.post(USERCOMMENTS, UserPostData);
//       console.log('Comment posted successfully:', postresponse.data);
//     } catch (error) {
//       console.error('Error posting comment:', error);
//     }
//   };

//   return (
//     <CommentModalStyle>
//       <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
//         <div onClick={onclose}>
//           <CloseIcoModalStyle>
//             <IoMdClose />
//           </CloseIcoModalStyle>
//         </div>

//         <h2 className="text-white font-bold mt-[-10px] my-4 ml-4">{postTitle}</h2>
        
//         <div className="max-w-2xl mx-auto px-4">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion</h2>
//           </div>
//           <form className="mb-6">
//             <div className="py-2 px-4 mb-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//               <label htmlFor="comment" className="sr-only">Your comment</label>
//               <textarea
//                 id="comment"
//                 rows="6"
//                 className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
//                 placeholder="Write a comment..."
//                 value={postdata}
//                 onChange={(e) => setPostData(e.target.value)} // Correct onChange handler
//                 required
//               />
//             </div>
//             <button
//               onClick={handlePostSubmit}
//               type="button"
//               className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
//             >
//               Post Comment
//             </button>
//           </form>
//         </div>
//       </section>
//     </CommentModalStyle>
//   );
// };

// export default Comment;
