"use client";

import styled from "styled-components";

export const GalleryRoot = styled.div`
  display: grid;
  padding: 0 1rem;
  grid-gap: 1rem;
  grid-template-columns: 1fr 2fr;
`;

export const ImageListCode = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.1em 0.3em 0.2em 0.3em;
  background-color: hsla(0, 0%, 0%, 0.2);
  color: #fff;
`;

export const ImageListContainer = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 1;
`;

export const ImageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
  }
  li:hover {
    opacity: 0.9;
    ${ImageListCode} {
      background-color: hsla(0, 0%, 0%, 0.7);
    }
  }
`;

export const ImageListButton = styled.button`
  position: relative;
  border: none;
  width: 10rem;
  height: 10rem;
  padding: 0;
  background-color: hsla(0, 0%, 0%, 0.1);
  background-size: cover;
  background-position: center;

img {
  width: 10rem;
  height: 10rem;
  object-position: center;
  object-fit: cover;}
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
