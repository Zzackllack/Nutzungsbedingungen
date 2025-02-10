import Hero from "./components/Hero";
import Policy from "./components/Policy";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="flex-grow">
        <Hero />
        <Policy />
      </main>
      <Footer />
    </div>
  );
}

export default App;