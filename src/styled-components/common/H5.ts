import styled from "styled-components/macro"

import { animation, colors, device } from "src/theme"

const H5 = styled.h5`
  font-family: "Montserrat";
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.text};
  animation: ${animation.fade};

  @media ${device.tablet} {
    font-size: 3rem;
  }
`
export default H5
