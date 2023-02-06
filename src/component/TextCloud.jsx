import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
const technologies = [
  'HTML',
  'CSS',
  'Javascript',
  'jQuery',
  'Angular',
  'mongoDB',
  'express.js',
  'react',
  'node.js',
  'Materialize',
  'BootStrap',
  'RESTful API',
  'Java',
  'Spring',
  'Jenkins',
  'Junit',
  'Git',
  'Hibernate',
  'mySQL',
  'Oracle DB',
  'PostgreSQL'
];

const tagCloudParams = {
  radius: 300,
  maxSpeed: 'normal',
  initSpeed: 'fast',
  direction: 135,
  keep: false,
  containerClass: 'tagcloud',
  itemClass: 'tagcloud--item',
  useContainerInlineStyles: true,
  useItemInlineStyles: true,
};


const TextCloud = () => {
  const cloudRef = useRef(null);
  useEffect(() => {
    if (cloudRef) {
      const cloud = TagCloud(
        cloudRef.current,
        technologies,
        tagCloudParams,
      );
    }
  }, [cloudRef]);

  return <div ref={cloudRef} style={{color:"#EB5757"}}></div>;
};

export default TextCloud;