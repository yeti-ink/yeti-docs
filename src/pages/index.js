import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HeroHeader from '../containers/HeroHeader'
import Features from '../containers/Features'
import BannerComponent from '../components/BannerComponent'

const page = {
    title: 'Documentation',
    description: 'Knowledgebase',
    keywords: 'defi, ftm, bitcoin, tomb, algo, stable, yield, farm, stake, ytc, yeti'
}

const IntroText = [
    'There are not nearly as many attractive yield earning opportunities in DeFi for people to put their precious Bitcoin to work for them.',
    'Yeti has the potential to solve many of these problems. As you proceed through this documentation, we will explore some of that potential in more detail...'
]

const code = `console.log('Connected address', USER_ADDRESS)

const ysaWallets = await ysa.getAccounts(USER_ADDRESS)

// If you dont have a Yeti DeFi Smart Account
if (ysaWallets.length == 0) return alert("Create a YSA ")

const token = "0x321162Cd933E2Be498Cd2267a90534A804051b11" //WBTC
const amount = web3.utils.toWei('0.002', 'Yeti') // 0.002 YTC amount in wei
`

const Home = () => {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout title={page.title} description={page.description} keywords={page.keywords}>
            <HeroHeader
                title="Why ape, when you can Yeti?"
                description="Bridging the gap between algorithmic finance and Bitcoin."
                button_label="Getting Started"
                button_url='/docs/main/intro'
                image_url='/img/gfx-yeti.png'
                image_alt='yeti overview'
            />
            <main>
                <Features
                    title="Why Yeti?"
                    texts={IntroText} 
                    code={code}
                    features={[
                        {
                            image_url: '/img/icons/icon_1.png',
                            image_alt: '',
                            title: 'Protocol Agnostic',
                            description: 'Our BTC single - sided staking vault allows you to maintain full Bitcoin exposure.'
                        }, {
                            image_url: '/img/icons/icon_3.png',
                            image_alt: '',
                            title: 'Yeti',
                            description: 'The Yeti dApp was designed by degens for degens. Because whos more degen than a Yeti?'
                        }, {
                            image_url: '/img/icons/icon_2.png',
                            image_alt: '',
                            title: 'Democratizing DeFi',
                            description: 'Inspired by precursive projects, We have developed a truly unique protocol at the highest level.'
                        }
                    ]}
                />
                <BannerComponent
                    theme="discord"
                    description="Get support and exchange ideas with our community."
                    text="TELEGRAM"
                    url="https://t.me/yetiink"
                />
                <BannerComponent
                    theme="github"
                    description="Follow yeti-ink on GitHub."
                    text="SOURCE CODE"
                    url="https://github.com/yeti-ink"
                />
            </main>
        </Layout>
        
    )
}

export default Home
