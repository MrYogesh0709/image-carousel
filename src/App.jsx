import { HomeCarousel } from "./Data";
import ImageSlider from "./ImageSlider";
import github from "./assets/github.svg";
const App = () => {
  return (
    <div>
      <h1 className="mt-2">Image Slider</h1>
      <div className="line"></div>
      <div
        style={
          {
            // maxWidth: "1300px",
            // width: "100%",
            // aspectRatio: "4/1",
            // margin: "0 auto",
          }
        }
      >
        <ImageSlider imageUrl={HomeCarousel} />
      </div>
      <a
        href="https://github.com/MrYogesh0709/image-carousel"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="github" className="github" />
      </a>
    </div>
  );
};

export default App;
