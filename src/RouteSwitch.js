import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Home from "./components/Home";
import About from "./components/About";
import Stock from "./components/Stock";

const RouteSwitch = (props) => {
    return (
        <BrowserRouter>
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Highest Mentioned Stocks on Reddit</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home
                stocks={props.stocks}
                getAverageSentiment={props.getAverageSentiment}
                 />} />
                <Route exact path="/stock/:name" element={
                    <Stock/>
                }
                />
                <Route path="/about" element={<About/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;