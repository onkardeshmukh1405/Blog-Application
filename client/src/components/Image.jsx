import { IKImage } from "imagekitio-react";

const URL_ENDPOINT = import.meta.env.VITE_Ik_URL_ENDPOINT;

const Image = ({ src, className, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={URL_ENDPOINT}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      width={w}
      height={h}
      alt={alt}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default Image;
