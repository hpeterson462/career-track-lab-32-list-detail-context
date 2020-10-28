import React from 'react';
import { getApi } from '../../../services/api';
import CharacterList from './CharacterList';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../../services/api.js');

describe('CharacterList component', () => {
  it('renders CharacterList after loading...', async () => {
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
});
