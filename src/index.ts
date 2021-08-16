import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";

const twitter = new ShareButtonTwitter(".btn-twitter","https://www.typescriptlang.org/");
twitter.bind();
const facebook = new ShareButtonFacebook(".btn-facebook","https://www.typescriptlang.org/");
facebook.bind();
const linkedin = new ShareButtonLinkedin(".btn-linkedin","https://www.typescriptlang.org/");
linkedin.bind();
const print = new ShareButtonPrint(".btn-print");
print.bind();