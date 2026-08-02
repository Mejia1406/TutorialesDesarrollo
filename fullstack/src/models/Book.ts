export class Book {
  constructor(
    public id: number,

    public title: string,

    public category: string,

    public price: number,

    public stock: number,
  ) {}

  get isAvailable(): boolean {
    return this.stock > 0;

  }

  public static findById(books: Book[], id: number): Book {
    const book = books.find((book) => book.id === id);

    if (!book) {
      throw new Error(`Book with id ${id} not found`);
    }

    return book;
  }
}
