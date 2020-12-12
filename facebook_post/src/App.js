import USERIMAGE from './assets/userImage.jpg'
import './App.css'


function App() {
  function Header(){
    return(<div>
      <div className="header">
      <div className="logo">MTEHSEEN.COM</div>
        <div className="iconBox">
          <div className="icon1">
          <i class="fas fa-home fa-lg"></i>
          </div>
          <div className="icon2">
          <i class="fas fa-video fa-lg"></i>
          </div>
          <div className="icon3">
          <i class="fas fa-users fa-lg"></i>
          </div>
          <div className="icon4">
          <i class="fab fa-xbox fa-lg"></i>
          </div>
        </div>

        <div className="userProfile">
          <img className="userImg" width="30px" height="30px" src={USERIMAGE} alt="User Image" />
          <div className="userName">Tehseen Jawed</div>
        </div>

        <div className="setIconBody">
          <i class="fas fa-plus setIcons"></i>
          <i class="fas fa-inbox setIcons"></i>
          <i class="fas fa-bell-slash setIcons"></i>
          <i class="fas fa-users fa-lg setIcons"></i>
        </div>

      </div>
    </div>)
  }
  function UploadPage(){
    console.log("I am working")
    return(<div className="mainBody">

      <div className="uploadBodyPage">
      <img className="userImg setuserPostImage" width="50px" height="50px" src={USERIMAGE} alt="User Image" />
      <textarea className="uploadBodytextArea" placeholder="Type Your Post Details " rows="1" cols="50"></textarea>
      <input className="uploadLink" type="text" placeholder="Image URL" />
      <div className="pageProperty">
        <div className="subProperty">
        <i class="fas fa-video fa-2x"></i>
          <span>Live Video</span>
        </div>
        <div className="subProperty">
        <i class="far fa-images fa-2x"></i>
          <span>Photo Video</span>

        </div>
        <div className="subProperty">
        <i class="far fa-surprise fa-2x"></i>
          <span>Feeling</span>

        </div>
      </div>
      <button className="pageButton">Post</button>
      </div>

    </div>)
  }
  return (
    <div>
      <Header />
      <UploadPage/>
      fffff
    </div>
  );
}

export default App;
