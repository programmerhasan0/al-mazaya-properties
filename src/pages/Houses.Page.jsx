import Properties from "../components/Properties.Component";
import MainLayout from "../layouts/Main.Layout";

const Houses = () => {
  document.title = "Houses | Al Mazaya Properties";
  return (
    <MainLayout>
      <h2 className="text-3xl text-center mt-5 mb-5">Find Your House</h2>
      <Properties />
    </MainLayout>
  );
};

export default Houses;
