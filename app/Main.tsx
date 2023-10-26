'use client'

import * as React from 'react';

import {
    Box,
    Button,
    Chip,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Grid,
    IconButton,
    Stack,
    TextField,
    Tooltip,
    Typography,
} from '@mui/material'

import SendSharpIcon from '@mui/icons-material/SendSharp'

import * as yup from 'yup'

import {Form, FormikProvider, useFormik} from 'formik'

export type FormData = {
    email: string;
};

export default function Home({posts}) {
    const validationSchema = yup.object({
        email: yup.string().email('Please validate your entered mail.').required('Mail is required.'),
    })

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values: FormData) => {
            // Make a request to send the email using API.
            fetch('/api/join_newsletter', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            }).then((response) => {
                // Display an error message.
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

    return (
        <>
            <Container component="main">
                <Box
                    sx={{

                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img src={'/static/logo/logo-static.png'} width={400} height={200} alt={'saf'}/>


                    <video className="w-full" controls>
                        <source src="https://www.youtube-nocookie.com/embed/BBABA-oKEsM?si=1eRZPHZoaGCIZNpy" type="video/mp4">
                        </source>
                    </video>

                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        marginTop={'0.5rem'}
                        fontFamily={'sans-serif'}
                        style={{
                            // background: 'linear-gradient(45deg, #ffd500, #8400ff)',
                            background: 'linear-gradient(90deg, #8400ff, #ffd800)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            MozBackgroundClip: 'text',
                            MozTextFillColor: 'transparent',
                        }}
                    >
                        RiskLab
                        <b className={'font-bold'}>AI</b>
                    </Typography>

                    <Typography textAlign={'justify'} variant="caption" gutterBottom>
                        Welcome to RiskLab AI, where high-performance, cutting-edge financial intelligence meets
                        academic rigor. Our mission is to bridge the gap between academic research and practical
                        applications in the financial industry. We focus on transparent, data-driven, and
                        innovative approaches to quantitative research that provide actionable insights for
                        businesses and individuals alike. By leveraging state-of-the-art technology and
                        financial expertise, we aim to revolutionize the financial landscape with actionable,
                        sustainable, and intelligent strategies.
                    </Typography>

                    <Divider sx={{marginY: 3}}/>
                    <Typography variant="h4" component="h4" gutterBottom>
                        Libraries
                    </Typography>
                    <Typography sx={{marginBottom: '1rem'}} variant="caption" gutterBottom>
                        At RiskLab AI, we combine powerful programming languages to bring our research to life.
                    </Typography>

                    <Grid container width={'100%'} spacing={2} sx={{width: '100%', padding: '0.5rem'}}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Typography variant="h6" textAlign={'center'}>
                                    <Chip label={'Julia'} className={'text-gray-300 dark:text-gray-700'}
                                          sx={{bgcolor: 'rgb(101,0,255)'}}/>
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12} sx={{marginTop: '1rem'}}>
                                <Typography className={'text-gray-600 dark:text-gray-400'} textAlign={'justify'}
                                            variant="caption" gutterBottom>
                                    Julia is Known for its high performance and ease of use, Julia is particularly
                                    well-suited for numerical and scientific computing. We leverage Julia's mathematical
                                    modeling and data manipulation strength to implement our quantitative research.
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Box my={1} style={{color: 'gray'}}>
                                    <Typography variant="body1" gutterBottom>
                                        <code># in terminal</code>
                                        <br/>
                                        <code>add RiskLabAI</code>
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        <code># in code workspace</code>
                                        <br/>
                                        <code>using RiskLabAI</code>
                                        <br/>
                                        <code>RiskLabAI.function_example()</code>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Typography variant="h6" textAlign={'center'}>
                                    <Chip label={'Python'} className={'text-gray-300 dark:text-gray-700'}
                                          sx={{bgcolor: 'rgb(255,183,1)'}}/>
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12} sx={{marginTop: '1rem'}}>
                                <Typography className={'text-gray-600 dark:text-gray-400'} textAlign={'justify'}
                                            variant="caption" gutterBottom>
                                    Python's versatile libraries and frameworks, such as NumPy, pandas, and
                                    scikit-learn, enable us to conduct comprehensive data analysis, machine
                                    learning, and statistical modeling. Python's broad user community and
                                    extensive resources make it an invaluable tool in our research.
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Box my={1} style={{color: 'gray'}}>
                                    <Typography variant="body1" gutterBottom>
                                        <code># in terminal</code>
                                        <br/>
                                        <code>!pip install RiskLabAI</code>
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        <code># in code workspace</code>
                                        <br/>
                                        <code>import RiskLabAI</code>
                                        <br/>
                                        <code>RiskLabAI.function_example()</code>
                                    </Typography>
                                </Box>
                            </Grid>

                        </Grid>


                    </Grid>
                </Box>
            </Container>

            <Grid container marginTop={'1rem'} padding={'2rem'}>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}
                    sx={{textAlign: 'center', verticalAlign: 'center', margin: 'auto'}}
                >
                    <Typography variant={'h3'}>Join Newsletter</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'start',
                        }}
                    >
                        <Stack spacing={'0.5rem'}>
                            <Typography margin={'1rem'} variant={'caption'} textAlign={'justify'}>
                                Stay ahead of the curve with the latest insights from RiskLab AI. Subscribe to our
                                newsletter and receive updates on our research, industry trends, and actionable
                                financial intelligence right in your inbox. Join our community of forward-thinking
                                financial professionals and be the first to discover cutting-edge strategies and
                                innovative solutions.
                            </Typography>

                            <FormikProvider value={formik} validateOnChange={false} validateOnBlur={false}>
                                <Form value={formik}>
                                    <TextField
                                        sx={{
                                            marginTop: '0.5rem',
                                            height: '8vh',
                                            borderRadius: '5px'
                                        }}
                                        className={'dark:bg-gray-50'}
                                        fullWidth
                                        label="Mail"
                                        id="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        type="text"
                                        InputProps={{
                                            style: {flex: 1},
                                            endAdornment: (
                                                <Tooltip title={formik.errors.email} arrow>
                                                    <IconButton
                                                        onClick={handleClickOpen}
                                                        color="success"
                                                        variant="contained"
                                                        type="submit">
                                                        <SendSharpIcon/>
                                                    </IconButton>
                                                    <Dialog
                                                        open={openInfoDialog}
                                                        onClose={handleClose}
                                                        aria-labelledby="alert-dialog-title"
                                                        aria-describedby="alert-dialog-description"
                                                    >
                                                        <DialogTitle id="alert-dialog-title">
                                                            Welcome to RiskLabAI family!
                                                        </DialogTitle>
                                                        <DialogContent>
                                                            <DialogContentText id="alert-dialog-description">
                                                                We're thrilled to welcome you to the RiskLabAI family!
                                                                Thank you for subscribing to our newsletter.
                                                                You've taken the first step towards staying updated
                                                                with the latest news, exclusive offers, and exciting
                                                                content from <b>RiskLabAI</b>.
                                                                <br/>
                                                                <br/>
                                                                Warm regards,
                                                                The RiskLabAI Team
                                                            </DialogContentText>
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={handleClose} autoFocus>
                                                                Ok
                                                            </Button>
                                                        </DialogActions>
                                                    </Dialog>
                                                </Tooltip>
                                            ),
                                        }}
                                    />

                                </Form>
                            </FormikProvider>
                        </Stack>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
