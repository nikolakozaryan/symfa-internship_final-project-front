import { Dishes } from '../../components/Dishes';
import { Filter } from '../../components/Filter';
import { MenuHeader } from '../../components/MenuHeader';
import { Searchbar } from '../../components/Searchbar';
import { MenuRoutes } from '../../shared/constants/menuRoutes';

export const Home = () => (
    <>
        <MenuHeader pageType={MenuRoutes.Home} />
        <Searchbar pageType={MenuRoutes.Home} />
        <Filter pageType={MenuRoutes.Home} />
        <Dishes pageType={MenuRoutes.Home} />
    </>
);
