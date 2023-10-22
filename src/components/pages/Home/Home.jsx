import {Text, textTypes} from "../../shared/Text/Text";
import {Btn} from "../../shared/Btn/Btn";
import styles from "./home.module.css";
import {useEffect, useRef, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {FaqItem} from "./FaqItem/FaqItem";

import starsIcon from "../assets/stars-icon.svg";
import bg from "../assets/bg-1.svg";
import bg3Blur from "./assets/bg-3.svg";
import bg2Blur from "../assets/bg-2-blur.svg";
import classNames from "classnames";
import arrowIcon from "../../assets/selected-indicator.svg";

import info2Icon1 from "./assets/illustration.svg";
import info2Icon2 from "./assets/illustration2.svg";
import walletIcon from "./assets/013-wallet.svg";
import atomIcon from "./assets/003-atom.svg";
import graphIcon from "./assets/graph-icon.svg";
import arrowIconActive from "./assets/selected-indicator-active.svg";
import blur from "../assets/blur.svg";
import logoIcon from "./assets/logo-icon.svg";

import aiIcon from "./assets/ai.svg";
import liquidityIcon from "./assets/liquidity.svg";
import marketDataIcon from "./assets/market-data.svg";
import customerIcon from "./assets/customer.svg";
import toolsIcon from "./assets/tools.svg";
import dataIcon from "./assets/data.svg";
import strategyIcon from "./assets/strategy.svg";
import botIcon from "./assets/bot.svg";
import withdrawalIcon from "./assets/withdrawal.svg";

const solutions = [
    {
        id: 1,
        title: "For projects with own tokens",
        info: [
            {
                icon: aiIcon,
                text: "Benefit from our market-making service build on AI-powered automated systems"
            },
            {
                icon: liquidityIcon,
                text: "Attract liquidity from your customers to scale your market and grow"
            },
            {
                icon: marketDataIcon,
                text: "Have access to RAW market data, aggregated from all sources for ease of analysis"
            }
        ]
    },
    {
        id: 2,
        title: "For exchanges and market-makers",
        info: [
            {
                icon: customerIcon,
                text: "Attract new customers, provide efficient services for your clients and grow their capital"
            },
            {
                icon: toolsIcon,
                text: "Enjoy professional market-tested tools and cut the expenses with automated systems"
            },
            {
                icon: dataIcon,
                text: "Be efficient, agile and well-informed by having data, prediction models and execution strategies in one place."
            }
        ]
    },
    {
        id: 3,
        title: "For private Investors and Individuals",
        info: [
            {
                icon: strategyIcon,
                text: "Use your capital in low-risk market-making strategies with no IL"
            },
            {
                icon: botIcon,
                text: "Maximize returns with our specialized arbitrage and spread bots"
            },
            {
                icon: withdrawalIcon,
                text: "Maintain full control of your assets, benefiting from compounded rewards and flexible withdrawals"
            }
        ]
    }
]
export const Home = () => {
    const [openedSolution, setOpenedSolution] = useState(1);

    const anchors = {
        solutions: useRef(),
        ai_systems: useRef(),
        ecosystem: useRef(),
        media: useRef(),
        faq: useRef(),
    }

    const {hash} = useLocation();

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                anchors[hash.slice(1)]?.current?.scrollIntoView()
            }, 500)
        }
    }, [])

    const solutionSlideWidth = window.innerWidth < 1200 ?
        window.innerWidth < 768 ?
            window.innerWidth - 80
            :
            window.innerWidth - 160
        :
        400

    return (
        <div className="container">
            <div className={classNames([styles.intro_bg_wrapper])}>
                <img src={bg} alt="bg" className={styles.bg1}/>
            </div>
            <section className={classNames([styles.intro])}>
                <div className={styles.intro__title}>
                    <img src={blur} alt="blur" className={classNames([styles.intro_blur])}/>
                    <div className={styles.intro__text_row}>
                        <Text data={[{text: "[ STELS ] ", accent: true}]} type={textTypes.PageTitle}/>
                        {/*<img src={starsIcon} alt="icon" className={classNames([styles.intro_stars])}/>*/}
                    </div>
                    <Text classes={['small']} text={"WEB 3.0 by Gliesereum"} type={textTypes.PageTitle}/>
                </div>
                <Text text={"Capital and market management. Automated."} classes={[styles.intro__subtext]}/>
                <Btn type="link" action="https://web.stels.app/" text={"Try now"} className={styles.intro__btn}/>
            </section>
            <section className={classNames(["section", styles.info_f])} id={"solutions"} ref={anchors.solutions}>
                <div>
                    <Text
                        data={[{text: "Tailored solutions "}, {text: "for your needs", accent: true}]}
                        type={textTypes.BlockTitle}
                        classes={[styles.intro_f__title]}
                    />
                    <div className={styles.intro_f_text_block}>
                        {
                            solutions.map(solution => {
                                return (
                                    <div key={solution.id} onClick={() => {
                                        setOpenedSolution(solution.id)
                                    }}
                                         className={classNames(styles.info_f__text_title_block, openedSolution !== solution.id && "hover")}>
                                        {openedSolution === solution.id && <img src={arrowIcon} alt="arrow icon"
                                                                                className={styles.info_f__text_title_arrow}/>}
                                        <Text text={solution.title}
                                              type={openedSolution === solution.id ? textTypes.TextTitle : textTypes.regularDark}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.solutions_slider}>
                    <div className={styles.solutions_slider_wrapper}
                         style={{"transform": `translateX(${-((openedSolution - 1) * solutionSlideWidth)}px)`}}>
                        {
                            solutions.map(solution => {
                                return (
                                    <div key={solution.id} className={styles.solutions_slider_item}>
                                        {
                                            solution.info.map(item => {
                                                return (
                                                    <div key={`${item.text}-${solution.id}`}
                                                         className={styles.info_f__list_item}>
                                                        <img src={item.icon} alt="icon"/>
                                                        <Text text={item.text}/>
                                                    </div>
                                                )
                                            })}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    window.innerWidth < 1200
                    &&
                    <div className={classNames([styles.solutions_slider_nav])}>
                        <div onClick={() => {
                            if (openedSolution - 1 < 1) {
                                setOpenedSolution(solutions.length)
                            } else {
                                setOpenedSolution(openedSolution - 1)
                            }
                        }}
                             className={classNames([styles.solutions_slider_nav_btn])}
                        >
                            <img src={arrowIconActive} alt="next"
                                 className={classNames([styles.solutions_slider_nav_btn_prev])}/>
                        </div>
                        <div onClick={() => {
                            if (openedSolution + 1 > solutions.length) {
                                setOpenedSolution(1)
                            } else {
                                setOpenedSolution(openedSolution + 1)
                            }
                        }}
                             className={classNames([styles.solutions_slider_nav_btn])}
                        >
                            <img src={arrowIconActive} alt="prev"/>
                        </div>
                    </div>
                }

            </section>
            <section className={classNames(["section"])} id={"ai_systems"} ref={anchors.ai_systems}>
                <div className="block_title">
                    <Text
                        data={[{text: "Automated ", accent: true}, {text: "systems"}]}
                        type={textTypes.BlockTitle}
                    />
                    <Text
                        text={"Stels is providing flexible AI-powered system for market making that is fast, precise and reliable"}
                        type={textTypes.medium}
                        classes={[styles.info_s__title_text]}
                    />
                </div>
                <div className={styles.info_s__content}>
                    <div className={styles.info_s__content_item}>
                        <img src={info2Icon1} alt="icon" className={styles.info_s__content_img}/>
                        <Text text={"10 specialized bots"} type={textTypes.TextTitle}
                              classes={[styles.info_s__content_title]}/>
                        <Text
                            text={"Use ready-to-go setup of bots, that are united into Botboxes - teams of specialized AI-algorithms that are combining efforts to maximize the effieciency and perform the ordered task."}
                            type={textTypes.regularDark}
                        />
                    </div>
                    <div>
                        <img src={info2Icon2} alt="icon" className={styles.info_s__content_img}/>
                        <Text text={"Neuronic control module"} type={textTypes.TextTitle}
                              classes={[styles.info_s__content_title]}/>
                        <Text
                            text={"Enhance your ROI and metrics with our neuronic decision-making system, that analyses streaming RAW data from all markets and communicates with all the bots to immediately execute."}
                            type={textTypes.regularDark}
                        />
                    </div>
                </div>
            </section>
            <section className={classNames(["section", styles.ecosystem])} id={"ecosystem"} ref={anchors.ecosystem}>
                <div className={styles.bg2}>
                    <img src={bg2Blur} alt="bg"/>
                </div>
                <div className="block_title">
                    <Text
                        data={[{text: "Our "}, {text: "ecosystem", accent: true}]}
                        type={textTypes.BlockTitle}
                    />
                </div>
                <div className={styles.info_fi__content_grid}>
                    <div className={styles.info_fi__content_item}>
                        <Link to="https://gliesereum.com/" target="_blank">
                            <img src={logoIcon} alt="icon"/>
                        </Link>
                        <div>
                            <Text text={"Gliesereum сross-chain blockchain"} type={textTypes.TextTitle}/>
                            <Text
                                text={"Dive into a blockchain network that transcends boundaries. Our cross-chain technology ensures fluidity, security, and efficiency, bridging various blockchain environments for seamless transactions and interactions."}
                                type={textTypes.regularDark}/>
                        </div>
                    </div>
                    <div className={styles.info_fi__content_item}>
                        <Link to="https://github.com/gliesereumlab/wallet" target="_blank">
                            <img src={walletIcon} alt="icon"/>
                        </Link>
                        <div>
                            <Text text={"Gliesereum wallet"} type={textTypes.TextTitle}/>
                            <Text
                                text={"Your gateway to the Gliesereum universe. Experience a safe, user-friendly, and intuitive wallet designed to manage, transfer, and store your assets with unparalleled ease."}
                                type={textTypes.regularDark}/>
                        </div>
                    </div>
                    <div className={styles.info_fi__content_item}>
                        <Link target="_blank" to="https://web.stels.app/">
                            <img src={graphIcon} alt="icon"/>

                        </Link>
                        <div>
                            <Text text={"Stels by Gliesereum Web 3.0"} type={textTypes.TextTitle}/>
                            <Text
                                text={"The next frontier in web evolution. Embrace a decentralized, user-centric web environment, offering transparency, control, and an enhanced user experience. We innovate and bring new ways of secure data transfer and market maintenance."}
                                type={textTypes.regularDark}/>
                        </div>
                    </div>
                    <div className={styles.info_fi__content_item}>
                        <Link target="_blank" to="https://github.com/gliesereumlab/web.stels.app">
                            <img src={atomIcon} alt="icon"/>

                        </Link>
                        <div>
                            <Text text={"AI-powered automation system — Botbox"} type={textTypes.TextTitle}/>
                            <Text
                                text={"Automation reimagined. With Botbox, tap into the prowess of advanced AI algorithms, automating market processes and yield generation to optimize profitability and efficiency."}
                                type={textTypes.regularDark}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className={styles.unlock_block}>
                    <div>
                        <Text
                            data={[
                                {
                                    text: "Unlock "
                                },
                                {
                                    text: "the full potential",
                                    accent: true,
                                }
                            ]}
                            type={textTypes.BlockTitle}/>
                        <Text text={"of Stels software and access an expansive suite of AI automation systems"}
                              type={textTypes.medium} classes={[styles.unlock_block_text]}/>
                    </div>
                    <Btn type="link" action="https://web.stels.app/" text={"get access"}
                         classes={[styles.unlock_block_btn]}/>
                </div>
            </section>

            <section className={classNames(["section", styles.media])} id={"media"} ref={anchors.media}>
                <div className={styles.bg3}>
                    <img src={bg3Blur} alt="bg"/>
                </div>
                <div className="block_title">
                    <Text
                        data={[{text: "Press "}, {text: "about us", accent: true}]}
                        type={textTypes.BlockTitle}
                    />
                </div>
                <div className={styles.about_cards}>
                    <div className={styles.about_card}>
                        <Text text={"Binance square"} classes={[styles.about_card_text]}/>
                        <a target="_blank" href="https://www.binance.com/en/feed/post/1226280?ref=506455821" className={classNames(["hover", styles.about_card_link])}>
                            <Text
                                data={[{
                                    text: "read the article",
                                    accent: true,
                                }]}
                            />
                        </a>
                    </div>
                    <div className={styles.about_card}>
                        <Text text={"KITKO"} classes={[styles.about_card_text]}/>
                        <a target="_blank" href="https://kitko.com/15-most-promising-web3-startups-that-will-be-on-everyones-lips-in-2024/" className={classNames(["hover", styles.about_card_link])}>
                            <Text
                                data={[{
                                    text: "read the article",
                                    accent: true,
                                }]}
                            />
                        </a>
                    </div>
                    <div className={styles.about_card}>
                        <Text text={"Coin market cap"} classes={[styles.about_card_text]}/>
                        <a target="_blank" href="https://coinmarketcap.com/headlines/news/15-most-promising-web3-startups-that-will-be-on-everyones-lips-in-2024/" className={classNames(["hover", styles.about_card_link])}>
                            <Text
                                data={[{
                                    text: "read the article",
                                    accent: true,
                                }]}
                            />
                        </a>
                    </div>
                    <div className={styles.about_card}>
                        <Text text={"Min Max"} classes={[styles.about_card_text]}/>
                        <a target="_blank" href="https://minmax.ai/news/2023-09-15-most-promising-web3-startups-that-will-be-on-everyones-lips-in-2024" className={classNames(["hover", styles.about_card_link])}>
                            <Text
                                data={[{
                                    text: "read the article",
                                    accent: true,
                                }]}
                            />
                        </a>
                    </div>
                    <div className={styles.about_card}>
                        <Text text={"One news page"} classes={[styles.about_card_text]}/>
                        <a target="_blank" href="https://www.onenewspage.com/n/World/1zpnjb74k6/15-Most-Promising-Web3-Startups-That-Will-Be.htm" className={classNames(["hover", styles.about_card_link])}>
                            <Text
                                data={[{
                                    text: "read the article",
                                    accent: true,
                                }]}
                            />
                        </a>
                    </div>
                    <div className={styles.about_card}>
                        <Text text={"Traiding view"} classes={[styles.about_card_text]}/>
                        <a target="_blank" href="https://www.tradingview.com/news/cryptodaily:2ac1a3924094b:0-15-most-promising-web3-startups-that-will-be-on-everyone-s-lips-in-2024/" className={classNames(["hover", styles.about_card_link])}>
                            <Text
                                data={[{
                                    text: "read the article",
                                    accent: true,
                                }]}
                            />
                        </a>
                    </div>
                </div>
            </section>

            <section className="section" id={"faq"} ref={anchors.faq}>
                <div className="block_title">
                    <Text text={"FAQ"} type={textTypes.BlockTitle}/>
                </div>
                <div className={classNames([styles.faq__content])}>
                    <FaqItem
                        title={"What is Stels and how is it revolutionizing the market-making landscape?"}
                        text={"Stels is a cutting-edge platform designed to redefine market management and yield generation. By offering advanced AI-powered automation and algorithmic strategies, Stels empowers both projects with their own tokens and individual investors to maximize efficiency, returns, and control in the dynamic world of digital finance."}
                    />
                    <FaqItem
                        title={"How does the BotBox system enhance my market-making capabilities?"}
                        text={"The BotBox system allows users to curate a unique trio of bots from a selection of 10 distinct options. This specialized combination is designed for collaborative efficiency and leverages pooled liquidity. With the integration of neuronic analysis in our AI-prefix bots, users can make informed decisions and navigate market intricacies with enhanced precision."}
                    />
                    <FaqItem
                        title={"How does the Graph token integrate with Stels and what benefits does it offer?"}
                        text={"The Graph token serves as a membership key to unlock Stels' full range of features and automation systems. Built on the reliable Gliesereum blockchain, this exclusive token not only grants premium access but also ensures seamless integration within our ecosystem. Users can easily monitor and manage their Graph tokens through the Gliesereum wallet, experiencing efficiency and transparency in every transaction."}
                    />
                    <FaqItem
                        title={"What assurances does Stels provide for individual investors?"}
                        text={"For individual investors, capital return and security are paramount. Stels offers a platform where they can maintain uninterrupted control over their funds, which always remain on the exchange. By granting access to advanced algorithms, Stels ensures maximized returns while also mitigating risks, including concerns of impermanent loss."}
                    />
                    <FaqItem
                        title={"How does Stels cater to projects with their distinct tokens?"}
                        text={"Projects with their own tokens often require sophisticated market-making services. Stels provides enhanced control over the market-making process, cost-effective solutions, and access to the best algorithmic strategies in the marketplace. This ensures tailored and precise market-making aligned with the unique goals of each project."}
                    />
                </div>
            </section>
        </div>
    )
}
