import { Blog } from "../data";
import classes from "./Blog.module.css";

const BlogPage = () => {
    return (
        <div>
            <div>
                <h1 className={classes.header}>Blog Post</h1>
                {Blog.map((item, index) => {
                    const { title, subtitle, description } = item;

                    return (
                        <li key={index} className={classes.listItems}>
                            <div className={classes.BlogContent}>
                                <h1 className={classes.BlogContentTitle}>
                                    {title}
                                </h1>
                                <h3 className={classes.BlogContentSubTitle}>
                                    {subtitle}
                                </h3>
                                <p className={classes.BlogContentDescription}>
                                    {description}
                                </p>
                            </div>
                            <div className={classes.btn}>
                                <button className={classes.ctaBtn}>
                                    Read More
                                </button>
                            </div>
                        </li>
                    );
                })}
            </div>
        </div>
    );
};

export default BlogPage;
