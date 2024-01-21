import { Parallax } from "react-parallax";
import ElNido from '../assets/elnido.jpg'

const ParaTwo = () => (
  <Parallax className="image bg-fixed" bgImage={ElNido} bgImageAlt="El Nido, Palawan" strength={800}>
      <div className="content">
        <span className="img-txt">Experience Philippines at its best.</span>
      </div>
  </Parallax>
);

export default ParaTwo;