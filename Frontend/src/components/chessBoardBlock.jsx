import images from "../assets/images/images.js";

const chessBoardBlock = ({ color, path, x, y, peice, handleClick }) => {
  return (
    <article
      className={`boardBlock w-[90px] h-[90px] ${
        color ? "bg-teal-400" : "bg-white"
      } grid place-content-center`}
      onClick={(e) => handleClick(peice, e.currentTarget, x, y)}
    >
      {path ? (
        <img
          className="hover:cursor-pointer"
          src={images[path].src}
          alt={"image"}
        />
      ) : (
        ""
      )}
    </article>
  );
};

export default chessBoardBlock;
