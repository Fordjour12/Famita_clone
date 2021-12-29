import { Link } from "react-router-dom";
import { navigationList } from "../../data";
import classes from "./Footer.module.css";
const Footer = () => {
//     const blogOut = () => {
//         if (pathName === "/blog") {
// 
// 			
//         }
//     };
    return (
        <div>
            <div className={classes.seasons}>
                <div className={classes.seasonWear}>
                    <h2 className={classes.seasonWearHead}>
                        Mid Season up to 50% off
                    </h2>
                    <button
                        className={`${classes.newsLetterBtn} ${classes.btnColor}`}
                    >
                        Shop Now
                    </button>
                </div>
                <div className={classes.seasonWear}>
                    <h2>Season end up to 50% off</h2>
                    <button
                        className={`${classes.newsLetterBtn} ${classes.btnColor}`}
                    >
                        Shop Now
                    </button>
                </div>
            </div>
            <div className={classes.newsLetter}>
                <h2 className={classes.newsLetterHead}>
                    Subscribe to our newsletter
                </h2>
                <p className={classes.newsLetterBody}>
                    Subscribe to our newsletter and get 10% off your first
                    purchase
                </p>
                <div className={classes.newsLetterCta}>
                    <input
                        type="email"
                        id="newsLetter"
                        placeholder="Enter Your Email Here"
                        className={classes.newsLetterInput}
                    />
                    <button className={classes.newsLetterBtn}>Subscribe</button>
                </div>
            </div>

            <footer className={classes.footer}>
                <div className={classes.footerContent}>
                    <h1 className={classes.footerHead}>Famita</h1>
                    <p className={classes.footerCopy}>
                        &copy; Copyright 2021 Famita
                    </p>
                </div>

                <nav className={classes.navigation}>
                    {navigationList.map((item, index) => {
                        const { title, url } = item;

                        return (
                            <li key={index} className={classes.navLink}>
                                <Link to={url} className={classes.navLink}>
                                    {title}
                                </Link>
                            </li>
                        );
                    })}
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
