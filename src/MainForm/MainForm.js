import React from 'react';

import Feature from '../Feature/Feature';

export default function MainForm(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return (
      <Feature
        features={props.features}
        selected={props.selected}
        updateFeature={props.updateFeature}
        USCurrencyFormat={props.USCurrencyFormat}
        feature={feature}
        featureHash={featureHash}
      />
    );
  });

  return (
    <form className='main__form'>
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}
