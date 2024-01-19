import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en Hook useFetchGifs', () => { 
    test('debe de regresar el estado inicial', () => { 
        const { result } = renderHook(() => useFetchGifs('los simpsons'));
        const {images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     });
     test('debe de retornar el arreglo de gifs', async() => { 
         const { result } = renderHook(() => useFetchGifs('los simpsons'));

         // espera hasta que se cumpla el expect (cuando se obtienen las imagenes)
         // por defecto si en un segundo no se cumple, lanza un error (es configurable)
         await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0),
         );
        
         const {images, isLoading } = result.current;
         // esta vez ya se tienen los datos porque se espero
         expect(images.length).toBeGreaterThan(0);
         expect(isLoading).toBeFalsy();
      });
 });