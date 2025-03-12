"use client";

import Image from 'next/image';
import logo from '../../../public/logo-guo-text-optimised.svg';
import { TitleStyled, TextBlock } from "./Title.styled";

const Title: React.FC = () => {
  return <TitleStyled>
    <Image src={logo} alt="Logo Groeten uit Oss" title="Groeten uit Oss" style={{ display: 'inline-block', width: 'auto', height: '4rem' }} />
    <TextBlock>
      Photography in the municipality<br />
      of Oss, The Netherlands.
    </TextBlock>
    <TextBlock>
      Available on Facebook,<br />
      Instagram and Mastodon.
    </TextBlock>
  </TitleStyled>;
};

export default Title;