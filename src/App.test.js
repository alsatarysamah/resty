import React from "react";
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "./App";


test('load and display app', async () => {
    render(<App />);
    const personName = await waitFor(() => screen.getByTestId('method'));
    expect(personName).toHaveTextContent('Method');
    

});
test('The method dev changed depend on span click', async () => {
    render(<App />);
    const get = screen.getByTestId('get');
    const go = screen.getByTestId('go');
    const method=screen.getByTestId('method');
    fireEvent.click(get);
    fireEvent.click(go);
    expect(method).toHaveTextContent("get");
   
});

test('The URL div change depend on text of the input tag', async () => {
    render(<App />);
    const url = screen.getByTestId('url');
    url.value="hio"
    const go = screen.getByTestId('go');
    const urlDiv=screen.getByTestId('urlDiv');
    fireEvent.click(get);
    // fireEvent.change("hi")
    fireEvent.input(url,"hi")
    fireEvent.click(go);
    expect(urlDiv).toHaveTextContent("URL");
});
test("can fetch url",()=>{

})