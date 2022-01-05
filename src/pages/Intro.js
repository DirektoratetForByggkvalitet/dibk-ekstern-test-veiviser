import React from 'react';
import PropTypes from 'prop-types';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

export default function Intro({ close }) {
  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>Test - veiviser</Primitives.Heading.H1>
          <Primitives.Heading.H2>Finn ut mer om prosjektet ditt!</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Test test.
        </Primitives.Paragraphs.P>
        <section>
          <div>
            <Primitives.Heading.H2 small>Før du begynner må du vite:</Primitives.Heading.H2>
            <ol>
              <li>Hvilke planer som gjelder for eiendommen din</li>
              <li>Hvordan bygningen skal se ut</li>
            </ol>
          </div>
          <Primitives.Figure>
            <img
              src="https://dibk.no/contentassets/d05c1a5183524d3989238cf99604a983/dibk_huset_oversikt.jpg"
              alt="Bilde av bygning er fine"
            />
            <figcaption>Bilde av bygning</figcaption>
          </Primitives.Figure>
        </section>
        <Primitives.Heading.H2 small>Usikker underveis?</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>Ta kontakt med kommunen du skal søke i.</Primitives.Paragraphs.P>
        <Primitives.Heading.H2 small>Start nå og fullfør senere</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Er det noen spørsmål du er usikker på underveis? Du kan ta en pause og fortsette senere.
          Nettleseren husker hvor du var.
        </Primitives.Paragraphs.P>
        <Primitives.Button.MainButton onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
};
