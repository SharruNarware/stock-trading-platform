import React from 'react';

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../src/landing_page/home/Hero";


//test suite
describe("Hero Component", () =>{
    test("render hero image", () =>{
        render(<Hero />);
        const heroImage = screen.getByAltText('Hero image');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", 'media/images/HomeHero.png');
    });
});



describe("signup button", () =>{
    test("render signup button", () =>{
        render(<Hero />);
        const signupButton = screen.getByRole("button", { name: "sign up for free" });
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn btn-primary");
    });
});


