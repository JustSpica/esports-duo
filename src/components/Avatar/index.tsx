import classNames from 'classnames';

export interface AvatarProps {
  image: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Avatar({
  image,
  size = 'md',
}: AvatarProps) {
  return (
    <div
      className={classNames('group relative flex justify-center', {
        'w-8': size === 'sm',
        'w-12': size === 'md',
        'w-16': size === 'lg',
        'w-24': size === 'xl',
      })}
    >
      <img className='rounded-full' src={image} alt="avatar" />
    </div>
  );
}
