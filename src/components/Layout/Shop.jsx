import React, { useState } from "react";
import { Link } from "react-router-dom";
import { shopLink } from "../../data";
import classes from "./Shop.module.css";
import cImg from "../../asset/pexels-luis-quintero-3731256_1_-removebg-preview.png";
import cImg1 from "../../asset/ryan-hoffman-6Nub980bI3I-unsplash-removebg-preview.png";

const Shop = () => {
    const [selectedElement, setSelectedElement] = useState(0);

    const handleClick1 = (id) => {
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
                                onClick={() => handleClick1(index)}
                            >
                                {title}
                            </Link>
                        </li>
                    );
                })}
            </nav>
            <div className={classes.shop}>
                <div>
                    <div className={classes.shopItem}>
                        <img src={cImg} className={classes.cImg} alt="" />
                    </div>
                    <div>
                        <p className={classes.shopItemTitle}>items name</p>
                        <h4 className={classes.shopItemPrice}>$price</h4>
                    </div>
                </div>
                <div>
                    <div className={classes.shopItem}>
                        <img src={cImg1} className={classes.cImg} alt="" />
                    </div>
                    <div>
                        <p className={classes.shopItemTitle}>items name</p>
                        <h4 className={classes.shopItemPrice}>$price</h4>
                    </div>
                </div>
                <div>
                    <div className={classes.shopItem}>
                        <img src={cImg} className={classes.cImg} alt="" />
                    </div>
                    <div>
                        <p className={classes.shopItemTitle}>items name</p>
                        <h4 className={classes.shopItemPrice}>$price</h4>
                    </div>
                </div>
                <div>
                    <div className={classes.shopItem}>
                        <img src={cImg1} className={classes.cImg} alt="" />
                    </div>
                    <div>
                        <p className={classes.shopItemTitle}>items name</p>
                        <h4 className={classes.shopItemPrice}>$price</h4>
                    </div>
                </div>
                <div>
                    <div className={classes.shopItem}>
                        <img src={cImg} className={classes.cImg} alt="" />
                    </div>
                    <div>
                        <p className={classes.shopItemTitle}>items name</p>
                        <h4 className={classes.shopItemPrice}>$price</h4>
                    </div>
                </div>
                <div>
                    <div className={classes.shopItem}>
                        <img src={cImg1} className={classes.cImg} alt="" />
                    </div>
                    <div>
                        <p className={classes.shopItemTitle}>items name</p>
                        <h4 className={classes.shopItemPrice}>$price</h4>
                    </div>
                </div>
                <div>
                    <div className={classes.shopItem}>
                        <img src={cImg} className={classes.cImg} alt="" />
                    </div>
                    <div>
                        <p className={classes.shopItemTitle}>items name</p>
                        <h4 className={classes.shopItemPrice}>$price</h4>
                    </div>
                </div>
                <div>
                    <div className={classes.shopItem}>
                        <img src={cImg1} className={classes.cImg} alt="" />
                    </div>
                    <div>
                        <p className={classes.shopItemTitle}>items name</p>
                        <h4 className={classes.shopItemPrice}>$price</h4>
                    </div>
                </div>
            </div>
            <button className={classes.shopBtn}>
                <Link to="/shop" className={classes.shopBtnLink}>
                    Shop
                </Link>
            </button>
        </>
    );
};

export default Shop;
