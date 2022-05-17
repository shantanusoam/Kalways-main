import React from "react";
import {
  AboutContainer,
  TextContaner,
  ContainerCorsole,
} from "./PtoductTopElement";
import EmblaCarousel from "./EmblaCarousel";
import { Trailers } from "../../trailer.js";
const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());

class ProductTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Trailers[this.props.id],
    };
  }

  render() {  
    return (
      <AboutContainer id="About">
        <ContainerCorsole>
          <EmblaCarousel slides={slides} id={this.props.id} />
        </ContainerCorsole>

        <TextContaner>
          <h3 className="text-left text-black font-bold pt-8 text-3xl pb-8">
            {this.state.data.title}
          </h3>
          <p className="text-left text-gray-800 pt-8 pb-8 w-60">
            {this.state.data.Description}
          </p>
        </TextContaner>
      </AboutContainer>
    );
  }
}
export default ProductTop;
