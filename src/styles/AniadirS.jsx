import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    margin: 0 auto;
    color: white;
`
export const Span = styled.span`
    position: absolute;
    left: 0;
    margin-left: 30px;
    margin-top: 20px;
    cursor: pointer;
`

export const H1 = styled.h1`
    margin-top: 20px;
    font-family: 'inter';
    font-size: 40px;
`

export const Img = styled.img`
    margin-top: 30px;
`

export const H3 = styled.h3`
    font-family: 'Montserrat';
    font-size: 26px;
`

export const Btn = styled.button`
    margin-top: 10px;
    margin-bottom: 5px;
    border: none;
    width: 150px;
    height: 30px;
    border-radius: 4px;
    background-color: #e9e917;
`

export const Btn1 = styled(Btn)`
    background-color: orangered;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`