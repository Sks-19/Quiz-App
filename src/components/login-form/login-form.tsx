import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { currUserAction } from "../../store/loggedInUser";
import { authAction } from "../../store/auth";
import "./login-form.scss";

function Login() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  function onSubmit(data: any) {
    dispatch(currUserAction.onUserLogin(data));
    dispatch(authAction.onLogin());
  }
  return (
    <>
      <div className="container">
        <div className="card bg-dark">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="username" className="text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control bg-dark  text-white"
                {...register("username", { required: true })}
              />
            </div>

            <button
              className="btn btn-outline-primary w-100 my-4"
              type="submit"
            >
              Start Quiz
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
