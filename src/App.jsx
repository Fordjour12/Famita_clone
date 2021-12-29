import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { navigationList } from "./data";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                {navigationList.map((item, index) => {
                    const { component, url } = item;

                    return <Route key={index} path={url} element={component} />;
                })}
            </Routes>
            <Footer />
        </>
    );
};

export default App;
