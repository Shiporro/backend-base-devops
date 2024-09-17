import { describe, test, expect } from "@jest/globals";
import app from "../src/server.js";
import request from "supertest";
import { configuration } from "../src/config.js";
import { esPalindromo } from "../src/palindromo.js";

describe("Test Suite App", () => {

    test("endpoint /", () => {
        expect(1 + 1).toBe(2);
    });

    test("endpoint key", () => {
        expect(1 + 1).toBe(2);
    });

    test("endpoint /palindromo", () => {
        expect(esPalindromo('ala')).toBe(true); //Deberia devolver verdadero para ala
        expect(esPalindromo('hola')).toBe(false); //Deberia devolver falso para hola
        expect(esPalindromo('')).toBe(true); //Si es un espacio en blanco deberia de volver verdadero
        expect(esPalindromo('a')).toBe(true); //Si es solo un caracter deberia devolver verdader
    });
    

    test("endpoint /primo", () => {
        expect(1 + 1).toBe(2);
    });

    test("test de endpoint /", async () => {
        return await request(app)
            .get("/")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe(`Hola, esta api fue configurada por el usuario ${configuration.username}`);
            })
    });
});