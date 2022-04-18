import React from "react"

import {
  MainContainer,
  TitleContainer,
  MainSection,
} from "../templates/container"

interface ContainerProps {
  className?: string
}

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  children,
}) => {
  return (
    <MainContainer>
      <MainSection>{children}</MainSection>
    </MainContainer>
  )
}