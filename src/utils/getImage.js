import logo from "assets/img/logo.png";
import lunchBox from "assets/img/lunchBox.png";
import cartFooter from "assets/img/cartFooter.png";

const images = {
  logo,
  lunchBox,
  cartFooter
};
export default function(imageName) {
  return images[imageName];
}
