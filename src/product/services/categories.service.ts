import { Get, Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Repository } from "typeorm/repository/Repository";
import { categories } from "../models/categories.entity.ts";
import { categories_interface } from "../models/categories.interface";
@Injectable()
export class categories_service {
    constructor(@InjectRepository(categories) private readonly categories: Repository<categories>) { }
    createCategories(productCategories: categories_interface): Observable<categories_interface> {
        return from(this.categories.save(productCategories))
    }
    findAllData(): Observable<categories[]> {
        return from(this.categories.find())
    }
}