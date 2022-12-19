import React, { Component } from "react";

class SongOverview extends Component {
  state = {
    songs: [
      {
        id: "1",
        title: "Lost",
        artist: "Anouk",
        genre: "Rock",
        rating: "4",
        url: "https://www.youtube.com/watch?v=dn_CjkNtl6s",
      },
      {
        id: "2",
        title: "i don't wanna know",
        artist: "Mario Winans",
        genre: "R&B",
        rating: "5",
        url: "https://www.youtube.com/watch?v=KCHgxoXv4g4",
      },
      {
        id: "3",
        title: "Colors",
        artist: "Ice T",
        genre: "Rap",
        rating: "3",
        url: "https://www.youtube.com/watch?v=-RfdBoRnpYA",
      },
    ],
    filteredGenre: "",
    filteredRating: "",
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.addSong(this.state);
    this.setState({
      title: " ",
      artist: " ",
      genre: " ",
      rating: " ",
    });
  };

  handleDeleteClick = (id) => {
    const updatedSongs = this.state.songs.filter((song) => song.id !== id);
    this.setState({ songs: updatedSongs });
  };

  handleEmptyClick = () => {
    this.setState({
      songs: [],
    });
  };

  addSong = (song) => {
    let newSong = {
      id: this.state.songs.length + 1,
      title: song.title,
      artist: song.artist,
      genre: song.genre,
      rating: song.rating,
    };
    this.setState({ songs: this.state.songs.concat(newSong) });
  };

  filterByGenre = () => {
    const filteredGenre = this.state.songs.filter(
      (song) => song.genre === this.state.filteredGenre
    );
    this.setState({ songs: filteredGenre });
  };

  filterByRating = () => {
    const filteredRating = this.state.songs.sort((a, b) => b.rating - a.rating);
    this.setState({ filteredRating });
  };

  render() {
    return (
      <div>
        <h1 className="title">Add a song here</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            placeholder="title"
            onChange={this.handleInput}
            name="title"
          />
          <label for="title"> song title</label>
          <br />
          <input
            type="text"
            value={this.state.artist}
            placeholder="artist"
            onChange={this.handleInput}
            name="artist"
          />
          <label for="artist"> artist name</label>
          <br />

          <select
            value={this.state.genre}
            placeholder="genre"
            onChange={this.handleInput}
            name="genre"
          >
            <option value="choose">-choose-</option>
            <option value="Rock">Rock</option>
            <option value="Pop">Pop</option>
            <option value="Rap">Rap</option>
            <option value="R&B">R&B</option>
            <option value="Reggae">Reggae</option>
            <option value="House">House</option>
            <option value="Other">Other</option>
          </select>
          <label for="genre"> genre</label>
          <br />

          <select
            value={this.state.rating}
            placeholder="rating 1-5"
            onChange={this.handleInput}
            name="rating"
          >
            <option value="rate">-rate- </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label for="rating"> rate your song</label>
          <br />
          <button className="submitButton">Submit</button>
        </form>
        <br />
        <hr />
        <h3>Playlist</h3>
        <ul id="playlist">
          {this.state.songs.map((song) => (
            <li key={song.id}>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>artist name</th>
                    <th>genre</th>
                    <th>rating</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a className="videolink" href={song.url}>
                        {song.title}
                      </a>
                    </td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.rating}</td>
                    <td>
                      <button
                        className="deleteButton"
                        onClick={() => this.handleDeleteClick(song.id)}
                      >
                        delete song
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          ))}
        </ul>
        <button className="emptyButton" onClick={this.props.handleEmptyClick}>
          empty playlist
        </button>
        <select
          value={this.state.filteredGenre}
          onChange={this.handleInput}
          name="filteredGenre"
        >
          <option value="">-choose genre-</option>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Rap">Rap</option>
          <option value="R&B">R&B</option>
          <option value="Reggae">Reggae</option>
          <option value="House">House</option>
          <option value="Other">Other</option>
        </select>

        <button className="filterbutton" onClick={this.filterByGenre}>
          filter by genre
        </button>

        <button className="filterbutton" onClick={this.filterByRating}>
          filter by top rating
        </button>
      </div>
    );
  }
}
export default SongOverview;
