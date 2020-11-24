import React from 'react';
import Option from '../Option/Option';

export default function Feature(props) {
  const options = props.features[props.feature].map((item) => {
    return (
      <Option
        item={item}
        feature={props.feature}
        selected={props.selected}
        updateFeature={props.updateFeature}
        USCurrencyFormat={props.USCurrencyFormat}
      />
    );
  });

  return (
    <fieldset className='feature' key={props.featureHash}>
      <legend className='feature__name'>
        <h3>{props.feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}
