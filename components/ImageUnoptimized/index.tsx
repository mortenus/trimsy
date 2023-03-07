import React from 'react';

import Image from 'next/image';

type TImageUnoptimized = {
  src: string;
  alt: string;
  priority?: boolean;
  fill?: boolean;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
  sizes?: string;
};

const ImageUnoptimized = ({
  src,
  alt,
  priority = false,
  fill = false,
  style = {},
  width,
  height,
  sizes,
}: TImageUnoptimized) => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {fill ? (
        <Image
          placeholder="blur"
          blurDataURL={src}
          priority={priority}
          fill={fill}
          src={src}
          alt={alt}
          style={style && style}
        />
      ) : (
        <Image
          placeholder="blur"
          blurDataURL={src}
          priority={priority}
          width={Math.round(+!width)}
          height={Math.round(+!height)}
          sizes={sizes}
          src={src}
          alt={alt}
          style={style && style}
        />
      )}

      {loaded && fill ? (
        <Image
          unoptimized
          fill={fill}
          src={src}
          alt={alt}
          style={{ position: 'absolute', left: 0, top: 0, ...style }}
        />
      ) : (
        <Image
          unoptimized
          sizes={sizes}
          width={Math.round(+!width)}
          height={Math.round(+!height)}
          src={src}
          alt={alt}
          style={{ position: 'absolute', left: 0, top: 0, ...style }}
        />
      )}
    </>
  );
};

export default ImageUnoptimized;
