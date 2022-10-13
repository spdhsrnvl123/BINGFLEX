import styled from "styled-components";
import FirstScene from "../components/FirstScene"
import ScollDown from "../components/ScrollDown"
import getData from "../api"
import { useQuery } from "@tanstack/react-query"
import { motion } from "framer-motion";

const FirstSection = styled.div`
    height: 100vh;
    width:100%;
    background-color: black;
    overflow-x: hidden;
`

const SecondSection = styled(FirstSection)`
    position: relative;
`

const Section = styled.div`
    height: 100vh;
    /* width: 100%; */
    background-color:black;
    overflow-x: hidden;
    border-top: 10px dotted white;
`

const Box = styled(motion.div)`
    width:300px;
    height: 300px;
    background-color: red;
    position: relative;
    top:50%;
    left:50%;
    border-radius: 50%;
    /* border-radius: 50%; */
`

const Circle = styled(motion.div)`
    width:200px;
    height:200px;
    border-radius: 50%;
    background-color: blue;
    font-size : 50px;
    position: absolute;
    top:-50%;
    left:50%;
    transform: translate(-50%,-50%);
`
const Circle2 = styled(Circle)`
    background-color: white;
    left:-50%;
    top:50%;
`
const Circle3 = styled(Circle)`
    background-color: yellow;
    top:50%;
    left:150%;
`

const Circle4 = styled(Circle)`
    background-color: skyblue;
    top:150%;
    left:50%;
`

const Home = ()=>{
    const { data, isLoading } = useQuery(["movie","nowPlaying"],getData)
    console.log(data,isLoading)

    const rotateVariants = {
        start : {
            rotate : 0,
            x : -150,
            y : -150
        },
        end : {
            rotate : 360,
            transition : {
                duration:10,
                repeat : Infinity             
            }
        },
    }

    const moveVariants = {
        click : {
            left:150,
            width: 280,
            height :280
        },
        click2 :{
            top:150,
            width: 280,
            height :280
        },
    }

    return(
        <>
            <FirstSection>
                <FirstScene />
                <ScollDown />
            </FirstSection>
            <SecondSection>
                <Box
                    variants={rotateVariants}
                    initial="start"
                    animate="end"
                >
                    <Circle variants={moveVariants} whileTap="click2" />
                    <Circle2 variants={moveVariants} whileTap="click" />
                    <Circle3 variants={moveVariants} whileTap="click" />
                    <Circle4 variants={moveVariants} whileTap="click2" />
                </Box>
            </SecondSection>
        </>
    )
}

export default Home;