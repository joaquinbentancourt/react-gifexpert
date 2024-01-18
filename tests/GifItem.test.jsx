import { render, screen } from "@testing-library/react";
import { GifItem } from "../src/components/GifItem";

describe('Pruebas en GifItem', () => { 
    const title = 'Título';
    const url = 'http://www.img.jpg';
    test('debería de hacer match con el snapshot', () => { 
        const {container} = render(<GifItem title={ title } url={ url } />);
        expect(container).toMatchSnapshot(); 
    });
    test('debe de mostrar la imagen con el url indicado', () => { 
        render(<GifItem url={ url } title={ title } />);
        const {src, alt} = screen.getByRole('img');
        expect(src).toContain(url);
        expect(alt).toBe(title);
    });
    test('debe de mostrar el título en el componente', () => { 
        render(<GifItem url={ url } title={ title } />);
        expect(screen.getByText(title)).toBeTruthy();
    });
 });