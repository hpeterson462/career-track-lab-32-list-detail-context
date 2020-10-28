import React from 'react';
import { getApi } from '../../../services/api';
import CharacterList from './CharacterList';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../../services/api.js');

describe('CharacterList component', () => {
  it('renders CharacterList', async () => {
    getApi.mockResolvedValue([
      {
        name: 'Walter White',
        image: 'www.image.com'
      }
    ]);

    render(<MemoryRouter><CharacterList /></MemoryRouter>);

    const characterList = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });

  it('renders CharacterList', () => {
    const { asFragment } = render(<CharacterList
      characters={[{ char_id: '1', name: 'Walter White', image: 'www.image.com' }]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
