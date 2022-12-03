import React from 'react';
import { MoreVert } from '@material-ui/icons';
import './post.css';
import User1 from "../img/agency/1.png";
import Love from "../img/love.png";
import Like from "../img/like.png";


function Post({post}) {
  console.log(post);
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="content">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={User1} alt="" className="postProfileImg" />
            <span className="postUsername"> {post.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRigt">
           <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={Like} alt="" className="likeIcon" />
            <img src={Love} alt="" className="likeIcon" />
            <span className="postLikeCounter">{post.like} people liked it</span>
          </div>
          <div className="postBottonRight">
            <span className="postCommentText">{post.comment} minute ago</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
