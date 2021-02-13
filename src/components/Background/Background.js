import styled from "styled-components";

const BackgroundContent = styled.div`
  background: ${({ theme }) =>
    theme.background ? `url(${theme.background})` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-color: ${({ theme }) =>
    !theme.background ? theme.options.colors.backgroundColor : "none"};

  display: flex;
  flex-grow: 1;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Background = (props) => {
  return <BackgroundContent>{props.children}</BackgroundContent>;
};

export default Background;
