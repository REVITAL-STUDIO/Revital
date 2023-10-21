"use client";
import "../navbar.css"
import Image
 from "next/image";
const Menu = () => {

    return (
      <div className="menu-content" id="mobile-menu">
                <iframe className="soundcloud" width="500" height="500" scrolling="yes" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1634121064&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                <div className="logo-menu">
                    <Image
                            alt='revital logo'
                            className='logo-pic'
                            height='191'
                            width='600'
                            src='/images/REVITAL black.png'
                        />
                </div>
                <ul className="navbar__menu">
                    <li><a href="/index.html">Studio</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                </ul>
            </div>
    )
}

export default Menu;