import Cover from "../../components/Cover/Cover";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

export default function HomePage(props) {
  return (
    <>
      <main className="p-4">
        <Cover />
        <Navbar />
        <Header />
      </main>
      <footer></footer>
    </>
  );
}
