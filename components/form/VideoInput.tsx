import { Label } from '../ui/label';
import { Input } from '../ui/input';

function VideoInput() {
  const name = 'video';
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize mb-2'>
        Video
      </Label>
      <Input id={name} name={name} type='file' required accept='video/*' />
    </div>
  );
}
export default VideoInput;