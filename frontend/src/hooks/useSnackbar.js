// src/hooks/useCustomSnackbar.js
import { useSnackbar } from 'notistack';

export default function useCustomSnackbar() {
  const { enqueueSnackbar } = useSnackbar();

  const showSuccess = (message) => {
    enqueueSnackbar(message, { variant: 'success' });
  };

  const showError = (message) => {
    enqueueSnackbar(message, { variant: 'error' });
  };

  const showWarning = (message) => {
    enqueueSnackbar(message, { variant: 'warning' });
  };

  const showInfo = (message) => {
    enqueueSnackbar(message, { variant: 'info' });
  };

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };
}
