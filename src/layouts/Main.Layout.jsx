import Navbar from "../components/Navbar.Component";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default MainLayout;
