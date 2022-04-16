import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import Access from "./pages/Access";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    app: {
        backgroundColor: "#14161a",
        color: "white",
        minHeight: "100vh",
    },
}));

function App() {

    const classes = useStyles();

    return (
        <BrowserRouter>
            <div className={classes.app} >
                <Header />
                <Routes>
                    <Route index element={ <Home />} />
                    <Route path="/access-account" element={<Access />} />
                    <Route path="/coins/:id" element={<Coin />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
