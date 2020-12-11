import React from 'react';
import './App.css';


function App(props) {
  const actButton = (e) =>{
    const btn = e.target;
    btn.classList.toggle("active");
    const icon = e.target.childNodes[0]
    icon.classList.toggle("activeIcon");
    console.log(icon)
  }
  const { userName, userimg, timeStamp, postDetails, postImage } = props.obj;
  return (
    <div className="PosterContainer">
      <div className="mainContainer">
        <div>
        <img className="profileImage" alt="User Image" src={userimg} />
        <span className="userName">{userName} <br /> <span className="postTime">{timeStamp}</span> </span>
        <span className="postMenu">...</span>
        </div>
        
        <div className="postDetails">{postDetails}</div>
        <img className="postImage" src={postImage} alt="Post Image" />
        <div className="postLine"><hr /></div>
        <div className="postButton">
          <button onClick={(e) => actButton(e)} className="Button"><i class="fas fa-thumbs-up"></i> Like</button>
          <button onClick={(e) => actButton(e)} className="Button"><i class="far fa-comment"></i> Comment</button>
          <button onClick={(e) => actButton(e)} className="Button"><i class="fas fa-share-square"></i> Share</button>
        </div>
      </div>
    </div>
  );
}

export default App;
