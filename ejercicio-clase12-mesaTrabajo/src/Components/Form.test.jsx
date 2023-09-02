import { value, fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import Form from './Form'

describe("Form testing", () => {
    test("Los valores no deben ser numericos", () => {
        render(<Form/>)
        const input = screen.getByTestId('input')
        expect(isNaN(Number(input,value))).toBe(true);
    })
    test("el boton se debe disparar", () => {
        const handleClick = vi.fn()
        render(<Form handleClick={handleClick}/>)
        const button = screen.getByText("Iniciar test")
        fireEvent.click(button)
        expect(handleClick).toBeCalledTimes(1)
    })
})