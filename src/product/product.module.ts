import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from 'src/prisma.service';
import { CategoryModule } from 'src/category/category.module';

@Module({
	controllers: [ProductController],
	imports: [CategoryModule],
	providers: [ProductService, PrismaService]
})
export class ProductModule {}
