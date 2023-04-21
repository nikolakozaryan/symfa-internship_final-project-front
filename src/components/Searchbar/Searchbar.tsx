import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';

import type { MyProps } from '../Menu/Header/types';
import { useDebounce } from '../../shared/hooks/useDebouce';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { setFavSearch } from '../../store/slices/fav';
import { setSearch } from '../../store/slices/menu';

import styles from './styles.module.scss';

export const Searchbar: FC<MyProps> = ({ pageType }) => {
    const isDark = useAppSelector(state => state.theme.dark);
    const [query, setQuery] = useState('');
    const dispatch = useAppDispatch();
    const searchQuery = useDebounce(query);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    useEffect(() => {
        dispatch(pageType === 'home' ? setSearch(searchQuery) : setFavSearch(searchQuery));
    }, [dispatch, pageType, searchQuery]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <form className={styles.searchbar} onSubmit={handleSubmit}>
            <span className={`${styles.searchbar__icon} ${isDark ? styles.searchbar__icon_dark : ''}`} />
            <input
                className={`${styles.searchbar__input} ${isDark ? styles.searchbar__input_dark : ''}`}
                value={query}
                onChange={handleChange}
                type="search"
                placeholder="Search food . . ."
            />
            <button className={styles.searchbar__settings} type="button" />
        </form>
    );
};
