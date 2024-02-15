import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Panel } from "../components/Panel";
import { Tarjetita } from "../components/Tarjetita";
import { Botoncito } from "../components/Botoncito";
import userEvent from "@testing-library/user-event";

test("El panel no muestra mensaje al principio", () => {
    render(<Panel />);

    expect(screen.queryByText("Hola!")).not.toBeInTheDocument();
});

test("El panel muestra un mensaje si pulsamos el botón", () => {
    render(<Panel />);

    fireEvent.click(screen.getByText(/Púlsame/i));

    expect(screen.queryByText("Hola!")).toBeInTheDocument();
});

// Test Tarjetita
test("La tarjetita muestra el titulo de la pelicula"), () => {
    render(<Tarjetita movie={movie}/>);

    expect(screen.queryByText("El Padrino")).toBeInTheDocument();
}

test("Renderizar el poster de la película"), () => {
    render(<Tarjetita movie={movie}/>);

    expect(screen.getByAltText(movie.title)).toHaveAttribute("src", movie.poster);
}

// Test Botoncito

test("el boton muestra una X"), () => {
    render(<Botoncito />)

    expect(screen.getByText(/X/)).toBeInTheDocument();
}

test("el boton muestra eliminar al poner el raton encima"), () => {
    render(<Botoncito />)

    userEvent.hover(screen.getByText)

    expect(screen.getByText(/X/)).toBeInTheDocument();
}
