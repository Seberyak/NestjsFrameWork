import { Module } from "@nestjs/common";
import { AppController } from "./api/app/app.controller";
import { AppService } from "./core/services/app";
import { AuthController } from "./api/auth/controller";

@Module({
	imports: [],
	controllers: [AppController, AuthController],
	providers: [AppService],
})
export class AppModule {}
