import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <nav className="nav">
            <div className="title-navbar">
                <Link to="/" className="link-title">
                    Vize Takip
                </Link>
            </div>
            <ul className={active}>
                <li className="nav__item">
                    <Link to="/" className="link">
                        Anasayfa
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/bildirim-al" className="link">
                        Bildirim Al
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/iletisim">
                        İletişim
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/login" className="link-register">
                        Kayıt Ol
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/login" className="link-login">
                        Giriş Yap
                    </Link>
                </li>
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;