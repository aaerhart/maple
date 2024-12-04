import { ReactElement } from "react"
import CardBootstrap from "react-bootstrap/Card"
import styled from "styled-components"
import { Col, Row, Spinner } from "../bootstrap"
import { Timestamp } from "firebase/firestore"

const AlertCardInnerBodyV2 = styled.div`
  background-color: #d1d6e7;
`

interface AlertCardBodyProps {
  imgSrc?: string
  imgAltTxt?: string
  text: string
  timestamp?: string
}

export const AlertCardBody = (props: AlertCardBodyProps) => {
  const { imgSrc, imgAltTxt, text } = props
  return (
    <div>
      {imgSrc && <img src={imgSrc} width="100%" alt={imgAltTxt}></img>}
      <CardBootstrap.Body>
        <CardBootstrap.Text>{text}</CardBootstrap.Text>
      </CardBootstrap.Body>
    </div>
  )
}

export const AlertCardBodyV2 = (props: AlertCardBodyProps) => {
  const { imgSrc, imgAltTxt, text, timestamp } = props
  return (
    <div>
      <CardBootstrap.Body className={`p-0`}>
        <AlertCardInnerBodyV2
          className={`align-items-center d-flex mx-2 mt-1 mb-2 p-2 rounded`}
        >
          <img
            src="\images\clock.svg"
            height="105.6"
            width="105.6"
            alt={imgAltTxt}
            className={`m-3`}
          />
          <Col className={`m-2`}>
            <CardBootstrap.Text className={`mb-0`}>
              <strong>{text}</strong>
            </CardBootstrap.Text>
            <>
              {"Action taken on "}
              {timestamp}
            </>
          </Col>
        </AlertCardInnerBodyV2>
      </CardBootstrap.Body>
    </div>
  )
}
