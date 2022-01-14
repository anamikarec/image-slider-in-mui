import "./styles.css";
import MuiImageSlider from "mui-image-slider";

export default function App() {
  const images = [
    "https://i.pinimg.com/736x/2a/fd/05/2afd0541bb003577c986a3ec535415eb.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnY6ML8-yTbLPw8qbp_aAMWlgB-4lQIb4_Jw&usqp=CAU",
    "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-thumb.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5jHxCN6SEQNWx_5FoNp5IsQIInPup2w4jA&usqp=CAU"
  ];
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}

      <MuiImageSlider images={images} />
    </div>
  );
}
