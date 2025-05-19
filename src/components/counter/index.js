import React from 'react'
import {FormattedMessage } from "gatsby-plugin-react-intl"
import { useImportScript } from '../../services'

const getPublicLink = (link) => link.replace(/^https?:\/\/update\.africtivistes\.org/, '/fr');

const Counter = ({posts}) => {

  useImportScript("/js/load/counter.js");

  return (<section id="counter-part-2" >
    {/* style={{backgroundImage:`url(/images/slider/ss.jpeg)`}} */}

    <div className="counter-part-2  bg_cover d-flex align-items-center">
      <div className="container" >
      </div>
    </div>
    <div className="video-area-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="video-2">
              <img src="/images/abidjan2021pf.jpg" alt="Video"/>
                <div className="content">
                {posts.map(post=>(
                  <a  key={post.id} className="video-popup" href={getPublicLink(post.link)} aria-label="button"><i className="flaticon-music-player-play"></i></a>

              ))}</div>
                        </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </section>
)}
export default Counter
