'use client'

import {
    Box,
    ButtonGroup,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    Link,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
} from '@mui/material'

import useBreakpoint from '../use_breakpoint'
import LiveIconComponent from '../live_icon_component'
import CodeIcon from '@mui/icons-material/Code'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {darcula} from 'react-syntax-highlighter/dist/cjs/styles/prism'

function getArticlesAsColumns(articlesList, nColumns) {
    const columnsItems = Array(nColumns)
    console.log(columnsItems, nColumns)
    for (let columnIndex = 0; columnIndex < nColumns; columnIndex++) {
        columnsItems[columnIndex] = []
    }

    for (let articleIndex = 0; articleIndex < articlesList.length; articleIndex++) {
        columnsItems[articleIndex % nColumns].push(articlesList[articleIndex])
    }

    return columnsItems
}

export default function Libraries() {
    const toolsList = [
        {
            title: 'Stability Weighted Ensemble Feature Importance',
            category: 'Machine Learning',
            features: 'Stability, Robustness',
            applications:
                'Dimensionality Reduction, Feature Engineering, Feature Selection, Feature Importance',
            author: 'S. Alireza Mousavizade',
            description:
                '"Stability Weighted Ensemble Feature Importance" likely refers to a method that uses ensemble models to compute feature importance scores and then weighs these scores based on their consistency across different data subsets or models. This aims to provide more robust and reliable feature importance values.',
            paperLink: '#', // Placeholder URL
            codeLink: '#', // Placeholder URL
        },
    ]

    const caseStudiesList = [
        {
            title: 'Case Study Title Here',
            category: 'Feature Engineering',
            description: 'Brief summary of the case study, the methods used, and the results achieved.',
            link: 'URL to full case study',
            impact:
                'Explanation of the positive impact of the case study on the industry or organization.',
        },

        {
            title: 'Case Study Title Here',
            category: 'Feature Engineering',
            description: 'Brief summary of the case study, the methods used, and the results achieved.',
            link: 'URL to full case study',
            impact:
                'Explanation of the positive impact of the case study on the industry or organization.',
        },
        {
            title: 'Case Study Title Here',
            category: 'Feature Engineering',
            description: 'Brief summary of the case study, the methods used, and the results achieved.',
            link: 'URL to full case study',
            impact:
                'Explanation of the positive impact of the case study on the industry or organization.',
        },
    ]

    const caseStudyData = caseStudiesList[0]
    const currentBreakpoint = useBreakpoint()

    let nColumns = 0
    switch (currentBreakpoint) {
        case 'xs':
            nColumns = 1
            break
        case 'sm':
            nColumns = 1
            break
        case 'md':
            nColumns = 2
            break
        case 'lg':
            nColumns = 2

            break
        case 'xl':
            nColumns = 3
            break

        default:
            nColumns = 1
    }

    const pythonCode = `
def factorial(n):
  if n == 0:
      return 1
  else:
      return n * factorial(n-1)
      
      
# Python`

    const juliaCode = `
function factorial(n)
  if n == 0
      return 1
  else
      return n * factorial(n-1)
  end
end
# Julia`

    return (
        <>
            <Grid container spacing={1}>
                <Grid item key={'leadership header'} xs={12} sm={12} md={12} lg={12}>
                    <Typography
                        sx={{textAlign: 'center', marginTop: 2}}
                        key={'RiskLab Toronto Head'}
                        variant="h3"
                    >
                        Tools and Libraries
                    </Typography>
                </Grid>

                <Grid item key={'research focus intro'} xs={12} sm={12} md={12} lg={12}>
                    <Typography
                        sx={{textAlign: 'justify', marginTop: 1}}
                        key={'RiskLab Toronto Head'}
                        variant="body1"
                    >
                        At RiskLab AI, we believe that sharing knowledge and resources strengthens the entire
                        field of financial research. To that end, we have developed a range of open-source tools
                        and libraries that researchers, data scientists, and finance professionals can use. Each
                        tool comes with comprehensive documentation and usage examples, making it easier for you
                        to get started with our resources. Our tools and libraries are hosted on GitHub, so you
                        can easily access the code and contribute to the projects.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1} marginY={2}>
                {toolsList.map((paper, rowIndex) => {
                    return (
                        <>
                            <Grid item key={'${rowIndex} description'} xs={12} sm={12} md={12} lg={12}>

                                <Card className={'bg-gray-100 dark:bg-gray-900 border-primary-300 dark:border-primary-600'} key={rowIndex} variant="outlined"
                                      sx={{borderRadius: '0.5rem'}}>
                                    <CardContent>
                                        <Typography className={'text-black dark:text-white'}
                                                    variant="h6">{paper.title}</Typography>
                                        <Typography className={'text-primary-500 dark:text-primary-400'} color="textSecondary"
                                                    style={{marginBottom: '0.5rem'}}>
                                            {paper.category}
                                        </Typography>
                                        <Typography className={'text-black dark:text-white'} variant="body2"
                                                    style={{marginBottom: '0.5rem'}}>
                                            <b>Description </b>
                                            {paper.description}
                                        </Typography>
                                        <Typography className={'text-black dark:text-white'} variant="body2"
                                                    style={{marginBottom: '0.5rem'}}>
                                            <b>Features </b>
                                            {paper.features}
                                        </Typography>
                                        <Typography className={'text-black dark:text-white'} variant="body2"
                                                    style={{marginBottom: '0.5rem'}}>
                                            <b>Applications </b>
                                            {paper.applications}
                                        </Typography>

                                        <Typography className={'text-primary-500 dark:text-primary-400'}
                                                    style={{marginBottom: '0.5rem'}}>
                                            {paper.author}
                                        </Typography>
                                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                                            <LiveIconComponent
                                                text={'Read'}
                                                icon={AttachFileIcon}
                                                to={'paperlink'}
                                                sx={{fontSize: 16}}
                                            />
                                            <LiveIconComponent
                                                text={'Code'}
                                                icon={CodeIcon}
                                                to={'codelink'}
                                                sx={{fontSize: 16}}
                                            />
                                        </ButtonGroup>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid
                                item
                                key={'${rowIndex} python'}
                                margin={0}
                                padding={0}
                                xs={12}
                                sm={12}
                                md={6}
                                lg={6}
                            >
                                <Paper
                                    className={'bg-primary-100 dark:bg-primary-900'}
                                    elevation={0}
                                    style={{padding: '0.5rem', fontSize: 5, borderRadius: '0.5rem'}}
                                >
                                    <SyntaxHighlighter showLineNumbers language="python" style={darcula}>
                                        {pythonCode}
                                    </SyntaxHighlighter>
                                </Paper>
                            </Grid>
                            <Grid item key={'${rowIndex} julia'} xs={12} sm={12} md={6} lg={6}>
                                <Paper
                                    className={'bg-primary-100 dark:bg-primary-900'}
                                    elevation={0}
                                    style={{padding: '0.5rem', fontSize: 5, borderRadius: '0.5rem'}}
                                >
                                    <SyntaxHighlighter showLineNumbers language="julia" style={darcula}>
                                        {juliaCode}
                                    </SyntaxHighlighter>
                                </Paper>
                            </Grid>
                        </>
                    )
                })}
            </Grid>
            <Grid container spacing={1}>
                <Grid item key={'leadership header'} xs={12} sm={12} md={12} lg={12}>
                    <Typography
                        sx={{textAlign: 'center', marginY: 2}}
                        key={'RiskLab Toronto Head'}
                        variant="h3"
                    >
                        Case Studies
                    </Typography>
                </Grid>

                <Grid item key={'research focus intro'} xs={12} sm={12} md={12} lg={12}>
                    <Typography
                        sx={{textAlign: 'justify', marginTop: 1}}
                        key={'RiskLab Toronto Head'}
                        variant="body1"
                    >
                        We have successfully applied our research in a variety of real-world financial settings.
                        Our case studies showcase our work's practical benefits, performance, and impact. By
                        providing detailed analyses of these applications, we aim to demonstrate how our
                        high-performance, cutting-edge financial intelligence can be used to solve complex
                        financial problems.
                    </Typography>
                </Grid>
            </Grid>
            <Paper className={'bg-gray-100 dark:bg-gray-900'} sx={{marginTop: 2, padding: '2rem'}}>
                {caseStudiesList.map((caseStudyData, rowIndex) => {
                    return (
                        <Box marginY={1}>
                            <Typography className={'text-black dark:text-white'} variant="h5" gutterBottom>
                                Title: {caseStudyData.title}
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText className={'text-black dark:text-white'} primary="Category"
                                                  secondaryTypographyProps={{style: {color: 'gray'}}}
                                                  secondary={caseStudyData.category}/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText className={'text-black dark:text-white'} primary="Description"
                                                  secondaryTypographyProps={{style: {color: 'gray'}}}
                                                  secondary={caseStudyData.description}/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        className={'text-black dark:text-white'}
                                        primary="Link to Full Case Study"
                                        secondaryTypographyProps={{style: {color: 'gray'}}}
                                        secondary={<Link href={caseStudyData.link}>{caseStudyData.link}</Link>}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText className={'text-black dark:text-white'} primary="Impact"
                                                  secondaryTypographyProps={{style: {color: 'gray'}}}
                                                  secondary={caseStudyData.impact}/>
                                </ListItem>
                                <Divider style={{background: 'gray'}} component="li"/>
                            </List>
                        </Box>
                    )
                })}
            </Paper>

            <Grid container spacing={1}>
                <Grid item key={'leadership header'} xs={12} sm={12} md={12} lg={12}>
                    <Typography
                        sx={{textAlign: 'center', marginTop: 3, marginButtom: 2}}
                        key={'RiskLab Toronto Head'}
                        variant="h3"
                    >
                        Resources
                    </Typography>
                </Grid>

                <Grid item key={'research focus intro'} xs={12} sm={12} md={12} lg={12}>
                    <Typography
                        sx={{textAlign: 'justify', marginY: 3}}
                        key={'RiskLab Toronto Head'}
                        variant="body1"
                    >
                        This guide offers a concise introduction to quantitative finance, covering key concepts
                        like data analysis, programming languages (Julia, Python, C), and financial modeling.
                        Advanced tutorials explore topics such as stochastic calculus, Monte Carlo simulations,
                        and deep learning in finance. The guide also provides access to essential datasets, data
                        cleaning tools like OpenRefine, backtesting platforms like QuantConnect, and natural
                        language processing tools like NLTK for quantitative research and analysis. Please note
                        that the mentioned resources are illustrative and can be replaced with preferred
                        alternatives.
                    </Typography>
                </Grid>
            </Grid>

            <Container>
                <Typography variant="h4" textAlign={"center"} gutterBottom>
                    Getting Started
                </Typography>

                {/*<ListItemText
                      className={'text-black dark:text-white'}
                    primary="Link to Full Case Study"
                      secondaryTypographyProps={{style: {color: 'gray'}}}
                    secondary={<Link href={caseStudyData.link}>{caseStudyData.link}</Link>}
                  />*/}
                <List
                    className={'bg-transparent'}
                >
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'} primary="Quantitative Finance Overview"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary="Introduce users to quantitative finance, its importance, and the key concepts such as data analysis, statistical models, and computer algorithms."/>
                    </ListItem>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'}
                                      primary="Resource: Quantitative Finance For Dummies"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary='by Steve Bellafiore'/>
                        <Link href="#">Quantitative Finance For Dummies</Link>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'} primary="Programming Basics"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary="Help users familiarize themselves with the programming languages Julia, Python, and C. Share fundamental concepts, syntax, and useful resources for getting started."/>
                    </ListItem>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'} primary="Resource: Python Crash Course"
                                      secondaryTypographyProps={{style: {color: 'gray'}}} secondary='by Eric Matthes'/>
                        <Link href="#">Python Crash Course</Link>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'}
                                      primary="Introduction to Financial Modeling"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary="Brief users on financial modeling, including balance sheet and cash flow analysis, forecasting, and valuation."/>
                    </ListItem>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'}
                                      primary="Resource: Financial Modeling in Excel For Dummies"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary='by Danielle Stein Fairhurst'/>
                        <Link href="#">Financial Modeling in Excel</Link>
                    </ListItem>
                </List>


                <Typography variant="h4" textAlign={"center"} gutterBottom>
                    Advanced Tutorials
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'} primary="Stochastic Calculus"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary="Delve into stochastic calculus, a branch of mathematics that operates on stochastic processes. Explain the Itô's Lemma, stochastic differential equations, and applications in finance."/>
                    </ListItem>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'}
                                      primary="Resource: Stochastic Calculus for Finance I"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary='by Steven Shreve'/>
                        <Link href="#">Financial Stochastic Calculus</Link>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'} primary="Monte Carlo Simulations"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary="Guide users through Monte Carlo simulations, a computational technique that uses random sampling to obtain numerical results for problems that might be deterministic in principle."/>
                    </ListItem>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'}
                                      primary="Resource: Monte Carlo Methods in Financial Engineering"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary='by Paul Glasserman'/>
                        <Link href="#">Monte Carlo Methods</Link>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'} primary="Deep Learning for Finance"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary="Discuss the application of deep learning in finance. Explain concepts such as neural networks, recurrent networks, and convolutional networks. Showcase use cases like fraud detection, trading, and risk management."/>
                    </ListItem>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'}
                                      primary="Resource: Deep Learning for Computer Vision"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary='by Rajalingappaa Shanmugamani'/>
                        <Link href="#">Deep Learning for Computer Vision</Link>
                    </ListItem>
                </List>

                <Typography variant="h4" textAlign={"center"} gutterBottom>
                    Datasets & Tools
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'} primary="Quantitative Data"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary="Share datasets that are essential for quantitative finance research. Mention whether the data is free, paid, or comes with any usage restrictions."/>
                    </ListItem>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'} primary="Dataset: Quandl"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary="Offers a vast collection of financial, economic, and alternative datasets."/>
                        <Link href="#">Quandl</Link>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'} primary="Data Cleaning Tools"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary="Provide tools that help clean and preprocess financial data. Explain the importance of data cleaning in quantitative research."/>
                    </ListItem>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'} primary="Tool: OpenRefine"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary="A powerful tool for working with messy data and improving it."/>
                        <Link href="#">OpenRefine</Link>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'} primary="Backtesting Platforms"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary="Suggest platforms for backtesting financial strategies. Explain what backtesting is and why it's critical in quantitative finance."/>
                    </ListItem>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'} primary="Tool: QuantConnect"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary="Allows users to design and test algorithmic trading strategies in a free online backtesting platform."/>
                        <Link href="#">QuantConnect</Link>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'}
                                      primary="Natural Language Processing Tools"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary="Share tools that can help researchers perform NLP tasks such as sentiment analysis, named entity recognition, and topic modeling on financial documents."/>
                    </ListItem>
                    <ListItem>
                        <ListItemText className={'text-black dark:text-white'}
                                      primary="Tool: NLTK (Natural Language Toolkit)"
                                      secondaryTypographyProps={{style: {color: 'gray'}}}
                                      secondary="A leading platform for building Python programs to work with human language data."/>
                        <Link href="#">NLTK</Link>
                    </ListItem>
                </List>
            </Container>

            <Grid container spacing={1}>
                <Grid item key={'resources intro'} xs={12} sm={12} md={12} lg={12}>
                    <Typography
                        sx={{textAlign: 'left', marginTop: 1, marginBottom: 2}}
                        key={'resources intro'}
                        variant="body1"
                    >
                        <b>Note:</b> The books and tools mentioned here are for illustrative purposes only and are not
                        intended as endorsements. You should replace these placeholders with your preferred resources.
                    </Typography>
                </Grid>
            </Grid>

        </>
    )
}
