import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FlexChild,
  FlexItem,
  FlexItemDetail
} from '../styles/category.style';

export function detailDataMap(data, flag){
  //console.log(film); 
  if (data.length !== 0){ 
    if (flag){
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
  }else{
    return <li>None</li>;
  }
}

export function categoryDataMap(data, flag, path){
  if (flag){
    return(
      data.map(d =>
        <FlexChild key={d.title}>
          <FlexItem>
            {d.title}
          </FlexItem>
          <FlexItemDetail><Link to={`/${path}/${encodeURIComponent(d.title)}`}>+ Details</Link></FlexItemDetail>
        </FlexChild>
      )
    );
  }else{
    return(
      data.map(d =>
        <FlexChild key={d.name}>
          <FlexItem>
            {d.name}
          </FlexItem>
          <FlexItemDetail><Link to={`/${path}/${encodeURIComponent(d.name)}`}>+ Details</Link></FlexItemDetail>
        </FlexChild>
      )
    );
  }
}

export function firstLetterUpper(word){
  return word.charAt(0).toUpperCase() + word.slice(1);
}