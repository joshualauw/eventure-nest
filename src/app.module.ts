import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { EventModule } from "./event/event.module";
import { JwtAuthGuard } from "./_utils/guard/jwt.guard";

@Module({
  imports: [UserModule, EventModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: "APP_GUARD",
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
