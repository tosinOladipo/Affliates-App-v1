'use client';

import { Loader2 } from "lucide-react"
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};


export function SubmitButton({
    className = '',
    text = 'submit',
    size = 'lg',
  }: SubmitButtonProps) {
    const { pending } = useFormStatus();
  
    return (
      <Button
        type='submit'
        disabled={pending}
        className={cn('capitalize', className)}
        size={size}
      >
        {pending ? (
          <>
            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            Please wait...
          </>
        ) : (
          text
        )}
      </Button>
    );
  }