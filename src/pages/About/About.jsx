import Cover from "../../components/Cover/Cover";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Transition from "../../components/Transition/Transition";

export default function About(props) {
  return (
    <>
      <Cover />
      <Transition />
      <Header />
      <Navbar />
      <h1 className="grid w-full place-content-center">About page</h1>
    </>
  );
}
