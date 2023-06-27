import React from 'react'
import './Home.css';
import kolkata from '../../image/KOLKATA.png';
export default function Home() {
  return (
    <>
        <section className="background firstSection" id="home">
        <div className="box-main">
            <div className="firstHalf">
                <p className="textBig"> Welcome to kolkata</p>
                <p className="texSmall">Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals. It’s also home to Mother House, headquarters of the Missionaries of Charity, founded by Mother Teresa, whose tomb is on site. 
                <span className='readMore'><a href="https://en.wikipedia.org/wiki/Kolkata"> Read more</a></span> 
                </p>
                
                <div className="buttons">
                    <button className="btn">Watch Videos </button>
                    <button className="btn"> Subscribed</button>
                </div>

            </div>
            <div className="secondHalf">
                <img src={kolkata} alt="Kolkata"/>
            </div>
        </div>
    </section>
    </>
  )
}
