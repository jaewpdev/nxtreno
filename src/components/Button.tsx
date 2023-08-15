import classNames from 'classnames';
import Link from 'next/link';

export default function Button({
  primaryText,
  secondaryText,
  variant = 'primary',
  href,
  onClick,
  className,
}: {
  primaryText: string;
  secondaryText: string;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}) {
  const buttonClasses = classNames(
    className,
    'relative font-medium relative group py-4 px-8 rounded-[32px] overflow-hidden',
    {
      'bg-brand-black text-white': variant === 'primary',
      'bg-white text-brand-black': variant === 'secondary',
    }
  );

  const placeHolderTextClasses = classNames({
    'text-brand-black': variant === 'primary',
    'text-white': variant === 'secondary',
  });

  const primaryTextClasses = classNames(
    'w-full h-full transition-all duration-150 ease-in-out absolute bottom-0 left-0 group-hover:-bottom-full flex items-center justify-center',
    {
      'bg-brand-black': variant === 'primary',
      'bg-white': variant === 'secondary',
    }
  );

  const secondaryTextClasses = classNames(
    'z-[2] transition-all duration-150 ease-in-out absolute bottom-full left-0 group-hover:bottom-0 w-full h-full flex items-center justify-center',
    {
      'bg-brand-black': variant === 'primary',
      'bg-white': variant === 'secondary',
    }
  );

  return href ? (
    <Link href={href} className={buttonClasses}>
      <div className={placeHolderTextClasses}>{primaryText}</div>
      <div className={primaryTextClasses}>{primaryText}</div>
      <div className={secondaryTextClasses}>{secondaryText}</div>
    </Link>
  ) : (
    <button type="button" onClick={onClick} className={buttonClasses}>
      <div className={placeHolderTextClasses}>{primaryText}</div>
      <div className={primaryTextClasses}>{primaryText}</div>
      <div className={secondaryTextClasses}>{secondaryText}</div>
    </button>
  );
}
