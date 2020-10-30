import React from 'react';
import CharacterList from './CharacterList';
import { cleanup, fireEvent, render, waitFor, screen } from '@testing-library/react';
import { getApi } from '../../../services/api';
import { ThemeProvider } from '../../../context/ThemeContext';
import App from '../App';

jest.mock('../../../services/api');

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders App and changes theme', async () => {
    getApi.mockResolvedValue([
      {
        'id': '1',
        'name': 'Walter White',
        'image': 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg'
      }
    ]);

    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    const characterList = await screen.findByTestId('characters');

    fireEvent.click(button);

    await waitFor(() => {
      expect(characterList).toHaveStyle({ backgroundColor: '#000000' })
    })

    fireEvent.click(button);

    return waitFor(() => {
      expect(characterList).toHaveStyle({ backgroundColor: '#FFFFFF' })
    })
  });
});
