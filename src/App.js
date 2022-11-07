import { BrowserRouter } from "react-router-dom";
import { Category, Search, Footer, Header } from "./components";
import Pages from "./pages/Pages";



function App() {
  return (
    <div className="App">
      <BrowserRouter className="mx-20">
        <div className="section over-hide z-bigger">
          <input className="checkbox" type="checkbox" name="general" id="general"/>
          <label className="for-checkbox" htmlFor="general"></label>
          <div className="background-color"></div>
          <div className="section over-hide z-bigger">
            <div className="container pb-5">
              <div className="row justify-content-center pb-5">
                  <Header />
                  <Search/>
                  <Category />
                  <Pages />
                  <Footer />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
