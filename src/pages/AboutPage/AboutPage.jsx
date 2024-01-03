import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Transition from "../../components/Transition/Transition";

export default function AboutPage(props) {
  return (
    <>
      <Transition />
      <Header />
      <Navbar />
      <div>About page</div>
    </>
  );
}
