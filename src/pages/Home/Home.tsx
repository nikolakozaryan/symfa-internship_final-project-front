import { Dishes } from '../../components/Dishes';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Menu/Header';
import { Searchbar } from '../../components/Searchbar';
import { MenuRoutes } from '../../shared/constants/menuRoutes';

export const Home = () => (
    <>
        <Header pageType={MenuRoutes.Home} />
        <Searchbar pageType={MenuRoutes.Home} />
        <Filter pageType={MenuRoutes.Home} />
        <Dishes pageType={MenuRoutes.Home} />
    </>
);
