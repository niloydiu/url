import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-500">
      <header>
        <Header />

        <SearchBar />
      </header>
      <main className="flex-grow overflow-auto flex justify-center mx-auto w-[90vw]  pb-10">
        <Content />
      </main>
      <footer className="fixed bottom-0 left-0 w-full  text-white p-0 bg-white/5 backdrop-blur-md">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
