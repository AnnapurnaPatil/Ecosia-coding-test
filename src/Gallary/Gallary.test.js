import React from "react";
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { Gallary } from './Gallary'

const ecosiaData = {
    trees: [{
        name: "Baobab",
        species_name: "Baobab",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg"
    },
    {
        name: "Adansonia",
        species_name: "Adansonia",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg"
    }]
}

test("renders ecosia data", async () => {

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(ecosiaData)
        })
    );

    render(<Gallary />);
    await waitFor(() => screen.getAllByText("Baobab"))
    expect(screen.getAllByText("Baobab").length).toBe(2);
    expect(screen.getAllByText("Adansonia").length).toBe(2);
});