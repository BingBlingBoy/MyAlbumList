import styled from "styled-components";
import { Link } from "react-router-dom"

// Color Palette
// #0059a5 dominant like a matte blue
// #78B552 lightish green
// #e3f7d3 mossy greenish

export const NavbarContainer = styled.nav`
    width: 100%;
    background-color: #abd1de;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1.25em;
    padding-right: 1.25em;
`;
        
export const NavbarLeftContainer = styled.div`
    flex: 0.05;
    display: flex;
    justify-content: flex-start;
`;

export const NavbarMiddleContainer = styled.div`
    display: flex;
    flex: 1
`

export const NavbarRightContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: sans-serif; 
    text-decoration: none;
    margin: 10px;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;
