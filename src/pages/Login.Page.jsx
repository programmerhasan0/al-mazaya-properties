import MainLayout from "../layouts/Main.Layout";

const Login = () => {
  document.title = "Login | Al Mazaya Properties";
  return (
    <MainLayout>
      <input type="text" placeholder="username" />
    </MainLayout>
  );
};

export default Login;
