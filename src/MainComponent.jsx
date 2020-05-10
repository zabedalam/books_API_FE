import React, { Component } from "react";

class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentDidMount = async () => {
    // const response = await fetch("http://localhost:5000/books");
    const response = await fetch("https://booksapibe.herokuapp.com/books");

    const booksJson = await response.json();
    this.setState({
      books: booksJson,
    });
  };
  render() {
    return (
      <>
        {this.state.books.map((book, index) => (
          <div key={index}>
            <img src={book.img} alt={book} style={{ width: "200px" }}></img>
            <span>{book.title}</span>
          </div>
        ))}
      </>
    );
  }
}

export default MainComponent;
