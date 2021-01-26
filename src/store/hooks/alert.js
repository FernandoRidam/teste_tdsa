import { useState, useCallback, useMemo } from 'react';

export function useAlert() {
  const [ open, setOpen ] = useState( false );
  const [ type, setType ] = useState('');
  const [ message, setMessage ] = useState('');

  const showAlert = useCallback(( type, message ) => {
    setType( type );
    setMessage( message );

    setOpen( true );
  }, []);

  const closeAlert = useCallback(() => {
    setOpen( false );

    setType('');
    setMessage('');
  }, []);

  return useMemo(() => {
    return {
      open,
      type,
      message,
      showAlert,
      closeAlert,
    }
  }, [
    open,
    type,
    message,
    showAlert,
    closeAlert,
  ]);
};
