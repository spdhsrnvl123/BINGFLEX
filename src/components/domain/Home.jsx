import styled from "styled-components";
import HomeFirst from "../base/HomeFirst";
import Menu from "../base/Menu";


const Section = styled.div`
        height: 100vh;
        width: 100%;
        background-color: #4B4453;
`

const Home = ()=>{
    return(
        <>
            <Menu />
            <Section>
                <HomeFirst />
            </Section>
            <Section />
            <Section />
            <Section />
        </>
    )
}
export default Home;