import { useState, useMemo } from 'react';
import Button from 'components/common/Button';
import InputSearch from 'components/common/InputSearch';
import { ReactComponent as IconHeart } from 'assets/icons/heart.svg';
import styles from 'components/Header/styles.module.sass';

function Header() {
    const [isLike, setLike] = useState<boolean>(false);

    const [value, setValue] = useState<string>('');

    const iconClasses = useMemo(() => isLike ? 'like-animate' : '', [isLike]);

    return (
        <div className={styles['header']}>
            <div className={styles['search-wrap']}>
                <InputSearch
                    className={styles['search']}
                    value={value}
                    placeholder="Search"
                    onInput={(event) => setValue(event.target.value)}
                />
            </div>

            <Button
                className={styles['button']}
                onClick={() => setLike(true)}
            >
                <IconHeart className={`${styles['button-icon']} ${styles[iconClasses]}`} />
                Сказать спасибо автору
            </Button>
        </div>
    );
}

export default Header;