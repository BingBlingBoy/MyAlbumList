import styled from "styled-components";
import { Link } from "react-router-dom"

// Color Palette
// #78B552 dominant lightish green
// #0059a5 like a matte blue
// #e3f7d3 mossy greenish

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #78B552;
    display: flex;
    flex-direction: column;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: sans-serif; 
    text-decoration: none;
    margin: 10px;
`;
