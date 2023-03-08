import { useRef } from 'react';

import styles from './WordDetails.module.css';

const WordDetails: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    if (audioRef.current) {
      if (audioRef.current.duration > 0) {
        audioRef.current.play();
      }
    }
  };

  return (
    <div className="py-[35px]">
      <div className="details-container">
        <div className="flex justify-between items-center mb-[35px]">
          <div>
            <div className="text-[40px] text-[#2f2f2f] font-bold min-[500px]:text-[60px]">keyboard</div>
            <div className="text-xl text-[#9634e2] min-[500px]:text-3xl">/'ki:bc:d/</div>
          </div>
          <button className={`${styles.playBtn}`} onClick={handleClick}>
            <audio
              className="hidden"
              src="https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3"
              controls
              ref={audioRef}
            ></audio>
            <svg
              className="w-[20px] h-[20px] fill-[#9634e2] transition-all sm:w-[30px] sm:h-[30px]"
              viewBox="-7 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>play</title>
                <path d="M0 6.688v18.906c0 0.344 0.156 0.625 0.469 0.813 0.125 0.094 0.344 0.125 0.5 0.125s0.281-0.031 0.438-0.125l16.375-9.438c0.313-0.219 0.5-0.5 0.5-0.844 0-0.313-0.188-0.594-0.5-0.813l-16.375-9.438c-0.563-0.406-1.406 0.094-1.406 0.813z"></path>{' '}
              </g>
            </svg>
          </button>
        </div>
        <div className="mb-[35px]">
          <h3 className="relative mb-[35px] overflow-hidden text-3xl font-bold text-[#2f2f2f] before:absolute before:top-1/2 before:left-[100px] before:w-[100%] before:h-[1px] before:bg-[#ccc] before:translate-y-[-50%]">
            noun
          </h3>
          <div className="mb-[20px] text-[#a9a9a9] text-2xl">Meaning</div>
          <ul className="mb-[35px] pl-[35px] list-disc">
            <li className={`${styles.listItem}`}>
              <span className="text-black">(etc.) A set of keys used to operate a typewriter, computer etc.</span>
            </li>
            <li className={`${styles.listItem}`}>
              <span className="text-black">
                A component of many instruments including the piano, organ, and harpsichord consisting of usually black
                and white keys that cause different tones to be produced when struck.
              </span>
            </li>
            <li className={`${styles.listItem}`}>
              <span className="text-black">
                A device with keys of a musical keyboard, used to control electronic sound-producing devices which may
                be built into or separate from the keyboard device.
              </span>
            </li>
          </ul>
          <div className="text-[#a9a9a9] text-2xl">
            Synonyms:{' '}
            <a className="text-[#9634e2] text-xl" href="/">
              electronic keyboard
            </a>
          </div>
        </div>
        <div className="pb-[30px] border-b-[1px] border-[#ccc]">
          <h3 className="relative mb-[35px] overflow-hidden text-3xl font-bold text-[#2f2f2f] before:absolute before:top-1/2 before:left-[100px] before:w-[100%] before:h-[1px] before:bg-[#ccc] before:translate-y-[-50%]">
            verb
          </h3>
          <div className="mb-[20px] text-[#a9a9a9] text-2xl">Meaning</div>
          <ul className="pl-[35px] list-disc">
            <li className={`${styles.listItem}`}>
              <span className="text-black">To type on a computer keyboard.</span>
            </li>
          </ul>
        </div>
        <div className="pt-[30px]">
          <h4 className="mb-[5px] text-xl">Source</h4>
          <div className="flex items-center gap-[5px]">
            <a className="text-sm min-[500px]:text-lg" href="https://en.wiktionary.org/wiki/keyboard">
              https://en.wiktionary.org/wiki/keyboard
            </a>
            <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M5 12V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H12M8.11111 12H12M12 12V15.8889M12 12L5 19"
                  stroke="#464455"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordDetails;
