/*аватар(можно не ваш, а просто какую-нибудь картинку как ссылку)
имя и фамилия
род деятельности
хобби*/

import "./styles.css";


function Profile() {
    return (
      <div className="profile">
        <img src="./images/ava.jpg" 
        alt="girl in the sity" 
        className="avatar"/>
        <h2 className="name">Maria Ivanna</h2>
        <p className="occupation">Just a nice human being</p>
        <p className="hobbies">Reading, sleeping, walking in parks</p>
      </div>
    );
  }
  

export default Profile;