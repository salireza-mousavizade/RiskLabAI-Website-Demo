import { Avatar, Card, CardContent, CardHeader, Paper, Typography } from '@mui/material'

import Link from 'next/link'
import * as React from 'react'
import InteractivePaper from "./InteractivePaper";

const ArticlesGridItemComponent = ({
  articleId,
  articleImageSrc,
  articleTitle,
  articleSubTitle,
  fullName,
  authorImageSrc,
  articleCreatedAt,
}) => {
  // const theme = useTheme()
  const borderRadius = '0.5rem'

  return (
      <InteractivePaper rotationAmount={0.15}>
    <Card
      sx={{
        // backgroundColor: alpha(theme.palette.background.paper, 0.7),
        // backdropFilter: 'blur(1.5px)',
        borderRadius: borderRadius,
        '&:hover': {
          // backgroundColor: alpha(theme.palette.background.paper, 0.85),
          transform: 'scale3d(1.015, 1.015, 1)',
          transition: 'transform 0.25s ease-out',
        },
      }}
    >
      <Link href={`/blog/${articleId}`}>
        <Paper
          variant="outlined"
          sx={{
            height: 300,
          }}
        >
          <Avatar
            key={'avatar'}
            variant="square"
            src={articleImageSrc}
            sx={{
              minHeight: 1,
              minWidth: 1,
              padding: 1,
            }}
          />
        </Paper>
      </Link>

      <CardContent>
        <Typography variant="h4">{articleTitle}</Typography>

        <Typography marginTop={1} textalign={'justify'} variant="body1">
          {articleSubTitle}
        </Typography>
      </CardContent>

      <CardHeader
        avatar={
          <Avatar alt={fullName} src={authorImageSrc} width={1} height={1} position={'relative'} />
        }
        title={<Typography variant={'subtitle1'}> {fullName} </Typography>}
        subheader={<Typography variant={'subtitle2'}> {articleCreatedAt} </Typography>}
      />
    </Card>
  </InteractivePaper>

  )
}

export default ArticlesGridItemComponent
