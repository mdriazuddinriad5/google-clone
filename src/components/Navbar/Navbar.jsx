import { IoApps } from "react-icons/io5";

const Navbar = () => {
    return (
        <div>
            <div className="flex items-center justify-end border-x-2  border-y-2 bg-base-100">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Gmail</a></li>
                    <li><a>Images</a></li>
                    <li><a><IoApps className="mt-1" /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;