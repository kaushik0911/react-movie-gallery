import MenuContainer from "./menu-container/menu-container";
import GalleryConainter from "./gallery-container/gallery-container";
import RegistrationContainer from "./session-container/registration-container";

import "./App.css";

function App() {
  return (
    <div>
      <MenuContainer/>
      {/* <GalleryConainter/> */}
      <RegistrationContainer/>
    </div>
  );
}

export default App;
