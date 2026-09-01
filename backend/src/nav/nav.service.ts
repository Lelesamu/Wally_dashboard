import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Nav } from "./entities/nav.entity";

@Injectable()
export class NavService {
    constructor(
        @InjectRepository(Nav)
        private repo: Repository<Nav>
    ) {}

    // Select di tutte le righe della tabella nav
    findAll() {
        return this.repo.find();
    }

    // Select di tutte le righe filtrate per menuType
    findByType(menuType: string) {
        return this.repo.find({ where: { menuType } });
    }
}