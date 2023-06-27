import React from 'react'
import './Section.css';
import logo from '../../../image/victoria.jpg';
export default function Section() {
  return (
    <>
         <section className="section" id='place'>
        <div className="paras"> 
            <p className="sectionTag textBig">Victoria Memorial Hall </p>
            <p className="sectionSubTag texSmall">The Victoria Memorial is a large marble building on the Maidan in Central Kolkata, having its entrance on the Queen's Way. It was built between 1906 and 1921 by the British government. It is dedicated to the memory of Queen Victoria, Empress of India from 1876 to 1901. It is the largest monument to a monarch anywhere in the world, it stands in 64 acres of gardens and is now a museum under the control of the Ministry of Culture. Possessing prominent features of the British architecture of the colonial era, it has evolved into one of the most popular places in the city.</p>
        </div>
        <div className="tumbnail"> <img src={logo} alt="" className="imgFluid"/>
        </div>
    </section>
    </>
  )
}
