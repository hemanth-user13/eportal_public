// import React, { useState } from 'react';
// import ChatIcon from './path-to-your-icon'; // Update with the correct path

// const ChatbotHome = () => {
//   const [isChatVisible, setChatVisible] = useState(false);

//   const toggleChat = () => {
//     setChatVisible(!isChatVisible);
//   };

//   return (
//     <div>
//       <button
//         onClick={toggleChat}
//         className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 p-0 normal-case leading-5 hover:text-gray-900"
//         type="button"
//         aria-haspopup="dialog"
//         aria-expanded={isChatVisible ? "true" : "false"}
//       >
//         <img src={ChatIcon} alt="chat icon" />
//       </button>

//       {isChatVisible && (
//         <div className="fixed bottom-20 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 animate-popUp">
//           <p className="text-sm font-medium">Hi there, can I help you?</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatbotHome;
