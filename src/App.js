
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import GetStarted from "./components/mainSection/GetStarted";
import MainSecOne from "./components/mainSection/MainSecOne";
import MainSecTwo from "./components/mainSection/MainSecTwo";
import UserCentric from "./components/mainSection/UserCentric";
import NavBar from "./components/navbar/NavBar";
function App() {
  return (
    <div className="">
      <NavBar />
      <Header />
      <MainSecOne />
      <MainSecTwo />
      <UserCentric />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
