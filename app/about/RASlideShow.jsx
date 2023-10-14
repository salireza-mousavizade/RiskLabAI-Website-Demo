import React from 'react';
import {Avatar, ButtonGroup, Grid, Paper, Stack, Typography} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import LiveIconComponent from '../live_icon_component'
import useBreakpoint from "../use_breakpoint";

export default function SlideShow({raList, elevationValue, iconSize}) {
    const currentBreakpoint = useBreakpoint();

    const itemsPerSlide = ["xs", "sm"].includes(currentBreakpoint) ? 1 : 2;

    const groupedItems = [];

    for (let i = 0; i < raList.length; i += itemsPerSlide) {
        groupedItems.push(raList.slice(i, i + itemsPerSlide));
    }


    return (
        <Carousel sx={{
            width: '100%',
            padding: '0.5rem',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '1rem',
        }}
        className={'bg-primary-50 dark:bg-primary-950'}
        >
            {groupedItems.map((group, groupIndex) => (
                <Grid container width={'100%'} key={groupIndex} sx={{width: '100%', padding: '0.5rem'}}>
                    {group.map((ra, index) => (
                        <Grid item key={index} xs={12} sm={12} md={6} lg={6} padding={1}>
                            <Paper elevation={elevationValue} sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <Stack
                                    display="flex"
                                    style={{
                                        alignItems: 'center',
                                    }}
                                    justifyContent="center"
                                    spacing={2}
                                    padding={2}
                                >
                                    <Avatar
                                        key={'avatar'}
                                        alt={ra.name}
                                        variant="rounded"
                                        src={ra.srcImage}
                                        sx={{width: '25%', height: '25%'}}
                                    />

                                    <Typography sx={{textAlign: 'center'}} key={ra.name} variant="h5">
                                        {ra.name}
                                    </Typography>

                                    <Typography sx={{textAlign: 'center'}} color={"gray"} key={ra.name} variant="body1">
                                        {ra.role}
                                    </Typography>

                                    <Typography sx={{textAlign: 'justify'}} key={ra.university} variant="caption">
                                        is a RiskLab AI research assistant and student in Computer Science and Economics
                                        at Sharif University of Technology. His primary interest is in Statistics,
                                        Machine
                                        Learning and Mathematical Finance. He is working on Julia and Python's Library
                                        at
                                        RiskLab AI. He is also a research assistant for TeiAS in Natural Language
                                        Processing.
                                    </Typography>

                                    <ButtonGroup aria-label="large button group">
                                        {ra.iconsData.map((item) => (
                                            <LiveIconComponent
                                                text={item.title}
                                                icon={item.icon}
                                                to={item.to}
                                                sx={{fontSize: iconSize / 2}}
                                            />
                                        ))}
                                    </ButtonGroup>
                                </Stack>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </Carousel>
    );
}
