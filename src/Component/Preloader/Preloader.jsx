import { motion } from "framer-motion"
import logo from '../../img/logo.png'
import { PreContainer, Container, Image } from "./PreloaderStyles";




const blackBox = {
    initial: {
      width: "100vw",
      top: 0,},

animate: {
  height: 0,
  transition: {
    when: "afterChildren",
    duration: 2.5,
    ease: [0.87, 0, 0.13, 1],
  },},
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
       
        </motion.div>

        </div>
    )
}

export default Preloader;
