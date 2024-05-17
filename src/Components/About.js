// import React, { useState } from 'react'

export const About = ( props) => {

let mystyle = {
  color : props.mode === 'dark' ? 'white' : 'black'
}

//   const [mystyle , setmystyle]=useState({
//     color:'black',
//     BackgroundColor:'white'
//   })
//   const toggleState = () =>{
//       if (mystyle.color ==='white') {
//         setmystyle({color:'rgba(14, 14, 14, 0.9)',
//         backgroundColor:'white'})
//   }
//   else
//   {
//     setmystyle({color:'white',
//     backgroundColor:'rgb(56, 51, 51)'})
//   }
// }
  // let bg={
  //   color:'white',
  //   backgroundColor:'rgba(14, 14, 14, 0.9)'
  // }
  // let cont ={
  //   color:'white',
  //   backgroundColor:'rgb(56, 51, 51)'
  // }
  return (
    <>      
  <div className={`container m-5 ${props.mode === 'dark' ? 'about-section' : ''} `} style={mystyle}>
  <div className="about-page mx-auto " style={{maxWidth:props.mode === 'dark' ? '85%':'75%'}} >
      <h1 className="w-6"  >Welcome to Techno Hub!</h1>
      <p >
        At Techno Hub, we believe in simplifying your text manipulation needs. Whether you're looking to convert text to uppercase or lowercase, tidy up extra spaces, or simply copy your text hassle-free, we've got you covered.
      </p>

      <h2>Our Mission</h2>
      <p >
        Our mission is to provide a user-friendly platform where anyone can effortlessly transform their text according to their requirements. We understand the importance of clear communication and aim to empower our users with tools that enhance their text editing experience.
      </p>

      <h2>What We Offer</h2>
      <ul >
        <li><strong>Text Transformation:</strong> Easily convert your text to uppercase or lowercase with just a click of a button. Say goodbye to manual editing and let our tools do the work for you.</li>
        <li><strong>Space Removal:</strong> Tired of dealing with excessive spaces in your text? Our space removal feature helps you clean up your text and maintain a neat appearance.</li>
        <li><strong>Copy Functionality:</strong> Once you've perfected your text, copying it for use elsewhere is a breeze with our intuitive copy feature. No more highlighting and right-clicking – just one click and your text is ready to paste.</li>
      </ul>

      <h2>Why Choose Techno Hub?</h2>
      <ul >
        <li><strong>Simplicity:</strong> Our website is designed with simplicity in mind. We prioritize ease of use, ensuring that even those with minimal technical knowledge can navigate our platform effortlessly.</li>
        <li><strong>Efficiency:</strong> Save time and effort with our efficient text manipulation tools. Whether you're a student, professional, or casual user, our website streamlines the process of editing text to suit your needs.</li>
        <li><strong>Accessibility:</strong> Techno Hub is accessible to anyone with an internet connection. Whether you're on your computer, tablet, or smartphone, you can access our website anytime, anywhere.</li>
      </ul>

      <h2>Join Our Community</h2>
      <p >
        We're constantly striving to improve and expand our services based on user feedback. Your experience matters to us, and we welcome any suggestions or comments you may have. Join our growing community of users and embark on a journey towards simplified text editing.
      </p>

      <h2>Get Started Today</h2>
      <p >
        Ready to elevate your text editing experience? Dive into the world of Techno Hub and discover the convenience of effortless text manipulation. Whether you're a student, professional, or enthusiast, our tools are here to make your life easier.
      </p>

      <p >
        Thank you for choosing Techno Hub – where text transformation meets simplicity.
      </p>
    </div>

  </div>
    </>
  )
}