import {
    ChangeEvent, FC, FormEvent, useEffect, useState,
} from 'react';

import type { MyProps } from '../MenuHeader/types';
import { useDebounce } from '../../shared/hooks/useDebouce';
import { useAppDispatch } from '../../store/services/appDispatch';
import { setFavSearch } from '../../store/slices/fav.slice';
import { setSearch } from '../../store/slices/menu.slice';

import styles from './Searchbar.module.scss';

export const Searchbar:FC<MyProps> = ({ pageType }) => {
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
            <span className={styles.searchbar__icon} />
            <input
                className={styles.searchbar__input}
                value={query}
                onChange={handleChange}
                type="search"
                placeholder="Search food . . ."
            />
            <button className={styles.searchbar__settings} type="button" />
        </form>
    );
};
