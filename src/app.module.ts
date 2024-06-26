import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

@Module({
	imports: [
		AuthModule,
		UserModule,
		ConfigModule,
		CategoryModule,
		OrderModule,
		ProductModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
