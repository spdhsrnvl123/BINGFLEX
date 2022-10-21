import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getData from "lib/api/api";
import makeImagePath from "lib/utils/makeImagePath";

const Slider = styled.div`
    position: relative;
    top: -220px;
`

const Row = styled(motion.div)`
    display: grid;
    gap : 10px;
    grid-template-columns: repeat(6,1fr);
    position: absolute;
    width: 100%;
`

const Box = styled(motion.div)`
    background-image: url(${(props)=>props.bgPhoto});
    height: 200px;
    background-size: cover;
    background-position: center center;
    border-radius: 15%;
    box-shadow: 3px -3px 4px black;
    &:first-child{
        transform-origin: center left;
    }
    &:last-child{
        transform-origin: center right;
    }
`;

const rowVariants = {
    hidden : {
        x: window.outerWidth + 10,
    },
    visible : {
        x: 0,
    },
    exit : {
        x: -window.outerWidth -10
    }

}

const boxVariants = {
    normal : {
        scale : 1
    },
    hover : {
        scale : 1.3,
        y: -50,
        transition : {
            duration : 0.3,
            type : "tween",
        }
    }
}

const Slide = ()=>{
    const [index, setIndex] = useState(0);
    const [leaving,setLeaving] = useState(false);
    const {data} = useQuery(["movieList"],getData)
    const offset = 6; //페이지 당 보여줄 <Box /> 개수

    const increaseIndex = () => {
        if(leaving) return;
        toggleLeaving()
        const totalMovies = data?.results.length -1;
        const maxIndex = Math.floor(totalMovies/offset) -1;
        setIndex((prev) => prev === maxIndex ? 0 : prev + 1);
    }
    const toggleLeaving = ()=> setLeaving((prev) => !prev)

    return(
        <Slider onClick={increaseIndex}>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
                <Row
                    variants={rowVariants}
                    initial="hidden"
                    animate="visible"
                    exit = "exit"
                    transition = {{ type : "tween", duration:1 }}
                    key={index}
                >
                    {data?.results.slice(1).slice(offset*index,offset*index+offset).map((movie)=>(
                        <Box 
                            key={movie.id}
                            whileHover = "hover"
                            initial = "normal"
                            variants={boxVariants}
                            transition = {{ type : "tween" }}
                            bgPhoto={makeImagePath(movie.backdrop_path,"w500")}
                         />
                    ))}
                </Row>
            </AnimatePresence>
        </Slider>
    )
}

export default Slide;