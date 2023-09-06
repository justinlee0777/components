import styles from './index.module.css';

import {
  RadioGroup,
  RadioGroupOption,
} from 'components/react/radiogroup/index.js';
import { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';

function TestBed() {
  const options: Array<RadioGroupOption> = useMemo(
    () => [
      {
        key: 'foo',
        label: 'Foo',
        value: 'foo',
      },
      {
        key: 'bar',
        label: 'Bar',
        value: 'bar',
      },
      {
        key: 'baz',
        label: 'Baz',
        value: 'baz',
      },
    ],
    [],
  );

  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const onSelect = useMemo(
    () => (value: string) => setSelectedValue(value),
    [],
  );

  return (
    <div className={styles.container}>
      <RadioGroup
        legend="Test"
        name="test"
        options={options}
        selectedOption={selectedValue}
        onSelect={onSelect}
      />
      <span>Selected value: {selectedValue}</span>
    </div>
  );
}

const root = createRoot(document.querySelector('body'));
root.render(<TestBed />);
