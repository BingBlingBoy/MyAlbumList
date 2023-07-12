import styled from "styled-components"

export const SearchbarContainer = styled.div`
    background: #fff;
    width: 100%;
    max-width: 800px;
`;

export const Form = styled.form`
    display: flex;
    max-width: 800px;
`;

export const Input = styled.input`
    width: 100%;
    font-size: 18px;
    display: inline-block;
    background: papayawhip;
    border: none;
    ::placeholder {
        color: palevioletred;
    }
`;

export const Button = styled.button`
    font-size: 18px;
    display: inline-block;
    background: papayawhip;
    border: none;
    ::placeholder {
        color: palevioletred;
    }
`;
