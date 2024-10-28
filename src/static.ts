export {};

class Company {
  static area: string = 'JAPAN';
  name: string;
  member: number;
  constructor(name: string, member: number) {
    this.name = name;
    this.member = member;
  }
  static profiled() {
    console.log(`area:${this.area},name:${this.name}}`);
  }
}

let company = new Company('TIC', 99);
console.log(company);
console.log(company.name);
console.log(company.member);
console.log(Company.area);
