import React from 'react';
import "./rightbar.css";
import Birth from "../img/user/2.jpg";
import Birth1 from "../img/user/3.jpg";
import Birth2 from "../img/user/4.jpg";
import Birth3 from "../img/user/5.jpg";
import Birth4 from "../img/user/4.jpg";

function Rightbar() {
  return (
    <div className='rightbar'>
     <div className="rightbarWrapper">
      <div className="birthdayContainer">
        <img src={Birth} alt="" className="birthdayImg" />
        <img src={Birth2} alt="" className="birthdayImg" />
        <img src={Birth3} alt="" className="birthdayImg" />
        <img src={Birth4} alt="" className="birthdayImg" />
        <img src={Birth1} alt="" className="birthdayImg" />
        <div className='birthdayText'>
         <b>boluwatife, nifemi</b> and others will be attending <span className="birthdayTextCap">IGNITE 2022</span>

        </div>
      </div>
      
  <div class="rightbarAds text-secondary px-4 py-5">
    <div class="py-2">
      <h1 class="adsText text-white m-5"><span className='bit'>"</span>knowledge is power<span className='bit'>"</span></h1>
      <div class="col-lg-6 mx-auto">
        <div class="d-grid gap-1 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bolder">read</button>
          <button type="button" class="btn btn-outline-light btn-lg px-4 fw-bolder">learn</button>
        </div>
      </div>
      </div>
      
  </div>
  <div className="onlineChart">FRIENDS ONLINE</div>
  <div className="onlineF">
        <img src={Birth} alt="" className="onlineFriends" />
        <span className='rightbarOnline'></span>
        <span className='onlineFriendsNames'>Rotimi clerk</span>
        </div>
        <div className="onlineF">
        <img src={Birth1} alt="" className="onlineFriends" />
        <span className='rightbarOnline'></span>
        <span className='onlineFriendsNames'>Rotimi clerk</span>
        </div>
        <div className="onlineF">
        <img src={Birth2} alt="" className="onlineFriends" />
        <span className='rightbarOnline'></span>
        <span className='onlineFriendsNames'>Rotimi clerk</span>
        </div>
        <div className="onlineF">
        <img src={Birth3} alt="" className="onlineFriends" />
        <span className='rightbarOnline'></span>
        <span className='onlineFriendsNames'>Rotimi clerk</span>
        </div>
        <div className="onlineF">
        <img src={Birth4} alt="" className="onlineFriends" />
        <span className='rightbarOnline'></span>
        <span className='onlineFriendsNames'>Rotimi clerk</span>
        </div>
        <div className="onlineF">
        <img src={Birth} alt="" className="onlineFriends" />
        <span className='rightbarOnline'></span>
        <span className='onlineFriendsNames'>Rotimi clerk</span>
        </div>
     </div>
    </div>
  );
}

export default Rightbar;
