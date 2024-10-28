export {};

class VisaCard {
  public readonly _user: string;
  constructor(user: string) {
    this._user = user;
  }
}

let visacard = new VisaCard('anryu');
console.log(visacard);
