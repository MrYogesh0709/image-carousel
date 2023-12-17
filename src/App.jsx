import { HomeCarousel } from "./Data";
import ImageSlider from "./ImageSlider";

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
    </div>
  );
};

export default App;
