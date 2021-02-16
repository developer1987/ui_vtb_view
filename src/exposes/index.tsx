import React from 'react';
import App from 'src/app';

function Exposes(props: any) {
  return (<App isFederate={true} {...props}/>);
}

export default Exposes;
