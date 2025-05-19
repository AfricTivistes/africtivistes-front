import React from 'react'
import {FormattedMessage} from "gatsby-plugin-react-intl"

const getPublicLink = (link) => link.replace(/^https?:\/\/update\.africtivistes\.org/, '/fr');

const About = ({posts}) => {
  return(
    <>
    <div className="row justify-content-center" >
    <div className="col-lg" >
        <div className="section-title text-center ppt-30 pb-30" >
        <br></br>
            <h2><FormattedMessage id="abidjan2021"/></h2>
            <div className="underline">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</div>
  <section id="about-part" className="about-part bg_cover pt-30 " style={{backgroundImage:`url(/images/pdg.png`}}>
    
    <div className="container">
      <div className="row">
      <div className="col-xl-6 offset-xl-6 col-lg-7 offset-lg-5">

      <div className="row justify-content-center"> 

<div className="about-content" >
<div className="video">
{posts.map(post=>(
                  <a  key={post.id} className="video-popup" href={getPublicLink(post.link)} aria-label="button"><i className="flaticon-music-player-play"></i></a>

              ))}</div>
<div className="about-text">
<h3 className="mb-25"><FormattedMessage id="discours"/></h3>
<p><FormattedMessage id="chershotes"/>
<br/><FormattedMessage id="chersafrictivistes"/></p>
{posts.map(post=>(
<p key={post.id} className="mb-25"><FormattedMessage id="discourstexte"/><a 
href={getPublicLink(post.link)} ><FormattedMessage id="readMore"/></a>
<br/>
<br/>
</p>
              ))}
            
</div>
<div className="signature">
{/* <img src="/images/signature.png" alt="Signature"/> */}
<h6 className="mt-30">CHEIKH FALL</h6>
<span>- <FormattedMessage id="president"/> </span>
</div>
</div>

</div>            </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default About