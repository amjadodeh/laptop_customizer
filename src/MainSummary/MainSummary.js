import React from 'react';
import SummaryOption from '../SummaryOption/SummaryOption';
import Total from '../Total/Total';

export default function MainSummary(props) {
  return (
    <section className='main__summary'>
      <h2>Your cart</h2>
      <SummaryOption
        selected={props.selected}
        USCurrencyFormat={props.USCurrencyFormat}
      />
      <Total
        selected={props.selected}
        USCurrencyFormat={props.USCurrencyFormat}
      />
    </section>
  );
}
