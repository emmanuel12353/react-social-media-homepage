import React from 'react';
import Offer from "../img/user/1.jpg";
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons";
import './share.css';


function Share() {
  return (
    <div className="share">
     <div className="shareWrapper">
      <div className="shareTop">
      <img src={Offer} alt="" className="shareProfileImg" />
      <input placeholder='what is on your mind' className="shareInput" />
      </div>
      <hr className="shareHr" />
      <div className="shareBottom">
        <div className="shareOptions">
          <div className="shareOption">
            <PermMedia htmlColor="tomato" className="shareIcon" />
            <span className='shareOptionText' >photo or video</span>
          </div>

          <div className="shareOption">
            <Label htmlColor="blue" className="shareIcon" />
            <span className='shareOptionText' >Tag</span>
          </div>

          <div className="shareOption">
            <Room htmlColor="green" className="shareIcon" />
            <span className='shareOptionText' >Location</span>
          </div>

          <div className="shareOption">
            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
            <span className='shareOptionText' >Feellings</span>
          </div>
        </div>
        <button className='shareButton'>share</button>
      </div>

     </div>
    </div>
  );
}

export default Share;
