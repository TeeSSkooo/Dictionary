const NoDefenitionError: React.FC = () => {
  return (
    <div className="error-container">
      <div className="mb-[30px]">
        <svg
          className="w-[60px] h-[60px] mx-auto min-[500px]:w-[100px] min-[500px]:h-[100px]"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M2 32c0 16.6 13.4 30 30 30s30-13.4 30-30S48.6 2 32 2S2 15.4 2 32z" fill="#ffdd67"></path>
            <path d="M47.7 37.6c0 8.6 11.7 8.6 11.7 0c0-6.3-5.8-12.4-5.8-12.4s-5.9 6.1-5.9 12.4" fill="#65b1ef"></path>
            <g fill="#664e27">
              <circle cx="38.5" cy="35" r="5"></circle>
              <circle cx="15.5" cy="35" r="5"></circle>
            </g>
            <g fill="#917524">
              <path d="M20.6 19.9c-3.2 2.7-7.5 3.9-11.7 3.1c-.6-.1-1.1 2-.4 2.2c4.8.9 9.8-.5 13.5-3.6c.5-.5-1-2.1-1.4-1.7"></path>
              <path d="M45.1 22.9c-4.2.7-8.5-.4-11.7-3.1c-.4-.4-2 1.2-1.4 1.7c3.7 3.2 8.7 4.5 13.5 3.6c.7-.2.2-2.3-.4-2.2"></path>
            </g>
            <path
              d="M38.1 47.3c-5.8-1.5-12-.4-16.9 3c-1.2.9 1.1 4 2.3 3.2c3.2-2.3 8.4-3.8 13.7-2.4c1.3.3 2.4-3.3.9-3.8"
              fill="#664e27"
            ></path>
          </g>
        </svg>
      </div>
      <div className="mb-[30px] text-3xl text-center">No Definitions Found</div>
      <div className="text-xl text-[#868686] text-center">
        Sorry pal, we couldn't find definitions for the word you were looking for.
      </div>
    </div>
  );
};

export default NoDefenitionError;
