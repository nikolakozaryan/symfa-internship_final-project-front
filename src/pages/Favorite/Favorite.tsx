import { useState } from 'react';

import { Dishes } from '../../components/Dishes';
import { FavsBanner } from '../../components/FavsBanner';
import { Filter } from '../../components/Filter';
import { MenuHeader } from '../../components/MenuHeader';
import { Searchbar } from '../../components/Searchbar';
import { MenuRoutes } from '../../shared/constants/menuRoutes';

import styles from './Favorite.module.scss';

export const Favorite = () => {
    const [showBanner, setShowBanner] = useState(true);

    return (
        <>
            <MenuHeader pageType={MenuRoutes.Favorite} />
            <Searchbar pageType={MenuRoutes.Favorite} />
            <Filter pageType={MenuRoutes.Favorite} />
            <FavsBanner isVisible={showBanner} />
            <div className={styles.container}>
                <h3 className={styles.favs__heading}>Your Favorite</h3>
                <button
                    onClick={() => setShowBanner(false)}
                    className={styles.favs__button_show}
                    type="button"
                >
                    See More
                </button>
            </div>
            <Dishes bannerVisible={showBanner} pageType={MenuRoutes.Favorite} />
        </>
    );
};
