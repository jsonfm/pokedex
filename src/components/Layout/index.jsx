import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Layout({children}){
    return(
        <>
            {/* <Header /> */}
            <main className="container min-h-screen px-4 pt-8">
                {children}
            </main>
            <Footer/>
        </>
    )
}