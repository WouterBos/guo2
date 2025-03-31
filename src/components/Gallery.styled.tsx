"use client";

import styled from "styled-components";

export const GalleryRoot = styled.div`
  --mobile-grid-size: 5rem;

  display: grid;
  padding: 0 1rem;
  grid-gap: 1rem;
  grid-template-columns: 2fr 3fr;

  @media (max-width: 800px) {
    grid-template-columns: var(--mobile-grid-size) 1fr;
  }
`;

export const ImageListContainer = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 1;
`;

export const ImageListCode = styled.span`
  opacity: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0.1em 0.3em 0.2em 0.3em;
  color: oklch(1 0 0 / 0);
`;

export const ImageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  flex-wrap: wrap;
  gap: 1rem;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, var(--mobile-grid-size));
  }

  li {
    display: flex;
    max-height: 10rem;
  }
`;

export const ImageListButton = styled.button`
  display: flex;
  position: relative;
  border: none;
  padding: 0;
  background-color: hsla(0, 0%, 0%, 0.1);

  img {
    aspect-ratio: 1 / 1;
    object-position: center;
    object-fit: cover;
    width: 100%;
  }
  &:hover img {
    opacity: 0.8;
  }

  &.selected {
    outline: var(--border-large) solid var(--color-primary);
  }
`;



export const SelectedImage = styled.div`
  grid-row-start: 1;
  grid-column-start: 2;
  grid-column-end: 2;
  position: sticky;
  top: 0;
  align-self: start;
  margin: 0 auto;

  img {
    max-width: 100%;
    max-height: 80vh;
  }
`;

export const ImageCode = styled.div`
  font-size: 0.9em;
  font-style: italic;
`;
