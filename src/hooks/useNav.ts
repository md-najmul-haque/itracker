import React, { useEffect } from 'react';

const useNav = () => {

    const [navbar, setNavbar] = React.useState<boolean>(false);
    // const [navBarLogo, setNavBarLogo] = React.useState<boolean>();

    const changeBackground = () => {

        if (window.scrollY >= 300) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    useEffect(() => {
        changeBackground();
        window.addEventListener('scroll', changeBackground)
    }, [])

    return { navbar };
};

export default useNav;