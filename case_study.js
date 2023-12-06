class Song {
  constructor(stt, songName, artist, genre, composer, releaseYear) {
    this.stt = stt;
    this.songName = songName;
    this.artist = artist;
    this.genre = genre;
    this.composer = composer;
    this.releaseYear = releaseYear;
  }
}

// Khai báo một mảng để lưu trữ danh sách các bài hát.
let songs = []; 

function displaySongs() {
  // Hàm để hiển thị danh sách bài hát lên trang HTML.
  const songList = document.getElementById("songList");
  songList.innerHTML = "";

  songs.forEach((song, index) => {
    const row = 
    `<tr>
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


// Hủy bỏ thông tin bài hát đã nhập
function cancel() {
  document.getElementById("stt").value = "";
  document.getElementById("songName").value = "";
  document.getElementById("artist").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("composer").value = "";
  document.getElementById("releaseYear").value = "";
}


// Lấy thông tin bài hát từ Input trên HTML
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


  // Gọi hàm dể hiển thị
  songs.push(newSong);
  displaySongs();
}


// Xóa bài hát khỏi danh sách
function deleteSong(index) {
  songs.splice(index, 1);
  displaySongs();
}


// Chỉnh sữa thông tin một bài hát
function editSong(index) {
  const stt = prompt("Nhập STT mới:");
  const editedName = prompt("Nhập tên bài hát mới:");
  const editedArtist = prompt("Nhập tên ca sĩ mới:");
  const editedGenre = prompt("Nhập tên thể loại mới:");
  const editedComposer = prompt("Nhập tên nhạc sĩ mới:");
  const editedReleaseYear = prompt("Nhập năm xuất bản mới:");
  if (editedName !== null) {
    songs[index].stt = stt;
    songs[index].songName = editedName;
    songs[index].artist = editedArtist;
    songs[index].genre = editedGenre;
    songs[index].composer = editedComposer;
    songs[index].releaseYear = editedReleaseYear;
    displaySongs();
  }
}


// Tìm kiếm bài hát
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

  if (filteredSongs.length === 0) {
    alert("Không tìm thấy bài hát phù hợp."); //Cảnh báo khi không tìm thấy kết quả
  }

  displayFilteredSongs(filteredSongs);
}


// Hiển thị bài hát tìm kiếm
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


// Ví dụ sử dụng class Song để thêm bài hát vào danh sách
const newSong1 = new Song(
  1,
  "Nơi Này Có Anh",
  "Sơn Tùng MTP",
  "Pop và RnB",
  "Sơn Tùng MTP",
  "2017"
);
const newSong2 = new Song(
  2,
  "Hơn Cả Yêu",
  "Đức Phúc",
  "Ballad",
  "Khắc Hưng",
  "2020"
);
const newSong3 = new Song(
  3,
  "Cắt Đi Nỗi Sầu",
  "Tăng Duy Tân",
  "Vpop",
  "Tăng Duy Tân - Drum 7",
  "2023"
);

songs.push(newSong1, newSong2, newSong3);
displaySongs(); // Hiển thị danh sách VD
