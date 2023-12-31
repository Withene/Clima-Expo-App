import styled from "styled-components/native";
import {Box} from "@react-native-material/core";

const greetingMessage = props => {
  let h = new Date(); // formato 24 horas (0-23)
  return props.theme.colors.primaryColor;
};

export const Title = styled.Text`
  color: ${props => greetingMessage(props)};
  font-family: 'Poppins_400Regular';
  font-size: ${props => (props.size ? props.size : "16px")};
  text-align: ${props => (props.align ? props.align : "left")};
  font-weight: ${props => (props.weigth ? props.weigth : "normal")};
`;

export const Timer = styled.Text`
  color: ${props => greetingMessage(props)};
  font-family: 'Poppins_700Bold';
  height: 48px;
  font-size: ${props => (props.size ? props.size : "50px")};
  text-align: right;
  margin-left: 20px;

`;

export const Label = styled.Text`
  color: white;
  font-size: ${props => (props.size ? props.size : "16px")};
  font-weight: 700;
`;


export const BoxOfDays = styled(Box)`
  color: white;

  width: 60px;
  background: ${(props) => {
    if(props.selected){
      return '#6B5DD3';
    }else{
      return "transparent";
    }
  }};
  padding: 5px;
  border-radius: 30px;
  margin-left: 5px;
  font-size: ${props => (props.size ? props.size : "16px")};
  font-weight: 700;
`;
