import MainLayout from "../layouts/Main.Layout";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="flex justify-center items-center mt-5">
        <img src="/images/404.svg" alt="Not Found Image" />
      </div>
      <h1 className="text-center text-4xl mt-4">404 | Page Not Found 😔</h1>
    </MainLayout>
  );
};

export default NotFound;
