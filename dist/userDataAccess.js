"use strict";
// src/userDataAccess.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const database_1 = __importDefault(require("./database"));
function addUser({ name, email }) {
    return __awaiter(this, void 0, void 0, function* () {
        const insertQuery = `
    INSERT INTO users (name, email)
    VALUES ($1, $2)
    RETURNING *;
  `;
        try {
            const { rows } = yield database_1.default.query(insertQuery, [name, email]);
            return rows[0];
        }
        catch (err) { // Type assertion here
            // Properly check for the 'message' property before using it
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            console.error(err);
            throw new Error('Error creating user: ' + errorMessage);
        }
    });
}
exports.addUser = addUser;
