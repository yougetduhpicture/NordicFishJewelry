import { useEffect } from 'react';

interface LightboxProps {
  image: string;
  alt: string;
  onClose: () => void;
}

const Lightbox = ({ image, alt, onClose }: LightboxProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        ✕
      </button>
      <img
        src={image}
        alt={alt}
        className="lightbox__image"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;
