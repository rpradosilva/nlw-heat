const socialId = {
  github: "rpradosilva",
  youtube: "UCngcgGLbSjDUO-H2p5j43DA",
  instagram: "rpradosilva",
  facebook: "",
  twitter: "rpradosilva",
};

changeProfile(socialId.github);
insertSocialLinks(
  socialId.youtube,
  socialId.instagram,
  socialId.facebook,
  socialId.twitter
);

function changeProfile(githubId) {
  const url = `https://api.github.com/users/${githubId}`;
  let name = document.querySelector(".card__title");
  let avatar = document.querySelector(".card__avatar-photo svg image");
  let link = document.querySelector(".card__github");
  let username = document.querySelector(".card__github-user");
  let description = document.querySelector(".card__text");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      name.innerHTML = data.name;
      avatar.setAttribute("xlink:href", `${data.avatar_url}`);
      link.setAttribute("href", `${data.html_url}`);
      username.innerHTML = data.login;
      description.innerHTML = data.bio;
    });
}

function insertSocialLinks(youtube, instagram, facebook, twitter) {
  const youtubeUrl = "https://www.youtube.com/channel/"; //UCngcgGLbSjDUO-H2p5j43DA
  const instagramUrl = "https://www.instagram.com/"; //rpradosilva
  const facebookUrl = "https://www.facebook.com/"; // ??
  const twitterUrl = "https://twitter.com/"; //rpradosilva
  let socialLinks = document.querySelectorAll(".card__social-link");

  for (const link of socialLinks) {
    if (link.classList.contains("youtube")) {
      link.setAttribute("href", `${youtubeUrl}${youtube}`);
    }
    if (link.classList.contains("instagram")) {
      link.setAttribute("href", `${instagramUrl}${instagram}`);
    }
    if (link.classList.contains("facebook")) {
      link.setAttribute("href", `${facebookUrl}${facebook}`);
    }
    if (link.classList.contains("twitter")) {
      link.setAttribute("href", `${twitterUrl}${twitter}`);
    }
  }
}
