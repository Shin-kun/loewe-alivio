import React from "react"
import styled from "styled-components/macro"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "src/components/seo"
import { InlineLink } from "src/styled-components/common/Link"
import { Container } from "src/styled-components/projects/components/container"
import { device } from "src/theme"
import { ImageContainer } from "src/styled-components/projects/components/image-container"
import {
  Overview,
  JobOverviewSection,
  JobOverviewSubSection,
} from "src/styled-components/projects/styled-components/container"
import { HeaderSection } from "src/styled-components/common/section"
import {
  Title,
  Heading,
  JobOverviewHeading,
} from "src/styled-components/projects/styled-components/heading"
import {
  Paragraph,
  JobOverviewSummary,
} from "src/styled-components/projects/styled-components/paragraph"

function Kyocera() {
  return (
    <Container>
      <Seo title="Kyocera" />
      <HeaderSection>
        <Title>Kyocera</Title>
        <Heading>
          A Linux driver desktop app that communicates or sends user commands to
          a Kyocera printer.
        </Heading>
      </HeaderSection>
      <Overview>
        <JobOverviewSection>
          <JobOverviewSubSection>
            <JobOverviewHeading>Role</JobOverviewHeading>
            <JobOverviewSummary>Driver Developer</JobOverviewSummary>
          </JobOverviewSubSection>
          <JobOverviewSubSection>
            <JobOverviewHeading>Responsibilities</JobOverviewHeading>
            <JobOverviewSummary>
              Code Reviewing, Maintenance, Bug fixing, Coding
            </JobOverviewSummary>
          </JobOverviewSubSection>
        </JobOverviewSection>
        <ImageContainer>
          <StaticImage
            src="../../../images/kyocera-linux-driver.jpg"
            width={550}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Kyocera Linux driver"
            style={{ zIndex: 10 }}
          />
        </ImageContainer>
        <Paragraph>
          Right after I graduated college, I decided to explore other desktop
          technologies especially C++ which I previously learned before web
          programming. Kyocera gave me the opportunity to explore and maintain
          existing code base such as their Linux driver product.
        </Paragraph>
        <Paragraph>
          Over the past few years, I've been tasked in cleaning up bugs and
          support new features that were in demand by the customers.
        </Paragraph>
        <CompanyLinkContainer>
          <Heading>
            Check them out
            <Link to="https://www.kyoceradocumentsolutions.com/en/index.html">
              here
            </Link>
          </Heading>
        </CompanyLinkContainer>
      </Overview>
    </Container>
  )
}

const CompanyLinkContainer = styled(JobOverviewSubSection)`
  align-self: center;
  align-items: center;
`

const Link = styled(InlineLink)`
  padding: 1rem;

  @media ${device.tablet} {
    font-size: 3rem;
  }

  &:hover {
    font-size: 3.25rem;
  }
`

export default Kyocera
