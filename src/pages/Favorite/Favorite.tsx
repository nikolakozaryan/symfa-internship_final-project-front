import { useState } from 'react';

import { Dishes } from '../../components/Dishes';
import { FavsBanner } from '../../components/FavsBanner';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Menu/Header';
import { Searchbar } from '../../components/Searchbar';
import { MenuLayout } from '../../layouts';
import { MenuRoutes } from '../../shared/enums/menuRoutes';
import { useAppSelector } from '../../store/selectors/appSelector';

import styles from './Favorite.module.scss';

export const Favorite = () => {
    const isDark = useAppSelector(state => state.theme.dark);
    const [showBanner, setShowBanner] = useState(true);

    return (
        <MenuLayout>
            <>
                <Header pageType={MenuRoutes.Favorite} />
                <Searchbar pageType={MenuRoutes.Favorite} />
                <Filter pageType={MenuRoutes.Favorite} />
                <FavsBanner isVisible={showBanner} />
                <div className={styles.container}>
                    <h3 className={`${styles.favs__heading} ${isDark ? styles.favs__heading_dark : ''}`}>
                        Your Favorite
                    </h3>
                    <button
                        onClick={() => setShowBanner(false)}
                        className={`${styles.favs__button} ${isDark ? styles.favs__button_dark : ''}`}
                        type="button"
                    >
                        See More
                    </button>
                </div>
                <Dishes bannerVisible={showBanner} pageType={MenuRoutes.Favorite} />
            </>
        </MenuLayout>
    );
};
