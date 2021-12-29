import classes from "./Page.module.css";
import cImg from "../asset/pexels-luis-quintero-3731256_1_-removebg-preview.png";
import cImg1 from "../asset/ryan-hoffman-6Nub980bI3I-unsplash-removebg-preview.png";
const Page = () => {
    return (
        <div>
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
    );
};

export default Page;
