import styled, {keyframes} from "styled-components"
import { motion } from "framer-motion"
import { useEffect } from "react"

const ScrollDown = ()=>{
    const translateAnimation = keyframes`
    0%{
        transform: translateY(-20px);
    }
    100%{
        transform: translateY(0px);
    }
    `
    const Svg = styled.svg`
        position:absolute;
        z-index: 99;
        width:50px;
        height: 50px;
        left:0;
        right: 0;
        bottom:3%;
        cursor: pointer;
        margin:0 auto;
        path{
            stroke:white;
            stroke-width: 15;
        }
        animation: ${translateAnimation} 1s linear infinite alternate;
        `

        const svg = {
        start : {pathLength:0, fill : "rgba(255,255,255,0)"},
        end : {
            pathLength : 1,
            fill : "rgba(255,255,255,0)",
        }
    }

    return(
        <Svg
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 448 512"
        onClick={()=>{
            window.scrollTo({top:1024,behavior:"smooth"})
        }}
        >
        <motion.path
          variants={svg}
          initial="start"
          animate="end"
          transition={{
            default : { duration: 2 },
            fill : {duration:1,delay:1},
          }}
          d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
          />
        </Svg>
    )
}

export default ScrollDown;