import React from "react";
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { Tree } from "./Tree"

test("renders a tree name", () => {
    render(<Tree name='Baobab' />);
    expect(screen.getByText("Baobab")).toBeInTheDocument();
});

test("renders a spiciesName name", () => {
    render(<Tree species_name='Adansonia' />);
    expect(screen.getByText("Adansonia")).toBeInTheDocument();
});

test("changes value when clicked", () => {
    const onChange = jest.fn();
    render(<Tree onChange={onChange} />);

    expect(screen.queryByText("Show Image")).not.toBeNull();
    expect(screen.queryByText("Hide Image")).toBeNull();
    expect(screen.queryByRole("img")).toBe(null);

    fireEvent.click(screen.queryByRole('button'))
    expect(screen.queryByText("Show Image")).toBeNull();
    expect(screen.queryByText("Hide Image")).not.toBeNull();
    expect(screen.queryByRole("img")).not.toBe(null);

    fireEvent.click(screen.queryByRole('button'))
    expect(screen.queryByText("Hide Image")).toBeNull();
    expect(screen.queryByText("Show Image")).not.toBeNull();
    expect(screen.queryByRole("img")).toBe(null);
});


