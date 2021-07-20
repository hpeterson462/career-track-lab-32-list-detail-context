import React from 'react';
import { render } from '@testing-library/react';
import CharacterDetail from '../../components/app/characters/CharacterItem';

describe('CharacterDetail component', () => {
  it('renders CharacterDetail after loading...', () => {
    const { asFragment } = render(<CharacterDetail />);
    expect(asFragment()).toMatchSnapshot();
  });
});

