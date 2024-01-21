import { Parallax } from "react-parallax";
import Tubbataha from '../assets/tubbatahareef.jpg'

const ParaThree = () => (
  <Parallax className="image bg-fixed" bgImage={Tubbataha} bgImageAlt="Tubbataha Reef" strength={800}>
      <div className="content">
        <span className="img-txt2">Discover amazing landscapes and crystal clear water.</span>
      </div>
  </Parallax>
);

export default ParaThree;