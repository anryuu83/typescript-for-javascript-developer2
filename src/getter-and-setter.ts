export {};

class MynumberCard {
  private _name: string;
  private _serialNumber: string;
  constructor(name: string, serialNumber: string) {
    this._name = name;
    this._serialNumber = serialNumber;
  }

  get name(): string {
    return this._name;
  }
  set serialNumber(serialNumber: string) {
    this._serialNumber = serialNumber;
  }
}

let mynumberCard = new MynumberCard('anryu', '8838');
console.log(mynumberCard.name);
mynumberCard.serialNumber = '1234';
console.log(mynumberCard.serialNumber);
