let songs = []; // Danh sách các bài hát

function displaySongs() {
  const songList = document.getElementById("songList");
  songList.innerHTML = "";

  songs.forEach((song, index) => {
    const row = `<tr>
      <td>${song.stt}</td>
      <td>${song.songName}</td>
      <td>${song.artist}</td>
      <td>${song.genre}</td>
      <td>${song.composer}</td>
      <td>${song.releaseYear}</td>
      <td><button onclick="editSong(${index})">Chỉnh sửa</button></td>
      <td><button onclick="deleteSong(${index})">Xóa</button></td>
    </tr>`;
    songList.innerHTML += row;
  });
}

function cancel() {
  document.getElementById("stt").value = "";
  document.getElementById("songName").value = "";
  document.getElementById("artist").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("composer").value = "";
  document.getElementById("releaseYear").value = "";
}

function addSong() {
  const stt = document.getElementById("stt").value;
  const songName = document.getElementById("songName").value;
  const artist = document.getElementById("artist").value;
  const genre = document.getElementById("genre").value;
  const composer = document.getElementById("composer").value;
  const releaseYear = document.getElementById("releaseYear").value;

  const newSong = {
    stt: stt,
    songName: songName,
    artist: artist,
    genre: genre,
    composer: composer,
    releaseYear: releaseYear,
  };

  songs.push(newSong);
  displaySongs();
}

function deleteSong(index) {
  songs.splice(index, 1);
  displaySongs();
}

function editSong(index) {
  const stt = prompt("Nhập STT mới:");
  const editedName = prompt("Nhập tên bài hát mới:");
  const editedArtist = prompt("Nhập tên nhạc sĩ mới:");
  const editedGenre = prompt("Nhập tên thể loại mới:");
  const editedComposer = prompt("Nhập tên nhạc sĩ mới:");
  const editedReleaseYear = prompt("Nhập năm xuất bản mới:");
  if (editedName !== null) {
    songs[index].stt = editedName;
    songs[index].songName = editedName;
    songs[index].artist = editedArtist;
    songs[index].genre = editedGenre;
    songs[index].composer = editedComposer;
    songs[index].releaseYear = editedReleaseYear;
    displaySongs();
  }
}

function searchSong() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filteredSongs = songs.filter(
    (song) =>
      song.songName.toLowerCase().includes(searchInput) ||
      song.artist.toLowerCase().includes(searchInput) ||
      song.genre.toLowerCase().includes(searchInput) ||
      song.composer.toLowerCase().includes(searchInput) ||
      song.releaseYear.toLowerCase().includes(searchInput)
  );
  displayFilteredSongs(filteredSongs);
}
function displayFilteredSongs(filteredSongs) {
  const songList = document.getElementById("songList");
  songList.innerHTML = "";

  filteredSongs.forEach((song, index) => {
    const row = `<tr>
      <td>${song.stt}</td>
      <td>${song.songName}</td>
      <td>${song.artist}</td>
      <td>${song.genre}</td>
      <td>${song.composer}</td>
      <td>${song.releaseYear}</td>
      <td><button onclick="editSong(${index})">Chỉnh sửa</button></td>
      <td><button onclick="deleteSong(${index})">Xóa</button></td>
    </tr>`;
    songList.innerHTML += row;
  });
}

// Mô phỏng dữ liệu ban đầu
songs.push({
  stt: 1,
  songName: "Nơi Này Có Anh ",
  artist: " Sơn Tùng MTP",
  genre: "Pop và RnB",
  composer: "Sơn Tùng MTP ",
  releaseYear: "2017 ",
});

// Mô phỏng dữ liệu ban đầu
songs.push({
  stt: 2,
  songName: "Em Gì Ơi ",
  artist: " Jack, K-ICM",
  genre: "Pop",
  composer: "Jack ",
  releaseYear: "2019 ",
});

// Mô phỏng dữ liệu ban đầu
songs.push({
  stt: 3,
  songName: "Cắt Đi Nỗi Sầu ",
  artist: " Tăng Duy Tân",
  genre: " House",
  composer: "Tăng Duy Tân ",
  releaseYear: "2023 ",
});

displaySongs(); // Hiển thị danh sách ban đầu
