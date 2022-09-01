import { Body, Controller, Get, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { categories_interface } from "../models/categories.interface";
import { categories_model } from "../models/categories.Model";
import { categories_service } from "../services/categories.service";
@Controller("categories")
export class categoriesController {
    constructor(private categories: categories_service) { }
    @Post()
    createCategories(@Body() product_Categories: categories_model): Observable<categories_interface> {
        return this.categories.createCategories(product_Categories)
    }
    @Get("/allData")
    allData(): Observable<categories_interface[]> {
        return this.categories.findAllData()
    }
}