"use client"
import "./news_slide.css"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
const NewsSlide = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS inside useEffect
    }, []);

    return (
        <section className="news">
            <h3 className="latest-news" data-aos="fade-up">What's Happening?</h3>
            <div className="container" data-aos="fade-up">
                <input type="radio" name="slider" id="item-1" checked />
                <input type="radio" name="slider" id="item-2" />
                <input type="radio" name="slider" id="item-3" />
                <input type="radio" name="slider" id="item-4" />
                <input type="radio" name="slider" id="item-5" />
                <div className="cards" >
                    <label className="card" htmlFor="item-1" id="song-1">
                        <input type="checkbox" />
                        <video autoPlay muted loop className="picture video-filter" src="/videos/mag.mp4" playsInline />
                    </label>
                    <label className="card" htmlFor="item-2" id="song-2">
                        <Image
                            alt='song'
                            className='picture'
                            height='400'
                            width='400'
                            src='/images/softxlaunch-instagram.jpg'
                        />
                    </label>
                    <label className="card" htmlFor="item-3" id="song-3">
                        <Image
                            alt='song'
                            className='picture'
                            height='400'
                            width='400'
                            src='/images/how not to gate keep 101.png'
                        />
                    </label>
                    <label className="card" htmlFor="item-4" id="song-4">
                        <video autoPlay muted loop className="picture" src="/videos/trnsprnc.mp4" playsInline />
                    </label>
                    <label className="card" htmlFor="item-5" id="song-5">
                        <Image
                            alt='song'
                            className='picture'
                            height='400'
                            width='400'
                            src='/images/revitalxtrnsprnc.png'
                        />
                    </label>
                </div>
                <div className="player">
                    <div className="upper-part">
                        <div className="play-icon">
                            <svg width="20" height="20" fill="EB8771" stroke="#EB8771" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-play" viewBox="0 0 24 24">
                                <defs />
                                <path d="M5 3l14 9-14 9V3z" />
                            </svg>
                        </div>
                        <div className="info-area" id="test">
                            <label className="song-info" id="song-info-1">
                                <div className="title">REVITAL OFFICIAL SOFT LAUNCH</div>
                                <div className="sub-line">
                                    <div className="subtitle launch-subtitle"><a href="https://posh.vip/e/revital-studio">RSVP HERE</a></div>
                                    <div className="time" style={{ fontWeight: '800' }}>10:27:2023</div>
                                </div>
                            </label>
                            <label className="song-info" id="song-info-2">
                                <div className="title">How Not to GateKeep | Coming Soon</div>
                                <div className="sub-line">
                                    <div className="subtitle">Sources that Pioneered our Agency</div>
                                    <div className="time">-.--</div>
                                </div>
                            </label>
                            <label className="song-info" id="song-info-3">
                                <div className="title">TRNSPRNC</div>
                                <div className="sub-line">
                                    <div className="subtitle">Sister Agency</div>
                                    <div className="time">-.--</div>
                                </div>
                            </label>
                            <label className="song-info" id="song-info-4">
                                <div className="title">Mercury Talk Podcast</div>
                                <div className="sub-line">
                                    <div className="subtitle">What Makes Our Minds Wander?</div>
                                    <div className="time">-.--</div>
                                </div>
                            </label>
                            <label className="song-info" id="song-info-5">
                                <div className="title">Visual Diaries | Coming Soon</div>
                                <div className="sub-line">
                                    <div className="subtitle">Our Month to Month Inspirations</div>
                                    <div className="time">-.--</div>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <span className="progress"></span>
                    </div>
                </div>
            </div>

        </section>
    )
}


export default NewsSlide;