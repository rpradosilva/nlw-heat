let socialId = {
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

function updateBadge() {
  let githubUser = document.querySelector("input[name='github-id']").value;
  let youtubeUser = document.querySelector("input[name='youtube-id']").value;
  let instagramUser = document.querySelector(
    "input[name='instagram-id']"
  ).value;
  let facebookUser = document.querySelector("input[name='facebook-id']").value;
  let twitterUser = document.querySelector("input[name='twitter-id']").value;

  if (githubUser != "") {
    changeProfile(githubUser);
    insertSocialLinks(youtubeUser, instagramUser, facebookUser, twitterUser);
  } else {
    insertSocialLinks(youtubeUser, instagramUser, facebookUser, twitterUser);
  }
}

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
      document.title = `${data.name} - DoWhile 2021`;
    });
}

function insertSocialLinks(youtubeId, instagramId, facebookId, twitterId) {
  const youtubeUrl = "https://www.youtube.com/channel/";
  const instagramUrl = "https://www.instagram.com/";
  const facebookUrl = "https://www.facebook.com/";
  const twitterUrl = "https://twitter.com/";

  createSocialButton("youtube", youtubeUrl, youtubeId);
  createSocialButton("instagram", instagramUrl, instagramId);
  createSocialButton("facebook", facebookUrl, facebookId);
  createSocialButton("twitter", twitterUrl, twitterId);
}

function insertElement(id, htmlTag, destinationClass) {
  let container = document.querySelector(destinationClass);
  let element = document.createElement(htmlTag);

  container.appendChild(element);
  element.setAttribute("id", id);
}

function insertAttr(destinationId, attr, value) {
  let container = document.querySelector(`#${destinationId}`);
  container.setAttribute(attr, value);
}

function createSocialButton(social, url, value) {
  if (value != "") {
    if (document.querySelector(`#card__social-${social}`) != null) {
      document.querySelector(`#card__social-${social}`).remove();
    }
    insertElement(`card__social-${social}`, "li", ".card__social");
    insertElement(`card__social-a-${social}`, "a", `#card__social-${social}`);
    insertAttr(`card__social-a-${social}`, "href", `${url}${value}`);
    insertAttr(`card__social-a-${social}`, "target", "_blank");
    insertAttr(
      `card__social-a-${social}`,
      "class",
      `card__social-link ${social}`
    );
    insertElement(
      `card__social-icon-${social}`,
      "img",
      `#card__social-a-${social}`
    );
    insertAttr(
      `card__social-icon-${social}`,
      "src",
      `assets/images/${social}.svg`
    );
    insertAttr(`card__social-icon-${social}`, "alt", social);
  } else {
    insertElement(`card__social-${social}`, "li", ".card__social");
    document.querySelector(`#card__social-${social}`).remove();
  }
}
