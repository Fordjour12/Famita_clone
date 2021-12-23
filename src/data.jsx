import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import ElementPage from "./Pages/ElementPage";
import Page from "./Pages/Page";
import BlogPage from "./Pages/BlogPage";

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
