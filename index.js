export const DEFAULT_GENERATION = 6;

export const originalParts = ["Allah", "Saglik", "Para", "Ask", "Versin", "Amin"];

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

  getAsString() {
    return this.parts.join(" ");
  }

  getFirstLetters() {
    return this.parts.map((part) => part[0]).join("");
  }

  shuffle() {
    for (let i = this.parts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.parts[i], this.parts[j]] = [this.parts[j], this.parts[i]];
    }

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
