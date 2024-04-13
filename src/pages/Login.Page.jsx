import { useForm } from "react-hook-form";
import MainLayout from "../layouts/Main.Layout";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  // Setting document title
  document.title = "Login | Al Mazaya Properties";

  //Hooks
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();

  // Getting the previews location
  const from = useLocation().state ? useLocation().state.prev : "/";

  // Form Submit Handler
  const onSubmit = () => {
    signInWithEmailAndPassword(auth, watch("email"), watch("password"))
      .then((credintial) => {
        localStorage.setItem("token", credintial.user.accessToken);
        toast.success("Login Successfull");
        navigate(from);
      })
      .catch((err) => {
        toast.error("Invalid Credintials");
        console.log("logging the error", err);
      });
  };

  return (
    <MainLayout>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: true })}
          placeholder="Enter Your email"
          type="text"
        />
        <br />
        <input
          {...register("password", { required: true })}
          placeholder="Enter your password"
          type="password"
        />

        <input type="submit" className="btn btn-success" value="Login" />
      </form>
    </MainLayout>
  );
};

export default Login;
