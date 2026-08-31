import { Controller, Post, Body, Get, Query } from "@nestjs/common";
import { NavService } from "./nav.service";
import { InjectRepository } from "@nestjs/typeorm";
import { Nav } from "./entities/nav.entity";
import { Repository } from "typeorm";


@Controller("nav")
export class NavController {
    constructor(
        @InjectRepository(Nav)
        private repo: Repository<Nav>) {}

    // In lettura non serve il body, quindi non serve il decoratore @Body()
    // In lettura non serve avere un dto
    @Get()
    findAll() {
        return this.repo.find();
    }

    // GET /nav?type=sidebar → filtra per tipo
    // @Get()
    // findByType(@Query('type') type: string) {
    //     return this.repo.findByType(type);
    // }

}