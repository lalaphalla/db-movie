// import React from 'react';

// const ScrollToTopButton = () => {
//   const handleScrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <button onClick={handleScrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
//       Scroll to Top
//     </button>
//   );
// };

// export default ScrollToTopButton;
import React from "react";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",  
        color: "#fff",
        border: "none",
        backgroundColor: "gray",
        borderRadius: "10%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        fontSize: "20px",
        outline: "none",
      }}
    >
      <svg
        enable-background="new 0 0 32 32"
        height="32px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 32 32"
        width="32px"
        className="mx-auto"
      >
        <path
          d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
          fill="#fff"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
