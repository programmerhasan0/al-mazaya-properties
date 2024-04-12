import Navbar from "../components/Navbar.Component";

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default MainLayout;