import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import ElementPage from "./Pages/ElementPage";
import Page from "./Pages/Page";
import BlogPage from "./Pages/BlogPage";
import { BiMoney, BiCreditCard, BiHeadphone, BiCar } from "react-icons/bi";
export const navigationList = [
    {
        title: "Home",
        url: "/",
        navLink: "nav__link",
        navList: "nav__list",
        component: <HomePage />,
    },

    {
        title: "Shop",
        url: "/shop",
        navLink: "nav__link",
        navList: "nav__list",
        component: <ShopPage />,
    },
    {
        title: "Element",
        url: "/element",
        navLink: "nav__link",
        navList: "nav__list",
        component: <ElementPage />,
    },
    {
        title: "Page",
        url: "/pag",
        navLink: "nav__link",
        navList: "nav__list",
        component: <Page />,
    },
    {
        title: "Blog",
        url: "/blog",
        navLink: "nav__link",
        navList: "nav__list",
        component: <BlogPage />,
    },
];

export const policy = [
    {
        image: <BiCar />,
        title: "Free Delivery",
        description: "Free delivery for items $99 and up",
    },
    {
        image: <BiMoney />,
        title: "30 Days Return",
        description: "If goods have Problems ",
    },
    {
        image: <BiCreditCard />,
        title: "Secure Payment",
        description: "100% Secure Payments",
    },
    {
        image: <BiHeadphone />,
        title: "24/7 Support",
        description: "Dedicated Support",
    },
];

export const shopLink = [
    {
        title: "New Arrivals",
        url: "#",
    },
    {
        title: "Feature Products",
        url: "#",
    },
    { title: "Sale Item", url: "#" },
];
