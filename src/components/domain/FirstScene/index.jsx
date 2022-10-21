import { CaretRightOutlined,PlusOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
// import InterStellar from "assets/image/InterStellar.jpeg"
// import Avengers from "assets/image/Avengers.jpg"
// import ManOfSteel from "assets/image/ManOfSteel.webp"
// import Thor from "assets/image/Thor.jpeg"
import getData from 'lib/api/api';
import { useQuery } from '@tanstack/react-query';
import makeImagePath from 'lib/utils/makeImagePath';


const Main = styled(motion.div)`  
    height: 100vh;
    background-image : linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${(props) => props.bgPhoto});
    background-repeat: no-repeat;
    background-size: cover;
`

const Main2 = styled(motion.div)`
    height: 100vh;
    width: 100%;
    background-color: red;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),url("assets/image/InterStellar.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
`

const TilteContainer = styled.div`
  position:relative;
  top:25%;
  left:10%;
  width:50%;
  height: 50%;
  color: white;
`

const Title = styled.h1`
  position : absolute;
  top:-60px;
  font-size : 74px;
  text-shadow: 2px -3px 3px black;
`;

const TitleDesCription = styled.p`
  position: absolute;
  top: 30%;
  left:1.5%;
  font-size:24px;
  color:#dcdde1;
`;

const PlayButton = styled.button`
  position:absolute;
  display: flex;
  top: 63%;
  left:0.5%;
  color:white;
  background-color: #f53b57;
  padding:12px;
  border:0;
  font-size: 16px;
  border-radius: 20px;
  /* font-weight: bold; */
  box-shadow: 1px 1px 2px black;
  cursor: pointer;
  &:hover{
    color: #d2dae2;
  }
`

const ListButton = styled(PlayButton)`
  left:23.5%;
`;

// const FirstScene = ()=>{
//   const scene = [
//     {
//       backgroundImage : `${InterStellar}`,
//       title : "INTERSTELLAR",
//       description : "Based on the theory of theoretical physicist Kip Thorne, the film tells the story of a group of explorers through the wormhole about time travel and parallel universe..."
//     },
//     {
//       backgroundImage : `${Avengers}`,
//       title : "Avengers:Endgame",
//       description : "The Avengers, who became the last hope on Earth, only half surviving after Infinity War, risked everything for those who left first!"
//     },
//     {
//       backgroundImage : `${ManOfSteel}`,
//       title : "Man of Steel",
//       description : "Kal-El, born by natural childbirth on the planet Krypton for the first time in hundreds of years, his father Joel tells the council that destruction cannot be avoided due to the instability of the core inside the planet Krypton, and requests the Codex to survive on the new planet, but is taken away by Zod, who caused a coup. do."
//     },
//     {
//       backgroundImage : `${Thor}`,
//       title : "Thor",
//       description : "As the successor of the god world 'Asgard', 'Thor', the god of thunder with powerful power. Thor, who usually possesses a reckless personality, is disqualified as a god for causing a war between the gods and is sent to Earth. The source of power..."
//     }
//   ]

  const FirstScene = ()=>{
    const {isLoading,data} = useQuery(["movie"],getData)

    // console.log(data?.results)
      
    return(
      <>
          {
            isLoading ? "Loading" : (
              <Main
                bgPhoto = {makeImagePath(data?.results[10].backdrop_path || "")}
              >
                <TilteContainer>
                  <Title>{data?.results[10].title}</Title>
                  <TitleDesCription>
                    {data?.results[10].overview}
                  </TitleDesCription>
                  <PlayButton><CaretRightOutlined />WATCH NOW</PlayButton>
                  <ListButton onClick={()=>alert("The movie has been added to your shopping cart!")}><PlusOutlined />MY LIST</ListButton>
                </TilteContainer>
              </Main>
            )
          }
      </>

          )
  }

export default FirstScene;
