import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postDetails =[
  {userimg:"https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/66275279_2180651932047430_1200865417078243328_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=k87elN2RzKoAX9acTUi&_nc_ht=scontent-lga3-2.xx&oh=886510f021c5047d12183838df63361a&oe=5FEFA966",
   userName:"Tehseen Jawed",
   timeStamp:"4h ago",
   postDetails:"Welcome to my first post designed in React Library. I clone the facebook post comonent by my own coding skills.",
   postImage:"https://wallpapercave.com/wp/wp4923981.jpg"
  },
  {userimg:"https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/28783328_1615696028527775_1591032168779942852_n.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=cZOb_gptyJAAX-hH9Q4&_nc_ht=scontent-lga3-2.xx&oh=82d408d9a60e031f5cfdfc77adb2f37b&oe=5FEF0F99",
   userName:"Muhammad Ali Mughal",
   timeStamp:"1d ago",
   postDetails:"Dear Youth of Karachi Male Only. Here comes the ONSITE course for which you were waiting for many months. Web & Mobile Hybrid App Development Course",
   postImage:"https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/124444742_3416413708455989_983397694303501179_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=X5eYIT7ONaEAX8FTNsg&_nc_ht=scontent-lga3-2.xx&oh=5964427df17f9f81a321b7ea3f2de4a0&oe=5FED66EB"
  },
  {userimg:'https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/82766749_121197336047120_7680709531768193024_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=rWP9pQ8BkEUAX96eQ7d&_nc_ht=scontent-lga3-2.xx&oh=de8d526509455ee4106ac12264b4c34a&oe=5FEE79BB',
   userName:"BMJ Institute Sadder Karachi Pakistan",
   timeStamp:"1d-4h ago",
   postDetails:`Dear Citizen of Karachi!! Here comes the biggest course Complete package of "Graphic Designing" Adobe Photoshop , Adobe Illustrator , Adobe XD & Inpage`,
   postImage:"https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/125256073_207891797377673_4377546482397802164_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_ohc=Uru-xi4ieiEAX_L2lGL&_nc_ht=scontent-lga3-2.xx&oh=39cda62cef821cbdda3cd9eed9c29bcc&oe=5FF031AB"
  },
];

export const SetPostData=()=>{
  
}
ReactDOM.render(
  <React.StrictMode>
    <>
    {postDetails.map((v,i)=> <App obj={v} />)} 
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
