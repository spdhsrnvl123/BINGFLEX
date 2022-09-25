import styled from "styled-components";
import HomeFirst from "../components/HomeFirst"

const Section = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #4B4453;
`

const Home = ()=>{
    return(
        <>
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