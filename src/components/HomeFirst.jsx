import styled from "styled-components";
import { CaretRightOutlined,PlusOutlined } from '@ant-design/icons';

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
`

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
    </Main>
  )
}
export default HomeFirst;
