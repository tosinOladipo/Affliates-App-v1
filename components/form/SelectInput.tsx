import * as React from "react";
import { Label } from '../ui/label';

type SelectInputProps = {
    name: string;
    label?: string;
    selectValue?: string;
  };

export function SelectInput(
    {name,label,selectValue} : SelectInputProps
) {
  return (
    <section>
      <Label htmlFor={name} className='capitalize mb-2'>
          {label || name}
        </Label>

      <select name="cars" id="cars">
        <option value="">Select campaign objedtive</option>
        <option value={selectValue}>Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </section>
  );
}
