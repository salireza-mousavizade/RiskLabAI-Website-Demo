'use client'

import useBreakpoint, {responsiveIconSize} from '../use_breakpoint'
import {useState} from 'react'
import LiveIconComponent from '../live_icon_component'
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid,
    InputAdornment,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import TelegramIcon from '@mui/icons-material/Telegram'
import MailIcon from '@mui/icons-material/Mail'
import SlideShow from './RASlideShow'
import {Form, FormikProvider, useFormik} from 'formik'
import * as yup from "yup";
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TitleIcon from '@mui/icons-material/Title';
import MessageIcon from '@mui/icons-material/Message';
import EventsAccordion from './EventsAccordion'

import ContactInfoTabs from './ContactInfo'

import InteractivePaper from "../InteractivePaper";
import * as React from "react";


export default function Page() {

    const validationSchema = yup.object({
        name: yup.string().required('Name is required.'),
        email: yup.string().email('Please validate your entered mail.').required('Mail is required.'),
        subject: yup.string().required('Subject is required.'),
        message: yup.string().required('Message is required.'),
    })

    // Name, Email Address, Subject, and Message. Add a "Submit" button.
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Make a request to send the email using API.
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            }).then((response) => {
                // Display an error message.
                formik.resetForm()
                if (200 !== response.status) {
                    return;
                }
            });

        },
    })


    const [openInfoDialog, setOpenInfoDialog] = React.useState(false);

    const handleClickOpen = () => {
        setOpenInfoDialog(true);
    };

    const handleClose = () => {
        setOpenInfoDialog(false);
    };



    const iconSize = responsiveIconSize(useBreakpoint())

    const eventsList = [
        {
            eventTitle: 'Summer Music Festival',
            eventDescription: 'Join us for a weekend of live music from various artists and bands.',
            eventDate: 'August 20-22, 2023',
            eventLocation: 'Central Park, New York City',
        },
        {
            eventTitle: 'Tech Conference 2023',
            eventDescription:
                'Explore the latest trends in technology and network with industry experts.',
            eventDate: 'September 10-12, 2023',
            eventLocation: 'Convention Center, San Francisco',
        },
        {
            eventTitle: 'Art Exhibition Opening Night',
            eventDescription: 'Discover exquisite artworks from local and international artists.',
            eventDate: 'October 5, 2023',
            eventLocation: 'Art Gallery, London',
        },
        {
            eventTitle: 'Community Cleanup Day',
            eventDescription:
                'Help make our neighborhood cleaner and greener by volunteering for a cleanup event.',
            eventDate: 'November 12, 2023',
            eventLocation: 'Various Locations, Chicago',
        },
        // You can continue adding more events here following the same format
    ]

    const luisSeco = {
        name: 'Luis Seco',
        description:
            'is a professor of mathematics at the university of Toronto, Ontario, Canada. He has obtained his phd at the Princeton University under the supervision of Professor Charles Fefferman. He is the Director of the RiskLab and the MMF program at the University of Toronto.',
        university: 'University of Toronto',
        srcImage: '/static/images/members/luisseco.jpg',
        iconsData: [
            {
                icon: LinkedInIcon,
                title: 'LinkedIn',
                to: 'https:www.linkedin.com/in/s-alireza-mousavizade-41a25024b/',
            },
            {icon: GitHubIcon, title: 'GitHub', to: 'https:github.com/samousavizade'},
            {icon: TelegramIcon, title: 'Telegram', to: 'https:t.me/SAlirezaMousavizade'},
            {
                icon: MailIcon,
                title: 'Mail',
                to: 'https:mail.google.com/mail/u/?authuser=s.a.mosavizade@gmail.com',
            },
        ],
    }

    const hamidArian = {
        name: 'Hamid Arian',
        description:
            'is an assistant professor of Finance at your university Toronto Ontario Canada. Haven’t obtained his phd at the University of Toronto under the supervision of Professor Luis Seco. RiskLab AI is a startup that spinned off of RiskLab Middle East which he founded in 2018.',
        university: 'University of York',
        srcImage: '/static/images/members/arian.jpg',
        iconsData: [
            {
                icon: LinkedInIcon,
                title: 'LinkedIn',
                to: 'https:www.linkedin.com/in/s-alireza-mousavizade-41a25024b/',
            },
            {icon: GitHubIcon, title: 'GitHub', to: 'https:github.com/samousavizade'},
            {icon: TelegramIcon, title: 'Telegram', to: 'https:t.me/SAlirezaMousavizade'},
            {
                icon: MailIcon,
                title: 'Mail',
                to: 'https:mail.google.com/mail/u/?authuser=s.a.mosavizade@gmail.com',
            },
        ],
    }

    const raList = [
        {
            name: 'S. Alireza Mousavizade',
            role: 'Research Assistant',
            description:
                "is a RiskLab AI research assistant and student in Computer Science and Economics at Sharif University of Technology. His primary interest is in Statistics, Machine Learning and Mathematical Finance. He is working on Julia and Python's Library at RiskLab AI. He is also a research assistant for TeiAS in Natural Language Processing.",
            university: 'Sharif University of Technology',
            srcImage: '/static/images/members/sam.jpg',
            iconsData: [
                {
                    icon: LinkedInIcon,
                    title: 'LinkedIn',
                    to: 'https:www.linkedin.com/in/s-alireza-mousavizade-41a25024b/',
                },
                {icon: GitHubIcon, title: 'GitHub', to: 'https:github.com/samousavizade'},
                {icon: TelegramIcon, title: 'Telegram', to: 'https:t.me/SAlirezaMousavizade'},
                {
                    icon: MailIcon,
                    title: 'Mail',
                    to: 'https:mail.google.com/mail/u/?authuser=s.a.mosavizade@gmail.com',
                },
            ],
        },
        {
            name: 'S. Alireza Mousavizade',
            role: 'Research Assistant',

            description:
                "is a RiskLab AI research assistant and student in Computer Science and Economics at Sharif University of Technology. His primary interest is in Statistics, Machine Learning and Mathematical Finance. He is working on Julia and Python's Library at RiskLab AI. He is also a research assistant for TeiAS in Natural Language Processing.",
            university: 'Sharif University of Technology',
            srcImage: '/static/images/members/sam.jpg',
            iconsData: [
                {
                    icon: LinkedInIcon,
                    title: 'LinkedIn',
                    to: 'https:www.linkedin.com/in/s-alireza-mousavizade-41a25024b/',
                },
                {icon: GitHubIcon, title: 'GitHub', to: 'https:github.com/samousavizade'},
                {icon: TelegramIcon, title: 'Telegram', to: 'https:t.me/SAlirezaMousavizade'},
                {
                    icon: MailIcon,
                    title: 'Mail',
                    to: 'https:mail.google.com/mail/u/?authuser=s.a.mosavizade@gmail.com',
                },
            ],
        },
        {
            name: 'S. Alireza Mousavizade',
            role: 'Research Assistant',

            description:
                "is a RiskLab AI research assistant and student in Computer Science and Economics at Sharif University of Technology. His primary interest is in Statistics, Machine Learning and Mathematical Finance. He is working on Julia and Python's Library at RiskLab AI. He is also a research assistant for TeiAS in Natural Language Processing.",
            university: 'Sharif University of Technology',
            srcImage: '/static/images/members/sam.jpg',
            iconsData: [
                {
                    icon: LinkedInIcon,
                    title: 'LinkedIn',
                    to: 'https:www.linkedin.com/in/s-alireza-mousavizade-41a25024b/',
                },
                {icon: GitHubIcon, title: 'GitHub', to: 'https:github.com/samousavizade'},
                {icon: TelegramIcon, title: 'Telegram', to: 'https:t.me/SAlirezaMousavizade'},
                {
                    icon: MailIcon,
                    title: 'Mail',
                    to: 'https:mail.google.com/mail/u/?authuser=s.a.mosavizade@gmail.com',
                },
            ],
        },
        {
            name: 'S. Alireza Mousavizade',
            role: 'Research Assistant',

            description:
                "is a RiskLab AI research assistant and student in Computer Science and Economics at Sharif University of Technology. His primary interest is in Statistics, Machine Learning and Mathematical Finance. He is working on Julia and Python's Library at RiskLab AI. He is also a research assistant for TeiAS in Natural Language Processing.",
            university: 'Sharif University of Technology',
            srcImage: '/static/images/members/sam.jpg',
            iconsData: [
                {
                    icon: LinkedInIcon,
                    title: 'LinkedIn',
                    to: 'https:www.linkedin.com/in/s-alireza-mousavizade-41a25024b/',
                },
                {icon: GitHubIcon, title: 'GitHub', to: 'https:github.com/samousavizade'},
                {icon: TelegramIcon, title: 'Telegram', to: 'https:t.me/SAlirezaMousavizade'},
                {
                    icon: MailIcon,
                    title: 'Mail',
                    to: 'https:mail.google.com/mail/u/?authuser=s.a.mosavizade@gmail.com',
                },
            ],
        },
        {
            name: 'S. Alireza Mousavizade',
            role: 'Research Assistant',

            description:
                "is a RiskLab AI research assistant and student in Computer Science and Economics at Sharif University of Technology. His primary interest is in Statistics, Machine Learning and Mathematical Finance. He is working on Julia and Python's Library at RiskLab AI. He is also a research assistant for TeiAS in Natural Language Processing.",
            university: 'Sharif University of Technology',
            srcImage: '/static/images/members/sam.jpg',
            iconsData: [
                {
                    icon: LinkedInIcon,
                    title: 'LinkedIn',
                    to: 'https:www.linkedin.com/in/s-alireza-mousavizade-41a25024b/',
                },
                {icon: GitHubIcon, title: 'GitHub', to: 'https:github.com/samousavizade'},
                {icon: TelegramIcon, title: 'Telegram', to: 'https:t.me/SAlirezaMousavizade'},
                {
                    icon: MailIcon,
                    title: 'Mail',
                    to: 'https:mail.google.com/mail/u/?authuser=s.a.mosavizade@gmail.com',
                },
            ],
        },
        {
            name: 'S. Alireza Mousavizade',
            role: 'Research Assistant',

            description:
                "is a RiskLab AI research assistant and student in Computer Science and Economics at Sharif University of Technology. His primary interest is in Statistics, Machine Learning and Mathematical Finance. He is working on Julia and Python's Library at RiskLab AI. He is also a research assistant for TeiAS in Natural Language Processing.",
            university: 'Sharif University of Technology',
            srcImage: '/static/images/members/sam.jpg',
            iconsData: [
                {
                    icon: LinkedInIcon,
                    title: 'LinkedIn',
                    to: 'https:www.linkedin.com/in/s-alireza-mousavizade-41a25024b/',
                },
                {icon: GitHubIcon, title: 'GitHub', to: 'https:github.com/samousavizade'},
                {icon: TelegramIcon, title: 'Telegram', to: 'https:t.me/SAlirezaMousavizade'},
                {
                    icon: MailIcon,
                    title: 'Mail',
                    to: 'https:mail.google.com/mail/u/?authuser=s.a.mosavizade@gmail.com',
                },
            ],
        },
    ]

    const elevationValue = 5
    const [state, setState] = useState('')
    const currentBreakpoint = useBreakpoint();

    return (
        <Grid container spacing={1}>
            <Grid item key={'leadership header'} xs={12} sm={12} md={12} lg={12}>
                <Typography
                    sx={{textAlign: 'center', marginBottom: 1, marginTop: 2}}
                    key={'RiskLab Toronto Head'}
                    variant="h2"
                >
                    About
                </Typography>
            </Grid>

            <Grid item key={'risklab intro'} xs={12} sm={12} md={12} lg={12} marginBottom={1.5}>
                <Typography
                    sx={{textAlign: 'left', marginTop: 2}}
                    key={'RiskLab Toronto Head'}
                    variant="body1"
                >
                    Welcome to RiskLab AI, a pioneering platform providing high-performance, cutting-edge
                    financial intelligence. Founded by a team of expert quantitative researchers and data
                    scientists, RiskLab AI aims to provide innovative solutions to complex financial problems
                    by harnessing the power of data and technology. The inception of RiskLab AI was driven by
                    the realization that traditional financial models were insufficient to address the rapidly
                    changing financial landscape. Inspired by AI and machine learning advancements, we
                    embarked on a journey to create a platform that seamlessly integrates academic research
                    with direct industrial practice and applications. RiskLab AI fosters transparent
                    quantitative research by developing and implementing state-of-the-art financial models,
                    methodologies, and algorithms. We are dedicated to enabling businesses, financial
                    institutions, and investors to make well-informed, data-driven decisions.
                </Typography>
            </Grid>


            <Grid item key={'leadership header'} xs={12} sm={12} md={12} lg={12}>
                <Typography
                    sx={{textAlign: 'center', marginBottom: 1, marginTop: 2}}
                    key={'RiskLab Toronto Head'}
                    variant="h3"
                >
                    Leadership
                </Typography>
            </Grid>

            <Grid item key={'risklab intro'} xs={12} sm={12} md={12} lg={12}>
                <Typography
                    sx={{textAlign: 'left', marginY: 1}}
                    key={'RiskLab Toronto Head'}
                    variant="body1"
                >
                    RiskLab AI comprises a diverse team of contributors, each with a unique set of expertise
                    and a commitment to advancing the field of financial intelligence.
                </Typography>
            </Grid>

            <Grid item key={'avatar-name-social_media_links'} xs={12} sm={12} md={6} lg={6}>
                {/*<Typography*/}
                {/*    sx={{textAlign: 'center', marginY: 2}}*/}
                {/*    key={'RiskLab Toronto Head'}*/}
                {/*    variant="h5"*/}
                {/*>*/}
                {/*    RiskLab Toronto Head*/}
                {/*</Typography>*/}

                <InteractivePaper rotationAmount={0.15} >
                    <Stack
                        display="flex"
                        style={{
                            alignItems: 'center',
                        }}
                        justifycontent="center"
                        spacing={2}
                        padding={2}
                    >
                        <Avatar
                            key={'avatar'}
                            alt={luisSeco.name}
                            variant="rounded"
                            src={luisSeco.srcImage}
                            sx={{width: '100%', height: '100%'}}
                        />

                        <Typography className={'text-black dark:text-white'} sx={{textAlign: 'center'}} key={'full name'} variant="h5">
                            {luisSeco.name}
                        </Typography>

                        <Typography className={'text-black dark:text-white'} sx={{textAlign: 'justify'}} key={'toronto'} variant="caption">
                            {luisSeco.description}
                        </Typography>

                        <ButtonGroup aria-label="large button group">
                            {luisSeco.iconsData.map((item) => {
                                return (
                                    <LiveIconComponent
                                        text={item.title}
                                        icon={item.icon}
                                        to={item.to}
                                        sx={{fontSize: iconSize}}
                                    />
                                )
                            })}
                        </ButtonGroup>
                    </Stack>
                </InteractivePaper>
            </Grid>
            <Grid item key={'avatar-name-social_media_links'} xs={12} sm={12} md={6} lg={6}>
                {/*<Typography*/}
                {/*    sx={{textAlign: 'center', marginY: 2}}*/}
                {/*    key={'RiskLab Toronto Head'}*/}
                {/*    variant="h5"*/}
                {/*>*/}
                {/*    RiskLab AI Head*/}
                {/*</Typography>*/}

                <InteractivePaper rotationAmount={0.15}>
                    <Stack
                        display="flex"
                        style={{
                            alignItems: 'center',
                        }}
                        justifycontent="center"
                        spacing={2}
                        padding={2}
                    >
                        <Avatar
                            key={'avatar'}
                            alt={hamidArian.name}
                            variant="rounded"
                            src={hamidArian.srcImage}
                            sx={{width: '100%', height: '100%'}}
                        />

                        <Typography className={'text-black dark:text-white'} sx={{textAlign: 'center'}} key={'full name'} variant="h5">
                            {hamidArian.name}
                        </Typography>

                        <Typography className={'text-black dark:text-white'} sx={{textAlign: 'justify'}} key={'york'} variant="caption">
                            {hamidArian.description}
                        </Typography>

                        <ButtonGroup aria-label="large button group">
                            {hamidArian.iconsData.map((item) => {
                                return (
                                    <LiveIconComponent
                                        text={item.title}
                                        icon={item.icon}
                                        to={item.to}
                                        sx={{fontSize: iconSize}}
                                    />
                                )
                            })}
                        </ButtonGroup>
                    </Stack>
                </InteractivePaper>
            </Grid>
            <Grid item key={'researchers header'} xs={12} sm={12} md={12} lg={12}>
                <Typography
                    sx={{textAlign: 'center', marginBottom: 1, marginTop: 3}}
                    key={'RiskLab Toronto Head'}
                    variant="h5"
                >
                    Quantitative Researchers
                </Typography>
            </Grid>

            <Grid item key={'researchers header'} xs={12} sm={12} md={12} lg={12}>
                <Typography
                    sx={{textAlign: 'left', marginY: 2}}
                    key={'researchers intro'}
                    variant="body1"
                >
                    RiskLab AI is proud to be a platform that fosters collaboration among leading researchers,
                    industry professionals, and financial institutions. Together, we aim to drive innovation
                    and create transformative solutions for the financial sector.
                </Typography>
            </Grid>

            <SlideShow raList={raList} elevationValue={elevationValue} iconSize={iconSize / 2}/>

            <Grid item key={'leadership header'} xs={12} sm={12} md={12} lg={12}>
                <Typography
                    sx={{textAlign: 'center', marginTop: 3, marginBottom: 2}}
                    key={'RiskLab Toronto Head'}
                    variant="h3"
                >
                    Collaboration Opportunities
                </Typography>
            </Grid>

            <Grid item key={'risklab intro'} xs={12} sm={12} md={12} lg={12}>
                <Typography
                    sx={{textAlign: 'justify', marginY: 1}}
                    key={'RiskLab Toronto Head'}
                    variant="body1"
                >
                    At RiskLab AI, we are passionate about fostering collaboration in the field of
                    quantitative finance. Our open and transparent approach to research encourages researchers
                    from various domains to reach out for joint ventures, research projects, or initiatives.
                    Whether you're an academic, an industry professional, or an independent researcher, we
                    invite you to collaborate with us. Together, we can push the boundaries of financial
                    intelligence and create cutting-edge solutions for the finance industry. Contact us to
                    explore collaboration opportunities.
                </Typography>
            </Grid>

            <Grid item key={'leadership header'} xs={12} sm={12} md={12} lg={12}>
                <Typography
                    sx={{textAlign: 'center', marginTop: 2, marginBottom: 2}}
                    key={'RiskLab Toronto Head'}
                    variant="h3"
                >
                    Events
                </Typography>
            </Grid>



            <Grid item key={'risklab intro'} xs={12} sm={12} md={12} lg={12} mb={2}>
                <Typography
                    sx={{textAlign: 'justify', marginY: 1}}
                    key={'RiskLab Toronto Head'}
                    variant="body1"
                >
                    Stay informed about the latest events, conferences, and webinars in the field of
                    quantitative finance. We provide a curated list of events that cater to a wide range of
                    interests, from financial data science to deep learning and hedging strategies. Whether
                    you're looking to learn from leading experts, present your research, or network with
                    fellow practitioners, our events page is your go-to resource.
                </Typography>
            </Grid>

            <Grid item key={'risklab intro'} xs={12} sm={12} md={12} lg={12} mb={2}>
                <EventsAccordion eventsList={eventsList}/>
            </Grid>

            {/*{eventsList.map((event) => {*/}
            {/*    return (*/}
            {/*        <Grid item key={'risklab intro'} xs={12} sm={12} md={6} lg={6}>*/}
            {/*            <Card>*/}
            {/*                <CardContent>*/}
            {/*                    <Typography variant="h5">{event.eventTitle}</Typography>*/}
            {/*                    <Typography color="textSecondary">{event.eventDate}</Typography>*/}
            {/*                    <Typography variant="caption">{event.eventDescription}</Typography>*/}
            {/*                    <Typography color="textSecondary">{event.eventLocation}</Typography>*/}
            {/*                </CardContent>*/}
            {/*            </Card>*/}
            {/*        </Grid>*/}
            {/*    )*/}
            {/*})}*/}

            <Grid item key={'leadership header'} xs={12} sm={12} md={12} lg={12}>
                <Typography
                    sx={{textAlign: 'center', marginTop: 3, marginBottom: 2}}
                    key={'RiskLab Toronto Head'}
                    variant="h3"
                >
                    Contact RiskLab AI
                </Typography>
            </Grid>

            <Grid item key={'risklab intro'} xs={12} sm={12} md={12} lg={12}>
                <Typography
                    sx={{textAlign: 'justify', marginY: 1}}
                    key={'RiskLab Toronto Head'}
                    variant="body1"
                >
                    At RiskLab AI, we value open communication and collaboration. Whether you have inquiries
                    about our work, are interested in partnership opportunities, or have feedback to share,
                    we'd love to hear from you. As advocates of transparent quantitative research, we are
                    always open to engaging with like-minded researchers, industry professionals, and anyone
                    interested in cutting-edge financial intelligence.
                </Typography>
            </Grid>

            <Grid item key={'leadership header'} xs={12} sm={12} md={12} lg={12}>
                <Typography
                    sx={{textAlign: 'center', marginY: 1.5}}
                    key={'RiskLab Toronto Head'}
                    variant="h5"
                >
                    Get in Touch
                </Typography>
            </Grid>


            <Grid item key={'risklab intro'} xs={12} sm={12} md={12} lg={12} marginBottom={1}>
                <Typography
                    sx={{textAlign: 'justify', marginY: 1}}
                    key={'RiskLab Toronto Head'}
                    variant="body1"
                >
                    Fill out the contact form below, and our team will respond to your query as soon as possible.
                </Typography>
            </Grid>

            <FormikProvider value={formik} validateOnChange={false} validateOnBlur={false}>
                <Paper
                    elevation={10}
                    display="flex"
                    justifyContent="center"
                    width="80%"
                    sx={{marginX: 'auto', marginY: 1, padding: 3, borderRadius: 3}}>
                    <Form value={formik} sx={{alignItems: 'center', width: '80%', padding: 2}}>
                        <TextField
                            sx={{
                                width: '50%',
                                padding: 1.375,
                            }}
                            // className={'bg-black dark:bg-white'}
                            label="Name"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            multiline
                            InputProps={{
                                style: {flex: 1},
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            sx={{
                                width: '50%',
                                padding: 1.375,
                            }}
                            label="Mail"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            multiline
                            InputProps={{
                                style: {flex: 1},
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailOutlineIcon/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            sx={{
                                width: '100%',
                                padding: 1.375,
                            }}
                            label="Subject"
                            id="subject"
                            name="subject"
                            value={formik.values.subject}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            multiline
                            InputProps={{
                                style: {flex: 1},
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <TitleIcon/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            sx={{
                                width: '100%',
                                padding: 1.375,
                            }}
                            label="Message"
                            id="message"
                            name="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            multiline
                            InputProps={{
                                style: {flex: 1},
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MessageIcon/>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Box display="flex" justifyContent="center" marginTop={1}>
                            <Button onClick={handleClickOpen} type="submit" variant="outlined" color="success">
                                Submit
                            </Button>
                            <Dialog
                                open={openInfoDialog}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    Thank You for Reaching Out!
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Your message has been successfully submitted. We truly value your input and inquiries. Our team will review your message and get back to you as soon as possible. In the meantime, feel free to explore our website further or check out our FAQs for instant answers. Thank you for choosing <b>RiskLabAI</b>.
                                        <br/>
                                        <br/>
                                        Best regards,
                                        The RiskLabAI Team
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} autoFocus>
                                        Ok
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </Form>
                </Paper>
            </FormikProvider>

            <Grid item key={'leadership header'} xs={12} sm={12} md={12} lg={12}>
                <Typography
                    sx={{textAlign: 'center', marginY: 1.5}}
                    key={'RiskLab Toronto Head'}
                    variant="h5"
                >
                    Stay Connected
                </Typography>
            </Grid>


            <Grid item key={'risklab intro'} xs={12} sm={12} md={12} lg={12}>
                <Typography
                    sx={{textAlign: 'justify', marginY: 1}}
                    key={'RiskLab Toronto Head'}
                    variant="body1"
                >
                    Follow us on social media to stay up-to-date with our latest research, insights, and announcements.
                    Join our online community of financial data scientists, risk management experts, and AI enthusiasts.
                </Typography>
            </Grid>

            <ContactInfoTabs/>

        </Grid>

    )
}

// <Card>
//         <CardContent>
//           <Typography variant="h5" component="div">
//             {eventTitle}
//           </Typography>
//           <Typography color="textSecondary">{eventDate}</Typography>
//           <Typography variant="body2" component="p">
//             {eventDescription}
//           </Typography>
//           <Typography color="textSecondary">{eventLocation}</Typography>
//         </CardContent>
//       </Card>
