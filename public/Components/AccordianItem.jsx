import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

export default function AccordianItem() {
  const { t } = useTranslation();

  return (
    <div className='accor'>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='accor-title' component="span">
            {t("faq.q1")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='accor-title'>
          <Typography className='acoor-text'>
            {t("faq.a1")}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">
            {t("faq.q2")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t("faq.a2")}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">
            {t("faq.q3")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t("faq.a3")}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography component="span">
            {t("faq.q4")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t("faq.a4")}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography component="span">
            {t("faq.q5")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t("faq.a5")}
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
