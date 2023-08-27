import { useMemo } from 'react';
import styles from 'components/common/Switch/styles.module.sass';

type Props = {
    className?: string,
    modelValue?: boolean,
    keyField: string,
    children?: string,
    updateValue?: (value: boolean) => void,
}
 
const defaultProps: Props = {
    modelValue: false,
    keyField: '',
    children: 'Название радиокнопки',
};

function Switch(prevProps: Props): JSX.Element {
    const props = { ...defaultProps, ...prevProps };

    const updateValue = (value: boolean): void => {
        props.updateValue?.(value);
    };

    const componentClasses = useMemo(() => {
        return props.modelValue ? 'input_checked' : '';
    }, [props.modelValue]);

    return (
        <div className={props.className}>
            <div className={styles['title']}>
                {props.children}
            </div>

            <input
                className={`${styles['input']} ${styles[componentClasses]}`}
                id={props.keyField}
                type="checkbox"
                checked={props.modelValue}
                onChange={() => updateValue(!props.modelValue)}
            />

            <label
                className={styles['label']}
                htmlFor={props.keyField}
            />
        </div>
    );
}

export default Switch;