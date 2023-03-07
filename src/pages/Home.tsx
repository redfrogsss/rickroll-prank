import { useContext, useEffect } from "react";
import { PagesContext } from "../contexts/PageContext";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    const pages = useContext(PagesContext);

    const showAllPages = () => {
        return pages.map((page, index) => {
            return <div key={index}>{index}: {page.path}</div>
        });
    }

    // run on this page loaded
    useEffect(()=>{
        let randomIndex = Math.floor(Math.random() * pages.length);
        while (randomIndex === 0) randomIndex = Math.floor(Math.random() * pages.length); // make sure not to navigate to home page
        const randomPage = pages[randomIndex];
        console.log("navigate to random page: ", randomPage.path);
        navigate(randomPage.path);
    }, []);

    return <div>{showAllPages()}</div>

}