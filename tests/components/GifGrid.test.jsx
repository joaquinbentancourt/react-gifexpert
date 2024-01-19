import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => { 
    const category = 'category';
    test('debe de mostrar el loading inicailmente', () => {
        useFetchGifs.mockReturnValue({images: [], isLoading: true });
        render(<GifGrid category={ category } />);
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toBe('Cargando...');
        expect(screen.getByRole('heading', {level: 3}).innerHTML).toBe(category);
     });

     test('debe de mostrar cuand ose cargan las imagenes mediante el useFetchGifs', () => { 
        const gifs = [
            {
                id: 'ABC',
                title: 'Título',
                url: 'https://localhost/image.gif',
            },
            {
                id: 'ABC2',
                title: 'Título2',
                url: 'https://localhost/image2.gif',
            }
        ];
        useFetchGifs.mockReturnValue({images: gifs, isLoading: false});
        render(<GifGrid category={ category } />);
        expect(screen.getAllByRole('img').length).toBe(2);
      });
 });