import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en AddCategory', () => { 
    test('debe de cambiar el valor de la caja de texto', () => { 
        const category = 'dance';
        render(<AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: category}});
        expect(input.value).toBe(category);
     });
     test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        const category = 'dance';
        const onNewCategory = jest.fn(); // <- jest mock
        render(<AddCategory onNewCategory={ onNewCategory } />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: category}});
        expect(input.value).toBe(category);

        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1); // <-- la función fue llamada una vez
        expect(onNewCategory).toHaveBeenCalledWith(category);
      });
      test('no debe de llamar onNewCategory si el input no tien 3 caracteres', () => { 
         const category = 'a';
         const onNewCategory = jest.fn(); // <- jest mock
         render(<AddCategory onNewCategory={ onNewCategory } />);
         const input = screen.getByRole('textbox');
         fireEvent.input(input, {target: {value: category}});
         expect(input.value).toBe(category);
         const form = screen.getByRole('form');
         fireEvent.submit(form);
         expect(input.value).toBe(category);
         expect(onNewCategory).toHaveBeenCalledTimes(0); 
       });
 });