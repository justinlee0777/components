import styles from './fieldset.module.scss';

import classNames from 'classnames';
import { useState } from 'react';

export interface FieldSetProps {
    id?: string;
    className?: string;
    children?: JSX.Element;
    legend: string;
}

export default function FieldSet({
    id,
    className,
    children,
    legend,
}: FieldSetProps): JSX.Element {
    const [opened, setOpened] = useState(false);

    let fieldsetClassName = styles.fieldset;
    let expandClassName = styles.expand;

    if (!opened) {
        fieldsetClassName = `${fieldsetClassName} ${styles.fieldsetUnopened}`;
        expandClassName = `${expandClassName} ${styles.expandUnactivated}`;
    }

    const fieldsetContainerClassNames = classNames(
        styles.fieldsetContainer,
        className
    );

    return (
        <div
            id={id}
            className={fieldsetContainerClassNames}
        >
            <fieldset className={fieldsetClassName}>
                <legend>{legend}</legend>
                {opened && children}
            </fieldset>
            <button
                className={expandClassName}
                aria-pressed={opened}
                aria-expanded={opened}
                onClick={() => setOpened(!opened)}
                aria-label={`Open ${legend.toLowerCase()} settings`}
            >
                +
            </button>
        </div>
    );
}