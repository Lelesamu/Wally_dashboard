import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nav } from './entities/nav.entity';
import { NavService } from './nav.service';
import { NavController } from './nav.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Nav])],
    providers: [NavService],
    exports: [NavService],
    controllers: [NavController]
})
export class NavModule {}