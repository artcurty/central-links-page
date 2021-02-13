import styled from "styled-components";

const Avatar = styled.div`
  margin: 1rem;

  width: 140px;
  height: 140px;

  background: url(${({ theme }) => theme.avatar});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;

  border: ${({ theme }) =>
    theme.avatarBorder
      ? `${theme.options.avatar.borderSize} solid ${theme.options.avatar.borderColor}`
      : "none"};

  position: relative;
`;

export default Avatar;
