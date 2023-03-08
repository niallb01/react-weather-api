import Image_01d from "../images/01d.png";
import Image_01n from "../images/01n.png";
import Image_02d from "../images/02d.png";
import Image_02n from "../images/02n.png";
import Image_03d from "../images/03d.png";
import Image_03n from "../images/03n.png";
import Image_04d from "../images/04d.png";
import Image_04n from "../images/04n.png";
import Image_09d from "../images/09d.png";
import Image_09n from "../images/09n.png";
import Image_10d from "../images/10d.png";
import Image_10n from "../images/10n.png";
import Image_11d from "../images/11d.png";
import Image_11n from "../images/11n.png";
import Image_13d from "../images/13d.png";
import Image_13n from "../images/13n.png";
import Image_50d from "../images/50d.png";
import Image_50n from "../images/50n.png";

const Image = (props) => {
  if (props.image === "01d") {
    return <img src={Image_01d} />;
  }
  if (props.image === "01n") {
    return <img src={Image_01n} />;
  }
  if (props.image === "02d") {
    return <img src={Image_02d} />;
  }
  if (props.image === "02n") {
    return <img src={Image_02n} />;
  }
  if (props.image === "03d") {
    return <img src={Image_03d} />;
  }
  if (props.image === "03n") {
    return <img src={Image_03n} />;
  }
  if (props.image === "04d") {
    return <img src={Image_04d} />;
  }
  if (props.image === "04n") {
    return <img src={Image_04n} />;
  }
  if (props.image === "09d") {
    return <img src={Image_09d} />;
  }
  if (props.image === "09n") {
    return <img src={Image_09n} />;
  }
  if (props.image === "10d") {
    return <img src={Image_10d} />;
  }
  if (props.image === "10n") {
    return <img src={Image_10n} />;
  }
  if (props.image === "11d") {
    return <img src={Image_11d} />;
  }
  if (props.image === "11n") {
    return <img src={Image_11n} />;
  }
  if (props.image === "13d") {
    return <img src={Image_13d} />;
  }
  if (props.image === "13n") {
    return <img src={Image_13n} />;
  }
  if (props.image === "50d") {
    return <img src={Image_50d} />;
  }
  if (props.image === "50n") {
    return <img src={Image_50n} />;
  }
};

export default Image;
