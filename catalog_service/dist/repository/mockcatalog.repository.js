"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockCatalogRepository = void 0;
class MockCatalogRepository {
    create(data) {
        throw new Error("Method not implemented.");
        const mockProduct = Object.assign({ id: 123 }, data);
        return Promise.resolve(mockProduct);
    }
    update(data) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    find() {
        throw new Error("Method not implemented.");
    }
    findOne(id) {
        throw new Error("Method not implemented.");
    }
}
exports.MockCatalogRepository = MockCatalogRepository;
