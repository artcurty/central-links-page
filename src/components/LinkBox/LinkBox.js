import styled from "styled-components";

const LinkBox = styled.div`
  height: 50vh;
  width: 100%;

  max-width: 680px;

  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

LinkBox.Link = styled.a`
  width: 80%;
  height: 3rem;
  margin-top: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.options.colors.button};

  font-weight: 600;
  font-size: clamp(14px, 3vw, 18px);

  color: ${({ theme }) => theme.options.colors.buttonText};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &:link {
    text-decoration: none;
  }
  &:hover {
    opacity: 0.9;
  }
`;

const Link = ({ links }) => {
  const openLink = (value) => {
    window.open(value);
  };

  const buildContentLink = () => {
    return links.map((currentLink, index) => {
      const { link, name } = currentLink;

      return (
        <LinkBox.Link key={index} href={link}>
          {name}
        </LinkBox.Link>
      );
    });
  };

  return <LinkBox>{buildContentLink()}</LinkBox>;
};

export default Link;
