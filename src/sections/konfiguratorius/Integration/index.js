import React from "react"
import Link from "../../../components/Link"
import { Accordion } from "react-bootstrap"
import AccordionItem from "../../../components/Accordion/AccordionItem"
import { faqData, faqData2 } from "./data"
const FaqSection = () => {
  return (
    <>

<div className="integration-area position-relative" data-aos="zoom-in" data-aos-duration={800} data-aos-once="true">
  <div className="container">
  <div className="row justify-content-between align-items-center">
            <div className="row">
              <div className="section__heading_duk">
                <p className="duk-subheading">DUK</p>
                <h2 className="duk-heading">Turite papildomu klausimu?</h2>
                <div className="faq-l9-1">
                <Accordion className="accordion p-0">
                  {faqData.map(({ accKey, question, answer }, index) => {
                    return (
                      <AccordionItem
                        question={question}
                        answer={answer}
                        accKey={accKey}
                        key={index}
                      />
                    )
                  })}
                </Accordion>
                </div>
              </div>
            </div>
          </div>
  </div>
</div>

    
    </>
  )
}

export default FaqSection
