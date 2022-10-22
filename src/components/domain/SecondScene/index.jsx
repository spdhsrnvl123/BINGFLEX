import styled from "styled-components";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import getData from "lib/api/api";
import makeImagePath from "lib/utils/makeImagePath";

const Box = styled(motion.div)`
    width:280px;
    height: 280px;
    position: relative;
    top:50%;
    left:50%;
`

const Circle = styled(motion.div)`
    width:200px;
    height:200px;
    border-radius: 50%;
    background:url(${(props)=>props.bgphoto});
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    font-size : 50px;
    position: absolute;
    overflow: hidden;
    top:-50%;
    left:50%;
    transform: translate(-50%,-50%);
    box-shadow: 2px -2px 4px 4px rgba(0,0,0,0.8);
    cursor: pointer;
`

const Circle2 = styled(Circle)`
    left:-100%;
    top:50%;
    width:500px;
    height: 500px;
`

const Circle3 = styled(Circle)`
    top:50%;
    left:200%;
    width:500px;
    height: 500px;
`

const Circle4 = styled(Circle)`
    top:150%;
    left:50%;
    width: 200px;
    height: 200px;
`

const Info = styled(motion.div)`
    padding : 10px;
    background-color: rgba(0,0,0,0.5);
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* bottom: 0; */
    color : white;
    h4{
        text-align : center;
        font-size: 14px;
    }
`

const Title = styled(motion.div)`
    font-size: 80px;
    padding-top: 50px;
    color:white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SecondScene = ()=>{
    const {isLoading,data} = useQuery(["movie"],getData)
    
    const rotateVariants = {
        start : {
            scale:0.8,
            x : -150,
            y : -150
        },
        end : {
            scale:[1,0.8,1],
            transition : {
                duration:10,
                repeat : Infinity
            }
        },
    }

    const moveVariants = {
        click : {
            left:150,
            width: 700,
            height :700,
            zIndex : 99,
            borderRadius : 0,
            backgroundSize : "cover",
        },
        click2 :{
            top:150,
            width: 700,
            height :700,
            zIndex : 99,
            borderRadius : 0,
            backgroundSize : "cover"
        },
    }
    const infoVariants = {
        hover : {
            opacity :1,
            transition : {
                delay:0.5,
                duration:0.3,
                type:"tween"
            }
        },
    }
    return(
        <div style={{width:"100%",height:"100%",overflow:"hidden"}}>
        {
            isLoading ? null: (
                <Box
                    variants={rotateVariants}
                    initial="start"
                    animate="end"
                >
                    <Circle bgphoto={makeImagePath(data?.results[2].poster_path)} variants={moveVariants} whileTap="click2" whileHover="hover">
                        <Info variants={infoVariants}>
                            <h4>{data?.results[2].overview}</h4>
                        </Info>
                    </Circle>
                    <Circle2 bgphoto={makeImagePath(data?.results[12].poster_path)} variants={moveVariants} whileTap="click" whileHover="hover">
                        <Info variants={infoVariants}>
                            <h4>{data?.results[8].overview}</h4>
                        </Info>
                    </Circle2>
                    <Title>BEST MOVIES</Title>
                    <Circle3 bgphoto={makeImagePath(data?.results[15].poster_path)} variants={moveVariants} whileTap="click" whileHover="hover">
                        <Info variants={infoVariants}>
                            <h4>{data?.results[15].overview}</h4>
                        </Info>
                    </Circle3>
                    <Circle4 bgphoto={makeImagePath(data?.results[19].poster_path)} variants={moveVariants} whileTap="click2" whileHover="hover">
                        <Info variants={infoVariants}>
                            <h4>{data?.results[19].overview}</h4>
                        </Info>
                    </Circle4>
                </Box>
            )
        }
        </div>
    )
}

export default SecondScene;