import React from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

class Root extends React.Component{
    render(){
        return (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        )
    }
}

export default Root