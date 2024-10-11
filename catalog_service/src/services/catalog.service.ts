import { ICatalogRepository } from "../interface/catalogRepository.interface";

export class CatalogService{

    private _repository:ICatalogRepository;

    constructor(repository:ICatalogRepository){
        this._repository = repository;
    }

    async createProduct(input: any){
        const data = await this._repository.create(input);
        if(!data.id){
            throw new Error("unable to create product !");
        }
        return data;
    }

    async updateProduct(input:any){
        const data = await this._repository.update(input);
        if(!data.id){
            throw new Error("unable to update product !");
        }
        return data;
    }

    async getProducts(limit: number, offset: number) {
        return await this._repository.find(limit, offset);
    }

    async getProduct(id: number) {
        return await this._repository.findOne(id);
    }

    async deleteProduct(id: number) {
        return await this._repository.delete(id);
    }
}