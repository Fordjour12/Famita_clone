import React, { useState } from "react";
import { navigationList } from "../../data";
import { Link } from "react-router-dom";
import { HiShoppingBag, HiHeart } from "react-icons/hi";
import classes from "./Header.module.css";
const Header = () => {
    const [selectedElement, setSelectedElement] = useState(0);

    const handleClick = (id) => {
        setSelectedElement(id);
    };
    return (
        <header>
            <div className={classes.headerItems}>
                <h1 className={classes.headerTitle}>Famita</h1>

                <div className="icons">
                    <HiShoppingBag className={classes.icon} />
                    <HiHeart className={classes.icon} />
                </div>
            </div>
            <nav className={classes.navigation}>
                {navigationList.map((item, index) => {
                    const { title, url } = item;

                    return (
                        <li key={index} className={classes.navLink}>
                            <Link
                                to={url}
                                className={
                                    selectedElement === index
                                        ? `${classes.active} ${classes.navLink}`
                                        : `${classes.navLink}`
                                }
                                onClick={() => handleClick(index)}
                            >
                                {title}
                            </Link>
                        </li>
                    );
                })}
            </nav>
        </header>
    );
};

export default Header;
