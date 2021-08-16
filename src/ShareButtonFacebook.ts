import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonTwitter extends AbstractLinkShareButton {

  constructor(clazz: string, url: string) {
    super(clazz, url);
  }

  createLink(): string {
    return `https://facebook.com/sharer.php?u=${this.url}`;
  }
}