import { Text, textTypes } from "../../shared/Text/Text";
import { Btn } from "../../shared/Btn/Btn";
import styles from "./home.module.css";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaqItem } from "./FaqItem/FaqItem";

import starsIcon from "../assets/stars-icon.svg";
import bg from "../assets/bg-1.png";
import bg3Blur from "./assets/bg-3.png";
import bg2Blur from "../assets/bg-2-blur.png";
import classNames from "classnames";
import arrowIcon from "../../assets/selected-indicator.svg";
//import videoHeader from "./assets/vid18.mp4"

import illustrationBots from "./assets/illustration-logo.png";
import illustrationGraph from "./assets/illustration-graph.png";
import walletIcon from "./assets/wallet.svg";
import atomIcon from "./assets/003-atom.svg";
import netIcon from "./assets/net.svg";
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

import 'animate.css';
import { useAnimation } from "../../shared/hooks/useAnimation";

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

    const { hash } = useLocation();

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

    // animation
    const animation = {
        card_left: {
            ref: useRef(),
            animationClass: "animate__fadeInLeft",
        },
        card_right: {
            ref: useRef(),
            animationClass: "animate__fadeInRight",
        },
        cards_text: {
            refs: [useRef(), useRef()],
            animationClass: "animate__fadeInDown",
        },
        main_blocks_1: {
            ref: useRef(),
            animationClass: "animate__fadeInLeft",
        },
        main_blocks_2: {
            ref: useRef(),
            animationClass: "animate__fadeInRight",
        },
        main_blocks_3: {
            ref: useRef(),
            animationClass: "animate__fadeInLeft",
        },
        main_blocks_4: {
            ref: useRef(),
            animationClass: "animate__fadeInRight",
        },
        unlock: {
            ref: useRef(),
            animationClass: "animate__fadeIn",
        },
        press: {
            refs: [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()],
            animationClass: "animate__fadeInDown",
        },
        faq: {
            refs: [useRef(), useRef(), useRef(), useRef(), useRef()],
            animationClass: "animate__fadeInDown",
        }
    }

    useAnimation(animation);
    // animation end

    return (
        <div className="container">
            <div className={classNames([styles.intro_bg_wrapper])} id={"intro"}>
                <img src={bg} alt="bg" className={styles.bg1} />
                {/* <video className={classNames([styles.intro_video])} autoplay="true" loop="true" muted="true">
                    <source src={bg} type="video/mp4"/>
                    Your browser does not support the video tag. Please update your browser.
                </video> */}
            </div>
            <section className={classNames([styles.intro])}>
                    <div className={styles.intro__title}>
                        {/* <img src={blur} alt="blur" className={classNames([styles.intro_blur])} /> */}
                        <div className={styles.intro__text_row}>
                                <Text classes={["animate__animated", "animate__fadeInDown"]} data={"[ STELS ]"} type={textTypes.PageTitle} />
                                {/*<img src={starsIcon} alt="icon" className={classNames([styles.intro_stars])}/>*/}
                        </div>
                        <Text classes={['small', "animate__animated", "animate__fadeInDown"]} text={"Automated capital and market management"} type={textTypes.PageTitle} />
                    </div>
                    <Text data={"By Gliesereum"} classes={[styles.intro__subtext]}/>
                    <Btn type="link" action="https://web.stels.app/" text={"Try now"} className={styles.intro__btn} />
            </section>
            <section className={classNames(["section", styles.info_f])} id={"solutions"} ref={anchors.solutions}>
                <div>
                    <Text
                        data={"Tailored solutions for your needs"}
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
                                            className={styles.info_f__text_title_arrow} />}
                                        <Text text={solution.title}
                                            type={openedSolution === solution.id ? textTypes.TextTitle : textTypes.regularDark} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.solutions_slider}>
                    <div className={styles.solutions_slider_wrapper}
                        style={{ "transform": `translateX(${-((openedSolution - 1) * solutionSlideWidth)}px)` }}>
                        {
                            solutions.map(solution => {
                                return (
                                    <div key={solution.id} className={styles.solutions_slider_item}>
                                        {
                                            solution.info.map(item => {
                                                return (
                                                    <div key={`${item.text}-${solution.id}`}
                                                        className={styles.info_f__list_item}>
                                                        <img src={item.icon} alt="icon" />
                                                        <Text text={item.text} />
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
                                className={classNames([styles.solutions_slider_nav_btn_prev])} />
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
                            <img src={arrowIconActive} alt="prev" />
                        </div>
                    </div>
                }

            </section>
            <section className={classNames(["section"])} id={"ai_systems"} ref={anchors.ai_systems}>
                <div className="block_title">
                    <Text
                        data={"Automation systems"}
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
                        <img src={illustrationBots} alt="icon" data-animation-id={"card_left"} ref={animation.card_left.ref} className={classNames([styles.info_s__content_img, "animate__animated"])} />
                        <div ref={animation.cards_text.refs[0]} data-animation-id={"cards_text"}  className={classNames(["animate__animated"])} >
                            <Text text={"12 specialized algorithms"} type={textTypes.TextTitle}
                                classes={[styles.info_s__content_title]} />
                            <Text
                                text={"Use ready-to-go setup of algorithms, that are united into Botboxes - teams of specialized AI-workers that are combining efforts to maximize the efficiency and perform the ordered task."}
                                type={textTypes.regularDark}
                            />
                        </div>
                    </div>
                    <div className={styles.info_s__content_item}>
                        <div>
                            <img src={illustrationGraph} alt="icon" data-animation-id={"card_right"} ref={animation.card_right.ref} className={classNames([styles.info_s__content_img, "animate__animated"])} />
                            <div data-animation-id={"cards_text"} ref={animation.cards_text.refs[1]} className={classNames(["animate__animated"])}>
                                <Text text={"Neuronic control module"} type={textTypes.TextTitle}
                                    classes={[styles.info_s__content_title]} />
                                <Text
                                    text={"Enhance your ROI and metrics with our neuronic decision-making system, that analyses streaming RAW data from all markets and communicates with all the bots to immediately execute."}
                                    type={textTypes.regularDark}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={classNames(["section", styles.ecosystem])} id={"ecosystem"} ref={anchors.ecosystem}>
                <div className={styles.bg2}>
                    <img src={bg2Blur} alt="bg" />
                </div>
                <div className="block_title">
                    <Text
                        data={"Main blocks"}
                        type={textTypes.BlockTitle}
                    />
                </div>
                <div className={styles.info_fi__content_grid}>
                    <div data-animation-id={"main_blocks_1"} ref={animation.main_blocks_1.ref} className={classNames([styles.info_fi__content_item, "animate__animated"])}>
                        <Link to="https://gliesereum.com/" target="_blank">
                            <img src={logoIcon} alt="icon" />
                        </Link>
                        <div>
                            <Text text={"Gliesereum сross-chain blockchain"} type={textTypes.TextTitle} />
                            <Text
                                text={"Dive into a blockchain network that transcends boundaries. Our cross-chain technology ensures fluidity, security, and efficiency, bridging various blockchain environments for seamless transactions and interactions."}
                                type={textTypes.regularDark} />
                        </div>
                    </div>
                    <div data-animation-id={"main_blocks_2"} ref={animation.main_blocks_2.ref} className={classNames([styles.info_fi__content_item, "animate__animated"])}>
                        <Link to="https://github.com/gliesereumlab/wallet" target="_blank">
                            <img src={walletIcon} alt="icon" />
                        </Link>
                        <div>
                            <Text text={"Gliesereum wallet"} type={textTypes.TextTitle} />
                            <Text
                                text={"Your gateway to the Gliesereum universe. Experience a safe, user-friendly, and intuitive wallet designed to manage, transfer, and store your assets with unparalleled ease."}
                                type={textTypes.regularDark} />
                        </div>
                    </div>
                    <div data-animation-id={"main_blocks_3"} ref={animation.main_blocks_3.ref} className={classNames([styles.info_fi__content_item, "animate__animated"])}>
                        <Link target="_blank" to="https://web.stels.app/">
                            <img src={netIcon} alt="icon" />

                        </Link>
                        <div>
                            <Text text={"Stels protocol"} type={textTypes.TextTitle} />
                            <Text
                                text={"The next frontier in web evolution. Embrace a decentralized, encrypted data transfer protocol. We innovate and bring new ways of secure data transfer and market maintenance, without risks of leaking any sensitive and private data"}
                                type={textTypes.regularDark} />
                        </div>
                    </div>
                    <div data-animation-id={"main_blocks_4"} ref={animation.main_blocks_4.ref} className={classNames([styles.info_fi__content_item, "animate__animated"])}>
                        <Link target="_blank" to="https://github.com/gliesereumlab/web.stels.app">
                            <img src={aiIcon} alt="icon" />

                        </Link>
                        <div>
                            <Text text={"AI-powered Automation Systems"} type={textTypes.TextTitle} />
                            <Text
                                text={"Automation reimagined. With Stels, tap into the prowess of advanced AI algorithms, automating market processes and yield generation to optimize profitability and efficiency."}
                                type={textTypes.regularDark} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div data-animation-id={"unlock"} ref={animation.unlock.ref} className={classNames([styles.unlock_block, "animate__animated"])}>
                    <div>
                        <Text
                            data={"Unlock the full potential"}
                            type={textTypes.BlockTitle} />
                        <Text text={"of Stels software and access an expansive suite of AI automation systems"}
                            type={textTypes.medium} classes={[styles.unlock_block_text]} />
                    </div>
                    <Btn type="link" action="https://web.stels.app/" text={"get access"}
                        classes={[styles.unlock_block_btn]} />
                </div>
            </section>

            <section className={classNames(["section", styles.media])} id={"media"} ref={anchors.media}>
                <div className={styles.bg3}>
                    <img src={bg3Blur} alt="bg" />
                </div>
                <div className="block_title">
                    <Text
                        data={"Press about us"}
                        type={textTypes.BlockTitle}
                    />
                </div>
                <div className={styles.about_cards}>
                    <div data-animation-id={"press"} ref={animation.press.refs[0]} className={classNames([styles.about_card, "animate__animated"])}>
                        <Text text={"Binance square"} classes={[styles.about_card_text]} />
                        <a target="_blank" href="https://www.binance.com/en/feed/post/1226280?ref=506455821" className={classNames(["hover", styles.about_card_link])} rel="noreferrer">
                            <Text
                                data={"read the article"}
                            />
                        </a>
                    </div>
                    <div data-animation-id={"press"} ref={animation.press.refs[1]} className={classNames([styles.about_card, "animate__animated"])}>
                        <Text text={"KITKO"} classes={[styles.about_card_text]} />
                        <a target="_blank" href="https://kitko.com/15-most-promising-web3-startups-that-will-be-on-everyones-lips-in-2024/" className={classNames(["hover", styles.about_card_link])} rel="noreferrer">
                            <Text
                                data={"read the article"}
                            />
                        </a>
                    </div>
                    <div data-animation-id={"press"} ref={animation.press.refs[2]} className={classNames([styles.about_card, "animate__animated"])}>
                        <Text text={"Coin market cap"} classes={[styles.about_card_text]} />
                        <a target="_blank" href="https://coinmarketcap.com/headlines/news/15-most-promising-web3-startups-that-will-be-on-everyones-lips-in-2024/" className={classNames(["hover", styles.about_card_link])} rel="noreferrer">
                            <Text
                                data={"read the article"}
                            />
                        </a>
                    </div>
                    <div data-animation-id={"press"} ref={animation.press.refs[3]} className={classNames([styles.about_card, "animate__animated"])}>
                        <Text text={"Min Max"} classes={[styles.about_card_text]} />
                        <a target="_blank" href="https://minmax.ai/news/2023-09-15-most-promising-web3-startups-that-will-be-on-everyones-lips-in-2024" className={classNames(["hover", styles.about_card_link])} rel="noreferrer">
                            <Text
                                data={"read the article"}
                            />
                        </a>
                    </div>
                    <div data-animation-id={"press"} ref={animation.press.refs[4]} className={classNames([styles.about_card, "animate__animated"])}>
                        <Text text={"One news page"} classes={[styles.about_card_text]} />
                        <a target="_blank" href="https://www.onenewspage.com/n/World/1zpnjb74k6/15-Most-Promising-Web3-Startups-That-Will-Be.htm" className={classNames(["hover", styles.about_card_link])} rel="noreferrer">
                            <Text
                                data={"read the article"}
                            />
                        </a>
                    </div>
                    <div data-animation-id={"press"} ref={animation.press.refs[5]} className={classNames([styles.about_card, "animate__animated"])}>
                        <Text text={"Traiding view"} classes={[styles.about_card_text]} />
                        <a target="_blank" href="https://www.tradingview.com/news/cryptodaily:2ac1a3924094b:0-15-most-promising-web3-startups-that-will-be-on-everyone-s-lips-in-2024/" className={classNames(["hover", styles.about_card_link])} rel="noreferrer">
                            <Text
                                data={"read the article"}
                            />
                        </a>
                    </div>
                </div>
            </section>

            <section className="section" id={"faq"} ref={anchors.faq}>
                <div className="block_title">
                    <Text text={"FAQ"} type={textTypes.BlockTitle} />
                </div>
                <div className={classNames([styles.faq__content])}>
                    <div data-animation-id={"faq"} ref={animation.faq.refs[0]} className={"animate__animated"}>
                        <FaqItem
                            title={"What is Stels and how is it revolutionizing the market-making landscape?"}
                            text={"Stels is a cutting-edge platform designed to redefine market management and yield generation. By offering advanced AI-powered automation and algorithmic strategies, Stels empowers both projects with their own tokens and individual investors to maximize efficiency, returns, and control in the dynamic world of digital finance."}
                        />
                    </div>
                    <div data-animation-id={"faq"} ref={animation.faq.refs[1]} className={"animate__animated"}>
                    <FaqItem
                        title={"How does the BotBox system enhance my market-making capabilities?"}
                        text={"The BotBox system allows users to curate a unique trio of bots from a selection of 12 distinct options. This specialized combination is designed for collaborative efficiency and leverages pooled liquidity. With the integration of neuronic analysis in our AI-prefix bots, users can make informed decisions and navigate market intricacies with enhanced precision."}
                    />
                    </div>
                    <div data-animation-id={"faq"} ref={animation.faq.refs[2]} className={"animate__animated"}>
                    <FaqItem
                        title={"How does the Graph token integrate with Stels and what benefits does it offer?"}
                        text={"The Graph token serves as a membership key to unlock Stels' full range of features and automation systems. Built on the reliable Gliesereum blockchain, this exclusive token not only grants premium access but also ensures seamless integration within our ecosystem. Users can easily monitor and manage their Graph tokens through the Gliesereum wallet, experiencing efficiency and transparency in every transaction."}
                    />
                    </div>
                    <div data-animation-id={"faq"} ref={animation.faq.refs[3]} className={"animate__animated"}>
                    <FaqItem
                        title={"What assurances does Stels provide for individual investors?"}
                        text={"For individual investors, capital return and security are paramount. Stels offers a platform where they can maintain uninterrupted control over their funds, which always remain on the exchange. By granting access to advanced algorithms, Stels ensures maximized returns while also mitigating risks, including concerns of impermanent loss."}
                    />
                    </div>
                    <div data-animation-id={"faq"} ref={animation.faq.refs[4]} className={"animate__animated"}>
                    <FaqItem
                        title={"How does Stels cater to projects with their distinct tokens?"}
                        text={"Projects with their own tokens often require sophisticated market-making services. Stels provides enhanced control over the market-making process, cost-effective solutions, and access to the best algorithmic strategies in the marketplace. This ensures tailored and precise market-making aligned with the unique goals of each project."}
                    />
                    </div>
                </div>
            </section>
        </div>
    )
}
