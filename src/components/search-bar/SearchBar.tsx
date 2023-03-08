import { useState } from 'react';

import useAppDispatch from 'hooks/useAppDispatch';
import { setSearchQuery } from 'store/slices/dictionarySlice';

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(setSearchQuery(searchValue));
  };

  return (
    <div className="search-container">
      <form className="relative" onSubmit={handleSubmit}>
        <input
          className="w-full pl-[20px] pr-[65px] py-[15px] rounded-[7px] text-[#2f2f2f] text-xl font-bold bg-[#f4f4f4] focus:outline-none"
          type="text"
          placeholder="Search for any word..."
          value={searchValue}
          onChange={handleChange}
        />
        <button className="absolute top-1/2 right-[20px] translate-y-[-50%]" type="submit">
          <svg className="w-[25px] h-[25px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M17 17L21 21"
                stroke="#9634e2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#9634e2"
                strokeWidth="2"
              ></path>
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
