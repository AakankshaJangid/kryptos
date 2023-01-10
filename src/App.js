import Footer from "./components/footer/Footer";
import GetStarted from "./components/mainSection/GetStarted";
import MainSecOne from "./components/mainSection/MainSecOne";
import MainSecTwo from "./components/mainSection/MainSecTwo";
import UserCentric from "./components/mainSection/UserCentric";
function App() {
  return (
    <div className="">
      <MainSecOne />
      <MainSecTwo />
      <UserCentric />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
