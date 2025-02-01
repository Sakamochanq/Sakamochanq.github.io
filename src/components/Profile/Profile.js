import React from 'react'
import './Profile.css'

export const Profile = () => {
  return (
    <div className="profile-container">
        <h2 className="title">Profile</h2>
        <br /><br />
        <table border={1}>
            <tr>
                <th>名前</th>
                <td>Sakamochanq</td>
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
    </div>
  )
}
export default Profile