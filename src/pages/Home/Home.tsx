import { Dishes } from '../../components/Dishes';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Menu/Header';
import { Searchbar } from '../../components/Searchbar';
import { MenuLayout } from '../../layouts';
import { MenuRoutes } from '../../shared/enums/menuRoutes';

export const Home = () => (
    <MenuLayout>
        <>
            <Header pageType={MenuRoutes.Home} />
            <Searchbar pageType={MenuRoutes.Home} />
            <Filter pageType={MenuRoutes.Home} />
            <Dishes pageType={MenuRoutes.Home} />
        </>
    </MenuLayout>
);
