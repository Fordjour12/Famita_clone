import React, { useState } from "react";
import { Link } from "react-router-dom";
import { shopLink } from "../../data";
import classes from "./Shop.module.css";

const Shop = () => {
    const [selectedElement, setSelectedElement] = useState(0);

    const handleClick = (id) => {
        setSelectedElement(id);
    };

    return (
        <>
            <nav className={classes.navigation}>
                {shopLink.map((shop, index) => {
                    const { url, title } = shop;
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
        </>
    );
};

export default Shop;
