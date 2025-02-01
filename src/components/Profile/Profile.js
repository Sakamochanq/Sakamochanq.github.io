import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import './Profile.css'

export const Profile = () => {
  return (
    <div className="profile-container">
        <h2 className="title">Profile</h2>
        <br /><br />
        <table border={1}>
            <tr>
                <th>名前</th>
                <td>Sakamochan</td>
            </tr>
            <tr>
                <th>生年月日</th>
                <td>9月18日</td>
            </tr>
            <tr>
                <th>使用言語</th>
                <td>C/C++, React</td>
            </tr>
            <tr>
                <th>好きな食べ物</th>
                <td>寿司</td>
            </tr>
        </table>
        <br /><br /><br />
        <div className="Iam">
            <br />
            <div className="box-1">
                <img src="https://avatars.githubusercontent.com/u/126952815?v=4" className="user-image" />
                <div className="name">
                    <h3>Sakamochan</h3>
                    <p>KIT EV3</p>
                </div>
            </div>
            <br />
            <hr className="dot" />
            <br />
            <div className="box-2">
                <a className='icon' href="#"><GitHubIcon /></a>
                <a className='icon' href="#"></a>
                <a className='icon' href="#"></a>
            </div>
        </div>


        <br /><br /><br /><br /><br />

    </div>
  )
}
export default Profile