import Image from 'next/image';
import React from 'react';

type TImageUnoptimized = {
  src: string;
  alt: string;
  priority?: boolean;
  fill?: boolean;
  style?: React.CSSProperties;
};

const ImageUnoptimized = ({
  src,
  alt,
  priority = false,
  fill = false,
  style = {},
}: TImageUnoptimized) => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Image
        placeholder="blur"
        blurDataURL={src}
        priority={priority}
        fill={fill}
        src={src}
        alt={alt}
        style={style && style}
      />

      {loaded && (
        <Image
          unoptimized
          priority={priority}
          fill={fill}
          src={src}
          alt={alt}
          style={{ position: 'absolute', left: 0, top: 0, ...style }}
        />
      )}
    </>
  );
};

export default ImageUnoptimized;
