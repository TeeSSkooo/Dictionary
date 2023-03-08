import { useRef } from 'react';

import Loader from 'components/loader/Loader';
import NoDefenitionError from 'components/no-definition-error/NoDefenitionError';

import dictionaryApi from 'api/dictionaryApi';
import useAppSelector from 'hooks/useAppSelector';

import styles from './WordDetails.module.css';

const WordDetails: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { searchQuery, themeType } = useAppSelector((state) => state.dictionary);

  const { data, isLoading, isError } = dictionaryApi.useGetWordQuery(searchQuery);

  const word = data?.[0] || null;

  const handleClick = () => {
    if (audioRef.current) {
      if (audioRef.current.duration > 0) {
        audioRef.current.play();
      }
    }
  };

  if (isLoading) {
    return (
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-[35px]">
        <NoDefenitionError />
      </div>
    );
  }

  return (
    <div className="py-[35px]">
      <div className="details-container">
        <div className="flex justify-between items-center mb-[15px]">
          <div>
            <div
              className="text-[40px]font-bold transition-all min-[500px]:text-[60px]"
              style={themeType === 'dark' ? { color: '#f5f5f5' } : { color: '#2f2f2f' }}
            >
              {word?.word}
            </div>
            <div className="text-xl text-[#9634e2] min-[500px]:text-3xl">{word?.phonetic}</div>
          </div>
          {word?.phonetics[0]?.audio && (
            <button className={`${styles.playBtn}`} onClick={handleClick}>
              <audio className="hidden" src={word?.phonetics[0].audio} controls ref={audioRef}></audio>
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
          )}
        </div>
        <div className="mb-[35px]">
          <div className="flex gap-[10px]">
            <span className="text-[#a9a9a9] text-2xl">Synonyms:</span>
            {word?.meanings[0].synonyms.length ? (
              <div className="text-[#9634e2] text-xl">{word?.meanings[0].synonyms?.join(', ')}</div>
            ) : (
              <span
                className="text-xl transition-all"
                style={themeType === 'dark' ? { color: '#fff' } : { color: '#000' }}
              >
                none
              </span>
            )}
          </div>
        </div>
        <ul className="border-b-[1px] border-[#ccc]">
          {word?.meanings.map((meaning) => (
            <li key={meaning.partOfSpeech}>
              <div className="mb-[35px]">
                <h3
                  className={styles.speach}
                  style={themeType === 'dark' ? { color: '#f5f5f5' } : { color: '#2f2f2f' }}
                >
                  {meaning.partOfSpeech}
                </h3>
                <div className="mb-[20px] text-[#a9a9a9] text-2xl">Meaning</div>
                <ul className="mb-[35px] pl-[35px] list-disc">
                  {meaning.definitions.map((definition) => (
                    <li className={`${styles.listItem}`} key={definition.definition}>
                      <span
                        className="text-black transition-all"
                        style={themeType === 'dark' ? { color: '#f5f5f5' } : { color: '#2f2f2f' }}
                      >
                        {definition.definition}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <div className="pt-[30px]">
          <h4 className="mb-[5px] text-xl">Source</h4>
          <div className="flex items-center gap-[5px]">
            <a className="text-sm min-[500px]:text-lg" href={word?.sourceUrls[0]}>
              {word?.sourceUrls[0]}
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
