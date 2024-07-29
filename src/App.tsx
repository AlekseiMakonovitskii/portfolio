import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

function App() {
  const { t } = useTranslation();
  return <>
    {t('test')}
    <Outlet />
  </>;
}

export default App;
