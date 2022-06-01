import Component1 from "./components/Component1.js";
import GlobalFooter from "./components/GlobalFooter.js";
import reactLogo from "./images/react-logo.png";

export default function App() {
    return (
        <div>
            <img src={reactLogo} alt="" />
            <h1>Let's code! :)</h1>
            <Component1 />
            <GlobalFooter />
        </div>
    );
}
