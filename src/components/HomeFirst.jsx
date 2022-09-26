import styled, { keyframes } from "styled-components";
import { CaretRightOutlined,PlusOutlined } from '@ant-design/icons';
import {motion} from "framer-motion"

const Main = styled.div`
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),url(/assets/background.jpeg);
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

const HomeFirst = ()=>{
  return(
    <Main>
      <TilteContainer>
        <Title>INTERSTELLAR</Title>
        <TitleDesCription>
          Based on the theory of theoretical physicist Kip Thorne, the film tells the story of a group<br />
          of explorers through the wormhole about time travel and parallel universe...
        </TitleDesCription>
        <PlayButton><CaretRightOutlined />WATCH NOW</PlayButton>
        <ListButton><PlusOutlined />MY LIST</ListButton>
      </TilteContainer>
      <Svg
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 448 512">
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
    </Main>
  )
}
export default HomeFirst;
