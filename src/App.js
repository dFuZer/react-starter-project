import ExamplePage from "./components/ExamplePage.js";
import GlobalFooter from "./components/GlobalFooter.js";
import React from "react";
import "./styles/style.css";

export default function App() {
    return (
        <React.Fragment>
            <ExamplePage />
            <GlobalFooter />
        </React.Fragment>
    );
}
