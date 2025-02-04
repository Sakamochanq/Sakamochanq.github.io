import React from 'react'
import './Work.css'

export const Work = () => {
const projects = [
    {
        image: "./assets/images/project/Image-Coupling.png",
        name: "Image-Coupling",
        description: "複数枚の画像を１つのPDFに結合するアプリ。画像枚数が多くてもPDFにできるよ。",
        link: "https://github.com/Sakamochanq/Image-Coupling"
    },
    {
        image: "./assets/images/project/LaTex-Formula-Generator.png",
        name: "LaTex-Formula-Generator",
        description: "LaTexの数式を生成するWebアプリ。ついでにプレビューされるから、コードを書くこともできるよ。",
        link: "https://latex-formula-generator.vercel.app/"
    },
    {
        image: "./assets/images/project/Liberal-Chart.png",
        name: "Liberal-Chart",
        description: "金沢工業大学リベラルアーツ系科目の早見表。授業概要とか難易度とかまとめてるよ。",
        link: "https://liberal-chart.vercel.app/"
    },
    {
        image: "./assets/images/project/atcoder-archive.png",
        name: "atcoder-archive",
        description: "atcoderで提出したACとWAのコードを保管してるよ。ほとんどがABC。",
        link: "https://github.com/Sakamochanq/atcoder-archive"
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
                </a>
            ))}
        </div>
        <br /><br /><br /><br /><br />
    </div>
);
}
export default Work