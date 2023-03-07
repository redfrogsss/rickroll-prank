import { createContext } from "react";

interface Page {
    path: string;
    element: JSX.Element;
}

export const PagesContext = createContext<Page[]>([]);