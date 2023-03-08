import useAppDispatch from 'hooks/useAppDispatch';
import useTheme from 'hooks/useTheme';
import { changeTheme } from 'store/slices/dictionarySlice';

import styles from './Header.module.css';

const Header: React.FC = () => {
  const { themeType } = useTheme();
  const dispatch = useAppDispatch();

  const toggleTheme = () => dispatch(changeTheme(themeType === 'light' ? 'dark' : 'light'));

  return (
    <header>
      <div className="header-container min-h-[80px] flex justify-between items-center">
        <a href="/">
          <svg className="w-[50px] h-[50px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42"
                stroke="#868686"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z"
                stroke="#868686"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path d="M8 7H16" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path
                d="M8 10.5H13"
                stroke="#868686"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </a>
        <div className="flex items-center gap-[15px]">
          <button className="relative grid place-items-center cursor-pointer" onClick={toggleTheme}>
            <input className="w-full h-full absolute z-10 opacity-0 cursor-pointer" type="checkbox" />
            <div className="relative inline-block w-[35px] h-[20px] border-2 border-[#868686] rounded-[999px] bg-[#868686] transition-all">
              <span className={styles.switch}></span>
            </div>
          </button>
          <svg
            className="w-[30px] h-[30px] transition-all"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M20.8667 15.3164C20.9187 15.1983 20.8006 15.0785 20.6792 15.1223V15.1223C17.3165 16.3368 13.4497 15.6201 10.9124 13.0837C8.38689 10.5592 7.66861 6.7169 8.86147 3.36559V3.36559C8.91069 3.22729 8.77418 3.09296 8.64021 3.15299C8.63117 3.15704 8.62214 3.16111 8.61311 3.16518C6.75765 4.00313 5.10654 5.4166 4.13683 7.19736C3.1002 9.10101 2.75831 11.3058 3.16975 13.4339C3.58119 15.5619 4.72034 17.4806 6.39193 18.861C8.06352 20.2414 10.1634 20.9977 12.3317 21C14.1962 21.0001 16.0181 20.4424 17.5629 19.3987C18.9891 18.4352 20.1189 16.9756 20.8311 15.3962C20.8431 15.3697 20.8549 15.343 20.8667 15.3164Z"
                stroke={`${themeType === 'dark' ? '#9634e2' : '#868686'}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
