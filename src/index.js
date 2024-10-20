"use strict";
// src/index.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Example function to display a message
const displayMessage = (message) => {
    console.log(message);
};
// Display a welcome message
displayMessage("Hello, welcome to the Algorithmic Trading App!");
// Example of fetching some dummy data (can be replaced with real API requests)
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = [
            { time: "2024-01-01", price: 100 },
            { time: "2024-01-02", price: 105 },
            { time: "2024-01-03", price: 103 }
        ];
        console.log("Fetched data:", data);
    });
}
// Call the function to fetch data
fetchData();
