export {};

interface Attacker {
  offense(): string;
}

interface Defender {
  defense(): string;
}

class TwoWayPlayer implements Attacker, Defender {
  offense() {
    return 'I am good at offense';
  }
  defense(): string {
    return 'I am good at defense';
  }
}

let ace = new TwoWayPlayer();
console.log(ace.defense());
console.log(ace.offense());
