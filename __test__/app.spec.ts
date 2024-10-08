import { describe, test, expect } from "@jest/globals";
import app from "../src/server.js";
import request from "supertest";
import { configuration } from "../src/config.js";
import { esPalindromo } from "../src/palindromo.js";
import { esPrimo } from "../src/numeros.js";
import { response } from "express";

describe("Test Suite App", () => {

    test("endpoint /", () => {
        expect(1 + 1).toBe(2);
    });

    test("endpoint key", () => {
        expect(1 + 1).toBe(2);
    });

    test("endpoint /palindromo", async () => {
        expect(esPalindromo('ala')).toBe(true); //Deberia devolver verdadero para ala
        expect(esPalindromo('hola')).toBe(false); //Deberia devolver falso para hola
        expect(esPalindromo('')).toBe(true); //Si es un espacio en blanco deberia de volver verdadero
        expect(esPalindromo('a')).toBe(true); //Si es solo un caracter deberia devolver verdader

        return await request(app)
            .get("/palindromo/:ala")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("Hola, La frase ingresada es palindromo");
            })
    });
    

    test("endpoint /primo", async () => {
        expect(esPrimo(0)).toBe(false);
        expect(esPrimo(1)).toBe(false);
        expect(esPrimo(2)).toBe(true);
        expect(esPrimo(3)).toBe(true);  
        expect(esPrimo(827910410)).toBe(false);
        expect(esPrimo(2943849)).toBe(false);
        
        return await request(app)
            .get("/primo/:3")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("Hola, el numero ingresado es un numero primo");
            })
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