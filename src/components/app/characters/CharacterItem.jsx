import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption >
      {name}
    </figcaption>
  </figure>
);

export default CharacterItem;
