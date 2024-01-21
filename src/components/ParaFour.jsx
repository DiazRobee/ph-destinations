import { Parallax } from "react-parallax";
import Terraces from '../assets/riceterraces.jpg'

const ParaFour = () => (
  <Parallax className="image bg-fixed" bgImage={Terraces} bgImageAlt="Coron, Palawan" strength={800}>
      <div className="content">
        <span className="img-txt">Journey with us for unforgettable memories.</span>
      </div>
  </Parallax>
);

export default ParaFour;