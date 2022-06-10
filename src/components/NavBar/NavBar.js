import LateralDrawer from "../LateralDrawer/LateralDrawer"
import './NavBar.css'
const NavBar = () => {

    return(
        <nav className="primary-navbar">
            <div className="group-buttons">
                <LateralDrawer />
                <button>
                    <img src="/icons/buscar.svg" alt="" />
                </button>
            </div>
            <img src="/hbomax-logo.svg" alt="Logo HBO" />
            <button className="avatar-container">
                <div className="circle-avatar">
                    <p>c</p>
                </div>
                <p>Chrisss</p>
            </button>
        </nav>
    )
}

export default NavBar