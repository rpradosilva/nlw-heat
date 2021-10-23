const socialLinks = {
  youtube: "UCngcgGLbSjDUO-H2p5j43DA",
  instagram: "rpradosilva",
  facebook: "",
  twitter: "rpradosilva",
};

function loadSocialLinks(socialLinks) {
  let socialLinks = document.querySelectorAll(".card__social-link a");

  const youtubeUrl = "https://www.youtube.com/channel/"; //UCngcgGLbSjDUO-H2p5j43DA
  const instagramUrl = "https://www.instagram.com/"; //rpradosilva
  const facebookUrl = "https://www.facebook.com/"; // ??
  const twitterUrl = "https://twitter.com/"; //rpradosilva

  for (const link of socialLinks) {
  }
}

function changeProfile(params) {
  let name = document.querySelector(".card__title");
  let githubLink = document.querySelector(".card__github");
  let githubUser = document.querySelector(".card__github-user");
  let description = document.querySelector(".card__text");
}

// function makeURL() {
//   let githubUser = inputElement.value;
//   return `https://api.github.com/users/${githubUser}/repos`;
// }

// function listRepos(repo) {
//   const repoElement = document.createElement("li");
//   repoElement.textContent = repo;
//   listElement.appendChild(repoElement);
// }

// function importRepos() {
//   let userURL = makeURL();

//   axios
//     .get(userURL)
//     .then(function (response) {
//       listElement.innerHTML = "";
//       let repos = response.data;
//       for (const repo of repos) {
//         listRepos(repo.name);
//       }
//       inputElement.value = "";
//     })
//     .catch(function (reject) {
//       console.log(reject);
//     });
// }

// buttonElement.addEventListener("click", importRepos);
