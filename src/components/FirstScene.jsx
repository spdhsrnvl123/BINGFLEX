import { CaretRightOutlined,PlusOutlined } from '@ant-design/icons';
import { motion,AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const Main = styled(motion.div)`
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),url(${props => props.bgColor});
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
  font-size : 110px;
  text-shadow: 2px -3px 3px black;
`;
const TitleDesCription = styled.p`
  position: absolute;
  top: 30%;
  left:1.5%;
  color:#dcdde1;
`;

const PlayButton = styled.button`
  position:absolute;
  display: flex;
  top: 53%;
  left:1.5%;
  color:white;
  background-color: #f53b57;
  padding:12px;
  border:0;
  font-size: 16px;
  border-radius: 20px;
  font-weight: bold;
  box-shadow: 1px 1px 2px black;
  cursor: pointer;
  &:hover{
    color: #d2dae2;
  }
`

const ListButton = styled(PlayButton)`
  left:23.5%;
`;

const FirstScene = ()=>{
  const scene = [
    {
      backgroundImage : "./assets/InterStellar.jpeg",
      title : "INTERSTELLAR",
      description : "Based on the theory of theoretical physicist Kip Thorne, the film tells the story of a group of explorers through the wormhole about time travel and parallel universe..."
    },
    {
      backgroundImage : "./assets/Avengers.jpg",
      title : "Avengers:Endgame",
      description : "The Avengers, who became the last hope on Earth, only half surviving after Infinity War, risked everything for those who left first!"
    },
    {
      backgroundImage : "./assets/ManOfSteel.webp",
      title : "Man of Steel",
      description : "Kal-El, born by natural childbirth on the planet Krypton for the first time in hundreds of years, his father Joel tells the council that destruction cannot be avoided due to the instability of the core inside the planet Krypton, and requests the Codex to survive on the new planet, but is taken away by Zod, who caused a coup. do."
    },
    {
      backgroundImage : "./assets/Thor.jpeg",
      title : "Thor",
      description : "As the successor of the god world 'Asgard', 'Thor', the god of thunder with powerful power. Thor, who usually possesses a reckless personality, is disqualified as a god for causing a war between the gods and is sent to Earth. The source of power..."
    }
  ]

  const slide = {
    start:{
      opacity:0.9,
      scale:1,
      x:0,
      transition:{
        duration:1
      }
    },
    end:{
      opacity:1,
      x:0,
      transition:{
        duration:4
      }
    },
    exit:{
      opacity:0,
      x:-300,
      transition:{
        duration:1
      }
    }
  }

  const [visible,setVisible] = useState(0);

  setTimeout(()=>{
    setVisible((count)=> (count === 3 ? 0 : count+1))
  },6000)

  return(
    <AnimatePresence mode='wait'>
      {scene.map((value,index)=>(
        index === visible ? (
          <Main 
          bgColor={value.backgroundImage} 
          key={index}
          variants ={slide}
          initial ="start"
          animate = "end"
          exit = "exit"
          >
            <TilteContainer>
              <Title>{value.title}</Title>
              <TitleDesCription>
                {value.description}
              </TitleDesCription>
              <PlayButton><CaretRightOutlined />WATCH NOW</PlayButton>
              <ListButton><PlusOutlined />MY LIST</ListButton>
            </TilteContainer>
          </Main>
        ): null
      ))}
    </AnimatePresence>
  )
}
export default FirstScene;
