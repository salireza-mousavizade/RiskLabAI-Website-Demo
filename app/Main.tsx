'use client'

import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'

import SendSharpIcon from '@mui/icons-material/SendSharp'

import * as yup from 'yup'

import { Form, FormikProvider, useFormik } from 'formik'

export default function Home({ posts }) {
  const validationSchema = yup.object({
    email: yup.string().email('Please validate your entered mail.').required('Mail is required.'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <Container component="main">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            // height: '100vh',
          }}
        >
          <img src={'/static/logo/logo-motion.gif'} width={300} height={200} alt={'saf'} />

          <Typography variant="h2" component="h1" gutterBottom>
            RiskLabAI
          </Typography>
          <Typography variant="caption" gutterBottom>
            Welcome to RiskLab AI, where high-performance, cutting-edge financial intelligence meets
            academic rigor. Our mission is to bridge the gap between academic research and practical
            applications in the financial industry. We focus on transparent, data-driven, and
            innovative approaches to quantitative research that provide actionable insights for
            businesses and individuals alike. By leveraging state-of-the-art technology and
            financial expertise, we aim to revolutionize the financial landscape with actionable,
            sustainable, and intelligent strategies.
          </Typography>

          <Divider sx={{ marginY: 3 }} />
          <Typography variant="h4" component="h4" gutterBottom>
            Libraries
          </Typography>
          <Typography variant="caption" gutterBottom>
            At RiskLab AI, we combine powerful programming languages to bring our research to life.
          </Typography>

          <Container component="main" maxWidth="md">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <Typography variant="h6">
                      <Chip label={'Python'} sx={{ bgcolor: 'rgba(255,214,54,0.85)' }} />
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h6">
                      <Chip label={'Julia'} sx={{ bgcolor: 'rgba(124,37,255,0.85)' }} />
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="left" style={{ verticalAlign: 'top' }}>
                    <Typography style={{ color: 'gray' }} variant="caption" gutterBottom>
                      Python's versatile libraries and frameworks, such as NumPy, pandas, and
                      scikit-learn, enable us to conduct comprehensive data analysis, machine
                      learning, and statistical modeling. Python's broad user community and
                      extensive resources make it an invaluable tool in our research.
                    </Typography>
                  </TableCell>
                  <TableCell align="left" style={{ verticalAlign: 'top' }}>
                    <Typography style={{ color: 'gray' }} variant="caption" gutterBottom>
                      Julia is Known for its high performance and ease of use, Julia is particularly
                      well-suited for numerical and scientific computing. We leverage Julia's
                      mathematical modeling and data manipulation strength to implement our
                      quantitative research.
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Box my={1} style={{ color: 'gray' }}>
                      <Typography variant="body1" gutterBottom>
                        <code># in terminal</code>
                        <br />
                        <code>!pip install RiskLabAI</code>
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <code># in code workspace</code>
                        <br />
                        <code>import RiskLabAI</code>
                        <br />
                        <code>RiskLabAI.function_example()</code>
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box my={1} style={{ color: 'gray' }}>
                      <Typography variant="body1" gutterBottom>
                        <code># in terminal</code>
                        <br />
                        <code>add RiskLabAI</code>
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <code># in code workspace</code>
                        <br />
                        <code>using RiskLabAI</code>
                        <br />
                        <code>RiskLabAI.function_example()</code>
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Container>
        </Box>
      </Container>

      <Grid container marginTop={'2rem'} padding={'3rem'}>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          sx={{ textAlign: 'center', verticalAlign: 'center', margin: 'auto' }}
        >
          <Typography variant={'h2'}>Join Us</Typography>
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
              <Typography variant={'caption'} textAlign={'justify'}>
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
                      height: '8vh',
                    }}
                    fullWidth
                    label="Mail"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                    InputProps={{
                      style: { flex: 1 },
                      endAdornment: (
                        <Tooltip title={formik.errors.email} arrow>
                          <IconButton color="success" variant="contained" type="submit">
                            <SendSharpIcon />
                          </IconButton>
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
