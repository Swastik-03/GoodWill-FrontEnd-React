import React, { useEffect, useState } from 'react';


function Navbar() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const displayMenuBar = () => {
        const menuBar = document.getElementById("menuBar");
        const lists = document.getElementById("lists");

        if (isSmallScreen) {
            menuBar.style.display = "block";
            lists.style.display = "none";
        } else {
            menuBar.style.display = "none";
            lists.style.display = "block";
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 88.438 * 16); // Assuming 1rem = 16px
        };

        handleResize(); // Call it once to set initial state

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    useEffect(() => {
        displayMenuBar();
    }, [isSmallScreen]);




    return (
        <div>





            <nav class="navbar navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand text-success flex_custom" href="#">
                        <div class="logo"></div>
                        <div class="alignSelf_custom">
                            <h2>GOODWILL</h2>
                        </div>
                    </a>
                    <div id="lists">
                        <ul class="navbar-nav flex-row justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link text-success paddingR_custom paddingL_custom font_custom "
                                    aria-current="page" href="#"><i class='fa fa-home'></i> &nbsp;Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-success paddingR_custom font_custom" href="#"><i
                                    class='fas fa-hands-helping'></i> &nbsp; Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-success paddingR_custom font_custom" href="#"><i class='fa fa-user'></i>
                                    &nbsp; Individual</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-success paddingR_custom font_custom" href="#"><i
                                    class='fa fa-users'></i> &nbsp; NGO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-success paddingR_custom font_custom" href="#"><i
                                    class='fa fa-envelope-o'></i>&nbsp; Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link btn text-success paddingR_custom font_custom cursor-pointer" href="#">
                                    <i class="fa fa-sign-in"></i> &nbsp;Log In</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link btn text-success paddingR_custom font_custom cursor-pointer " href="#">
                                    <i class='fa fa-user-plus'></i>
                                    &nbsp; Sign Up</a>
                            </li>
                        </ul>
                    </div>
                    <div id="menuBar"><button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button></div>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel">
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                        <div class="offcanvas-header">
                            <a class="navbar-brand text-success" href="#">
                                <center>
                                    <div class="logoAtVertNav"></div>
                                    <div class="alignSelf_custom p-5">
                                        <h2>GOODWILL</h2>
                                    </div>
                                </center>
                            </a>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link text-success font_custom p-4" aria-current="page" href="#">
                                        <center><i class='fa fa-home'></i>&nbsp;Home</center>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-success font_custom p-4" href="#">
                                        <center><i class='fas fa-hands-helping'></i>&nbsp;Services</center>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-success font_custom p-4" href="#">
                                        <center><i class='fa fa-user'></i>&nbsp;Individual</center>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-success font_custom p-4" href="#">
                                        <center><i class='fa fa-users'></i>&nbsp;NGO</center>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-success font_custom p-4" href="#">
                                        <center><i class='fa fa-envelope-o'></i>&nbsp;Contact</center>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link btn text-success paddingR_custom font_custom cursor-pointer p-4"
                                        href="#">
                                        <i class="fa fa-sign-in"></i>&nbsp;Log In</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link btn text-success paddingR_custom font_custom cursor-pointer p-4"
                                        href="#">
                                        <i class='fa fa-user-plus'></i>
                                        &nbsp;Sign Up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>






        </div>
    )
}

export default Navbar
