'use client';

import React, { useState, useEffect } from 'react';

//protects from error when reloading
interface ClientOnlyProps {
  children: React.ReactNode; //defined
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ 
  children //defined
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
      setHasMounted(true);
  }, [])

  if (!hasMounted) return null;

  return (
    <>
      {children}
    </>
  );
};

export default ClientOnly;