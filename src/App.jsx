//removed experience
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar } from "./components";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const App = () => {
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBaL77tg6fYYLoaZMfI9m9xonjjhHg-ND4",
    authDomain: "sandylandscaping-2e30c.firebaseapp.com",
    projectId: "sandylandscaping-2e30c",
    storageBucket: "sandylandscaping-2e30c.appspot.com",
    messagingSenderId: "142564956654",
    appId: "1:142564956654:web:cffbb751b3be92297dd6ff",
    measurementId: "G-XF1WRNEFYC",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>
        {/* 
        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div> */}

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]"
        >
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
          ></div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
