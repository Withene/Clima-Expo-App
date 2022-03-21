import styled from "styled-components/native";


export const Title =  styled.Text`
color:white;
font-size: ${props => props.size ? props.size : '16px'};
font-weight: ${props => props.weigth ? props.weigth : "normal"};

`


export const Timer =  styled.Text`
color:white;
font-size: ${props => props.size ? props.size : '50px'};
font-weight: 100;

`


export const Label =  styled.Text`
color:white;
font-size: ${props => props.size ? props.size : '16px'};
font-weight: 700;

`