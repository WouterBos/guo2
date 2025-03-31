"use client";

import logo from '../assets/logo-guo-text-optimised.svg';
import { TitleStyled, TextBlock } from "./Title.styled";

const Title: React.FC = () => {
  return <TitleStyled>
    <img src={logo} alt="Logo Groeten uit Oss" title="Groeten uit Oss" style={{ display: 'inline-block', width: 'auto', height: '4rem' }} />
    <TextBlock>
      Photography in the municipality<br />
      of Oss, The Netherlands.
    </TextBlock>
    <TextBlock>
      Available on <a href="https://www.facebook.com/GroetenUitOss">Facebook</a>,<br />
      <a href="https://www.instagram.com/groetenuitoss/">Instagram</a> and <a href="https://mastodon.nl/@wouterbos">Mastodon</a>.
    </TextBlock>
  </TitleStyled>;
};

export default Title;