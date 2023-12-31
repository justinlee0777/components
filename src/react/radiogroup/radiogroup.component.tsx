import styles from './radiogroup.module.scss';

import FieldSet from '../fieldset/fieldset.component';

export interface RadioGroupOption {
  key: string;
  label: string;
  value: string;
}

export interface RadioGroupProps {
  className?: string;
  legend: string;
  name: string;
  options: Array<RadioGroupOption>;
  selectedOption: string;
  onSelect: (value: string) => void;
}

export default function RadioGroup({
  className,
  legend,
  name,
  options,
  selectedOption,
  onSelect,
}: RadioGroupProps): JSX.Element {
  return (
    <FieldSet className={className} legend={legend}>
      <>
        {options.map((option) => (
          <div key={option.key} className={styles.radio}>
            <input
              type="radio"
              id={option.key}
              name={name}
              value={option.value}
              checked={option.key === selectedOption}
              onChange={() => onSelect(option.value)}
            />
            <label htmlFor={option.key}>{option.label}</label>
          </div>
        ))}
      </>
    </FieldSet>
  );
}
