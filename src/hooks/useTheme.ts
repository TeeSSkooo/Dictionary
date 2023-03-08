import useAppSelector from './useAppSelector';

const useTheme = () => {
  const { themeType } = useAppSelector((state) => state.dictionary);

  return { themeType };
};

export default useTheme;
