import Avatar from "../src/components/Avatar";
import Link from "../src/components/LinkBox";
import Title from "../src/components/Title";
import Background from "../src/components/Background";

export default function HomePage({ title, links: linkContent, avatar }) {
  return (
    <Background>
      {avatar && <Avatar />}
      {title && <Title title={title} />}
      <Link links={linkContent} />
    </Background>
  );
}
