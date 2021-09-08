import styled from 'styled-components'

export const DivNav = styled.div`
    background-color: #0F0E17;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: 'Inter';
    font-size: 16px;
`

export const Li = styled.li`
    display: inline;
    margin-right: 30px;
`

export const A = styled.a`
    text-decoration: none;
    color: white;
    &:hover{
        color: #FED941;
        text-decoration: #FED941;
    }
`

export const Input = styled.input`
    width: 250px;
    height: 10px;
    padding: 11px 12px;
    border-radius: 4px 0px 0px 4px;
    border: 1px solid #FED941;
`

export const Button = styled.button`
    height: 34px;
    border: none;
    background: #FED941;
    border-radius: 0px 4px 4px 0px;
    cursor: pointer;
    font-family: 'Montserrat';
`
export const Img = styled.img`
    margin: 0px 10px;
`