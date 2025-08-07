import { FaBars } from "react-icons/fa";
import "./BurguerMenu.css";

function BurguerMenu() {
    return (
        <div className="BurguerMenu">
            <button className="BurguerMenu-button">
                <FaBars />
            </button>
        </div>
    )
}

export default BurguerMenu;