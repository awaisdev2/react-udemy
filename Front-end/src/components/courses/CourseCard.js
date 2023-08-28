/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';

export default function CourseCard(props) {
  const [expanded, setExpanded] = useState(false);
  const [expandedAuthor, setExpandedAuthor] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  const toggleAuthor = () => {
    setExpandedAuthor(!expandedAuthor);
  };

  const renderText = () => {
    if (props.title.length > 45 && !expanded) {
      return (
        <>
          {props.title.slice(0, 45)}...
          <span onClick={toggleText} className="text-blue-500 cursor-pointer">
            (more)
          </span>
        </>
      );
    } else {
      return (
        <>
          {props.title}
          {props.title.length > 45 && (
            <span onClick={toggleText} className="text-blue-500 cursor-pointer">
              (less)
            </span>
          )}
        </>
      );
    }
  };
  const renderAuthor = () => {
    if (props.author.length > 30 && !expandedAuthor) {
      return (
        <>
          {props.author.slice(0, 30)}...{' '}
          <span onClick={toggleAuthor} className="text-blue-500 cursor-pointer">
            (more)
          </span>
        </>
      );
    } else {
      return (
        <>
          {props.author}{' '}
          {props.author.length > 30 && (
            <span onClick={toggleAuthor} className="text-blue-500 cursor-pointer">
              (less)
            </span>
          )}
        </>
      );
    }
  };

  return (
    <div style={{ maxWidth: '250px' }} className="mx-2">
      <img style={{height: '50%', width: '100%'}} className="border" src={props.imgSrc} alt="card-image" />
      <div>
        <p className="font-bold">{renderText()}</p>
        <p className="text-sm">{renderAuthor()}</p>
        <div className="rating-svg flex items-center">
        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
        <p style={{ color: '#2d2f31' }} className="mx-2">
          {props.downloads}
        </p>
        </div>
        <p className="font-bold">{props.price}</p>
      </div>
    </div>
  );
}