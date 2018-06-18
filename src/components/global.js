import React from 'react';

export const Li = '<li>None</li>';

export function dataMap(data, film){
  //console.log(film);
  if (film){
    return(
      data.map(v =>
      <li key={v.title}>{v.title}</li>
    ));
  }else{
    return (
      data.map(v => 
      <li key={v.name}>{v.name}</li>
    ));
  }
}