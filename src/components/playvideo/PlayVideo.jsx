import React from 'react'
import "./playvideo.css"
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import user_profile from "../../assets/user_profile.jpg"

const PlayVideo = ({videoId}) => {
  return (
      <div className='play-video'>
          {/* <video src={video1} controls autoPlay muted></video> */}
          <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <h3>This is my video title</h3>
          <div className="play-video-info">
              <p>400M &bull; 2 days ago</p>
              <div>
                  <span><img src={like} alt="" />564K</span>
                  <span><img src={dislike} alt="" />100k</span>
                  <span><img src={share} alt="" />Share</span>
                  <span><img src={save} alt="" />Save</span>
              </div>
          </div>
          <hr />
          <div className="publisher">
                  <img src={jack} alt="" />
                  <div>
                      <p>My Channel</p>
                      <span>1M Subscribers</span>
                  </div>
              <button>Subscribe</button>
          </div>
          <div className="video-description">
                  <p>This is the best channel that provides with the lates videos.</p>
                  <p>If you like the content of the channel its your wish to subscribe there is not force to you.</p>
                  <hr />
                  <h4>1M comments</h4>
                  <div className="comment">
                      <img src={user_profile} alt="" />
                      <div>
                          <h3>username <span>1 day ago</span></h3>
                          <p>This is my Comment. This is my comment. this is my comment. this is my comment. this m8 my commen t . this is mu commment.</p>
                          <div className="comment-action">
                              <img src={like} alt="" />
                              <span>256</span>
                              <img src={dislike} alt="" />

                        </div>
                      </div>
                  </div>
                  <div className="comment">
                      <img src={user_profile} alt="" />
                      <div>
                          <h3>username <span>1 day ago</span></h3>
                          <p>This is my Comment. This is my comment. this is my comment. this is my comment. this m8 my commen t . this is mu commment.</p>
                          <div className="comment-action">
                              <img src={like} alt="" />
                              <span>256K</span>
                              <img src={dislike} alt="" />
                        </div>
                      </div>
                  </div>
                  <div className="comment">
                      <img src={user_profile} alt="" />
                      <div>
                          <h3>username <span>1 day ago</span></h3>
                          <p>This is my Comment. This is my comment. this is my comment. this is my comment. this m8 my commen t . this is mu commment.</p>
                          <div className="comment-action">
                              <img src={like} alt="" />
                              <span>256</span>
                              <img src={dislike} alt="" />
                              
                        </div>
                      </div>
                  </div>
                  <div className="comment">
                      <img src={user_profile} alt="" />
                      <div>
                          <h3>username <span>1 day ago</span></h3>
                          <p>This is my Comment. This is my comment. this is my comment. this is my comment. this m8 my commen t . this is mu commment.</p>
                          <div className="comment-action">
                              <img src={like} alt="" />
                              <span>256</span>
                              <img src={dislike} alt="" />
                              
                        </div>
                      </div>
              </div>
          </div>
      </div>
  )
}

export default PlayVideo