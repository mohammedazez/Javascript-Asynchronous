const myGithub = async () => {
  try {
    const response = await fetch("https://api.github.com/users/mohammedazez");
    const data = await response.json();
    const {
      avatar_url,
      name,
      id,
      bio,
      url,
      public_repos,
      following,
      followers,
    } = data;
    document.querySelector(".photo").src = avatar_url;
    document.querySelector(".nama").textContent = `Nama : ${name}`;
    document.querySelector(".id").textContent = `No ID: ${id}`;
    document.querySelector(".bio").textContent = `Bio : ${bio}`;
    document.querySelector(
      ".url"
    ).textContent = `Silahkan Kunjungi saya ${url}`;
    document.querySelector(
      ".repo"
    ).textContent = `Total Repository : ${public_repos}`;
    document.querySelector(".foll").textContent = `Followers : ${following}`;
    document.querySelector(".foller").textContent = `Followers : ${followers}`;
  } catch {
    console.log("Mohon maaf data yang ada masukkan tidak terdeteksi");
  }
};

myGithub();
