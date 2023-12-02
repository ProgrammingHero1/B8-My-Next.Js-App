import Image from "next/image";
import nextImage from "@/assets/nextjs-image.png";

const AlbumPage = () => {
  return (
    <div>
      <h1>Using Image component</h1>
      <Image
        src="https://velog.velcdn.com/images/wish/post/ae424c35-84f8-411c-85f5-c96890ed2a1a/image.png"
        width={500}
        height={500}
        alt="next logo"
      />
      <Image src={nextImage} width={500} height={500} alt="next logo" />
      <h1>Using img tag</h1>
      <img
        src="https://velog.velcdn.com/images/wish/post/ae424c35-84f8-411c-85f5-c96890ed2a1a/image.png"
        width="500px"
        height="500px"
        alt="next logo"
      />
    </div>
  );
};

export default AlbumPage;
