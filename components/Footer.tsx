'use client'

import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import MailIcon from '@mui/icons-material/Mail'
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from '@mui/icons-material/YouTube';
import {FacebookOutlined, Twitter} from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
    return (
        <footer>
            <div className="mt-16 flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                    <Link href={siteMetadata.email}>
                        <MailIcon/>
                    </Link>
                    <Link href={siteMetadata.github}>
                        <GitHubIcon/>
                    </Link>
                    <Link href={siteMetadata.facebook}>
                        <FacebookOutlined/>
                    </Link>
                    <Link href={siteMetadata.youtube}>
                        <YouTubeIcon/>
                    </Link>
                    <Link href={siteMetadata.linkedin}>
                        <LinkedInIcon/>
                    </Link>
                    <Link href={siteMetadata.twitter}>
                        <Twitter/>
                    </Link>
                </div>
                <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>{siteMetadata.author}</div>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                    <div>{` • `}</div>
                    <Link href="/">{siteMetadata.title}</Link>
                </div>
                <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
                    <Link href="https://fgithub.com/timlrx/tailwind-nextjs-starter-blog">
                        RiskLabAI Nextjs Theme
                    </Link>
                </div>
            </div>
        </footer>
    )
}
