'use client';

import { useActionState } from 'react';
import { useEffect } from 'react';
import { toast } from "sonner"
import { cn } from '@/lib/utils';
import { actionFunction } from '@/utils/types';

const initialState = {
  message: '',
};

function FormContainer({
  action,
  children,
  className
}: {
  action: actionFunction;
  children: React.ReactNode;
  className?: string
}) {
  const [state, formAction] = useActionState(action, initialState);
  useEffect(() => {
    if (state.message) {
      console.log(state.message)
    }
  }, [state]);
  return <form action={formAction} className={cn('', className)}>{children}</form>;
}
export default FormContainer;