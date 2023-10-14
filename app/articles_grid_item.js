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

  return (
      <InteractivePaper rotationAmount={0.15} sx={{borderWidth: 0}}>
    <Card
        className={'bg-gray-100 dark:bg-gray-900'}
      sx={{
        borderRadius: 0,
        margin: 0
      }}
    >
      <Link href={`/blog/${articleId}`}>
        <Paper
          variant="outlined"
          className={'bg-gray-100 dark:bg-gray-900'}
          sx={{
            height: 300,
            borderRadius: 0
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
        <Typography className={'text-black dark:text-white'} variant="h4">{articleTitle}</Typography>

        <Typography className={'text-black dark:text-white'} marginTop={1} textalign={'justify'} variant="body1">
          {articleSubTitle}
        </Typography>
      </CardContent>

      <CardHeader
        avatar={
          <Avatar alt={fullName} src={authorImageSrc} width={1} height={1} position={'relative'} />
        }
        title={<Typography className={'text-black dark:text-white'} variant={'subtitle1'}> {fullName} </Typography>}
        subheader={<Typography className={'text-gray-400 dark:text-gray-500'} variant={'subtitle2'}> {articleCreatedAt} </Typography>}
      />
    </Card>
  </InteractivePaper>

  )
}

export default ArticlesGridItemComponent
