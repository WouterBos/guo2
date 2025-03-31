"use client";

import styled from "styled-components";

export const TitleStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

`;

export const TextBlock = styled.div`
  max-width: fit-content;
  height: 4rem;
  white-space: pre;
  padding: .5rem;
  box-sizing: border-box;
  line-height: 1.25;
  border: var(--border-regular) solid var(--color-primary);

  a {
    color: inherit;
    text-decoration: underline var(--color-link-underline);
  }
  a: hover {
    color: var(--color-primary);
    text-decoration: none;
  }
`;
