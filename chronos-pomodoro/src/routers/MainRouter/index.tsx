import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { HomePage } from "../../pages/HomePage";
import { AboutPomodoro } from "../../pages/AboutPomodoro";
import { NotFound } from "../../pages/NotFound";
import { useEffect } from "react";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname])

    return null;
}

export function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/pomodoro' element={<AboutPomodoro />}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
            <ScrollToTop />
        </BrowserRouter>
    );
}