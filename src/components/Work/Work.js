import React from 'react'
import './Work.css'

export const Work = () => {
const projects = [
    {
        name: "Image-Coupling",
        description: "複数枚の画像を１つのPDFに結合するアプリ。",
        SHA: "9ea4101",
        url: "https://github.com/Sakamochanq/Image-Coupling"
    },
    {
        name: "Censor-Me",
        description: "OpenCVより、顔を検出して自動モザイク処理を行うアプリ。",
        SHA: "4f99027",
        url: "https://github.com/Sakamochanq/Censor-Me"
    },
    {
        name: "DMS-Calculator",
        description: "Excel VBA より度分秒の計算をセル上で行うスクリプト。",
        SHA: "984206c",
        url: "https://github.com/Sakamochanq/DMS-Calculator"
    },
    {
        name: "TextArtMaker",
        description: "任意の画像からASCIIアートを作成するアプリ。",
        SHA: "02fbcd7",
        url: "https://github.com/Sakamochanq/TextArtMaker"
    }
];

return (
    <div className="work-container">
        <h2 className="title">Work</h2>
        <br /><br /><br />

        {projects.map((project, index) => (
            <div className="work-item" key={index} onClick={() => window.open(`${project.url}`, "_blank")}>
                <div className="work-date">{project.SHA}</div>
                <div className="work-content">
                    <span className="work-title">{project.name}</span>　｜　
                    <span className="work-summary">{project.description}</span>
                </div>
            </div>
        ))}
        <div className="brace"></div>

        <br /><br />


        <div className="see-more-container">
            <button className="btn"   onClick={() => window.open("https://github.com/Sakamochanq?tab=repositories", "_blank")}>See more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15px" width="15px" className="icon">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" stroke="#292D32" d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"></path>
                </svg>
            </button>
        </div>

        <br /><br /><br /><br /><br />
    </div>
);}

export default Work