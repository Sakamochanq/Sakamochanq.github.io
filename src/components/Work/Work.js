import React from 'react'
import './Work.css'

export const Work = () => {
const projects = [
    {
        image: "./assets/images/project/Image-Coupling.png",
        name: "Image-Coupling",
        description: "複数枚の画像を１つのPDFに結合するアプリ。画像枚数が多くてもPDFにできるよ。",
        language: ["C#"],
        link: "https://github.com/Sakamochanq/Image-Coupling"
    },
    {
        image: "./assets/images/project/Censor-Me.png",
        name: "Censor-Me",
        description: "OpenCVを使用し、画像から顔を検出し自動モザイク処理をしてくれるよ。",
        language: ["C#"],
        link: "https://github.com/Sakamochanq/Censor-Me"
    },
    {
        image: "./assets/images/project/LaTex-Formula-Generator.png",
        name: "LaTex-Formula-Generator",
        description: "LaTexの数式を生成するWebアプリ。ついでにプレビューされるから、コードを書くこともできるよ。",
        language: ["React", "Node"],
        link: "https://latex-formula-generator.vercel.app/"
    },
    {
        image: "./assets/images/project/Liberal-Chart.png",
        name: "Liberal-Chart",
        description: "金沢工業大学リベラルアーツ系科目の早見表。授業概要とか難易度とかまとめてるよ。",
        language: ["React", "Node"],
        link: "https://liberal-chart.vercel.app/"
    }
];

return (
    <div className="work-container">
        <h2 className="title">Work</h2>
        <br /><br />
        <div className="project-wrapper">
            {projects.map((project, index) => (
                <a href={project.link} className="project-card" key={index} target="_blank" rel="noopener noreferrer">
                    <img className='project-image' src={process.env.PUBLIC_URL + project.image} alt={project.name} />
                    <h2 className='project-name'>{project.name}</h2>
                    <p className='project-desc'>{project.description}</p>
                    {project.language.map((lang, langIndex) => (
                        <div style={{ display: "inline-block", justifyItems: "left", textAlign: "center", padding: "3px" }}>
                            <p className="project-tags" key={langIndex}>{lang}</p>
                        </div>
                    ))}
                </a>
            ))}
        </div>
        <br /><br /><br /><br /><br />
    </div>
);
}
export default Work