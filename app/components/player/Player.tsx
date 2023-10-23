"use client";

const Player = () => {


    return (
        <div className="player">
        <div className="upper-part">
            <div className="play-icon z-99">
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
    )
}

export default Player;