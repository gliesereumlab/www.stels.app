import { Text, textTypes } from "../../shared/Text/Text";
import { Btn } from "../../shared/Btn/Btn";
import styles from "./market.module.css";
import classNames from "classnames";

import bg from "./assets/bg1.svg";

import piechartIcon from "./assets/piechart.svg";
import aiIcon from "./assets/ai.svg";
import dashboardIcon from "./assets/dashboard.svg";
import liquidityIcon from "./assets/liquidity.svg";
import gridImage from "./assets/grid-image.png";
import swords from "./assets/swords.svg";

import 'animate.css';
import { useEffect, useRef } from "react";
import { useAnimation } from "../../shared/hooks/useAnimation";

export const Market = () => {

    // animation
    const animation = {
        card_1: {
            ref: useRef(),
            animationClass: "animate__fadeInLeft",
        },
        card_2: {
            ref: useRef(),
            animationClass: "animate__fadeInRight",
        },
        card_3: {
            ref: useRef(),
            animationClass: "animate__fadeInLeft",
        },
        card_4: {
            ref: useRef(),
            animationClass: "animate__fadeIn",
        },
        card_5: {
            ref: useRef(),
            animationClass: "animate__fadeInRight",
        },
        card_6: {
            ref: useRef(),
            animationClass: "animate__fadeInLeft",
        },
        vs_title_l: {
            ref: useRef(),
            animationClass: "animate__fadeInLeft",
        },
        vs_title_r: {
            ref: useRef(),
            animationClass: "animate__fadeInRight",
        },
        vs_text_l: {
            refs: [useRef(), useRef(), useRef(), useRef(), useRef()],
            animationClass: "animate__fadeInLeft",
        },
        vs_text_r: {
            refs: [useRef(), useRef(), useRef(), useRef(), useRef()],
            animationClass: "animate__fadeInRight",
        }
    }

    useAnimation(animation);
    // animation end

    return (
        <div className="container">
            <div
            className={classNames([styles.intro_bg_wrapper])}>
                <img src={bg} alt="bg" className={styles.bg1} />
            </div>
            <section className={classNames([styles.intro])}>
                <div className={styles.intro__title}>
                    <div className={styles.intro__text_row}>
                        <Text classes={["animate__animated", "animate__fadeInDown"]} data={"Platform features"}
                            type={textTypes.PageTitle} />
                    </div>
                </div>
                <Text classes={[styles.intro__subtext, "animate__animated", "animate__fadeInDown"]} text={"We've crafted an ecosystem that empowers projects, market-makers and individual investors, granting them tools for unprecedented market control and efficiency in liquidity management."}
                />
            </section>
            <section className={classNames(["section", styles.grid])}>
                <div className={classNames([styles.grid__content])}>
                    <div data-animation-id={"card_1"} ref={animation.card_1.ref} className={classNames([styles.grid__content_item, "animate__animated"])}>
                        <img src={piechartIcon} alt="icon" className={classNames([styles.grid__content_item_img])} />
                        <Text text={"Market-making and Yield generation"} type={textTypes.TextTitle} />
                    </div>
                    <div data-animation-id={"card_2"} ref={animation.card_2.ref} className={classNames([styles.grid__content_item, "animate__animated"])}>
                        <img src={gridImage} alt="pair Dashboard"
                            className={classNames(["image", styles.grid__image])} />
                    </div>
                    <div data-animation-id={"card_3"} ref={animation.card_3.ref} className={classNames([styles.grid__content_item, "animate__animated"])}>
                        <img src={aiIcon} alt="icon" className={classNames([styles.grid__content_item_img])} />
                        <Text text={"AI-powered automated system"} type={textTypes.TextTitle} />
                    </div>
                    <div data-animation-id={"card_4"} ref={animation.card_4.ref} className={classNames([styles.grid__content_item, "animate__animated"])}>
                        <img src={dashboardIcon} alt="icon" className={classNames([styles.grid__content_item_img])} />
                        <Text text={"In-depth analytics and RAW market data"} type={textTypes.TextTitle} />
                    </div>
                    <div data-animation-id={"card_5"} ref={animation.card_5.ref} className={classNames([styles.grid__content_item, "animate__animated"])}>
                        <img src={liquidityIcon} alt="icon" className={classNames([styles.grid__content_item_img])} />
                        <Text text={"Liquidity provision marketplace"} type={textTypes.TextTitle} />
                    </div>
                    <div data-animation-id={"card_6"} ref={animation.card_6.ref} className={classNames([styles.grid__content_item, "animate__animated"])}>
                        <div>
                            <Text text={"Projects with their distinct tokens"} type={textTypes.TextTitle}
                                classes={[styles.grid__coontent_text_title]} />
                            <Text
                                text={"Projects with their distinct tokens can harness the robust tools of Stels for cost-effective and precise market-making, tailored to their unique strategy and goals. Meanwhile, private investors gain access to advanced algorithms, ensuring their capital not only remains under their control but also works diligently for them, maximizing returns without the typical risks."}
                                type={textTypes.regularDark}
                            />
                        </div>
                        <Btn type="link" action="https://web.stels.app/ " text={"Learn more about platform"}
                            classes={[styles.grid__content_btn]} />
                    </div>
                </div>
            </section>
            <section className={classNames(["section", styles.vs])}>
                {
                    window.innerWidth > 1199 ?
                        <div className={classNames([styles.vs__title_block])}>
                            <div data-animation-id={"vs_title_l"} ref={animation.vs_title_l.ref} className={classNames([styles.vs__title_item, "animate__animated"])}>
                                <Text text={"Market challenges"} type={textTypes.BlockTitle} />
                            </div>
                            <div data-animation-id={"vs_title_r"} ref={animation.vs_title_r.ref} className={classNames([styles.vs__title_item, "animate__animated"])}>
                                <Text data={"The Stels solutions"} type={textTypes.BlockTitle} />
                            </div>
                        </div>
                        :
                        <div className="block_title" style={{ "textAlign": "left" }}>
                            <Text
                                data={"Market challenges versus the Stels solutions"}
                                type={textTypes.BlockTitle}
                            // classes={[styles.vs__title_item]}
                            />
                        </div>
                }

                <div className={classNames([styles.vs__table])}>
                    <div className={classNames([styles.vs_table_row])}>
                        <div data-animation-id={"vs_text_l"} ref={animation.vs_text_l.refs[0]} className={classNames([styles.vs_table_cell, "animate__animated"])}>
                            <Text text={"Prevailing market inefficiencies"} type={textTypes.regularDark} />
                        </div>
                        <div className={classNames([styles.vs_table_div])}>
                            <img src={swords} alt="divider" />
                        </div>
                        <div data-animation-id={"vs_text_r"} ref={animation.vs_text_r.refs[0]} className={classNames([styles.vs_table_cell, "animate__animated"])}>
                            <Text text={"Web 3.0 market control: advanced, AI-driven market intervention and control."} />
                        </div>
                    </div>
                    <div className={classNames([styles.vs_table_row])}>
                        <div data-animation-id={"vs_text_l"} ref={animation.vs_text_l.refs[1]} className={classNames([styles.vs_table_cell, "animate__animated"])}>
                            <Text
                            text={"Limited transparency from exchanges lacking raw data and market performance metrics"}
                            type={textTypes.regularDark} />
                        </div>
                        <div className={classNames([styles.vs_table_div])}>
                            <img src={swords} alt="divider" />
                        </div>
                        <div data-animation-id={"vs_text_r"} ref={animation.vs_text_r.refs[1]} className={classNames([styles.vs_table_cell, "animate__animated"])}>
                            <Text text={"Data transparency: offering in-depth analytics and raw market insights"} />
                        </div>
                    </div>
                    <div className={classNames([styles.vs_table_row])}>
                        <div data-animation-id={"vs_text_l"} ref={animation.vs_text_l.refs[2]} className={classNames([styles.vs_table_cell, "animate__animated"])}>
                            <Text text={"Inadequate and costly market-making solutions"} type={textTypes.regularDark} />
                        </div>
                        <div className={classNames([styles.vs_table_div])}>
                            <img src={swords} alt="divider" />
                        </div>
                        <div data-animation-id={"vs_text_r"} ref={animation.vs_text_r.refs[2]} className={classNames([styles.vs_table_cell, "animate__animated"])}>
                            <Text text={"Fish text filling entire two rows and describe this solution"} />
                        </div>
                    </div>
                    <div className={classNames([styles.vs_table_row])}>
                        <div data-animation-id={"vs_text_l"} ref={animation.vs_text_l.refs[3]} className={classNames([styles.vs_table_cell, "animate__animated"])}>
                            <Text text={"Difficulty in accessing and drawing liquidity on CEX platforms"} type={textTypes.regularDark} />
                        </div>
                        <div className={classNames([styles.vs_table_div])}>
                            <img src={swords} alt="divider" />
                        </div>
                        <div data-animation-id={"vs_text_r"} ref={animation.vs_text_r.refs[3]} className={classNames([styles.vs_table_cell, "animate__animated"])}>
                            <Text text={"Liquidity solutions: a dedicated marketplace for efficient liquidity provisioning"} />
                        </div>
                    </div>
                    <div className={classNames([styles.vs_table_row])}>
                        <div data-animation-id={"vs_text_l"} ref={animation.vs_text_l.refs[4]} className={classNames([styles.vs_table_cell, "animate__animated"])}>
                            <Text text={"Elevated risks and IL hindering optimal yield generation and passive income streams"} type={textTypes.regularDark} />
                        </div>
                        <div className={classNames([styles.vs_table_div])}>
                            <img src={swords} alt="divider" />
                        </div>
                        <div data-animation-id={"vs_text_r"} ref={animation.vs_text_r.refs[4]} className={classNames([styles.vs_table_cell, "animate__animated"])}>
                            <Text text={"AI-powered systems: sophisticated automations designed for market-making and yield generation"} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
