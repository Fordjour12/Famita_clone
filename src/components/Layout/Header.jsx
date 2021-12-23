import React from "react";
import { navigationList } from "../../data";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <h1>Famita</h1>

            {navigationList.map((item, index) => {
                const { title, url } = item;

                return (
                    <li key={index}>
                        <Link to={url}>{title}</Link>
                    </li>
                );
            })}
        </header>
    );
};

export default Header;
