import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nav } from './entities/nav.entity';
import { NavService } from './nav.service';

@Module({
    imports: [TypeOrmModule.forFeature([Nav])],
    providers: [NavService],
    exports: [NavService],
})
export class NavModule {}