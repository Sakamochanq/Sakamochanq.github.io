import React from 'react'
import './Skill.css'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

export const Skill = () => {
  return (
    <div className="skill-container">
      <h2 className='title'>Skills</h2>
      <br /><br />
      {/* /Special Thanks | CSS Stock */}
      <div className="radar-chart-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 200 200">
              <g stroke="#e4e4e4">
                  <path d="M 100 100 L 100.0 0.0"/>
                  <path d="M 100 100 L 195.1 69.1"/>
                  <path d="M 100 100 L 158.8 180.9"/>
                  <path d="M 100 100 L 41.2 180.9"/>
                  <path d="M 100 100 L 4.9 69.1"/>
              </g>
              <g stroke="#e4e4e4" fill="none">
                  <path d="M 100.0 0.0 L 195.1 69.1 L 158.8 180.9 L 41.2 180.9 L 4.9 69.1 L 100.0 0.0"/>
                  <path d="M 100.0 20.0 L 176.1 75.3 L 147.0 164.7 L 53.0 164.7 L 23.9 75.3 L 100.0 20.0"/>
                  <path d="M 100.0 40.0 L 157.1 81.5 L 135.3 148.5 L 64.7 148.5 L 42.9 81.5 L 100.0 40.0"/>
                  <path d="M 100.0 60.0 L 138.0 87.6 L 123.5 132.4 L 76.5 132.4 L 62.0 87.6 L 100.0 60.0"/>
                  <path d="M 100.0 80.0 L 119.0 93.8 L 111.8 116.2 L 88.2 116.2 L 81.0 93.8 L 100.0 80.0"/>
              </g>
              <path d="M 100.0 10.0 L 147.6 84.5 L 141.1 156.6 L 64.7 148.5 L 23.9 75.3 L 100.0 10.0" fill="#47474730" stroke="#474747"/>
              <g fill="#474747">
                  <circle cx="100.0" cy="10.0" r="3"/>
                  <circle cx="147.6" cy="84.5" r="3"/>
                  <circle cx="141.1" cy="156.6" r="3"/>
                  <circle cx="64.7" cy="148.5" r="3"/>
                  <circle cx="23.9" cy="75.3" r="3"/>
              </g>
          </svg>
          <dl>
            <div>
                <dt>C#</dt>
                <dd>90.0</dd>
            </div>
            <div>
                <dt>C/C++</dt>
                <dd>50.0</dd>
            </div>
            <div>
                <dt>React</dt>
                <dd>70.0</dd>
            </div>
            <div>
                <dt>Coding</dt>
                <dd>60.0</dd>
            </div>
            <div>
                <dt>UI</dt>
                <dd>80.0</dd>
            </div>
          </dl>  
      </div>

      <br />
      <hr />
      <br />
      <br />
      <p>あくまで個人的な指標となります。C#によるデスクトップアプリケーションやReact.jsによるWebアプリケーションの開発等の経験があります。そして、これらの開発に伴い、UI/UXデザインやコーディングスキルも磨いております。C/C++に関してですが、これといったアプリ開発の経験は少ないものの、独学で学習を進めている段階です。Atooderで少し触れた程度です。</p>

      <br /><br /><br /><br /><br />
    </div>
  );
}
export default Skill