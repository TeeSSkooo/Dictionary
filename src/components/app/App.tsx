import Header from 'components/header/Header';
import SearchBar from 'components/search-bar/SearchBar';
import WordDetails from 'components/word-details/WordDetails';
import Layout from 'components/layout/Layout';

export default function App() {
  return (
    <Layout>
      <Header />
      <main className="pt-[35px]">
        <SearchBar />
        <WordDetails />
      </main>
    </Layout>
  );
}
