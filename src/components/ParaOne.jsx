import { Parallax } from "react-parallax";
import Coron from '../assets/coron.jpg'

const ParaOne = () => (
  <Parallax className="image bg-fixed" bgImage={Coron} bgImageAlt="Coron, Palawan" strength={500}>
      <div className="content">
        <span className="img-txt">Find your escape.</span>
      </div>
  </Parallax>
);

export default ParaOne;