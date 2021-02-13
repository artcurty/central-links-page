import styled from "styled-components";

const TitleStyled = styled.h1`
  font-size: 1rem;
  color: ${({ theme }) => theme.options.colors.title};
  text-transform: uppercase;

  font-weight: 600;
  text-align: center;
`;

const Title = ({ title }) => {
  return <TitleStyled>{title}</TitleStyled>;
};

export default Title;
