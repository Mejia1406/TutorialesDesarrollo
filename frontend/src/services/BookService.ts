import type { BookInterface } from '@/interfaces/BookInterface';
import { useBookStore } from '@/stores/bookstore.js';
import type { CreateBookDTO } from '@/dtos/CreateBookDTO.js'; 

export class BookService {
  static getBooks(): BookInterface[] {

    return useBookStore().books;
  }

  static createBook(book: CreateBookDTO): void { 
    const store = useBookStore();
    const nextId = store.books.length > 0 ? Math.max(...store.books.map((existingBook) => existingBook.id), 0) + 1 : 1;
    store.books.push({
      id: nextId,
      ...book,
    });
  } 

  static removeLastBook(): void {
    useBookStore().books.pop();
  }

  static getBookById(id: number): BookInterface | undefined {

    return useBookStore().books.find((book) => book.id === id);
  }

  static getUniqueBookCategories(): string[] { 
    const books = BookService.getBooks(); 
    const categories = books.map((book) => book.category); 
    const uniqueCategories = new Set(categories); 

    return Array.from(uniqueCategories); 
  } 

  static getBooksByCategory(category: string): BookInterface[] {
    
    return useBookStore().books.filter((book) => book.category === category);
  }
} 
