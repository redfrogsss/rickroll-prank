import { ReactNode } from "react";
import { useContext, useEffect } from "react";
import { RickrollContext } from "../contexts/RickrollContext";

const NavBar = () => {
    return (
        <div className="w-full h-fit bg-purple-900 p-4 text-center shadow-lg fixed top-0">
            <article className="prose m-auto">
                <h1 className="text-white">Yahoot!</h1>
            </article>
        </div>
    );
}

type ButtonProps = {
    color: string;
    children: ReactNode;
}
const Button = ({color, children} : ButtonProps) => {

    const url = getRickrollLink();
    const colorClass = "bg-" + color + "-800 w-full h-full text-white rounded-lg text-xl";

    return (
        <a href={url} className={colorClass} target="_self"><div className="w-full h-full flex flex-col justify-center items-center">{children}</div></a>
    );
}

const getRickrollLink = () => {
    const rickroll = useContext(RickrollContext);

    const randomIndex = Math.floor(Math.random() * rickroll.length);
    const randomUrl = rickroll[randomIndex];

    return randomUrl;
}

export default function KahootQuestion() {

    return (
        <div className="w-screen h-screen bg-zinc-200">
            <NavBar />
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-5/6 h-full bg-white rounded-lg shadow-lg flex flex-col justify-center items-center m-32 p-8">
                    <article className="prose text-center">
                        <h1 className="text-3xl">🤔 Question 1: Finish the sentence</h1>
                        <p className="text-xl">🎤 Never Gonna...</p>
                    </article>
                    <div className="w-full h-1/2 grid grid-cols-2 gap-4 mt-16">
                        <Button color="red">🔴 Give You Up. </Button>
                        <Button color="blue">🔷 Let You Down.</Button>
                        <Button color="yellow">🟨 Run Around.</Button>
                        <Button color="green">💚 Desert You.</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}