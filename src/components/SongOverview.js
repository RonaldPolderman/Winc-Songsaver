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
      },
      {
        id: "2",
        title: "i don't wanna know",
        artist: "Mario Winans",
        genre: "R&B",
        rating: "5",
      },
      {
        id: "3",
        title: "Colors",
        artist: "Ice T",
        genre: "Rap",
        rating: "3",
      },
    ],
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

  addSong = (song) => {
    let newSong = {
      id: this.state.songs.lenght + 1,
      title: song.title,
      artist: song.artist,
      genre: song.genre,
      rating: song.rating,
    };
    this.setState({ songs: this.state.songs.concat(newSong) });
  };

  render() {
    return (
      <div>
        <h1>Add a song here</h1>
        <form onSubmit={this.handleSubmit}>
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
          <input
            type="text"
            value={this.state.genre}
            placeholder="genre"
            onChange={this.handleInput}
            name="genre"
          />
          <label for="genre"> genre</label>
          <br />

          <select
            value={this.state.rating}
            placeholder="rating 1-5"
            onChange={this.handleInput}
            name="rating"
          >
            <option value="0"> </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label for="rating"> rate your song</label>
          <br />
          <button>Submit</button>
        </form>
        <br />
        <hr />
        <h3>Playlist</h3>
        <ul id="playlist">
          {this.state.songs.map((song) => (
            <li key={song.id}>
              {song.title} from artist {song.artist} the genre is {song.genre}{" "}
              and it's rated a {song.rating}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default SongOverview;
