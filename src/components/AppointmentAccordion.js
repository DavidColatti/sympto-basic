import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material';


const AppointmentAccordion = ({ appointment }) => {
    const { label } = appointment
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>{label}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default AppointmentAccordion