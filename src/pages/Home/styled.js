import styled from "styled-components/native";

const greetingMessage = props => {
  let h = new Date(); // formato 24 horas (0-23)
  if (h.getHours() <= 18) {
    return props.theme.colors.contrastColor;
  } else {
    return props.theme.colors.primaryColor;
  }
};

export const Title = styled.Text`
  color: ${props => greetingMessage(props)};
  font-size: ${props => (props.size ? props.size : "16px")};
  font-weight: ${props => (props.weigth ? props.weigth : "normal")};
`;

export const Timer = styled.Text`
  color: ${props => greetingMessage(props)};
  font-size: ${props => (props.size ? props.size : "50px")};
  font-weight: 100;
`;

export const Label = styled.Text`
  color: white;
  font-size: ${props => (props.size ? props.size : "16px")};
  font-weight: 700;
`;
