import Cover from "../../components/Cover/Cover";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Transition from "../../components/Transition/Transition";

export default function HomePage(props) {
  return (
    <>
      <main className="p-4">
        <Transition />
        <Cover />
        <Navbar />
        <Header />
      </main>
      <footer></footer>
    </>
  );
}
