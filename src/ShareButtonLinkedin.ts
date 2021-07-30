import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonTwitter extends AbstractShareButton {

  constructor(clazz: string, url: string) {
    super(clazz, url);
  }

  createLink(): string {
    return `https://linkedin.com/shareArticle?url=${this.url}`;
  }
}