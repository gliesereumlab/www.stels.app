import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";

import {Header} from "./components/common/Header/Header";
import {Footer} from "./components/common/Footer/Footer";
import {Home} from './components/pages/Home/Home';
import {Market} from "./components/pages/Market/Market";
import {NotFound} from "./components/pages/NotFound/NotFound";
import {About} from "./components/pages/About/About";

function App() {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/market" element={<Market/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>

    );
}

export default App;
