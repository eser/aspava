export const DEFAULT_GENERATION = 6;

export const originalParts = [
  "Allah",
  "Saglik",
  "Para",
  "Ask",
  "Versin",
  "Amin",
];

export class AspavaGenerator {
  constructor(parts = originalParts) {
    this.parts = parts;
  }

  get(n) {
    return this.parts[n % this.parts.length];
  }

  getAll() {
    return this.parts;
  }

  getAsString(separator = " ") {
    return this.parts.join(separator);
  }

  getFirstLetters() {
    return this.parts.map((part) => part[0]).join("");
  }

  shuffle() {
    this.parts = this.parts.toSorted(() => Math.random() - 0.5);

    return this;
  }

  ascending() {
    this.parts = this.parts.toSorted((a, b) => a.localeCompare(b));

    return this;
  }

  descending() {
    this.parts = this.parts.toSorted((a, b) => b.localeCompare(a));

    return this;
  }

  upper() {
    this.parts = this.parts.map((part) => part.toUpperCase());

    return this;
  }

  lower() {
    this.parts = this.parts.map((part) => part.toLowerCase());

    return this;
  }

  *generator(n = DEFAULT_GENERATION) {
    let i = 0;

    while (i < n) {
      yield this.get(i++);
    }
  }
}

export const aspava = new AspavaGenerator();
export default aspava;

if (import.meta.main) {
  for (const part of aspava.upper().generator()) {
    console.log(part);
  }
}
