import Header from '../Header';

import  styles  from './styles.module.scss';

const MainLayout = ({children}) => {
    return( <div className={styles.common}>
        <Header />
       {children}
    </div>
    );
};

export default MainLayout;