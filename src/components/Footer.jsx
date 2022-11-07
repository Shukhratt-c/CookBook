import React from 'react'
import styled from "styled-components"

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <FooterWarper>
        <p>Copyright © {currentYear} Shukhratt: Thanks for your visit :)</p>
    </FooterWarper>
  )
}

const FooterWarper = styled.div`
        margin-bottom: 2rem;
    p {
        font-size: 1rem;
    }
`

export default Footer