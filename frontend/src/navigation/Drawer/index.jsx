import PermanentDrawer from './PermanentDrawer';
import MobileDrawer from './MobileDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { routes } from '../../routes/AppRoutes';
import { useMemo } from 'react';

export default function Drawer({ open, onClose }) {
  const matches = useMediaQuery('(max-width: 768px)');

  const paths = useMemo(() => {
    return routes.map(({ title }) => title.plural);
  }, [routes])

  return matches ? (
    <MobileDrawer paths={paths} open={open} onClose={onClose} />
  ) : (
    <PermanentDrawer paths={paths} />
  )
}
