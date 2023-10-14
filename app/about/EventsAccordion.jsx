import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader} from "@mui/material";

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function EventsAccordion({eventsList,}) {
    return (
        <div>
            {eventsList.map((event) => {
                return (
                    <Box display="flex" justifyContent="center" width="100%">
                        <Accordion className={'bg-primary-50 dark:bg-primary-950 text-primary-950 dark:text-primary-50'} style={{width: '100%', borderRadius: 0}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color={'text-primary-950 dark:text-primary-50'}/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{event.eventTitle}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Card style={{width: '100%'}}>
                                    <CardActionArea>
                                        <CardHeader title={event.eventTitle}/>
                                    </CardActionArea>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography color="textSecondary">{event.eventDate}</Typography>
                                            <Typography variant="caption">{event.eventDescription}</Typography>
                                            <Typography color="textSecondary">{event.eventLocation}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                    </CardActions>
                                </Card>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                )
            })}
        </div>
    );
}