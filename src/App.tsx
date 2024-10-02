import { PropsWithChildren, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from './store';
import { toggleRTL, toggleTheme, toggleLocale, toggleMenu, toggleLayout, toggleAnimation, toggleNavbar, toggleSemidark } from './store/themeConfigSlice';
import store from './store';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser, validateToken } from '@/utils/air_utils/LoginUser'
function App({ children }: PropsWithChildren) {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();
    const [tokenValidationLoading, setTokenValidationLoading] = useState(true);
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        dispatch(toggleTheme(localStorage.getItem('theme') || themeConfig.theme));
        dispatch(toggleMenu(localStorage.getItem('menu') || themeConfig.menu));
        dispatch(toggleLayout(localStorage.getItem('layout') || themeConfig.layout));
        dispatch(toggleRTL(localStorage.getItem('rtlClass') || themeConfig.rtlClass));
        dispatch(toggleAnimation(localStorage.getItem('animation') || themeConfig.animation));
        dispatch(toggleNavbar(localStorage.getItem('navbar') || themeConfig.navbar));
        dispatch(toggleLocale(localStorage.getItem('i18nextLng') || themeConfig.locale));
        dispatch(toggleSemidark(localStorage.getItem('semidark') || themeConfig.semidark));
    }, [dispatch, themeConfig.theme, themeConfig.menu, themeConfig.layout, themeConfig.rtlClass, themeConfig.animation, themeConfig.navbar, themeConfig.locale, themeConfig.semidark]);

    useEffect(() => {
        const token = localStorage.getItem("token")
        const email = localStorage.getItem("email")
        if (token && email) {
            validateToken(email, token).then(() => {
                setTokenValidationLoading(false);
                navigate('/')
            }).catch((e) => {
                console.log(e)
                setTokenValidationLoading(false);
                navigate('/login')
            });
        } else {
            setTokenValidationLoading(false);
        }
    }, []);
    useEffect(() => {
        const token = localStorage.getItem("token")
        const email = localStorage.getItem("email")
        if ((!token || !email) && location.pathname !== "/login" && location.pathname !== "/signup") {
            navigate('/login')
        }
        if (location.pathname === "/logout") {
            setTokenValidationLoading(true);
            localStorage.removeItem("token");
            location.pathname = "/login"
            return
        }
    }, [location])
    if (tokenValidationLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div
            className={`${(store.getState().themeConfig.sidebar && 'toggle-sidebar') || ''} ${themeConfig.menu} ${themeConfig.layout} ${themeConfig.rtlClass
                } main-section antialiased relative font-nunito text-sm font-normal`}
        >
            {children}
        </div>
    );
}

export default App;
