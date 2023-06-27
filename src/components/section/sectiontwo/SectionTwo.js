import React from 'react'
import './SectionTwo.css';
// import logo from '../../../image/victoria.jpg';
export default function SectionTwo() {
  return (
   <>
     <section className="section section-left">
        <div className="paras"> 
            <p className="sectionTag textBig">Indian Museum </p>
            <p className="sectionSubTag texSmall">The Indian Museum (formerly called Imperial Museum of Calcutta before independence,) is a massive museum in Central Kolkata, West Bengal, India. It is the ninth oldest museum in the world and the oldest and largest museum in India as well as in Asia. It has rare collections of antiques, armour and ornaments, fossils, skeletons, mummies and Mughal paintings. It was founded by the Asiatic Society of Bengal in Kolkata (Calcutta), India, in 1814. The founder curator was Nathaniel Wallich, a Danish botanist.

          It has six sections comprising thirty five galleries of cultural and scientific artifacts namely Indian art, archaeology, anthropology, geology, zoology and economic botany. Many rare and unique specimens, both Indian and trans-Indian, relating to humanities and natural sciences, are preserved and displayed in the galleries of these sections. In particular the art and archaeology sections hold collections of international importance.</p>
        </div>
        <div className="tumbnail"> <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Indian_Museum%2C_Courtyard%2C_Kolkata%2C_India.jpg" alt="" className="imgFluid"/>
        </div>
    </section>
   </>
  )
}
