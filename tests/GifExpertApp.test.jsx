import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en GifExpertApp', () => { 
    test('debería machear con el snapshot', () => {  
        const {container} = render(<GifExpertApp />);
        expect(container).toMatchSnapshot(); 
     });
 });