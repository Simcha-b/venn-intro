import React, { useState } from "react";
import {
  PasswordGenerator,
  PasswordStrength,
  PasswordOptions,
} from "./generateModule";

function Generator() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(PasswordStrength.Weak);
  const [options, setOptions] = useState<PasswordOptions>({
    length: 8,
    useUppercase: false,
    useNumbers: false,
    useSymbols: false,
  });

  const generator = new PasswordGenerator();

  function getPasswordLength(strength: PasswordStrength): number {
    switch (strength) {
      case PasswordStrength.Weak:
        return 8;
      case PasswordStrength.Medium:
        return 12;
      case PasswordStrength.Strong:
        return 16;
      default:
        return 8;
    }
  }

  function handelClick() {
    const updatedOptions = {
      ...options,
      length: getPasswordLength(strength),
    };
    const password = generator.generate(updatedOptions);
    setPassword(password);
  }

  return (
    <div>
      <h1>ברוכים הבאים למחולל הסיסמאות</h1>
      <select
        onChange={(e) =>
          setStrength(e.target.value as unknown as PasswordStrength)
        }
      >
        <option value={PasswordStrength.Weak}>קל</option>
        <option value={PasswordStrength.Medium}>בינוני</option>
        <option value={PasswordStrength.Strong}>קשה</option>
      </select>
      <br />
      <br />
      <div className="chek">
        <label htmlFor="capital">אותיות גדולות</label>
        <input
          type="checkbox"
          name="capital"
          id="capital"
          checked={options.useUppercase}
          onChange={(e) => {
            setOptions({ ...options, useUppercase: e.target.checked });
            console.log(options);
          }}
        />
        <label htmlFor="number">מספרים</label>
        <input
          type="checkbox"
          name="number"
          id="number"
          checked={options.useNumbers}
          onChange={(e) => {
            setOptions({ ...options, useNumbers: e.target.checked });
            console.log(options);
          }}
        />

        <label htmlFor="symbol">סימנים</label>
        <input
          type="checkbox"
          name="symbol"
          id="symbol"
          checked={options.useSymbols}
          onChange={(e) => {
            setOptions({ ...options, useSymbols: e.target.checked });
            console.log(options);
          }}
        />
      </div>
      <br />
      <br />
      <button onClick={() => handelClick()}>צור סיסמה </button>
      <p>{password}</p>
    </div>
  );
}

export default Generator;
