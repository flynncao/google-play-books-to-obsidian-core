import {
	Body,
	Controller,
	Get,
	Header,
	HttpCode,
	Param,
	Post,
	Query,
	Redirect,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
	@Get()
	welcome(): string {
		return 'Welcome to Cats Controller';
	}
	@Get('search')
	@Redirect('https://www.google.com/search?q=cats')
	@Get('all')
	findAll(): string {
		return 'This action returns all cats';
	}
	@Get('docs')
	@Redirect('https://docs.nestjs.com', 302)
	getDocs(@Query('version') version) {
		if (version && version === '5') {
			return { url: 'https://docs.nestjs.com/v5/' };
		}
	}
	@Get(':id')
	findOne(@Param() params: any): string {
		console.log(params.id);
		return `This action returns a #${params.id} cat`;
	}

	@Post('createHint')
	@HttpCode(204)
	create(): string {
		return 'This action adds a new cat';
	}
	@Post('create')
	@Header('content-type', 'application/x-www-form-urlencoded')
	async createCat(@Body() createCatDto: CreateCatDto) {
		console.log('createCatDto', createCatDto);
		return 'This action adds a new cat with name: ' + createCatDto.name;
	}
}
