import styled from "styled-components";
import logo from "assets/image/logo.png";

const Logo = ()=>{
    const Logo = styled.div`
        background-image: url(${logo});
        background-size: cover;
        width: 70px;
        height: 70px;
        margin-right: -18px;
        margin-bottom: 7px;
    `
    return(
        <Logo />
    )
}

export default Logo;