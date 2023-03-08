import Header from 'components/header/Header';
import SearchBar from 'components/search-bar/SearchBar';
import WordDetails from 'components/word-details/WordDetails';

export default function App() {
  return (
    <div>
      <Header />
      <main className="pt-[35px]">
        <SearchBar />
        <WordDetails />
      </main>
    </div>
  );
}
