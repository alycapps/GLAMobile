import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Gets all stylists
  getStylists: function() {
    return axios.get("/api/users/stylists");
  },
  // Gets the stylist with the given id
  getStylist: function(id) {
    return axios.get("/api/users/stylists/" + id);
  },
  updateUser: function(id, data) {
    return axios.put("/api/users/stylists/" + id, data);
  }
};
