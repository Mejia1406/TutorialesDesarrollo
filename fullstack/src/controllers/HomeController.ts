import type { Request, Response } from "express";
import { books } from "../data/Book.js";
import { Book } from "../models/Book.js";

export class HomeController {
  static index(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["  "] = "Home";
    res.render("home/index", { viewData: viewData });
  }

  static about(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "About";
    res.render("home/about", { viewData: viewData });
  }

  static contact(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Contact";
    res.render("home/contact", { viewData: viewData });
  }

  static booksList(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["books"] = books;
    viewData["title"] = "Books";
    res.render("home/books", { viewData: viewData });
  }

  static show(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};

    const id = Number(req.params.id);
    if (Number.isNaN(id) || id < 1 || id > books.length) {
        viewData["title"] = "Book Not Found";
        res.status(404).render("home/error", { viewData: viewData });
        return;
    }   

    const book = Book.findById(books, id);
    viewData["book"] = book;
    viewData["title"] = book.title;
    res.render("home/show", { viewData: viewData });
  }
}
