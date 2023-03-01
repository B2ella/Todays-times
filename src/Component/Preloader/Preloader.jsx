import { motion } from "framer-motion"
import React from "react";
import logo from '../../img/logo.png'

const PreContainer = {
    
    position: 'absolute',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
   
   
}


const Container = {
    
    position: 'absolute',
    zIndex: '50',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(180deg, #3A3A3C, #6D5B59),linear-gradient(142deg, transparent, #908279),linear-gradient(108deg, #908279, transparent)',
    height: '100%',
    overflow: 'hidden',
}

const Image = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translateY(0px)',
    width: '40px',
    height: '100px'
}


const Title = {
 color: 'white',
 transform: 'translateY(0px)',
 
}

const blackBox = {
    initial: {
      width: "100vw",
      top: 0,
      
      
},
animate: {
  height: 0,
  transition: {
    when: "afterChildren",
    duration: 3,
    ease: [0.87, 0, 0.13, 1],
  },
},
}

const Preloader = () => {
    return (
        <div style={PreContainer}>

        <motion.div
        style={Container}
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")}>
         
         <img src={logo} style={Image} alt="todays time logo"/>
         {/* <h1 style={Title}>Todays Times</h1> */}
        </motion.div>

        </div>
    )
}

export default Preloader;
