import { Controller, Post, Body, Get, Query } from "@nestjs/common";
import { NavService } from "./nav.service";

@Controller("nav")
export class NavController {
    constructor(
        private navService: NavService) {}

    // In lettura non serve il body, quindi non serve il decoratore @Body()
    // In lettura non serve avere un dto
    @Get()
    find(@Query('menuType') menuType: string) {
        // Select filtrata per menuType
        if (menuType) {
            return this.navService.findByType(menuType);
        }
        return this.navService.findAll();
    }
}