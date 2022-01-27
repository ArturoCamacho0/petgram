import React, { Fragment, useEffect, useRef, useState } from 'react';
import { ImgWrapper, Image, Button, Article } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';
  
const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);
  
  useEffect(function() {
    Promise.resolve(
      typeof window.intersectionObserver !== 'undefined'
        ? window.intersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function(entries) {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });

      observer.observe(element.current);
    });
  }, [element]); 

  return (
    <Article ref={element}>
      {
        show &&
          <Fragment>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Image src={src} alt="Image" />
              </ImgWrapper>

              <Button>
                <MdFavoriteBorder size="32px" />
                {likes} likes!
              </Button>
            </a>
          </Fragment>
      }
    </Article>
  );
}
