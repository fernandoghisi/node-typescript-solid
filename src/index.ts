import ShareButton from "./ShareButton";

const shareButton = new ShareButton("https://www.typescriptlang.org/");
shareButton.bind(".btn-twitter", "twitter");
shareButton.bind(".btn-facebook", "facebook");
shareButton.bind(".btn-linkedin", "linkedin");