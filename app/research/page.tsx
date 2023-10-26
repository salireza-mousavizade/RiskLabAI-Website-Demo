'use client'

import {
    ButtonGroup,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    IconButton,
    Stack,
    TextField,
    Tooltip,
    Typography,
    List, ListItem, ListItemText, Link
} from '@mui/material'

import SendSharpIcon from '@mui/icons-material/SendSharp'

import * as yup from 'yup'

import {Form, FormikProvider, useFormik} from 'formik'

import ArticlesGridItemComponent from '../articles_grid_item'
import useBreakpoint from '../use_breakpoint'
import LiveIconComponent from '../live_icon_component'
import CodeIcon from '@mui/icons-material/Code'
import AttachFileIcon from '@mui/icons-material/AttachFile'

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

export default function Research() {
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

    const projectsList = [
        {
            articleId: 1,
            articleImageSrc: '/static/images/articles_images/feature_importance.jpg',
            articleTitle: 'Feature Engineering',
            articleSubTitle:
                "At the core of every predictive model lies the art of feature engineering. This process involves selecting, transforming, or creating variables that improve the performance of machine learning algorithms. A well-crafted feature can significantly boost a model's accuracy and provide deeper insights into complex datasets.",
            fullName: 'S. Alireza Mousavizade',
            authorImageSrc: '/static/images/members/sam.jpg',
            articleCreatedAt: '2022 Sep 8',
        },
        {
            articleId: 2,
            articleImageSrc: '/static/images/articles_images/cross_validation.jpeg',
            articleTitle: 'Cross-Validation',
            articleSubTitle:
                "At the core of every predictive model lies the art of feature engineering. This process involves selecting, transforming, or creating variables that improve the performance of machine learning algorithms. A well-crafted feature can significantly boost a model's accuracy and provide deeper insights into complex datasets.",
            fullName: 'S. Alireza Mousavizade',
            authorImageSrc: '/static/images/members/sam.jpg',
            articleCreatedAt: '2021 Dec 12',
        },
        {
            articleId: 3,
            articleImageSrc: '/static/images/articles_images/dangers_of_backtesting.jpg',
            articleTitle: 'Dangers of Backtesting',
            articleSubTitle:
                "At the core of every predictive model lies the art of feature engineering. This process involves selecting, transforming, or creating variables that improve the performance of machine learning algorithms. A well-crafted feature can significantly boost a model's accuracy and provide deeper insights into complex datasets.",
            fullName: 'S. Alireza Mousavizade',
            authorImageSrc: '/static/images/members/sam.jpg',
            articleCreatedAt: '2022 Sep 16',
        },
        {
            articleId: 4,
            articleImageSrc: '/static/images/articles_images/denoising.jpg',
            articleTitle: 'Denoising',
            articleSubTitle:
                "At the core of every predictive model lies the art of feature engineering. This process involves selecting, transforming, or creating variables that improve the performance of machine learning algorithms. A well-crafted feature can significantly boost a model's accuracy and provide deeper insights into complex datasets.",
            fullName: 'S. Alireza Mousavizade',
            authorImageSrc: '/static/images/members/sam.jpg',
            articleCreatedAt: '2022 Jun 8',
        },
        {
            articleId: 5,
            articleImageSrc: '/static/images/articles_images/ensemble_learning.jpg',
            articleTitle: 'Ensemble Learning',
            articleSubTitle:
                "At the core of every predictive model lies the art of feature engineering. This process involves selecting, transforming, or creating variables that improve the performance of machine learning algorithms. A well-crafted feature can significantly boost a model's accuracy and provide deeper insights into complex datasets.",
            fullName: 'S. Alireza Mousavizade',
            authorImageSrc: '/static/images/members/sam.jpg',
            articleCreatedAt: '2021 Jan 2',
        },
        {
            articleId: 6,
            articleImageSrc: '/static/images/articles_images/entropy_features.jpg',
            articleTitle: 'Entropy Features',
            articleSubTitle:
                "At the core of every predictive model lies the art of feature engineering. This process involves selecting, transforming, or creating variables that improve the performance of machine learning algorithms. A well-crafted feature can significantly boost a model's accuracy and provide deeper insights into complex datasets.",
            fullName: 'S. Alireza Mousavizade',
            authorImageSrc: '/static/images/members/sam.jpg',
            articleCreatedAt: '2022 Jun 8',
        },
        {
            articleId: 7,
            articleImageSrc: '/static/images/articles_images/financial_bars.jpg',
            articleTitle: 'Financial Bars',
            articleSubTitle:
                "At the core of every predictive model lies the art of feature engineering. This process involves selecting, transforming, or creating variables that improve the performance of machine learning algorithms. A well-crafted feature can significantly boost a model's accuracy and provide deeper insights into complex datasets.",
            fullName: 'S. Alireza Mousavizade',
            authorImageSrc: '/static/images/members/sam.jpg',
            articleCreatedAt: '2020 Feb 2',
        },
    ]

    const papersList = [
        {
            title: 'Stability Weighted Ensemble Feature Importance',
            category: 'Financial Machine Learning',
            author: 'S. Alireza Mousavizade',
            abstract:
                '"Stability Weighted Ensemble Feature Importance" likely refers to a method that uses ensemble models to compute feature importance scores and then weighs these scores based on their consistency across different data subsets or models. This aims to provide more robust and reliable feature importance values.',
            paperLink: '#', // Placeholder URL
            codeLink: '#', // Placeholder URL
        },
        {
            title: 'Active Causal Discovery in Cryptocurrency Markets: the Impact of Energy Prices',
            category: 'Financial Causal Inference',
            author: 'S. Alireza Mousavizade',
            abstract:
                '"Active Causal Discovery in Cryptocurrency Markets: the Impact of Energy Prices" likely delves into identifying the causative influence of energy prices on cryptocurrency market behaviors. Using active causal discovery, the study would actively probe and test hypotheses, seeking robust evidence of energy costs driving crypto market dynamics.',
            paperLink: '#', // Placeholder URL
            codeLink: '#', // Placeholder URL
        },
        {
            title:
                'Optimizing Portfolio Diversification through Causal Inference The Impact of Digital Innovation on Traditional Asset Classes',
            category: 'Financial Causal Inference',
            author: 'S. Alireza Mousavizade',
            abstract:
                '"Optimizing Portfolio Diversification through Causal Inference: The Impact of Digital Innovation on Traditional Asset Classes" examines how digital innovations affect traditional assets. Using causal inference, the study identifies the direct effects and optimizes portfolio diversification, ensuring better risk management in the face of technological advances.',
            paperLink: '#', // Placeholder URL
            codeLink: '#', // Placeholder URL
        },
        {
            title: 'Stability Weighted Ensemble Feature Importance',
            category: 'Financial Machine Learning',
            author: 'S. Alireza Mousavizade',
            abstract:
                '"Stability Weighted Ensemble Feature Importance" likely refers to a method that uses ensemble models to compute feature importance scores and then weighs these scores based on their consistency across different data subsets or models. This aims to provide more robust and reliable feature importance values.',
            paperLink: '#', // Placeholder URL
            codeLink: '#', // Placeholder URL
        },
        {
            title: 'Active Causal Discovery in Cryptocurrency Markets: the Impact of Energy Prices',
            category: 'Financial Causal Inference',
            author: 'S. Alireza Mousavizade',
            abstract:
                '"Active Causal Discovery in Cryptocurrency Markets: the Impact of Energy Prices" likely delves into identifying the causative influence of energy prices on cryptocurrency market behaviors. Using active causal discovery, the study would actively probe and test hypotheses, seeking robust evidence of energy costs driving crypto market dynamics.',
            paperLink: '#', // Placeholder URL
            codeLink: '#', // Placeholder URL
        },
        {
            title:
                'Optimizing Portfolio Diversification through Causal Inference The Impact of Digital Innovation on Traditional Asset Classes',
            category: 'Financial Causal Inference',
            author: 'S. Alireza Mousavizade',
            abstract:
                '"Optimizing Portfolio Diversification through Causal Inference: The Impact of Digital Innovation on Traditional Asset Classes" examines how digital innovations affect traditional assets. Using causal inference, the study identifies the direct effects and optimizes portfolio diversification, ensuring better risk management in the face of technological advances.',
            paperLink: '#', // Placeholder URL
            codeLink: '#', // Placeholder URL
        },
    ]

    const researchFocusList = [
        {
            title: 'Financial Data Science',
            category: 'Machine Learning',
            description:
                'Delving into the intricate world of financial markets, Financial Data Science aims to extract valuable insights from vast datasets, identifying patterns and predicting market behaviors. By harnessing the power of data-driven decisions, this domain is revolutionizing the finance industry, from algorithmic trading to customer service.',
        },
        {
            title: 'Feature Engineering',
            category: 'Statistics',
            description:
                'At the heart of machine learning and predictive analytics, Feature Engineering involves the transformation and construction of input variables to enhance model performance. By creatively engineering these features, we can enable algorithms to decipher complex patterns, often transforming raw data into a goldmine of insights.',
        },
        {
            title: 'Financial Modeling',
            category: 'Machine Learning',
            description:
                "The cornerstone of investment decisions and corporate financial planning, Financial Modeling is the art of building abstract representations of an organization's real-world financials. These models can be used to forecast future earnings, analyze potential investments, and assess risks, thereby guiding optimal business strategies.",
        },
        {
            title: 'Model Validation',
            category: 'Machine Learning',
            description:
                'An essential phase in the trading algorithm development process, Strategy Validation and Back-testing ensures the robustness and viability of a strategy by testing it on historical data. This helps quantify its potential risks and returns, providing a safeguard against potential real-world pitfalls.',
        },
        {
            title: 'Backtesting',
            category: 'Machine Learning',
            description:
                'An essential phase in the trading algorithm development process, Strategy Validation and Back-testing ensures the robustness and viability of a strategy by testing it on historical data. This helps quantify its potential risks and returns, providing a safeguard against potential real-world pitfalls.',
        },
        {
            title: 'Deep Learning',
            category: 'Machine Learning',
            description:
                'Delving into neural networks inspired by the human brain, Deep Learning is revolutionizing a plethora of industries by automating the extraction of intricate patterns from large datasets. From image recognition to natural language processing, its applications are vast and transformative.',
        },
        {
            title: 'Partial Differential Equations',
            category: 'Financial Mathematics',
            description:
                'An indispensable tool in mathematics and physics, PDEs describe phenomena that vary with multiple variables. In the realm of finance, they play a pivotal role in modeling the evolution of various financial instruments, assisting in pricing options and understanding market dynamics.',
        },
        {
            title: 'Financial Derivatives and Hedging Strategies',
            category: 'Risk Management',
            description:
                'Offering both opportunities and protection, Financial Derivatives are contracts whose values derive from underlying assets. Combined with strategic Hedging, these instruments allow market participants to manage and mitigate potential risks, ensuring a more stable financial landscape.',
        },
        {
            title: 'Portfolio Optimization',
            category: 'Portfolio Management',
            description:
                'A sophisticated blend of art and science, Portfolio Optimization is the process of selecting and combining investments to achieve desired returns while managing risks. By optimizing asset allocation and diversification, it seeks to harness market opportunities and deliver consistent performance.',
        },
        {
            title: 'Risk Management',
            category: 'Risk Management',
            description:
                'A paramount concern in the financial domain, Risk Management identifies, evaluates, and prioritizes uncertainties in investment decisions. With the right tools and strategies, it ensures the stability of portfolios and protects against adverse market conditions.',
        },
        {
            title: ' High-Performance Computing (HPC)',
            category: 'HPC',
            description:
                "Pushing the boundaries of computational capabilities, HPC involves the use of supercomputers and parallel processing techniques. In finance, it's the driving force behind real-time data analytics, complex simulations, and the rapid execution of algorithmic trades.",
        },
        {
            title: 'Quantum Computing',
            category: 'QC',
            description:
                'Tapping into the principles of quantum mechanics, Quantum Computing holds the promise of solving problems deemed insurmountable by classical computers. Its potential in finance lies in areas like portfolio optimization, risk analysis, and cryptographic security.',
        },
        {
            title: 'Natural Language Processing',
            category: 'NLP',
            description:
                'Bridging the gap between machines and human language, NLP employs algorithms to read, decipher, and respond to human text. Its applications in finance span from sentiment analysis of financial news to chatbots serving clients.',
        },
        {
            title: 'Large Language Models',
            category: 'NLP',
            description:
                'At the forefront of artificial intelligence, Large Language Models are trained on vast amounts of text, enabling them to generate coherent and contextually relevant content. These models have myriad applications, from content generation to answering complex queries, showcasing the future of human-machine collaboration.',
        },
    ]

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

    const projectsColumns = getArticlesAsColumns(projectsList, nColumns)
    const papersColumns = getArticlesAsColumns(papersList, nColumns)
    const researchFocusColumns = getArticlesAsColumns(researchFocusList, nColumns)

    return (
        <>
            <Grid container spacing={1}>
                <Grid item key={'leadership header'} xs={12} sm={12} md={12} lg={12}>
                    <Typography
                        sx={{textAlign: 'center', marginY: 2}}
                        key={'RiskLab Toronto Head'}
                        variant="h3"
                    >
                        Research Focus
                    </Typography>

                    <Grid item key={'research focus intro'} xs={12} sm={12} md={12} lg={12}>
                        <Typography
                            sx={{textAlign: 'left', marginTop: 1, marginBottom: 2}}
                            key={'RiskLab Toronto Head'}
                            variant="body1"
                        >
                            Our research has led to groundbreaking insights in the field of quantitative finance.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Stack direction={'row'} spacing={2}>
                {researchFocusColumns.map((items, columnIndex) => {
                    return (
                        <Stack direction={'column'} spacing={0} width={1 / nColumns} key={columnIndex}>
                            {' '}
                            {items.map((rf, rowIndex) => {
                                return (
                                    <Card className={'bg-gray-100 dark:bg-gray-900 border-primary-300 dark:border-primary-600'} key={rowIndex} variant="outlined" style={{marginBottom: '1rem'}}>
                                        <CardContent>
                                            <Typography className={'text-black dark:text-white border-black dark:border-white'} variant="h6">{rf.title}</Typography>
                                            <Typography className={'text-primary-500 dark:text-primary-400 border-black dark:border-white'} color="textSecondary" style={{marginBottom: '0.5rem'}}>
                                                {rf.category}
                                            </Typography>
                                            <Typography className={'text-black dark:text-white border-black dark:border-white'} variant="body2" style={{marginBottom: '0.5rem'}}>
                                                {rf.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </Stack>
                    )
                })}
            </Stack>
            <Grid container spacing={1}>
                <Grid item key={'leadership header'} xs={12} sm={12} md={12} lg={12}>
                    <Typography
                        sx={{textAlign: 'center', marginY: 2}}
                        key={'RiskLab Toronto Head'}
                        variant="h3"
                    >
                        Papers
                    </Typography>
                </Grid>

                <Grid item key={'risklab intro'} xs={12} sm={12} md={12} lg={12}>
                    <Typography
                        sx={{textAlign: 'left', marginTop: 1, marginBottom: 2}}
                        key={'RiskLab Toronto Head'}
                        variant="body1"
                    >
                        At RiskLab AI, our team produces top-tier research papers on various financial topics.
                        Our expertise covers Financial Data Science, Feature Engineering, Financial Modelling,
                        Strategy Validation and Backtesting, Deep Learning, Financial Derivatives and Hedging,
                        Natural Language Processing, and Large Language Models. We also make our research
                        accessible by providing links to full papers, ensuring transparency in our quantitative
                        research. You can also find any associated code on our GitHub repositories.
                    </Typography>
                </Grid>
            </Grid>
            <Stack direction={'row'} spacing={2}>
                {papersColumns.map((items, columnIndex) => {
                    return (
                        <Stack direction={'column'} spacing={0} width={1 / nColumns} key={columnIndex}>
                            {' '}
                            {items.map((paper, rowIndex) => {
                                return (
                                    <Card className={'bg-gray-100 dark:bg-gray-900 border-primary-300 dark:border-primary-600'} key={rowIndex} variant="outlined" style={{marginBottom: '1rem'}}>
                                        <CardContent>
                                            <Typography className={'text-black dark:text-white'} variant="h6">{paper.title}</Typography>
                                            <Typography className={'text-gray-500 dark:text-gray-400'} color="textSecondary" style={{marginBottom: '0.5rem'}}>
                                                {paper.category}
                                            </Typography>
                                            <Typography className={'text-black dark:text-white'} variant="body2" style={{marginBottom: '0.5rem'}}>
                                                Abstract: {paper.abstract}
                                            </Typography>
                                            <Typography className={'text-gray-500 dark:text-gray-400'} color="textSecondary" style={{marginBottom: '0.5rem'}}>
                                                {paper.author}
                                            </Typography>
                                            <ButtonGroup variant="outlined" aria-label="outlined button group">
                                                <LiveIconComponent
                                                    showText={true}
                                                    text={'Read'}
                                                    icon={AttachFileIcon}
                                                    to={'paperlink'}
                                                    sx={{fontSize: 16}}
                                                />
                                                <LiveIconComponent
                                                    showText={true}
                                                    text={'Code'}
                                                    icon={CodeIcon}
                                                    to={'codelink'}
                                                    sx={{fontSize: 16}}
                                                />
                                            </ButtonGroup>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </Stack>
                    )
                })}
            </Stack>
            <Grid container spacing={1}>
                <Grid item key={'leadership header'} xs={12} sm={12} md={12} lg={12}>
                    <Typography
                        sx={{textAlign: 'center', marginY: 2}}
                        key={'RiskLab Toronto Head'}
                        variant="h3"
                    >
                        Projects
                    </Typography>
                </Grid>
                <Grid item key={'risklab intro'} xs={12} sm={12} md={12} lg={12}>
                    <Typography
                        sx={{textAlign: 'left', marginTop: 1}}
                        key={'RiskLab Toronto Head'}
                        variant="body1"
                    >
                        At RiskLab AI, our research spans several cutting-edge areas of financial science, with
                        an emphasis on High-Performance, Cutting-Edge Financial Intelligence. Our core research
                        areas include:
                    </Typography>
                </Grid>
            </Grid>
            <Grid item key={'leadership header'} xs={12} sm={12} md={12} lg={12}>
                <Typography
                    sx={{textAlign: 'center', marginY: 4}}
                    key={'RiskLab Toronto Head'}
                    variant="h5"
                >
                    Subjects
                </Typography>
            </Grid>
            <Stack direction={'row'} spacing={2}>
                {projectsColumns.map((items, columnIndex) => {
                    return (
                        <Stack direction={'column'} spacing={2} width={1 / nColumns} key={columnIndex}>
                            {items.map((item, rowIndex) => {
                                return (
                                    <ArticlesGridItemComponent
                                        key={item.articleId}
                                        articleId={item.articleId}
                                        articleImageSrc={item.articleImageSrc}
                                        articleTitle={item.articleTitle}
                                        articleSubTitle={item.articleSubTitle}
                                        fullName={item.fullName}
                                        authorImageSrc={item.authorImageSrc}
                                        articleCreatedAt={item.articleCreatedAt}
                                    />
                                )
                            })}
                        </Stack>
                    )
                })}
            </Stack>


        </>
    )
}
