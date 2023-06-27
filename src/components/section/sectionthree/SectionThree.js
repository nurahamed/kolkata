import React from 'react'
import "./SectionThree.css";
import victoria from '../../../image/victoria.jpg';
export default function SectionThree() {
  return (
    <>
      <section className="section section-three">
        <div className="paras"> 
            <p className="sectionTag textBig">College Street Coffee House</p>
            <p className="sectionSubTag texSmall">College Street Coffee House or Indian Coffee House is a cafe located opposite the Presidency University in College Street, the most famous of Indian Coffee House branches in Kolkata. It has been for a long time a regular hang out and a renowned meeting place (adda) for intellectuals and students (and ex-students) of the Presidency College, University of Calcutta, and other institutions in College Street. It has played an important part in Calcutta's (Kolkata) cultural history and known as the hub of intellectual debates.</p>
        </div>
        <div className="tumbnail"> <img src="https://assets.telegraphindia.com/telegraph/2020/Jul/1593802698_shutterstock_515086981.jpg" alt="" className="imgFluid"/>
        </div>
    </section>
    </>
  )
}
