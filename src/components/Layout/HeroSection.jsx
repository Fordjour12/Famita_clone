import Card from "../UI/Card";
import { policy } from "../../data";
// import imgs from "../../asset/pexels-tatiana-pavlova-9890056-removebg-preview.png";
import { BiChevronRight } from "react-icons/bi";
import classes from "./HeroSection.module.css";
const HeroSection = () => {
    return (
        <>
            <Card>
                <div className={classes.heroTitle}>
                    <div className={classes["heroTitle-content"]}>
                        <h3 className={classes["heroTitle-subInfo"]}>
                            New Trend 2021
                        </h3>
                        <h1 className={classes["heroTitle-mainInfo"]}>
                            Men's{" "}
                            <span className={classes.spanText}>
                                Collections.
                            </span>
                        </h1>
                        <button className={classes.btn}>
                            <p className={classes.p}>Shop Now</p>
                            <BiChevronRight className={classes.icon} />
                        </button>
                    </div>
                    {/* <img src={imgs} className={classes.imgs} alt="" /> */}
                </div>
            </Card>
            <div className={classes.policy}>
                {policy.map((policyItem, index) => {
                    const { image, title, description } = policyItem;
                    return (
                        <ul className={classes.policyItems}>
                            <div key={index}>
                                <div className={classes.icons}>{image}</div>
                                <div>
                                    <h1 className={classes.policyTitle}>
                                        {title}
                                    </h1>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </ul>
                    );
                })}
            </div>
        </>
    );
};

export default HeroSection;
