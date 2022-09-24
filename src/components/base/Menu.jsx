import { Link } from "react-router-dom";
import styled from "styled-components";

const TopCotainer =styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    color: white;
    font-weight: bold;
    position: fixed;
    /* top:2%; */
    width: 85%;
    z-index: 9999;
    display:  flex;
    justify-content: space-between;
    background-color: rgba(0,0,0,0.4);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 2px 2px 5px hsla(0, 0%, 0%, 0.443);
`

const Content = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red;   */
    li{
        font-size: 20px;
        padding: 20px;
        &:hover{
            transform: scale(1.2);
            transition:0.3s;
        }
    }
`

const Title = styled.div`
    font-size: 35px;
    display: flex;
    align-items: center;
`

const Logo = styled.div`
    background-image: url("./assets/logo.png");
    background-size: cover;
    width: 70px;
    height: 70px;
    margin-right: -18px;
    margin-bottom: 7px;
`

const Menu = ()=>{
    
    return(
        <TopCotainer>
            <Container>
                <Title><Logo /><Link>INGFLEX</Link></Title>
                <Content>
                    <li><Link>MAIN</Link></li>
                    <li><Link>SCHEDLUES</Link></li>
                    <li><Link>TICKETS</Link></li>
                    <li><Link>NEWS</Link></li>
                    <li><Link>CONTACT</Link></li>
                </Content>
                <Content>
                    <Link to={`/login`} style={{fontSize:"20px",marginRight:"10px"}}>Login</Link>
                    <Link to={`/signup`} style={{fontSize:"20px", marginRight:"14px"}}>Sign Up</Link>
                </Content>
            </Container>
        </TopCotainer>
    )
}

export default Menu;


