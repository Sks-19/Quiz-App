import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../store/auth";
import { currUserAction } from "../../store/loggedInUser";

const EndScreen = () => {
  const dispatch = useDispatch();
  const currUser = useSelector((state: any) => state.currUser.currUser);
  const Score = useSelector((state: any) => state.currUser.score);

  //Current Date and Time
  const d = new Date().toLocaleString();
  const date = d.split(",");

  const onRetake = () => {
    dispatch(authAction.onLogOut());
    dispatch(currUserAction.onReset());
  };
  const onTryAgain = () => {
    dispatch(authAction.onLogOut());
    dispatch(currUserAction.onReset());
  };
  return (
    <>
      {Score >= 6 ? (
        <>
          <div
            className="card"
            style={{ background: "linear-gradient(to left, #add8e6, #b0c4de)" }}
          >
            <h5 className="text-center text-dark">Dear</h5>
            <h1 className="text-center text-primary">{currUser.username},</h1>
            <p className="text-center text-dark">
              You have successfully completed the quiz on
            </p>
            <h4 className="text-center">React.js</h4>
            <h5 className="text-center text-primary">Score: {Score}/10</h5>
            <span className="text-center">Completed on</span>
            <span className="text-center">Date: {date[0]}</span>
            <span className="text-center">Time: {date[1]}</span>
          </div>

          <div className="p-4">
            <button className="btn btn-outline-primary" onClick={onRetake}>
              Retake Quiz
            </button>
          </div>
        </>
      ) : (
        <div
          className="card text-center"
          style={{ background: "linear-gradient(to left, #651C32, #732039)" }}
        >
          <h5 className="text-white">Dear</h5>
          <h1 className="text-warning">{currUser.username},</h1>
          <p className="text-white">You missed the threshold!</p>
          <h4>Better luck next time!</h4>
          <h5 className="text-warning">Score: {Score}/10</h5>
          <div className="py-4">
            <button
              className="btn btn-outline-secondary w-50"
              onClick={onTryAgain}
            >
              Please try again
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EndScreen;
