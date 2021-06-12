import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const testBlankColor = {
    color: "",
    code: { hex: "#fff" }
}
const testColor = {
    color: "Blue",
    code: { hex: "#03bafc" }
}

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={testBlankColor}/>)
});
  
test("Renders the color passed into component", () => {

    render(<Color color={testColor}/>)


});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    
});