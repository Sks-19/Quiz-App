import questionBank from "../../database/qestion-bank";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { currUserAction } from "../../store/loggedInUser";
import EndScreen from "../EndScreen/endScreen";

function Question() {
  const dispatch = useDispatch();
  const [id, setId] = useState(1);
  const currUser = useSelector((state: any) => state.currUser.currUser);
  const Score = useSelector((state: any) => state.currUser.score);
  const questions = questionBank.filter((val) => val.id === id);
  const { register, handleSubmit } = useForm();

  const onAnswer = (data: any) => {
    questions.map((que) => {
      if (data.option === que.answer) {
        dispatch(currUserAction.onCorrect());
      }
    });
    setId(id + 1);
  };
  return (
    <>
      {id > 10 ? (
        <EndScreen />
      ) : (
        <>
          {questions?.map((val) => (
            <>
              <div className="card my-3 bg-dark text-white" key={val.id}>
                <form onSubmit={handleSubmit(onAnswer)}>
                  <h3 className="card-title">Question {val.id}</h3>
                  <p>{val.question}</p>
                  {val.options?.map((option) => {
                    return (
                      <>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            value={option}
                            id="option1"
                            {...register("option", { required: true })}
                          />
                          <label className="form-check-label" htmlFor="option">
                            {option}
                          </label>
                        </div>
                      </>
                    );
                  })}
                  <button
                    type="submit"
                    className="btn btn-outline-info"
                    style={{ float: "right" }}
                  >
                    Next
                  </button>
                </form>
              </div>
            </>
          ))}
        </>
      )}
    </>
  );
}

export default Question;
