import { Label } from '../ui/label';
import { Input } from '../ui/input';

type ImageInputProps = {
  label: string;
};

function ImageInput({label}: ImageInputProps) {

  const name = 'image';
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize mb-2'>
        {label}
      </Label>
      <Input id={name} name={name} type='file' required accept='image/*' />
    </div>
  );
}
export default ImageInput;