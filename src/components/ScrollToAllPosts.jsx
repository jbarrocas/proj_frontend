import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAllPosts = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 540);
    }, [pathname]);
}

export default ScrollToAllPosts;