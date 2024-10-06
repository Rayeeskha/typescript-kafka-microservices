"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mockcatalog_repository_1 = require("../../repository/mockcatalog.repository");
const catalog_service_1 = require("../catalog.service");
describe("catalogServices", () => {
    let repository;
    beforeEach(() => {
        repository = new mockcatalog_repository_1.MockCatalogRepository();
    });
    afterEach(() => {
        repository = {};
    });
    describe("createProduct", () => {
        test("should create product", () => __awaiter(void 0, void 0, void 0, function* () {
            const service = new catalog_service_1.CatalogService(repository);
            const reqBody = {
                name: "iPhone",
                description: "Smart phone",
                stock: 100,
                price: 1200
            };
            const result = yield service.createProduct(reqBody);
            expect(result).toMatchObject({
                id: expect.any(Number),
                name: expect.any(String),
                description: expect.any(String),
                price: expect.any(Number),
                stock: expect.any(Number)
            });
        }));
        test("should throw error with product already exist", () => { });
    });
});
