export type TNetworkError = {
  status: number;
  message: string;
  title?: string;
  subTitle?: string;
};

export class NetworkError {
  readonly status: number;

  readonly message: string;

  readonly title: string;

  readonly subTitle: string;

  constructor({ message, status, title, subTitle }: TNetworkError) {
    this.status = status;
    this.message = message;
    this.title = title || '';
    this.subTitle = subTitle || '';
  }
}
