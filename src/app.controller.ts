import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { AppService } from './app.service';

// @Module({
// 	controllers: [ScrapingController],
// 	providers: [ScrapingService],
// })
@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		@Inject(Logger) private readonly logger: Logger,
	) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}
}
