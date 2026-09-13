import { Module } from '@nestjs/common';
import { HomeModule } from './home/home.module.js';
import { BooksModule } from './books/books.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'database.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),

    HomeModule,
    BooksModule,
  ],
})
export class AppModule {}
