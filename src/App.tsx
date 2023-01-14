import { useSelector } from "react-redux";
import "./App.css";
import Login from "./components/login-form/login-form";
import Question from "./components/question-page/question-page";

function App() {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  return (
    <>
      <div className="container-fluid main">
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Question />}
      </div>
    </>
  );
}

export default App;
