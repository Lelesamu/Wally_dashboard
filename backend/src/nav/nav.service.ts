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

    create(data: Partial<Nav>) {
        const nav = this.repo.create(data);
        return this.repo.save(nav);
    }

    // Select di tutte le righe della tabella nav
    findAll() {
        return this.repo.find();
    }
}