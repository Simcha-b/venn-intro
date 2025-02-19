export enum PasswordStrength {
  Weak = "weak",
  Medium = "medium",
  Strong = "strong",
}

export type PasswordOptions = {
  length: number;
  useUppercase: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
};

export class PasswordGenerator {
  private lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  private uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private numberChars = "0123456789";
  private symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  generate(options: PasswordOptions): string {
    const { length, useUppercase, useNumbers, useSymbols } = options;

    let charPool: string = this.lowercaseChars;
    if (useUppercase) charPool += this.uppercaseChars;
    if (useNumbers) charPool += this.numberChars;
    if (useSymbols) charPool += this.symbolChars;

    if (charPool.length === 0) {
      throw new Error("No character set selected");
    }

    let password: string = "";
    for (let i = 0; i < length; i++) {
      const randomIndex: number = Math.floor(Math.random() * charPool.length);
      password += charPool[randomIndex];
    }
    return password;
  }

  generateByStrength(strength: PasswordStrength): string {
    const strengthOptions: Record<PasswordStrength, PasswordOptions> = {
      [PasswordStrength.Weak]: {
        length: 6,
        useUppercase: false,
        useNumbers: false,
        useSymbols: false,
      },
      [PasswordStrength.Medium]: {
        length: 10,
        useUppercase: true,
        useNumbers: true,
        useSymbols: false,
      },
      [PasswordStrength.Strong]: {
        length: 16,
        useUppercase: true,
        useNumbers: true,
        useSymbols: true,
      },
    };

    return this.generate(strengthOptions[strength]);
  }
}
