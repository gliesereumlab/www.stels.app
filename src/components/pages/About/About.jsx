import styles from "./about.module.css";
import classNames from "classnames";
import bg from "./assets/bg1.svg";
import {Text, textTypes} from "../../shared/Text/Text";
import img from "./assets/img.png";
import bg2 from "./assets/bg2.svg";
import logoIcon from "./assets/logo-icon.svg";
import {Btn} from "../../shared/Btn/Btn";

export const About = () => {
    return (
        <div className="container">
            <div className={classNames([styles.intro_bg_wrapper])}>
                <img src={bg} alt="bg" className={styles.bg1}/>
            </div>
            <section className={classNames([styles.intro])}>
                <div className={styles.intro__title}>
                    <div className={styles.intro__text_row}>
                        <Text data={[{text: "About ", accent: true}, {text: "us"}]} type={textTypes.PageTitle}/>
                    </div>
                </div>
                <Text
                    text={"We are Gliesereum, the vanguard of next-generation blockchain technology poised to redefine the contours of digital market management."}
                    classes={[styles.intro__subtext]}/>
            </section>
            <section className={classNames(["section", styles.text_info])}>
                <img src={logoIcon} alt="logo" className={styles.text_info_logo}/>
                <Text
                    data={[
                        {
                            text: "With "
                        },
                        {
                            text: "over 7 years",
                            accent: true,
                        }
                    ]}
                    type={textTypes.TextTitle}
                    classes={[styles.text_info_title]}
                />
                <Text
                    classes={[styles.text_info__reg_text]}
                    text={"With over 7 years in top-tier Market-Making, our goal is to change market management for everyone's benefit. We combine the best of blockchain with AI smarts."}
                    type={textTypes.medium}
                />
            </section>
            <section className={classNames(["section", styles.img_info])}>
                <div className="block_title">
                    <Text
                        data={[{text: "Stels "}, {text: "by Gliesereum", accent: true}]}
                        type={textTypes.BlockTitle}
                    />
                    <Text
                        text={"Stels by Gliesereum Web 3.0 market control is a result of multiple years of development, which shape out as an easy and intuitive set of tools to create and control the market."}
                        type={textTypes.medium}
                        classes={[styles.img_info__title_text]}
                    />
                </div>
                <div className={classNames([styles.img_info__photo])}>
                    <img src={img} alt="" className={classNames(["image"])}/>
                    {/* <div className={classNames([styles.img_info__card])} >
                        <img src={fileIcon} alt="" />
                        <Text classes={[styles.img_info__card_text]} text={"Our unique protocol solution allows our user to have access to RAW data from exchanges, offering a full scope of analytics and statistics over the market participants."} type={textTypes.regularDark} />
                    </div>
                    <div className={classNames([styles.img_info__card])} >
                        <img src={profitIcon} alt="" />
                        <Text classes={[styles.img_info__card_text]} text={"It allows users to shape the strategy for best market performance, and use the value generating opportunities."} type={textTypes.regularDark} />
                    </div>
                    <div className={classNames([styles.img_info__card])} >
                        <Text text={"Stels is an ecosystem for market management and yield generation, built for maximum capital efficiency."} type={textTypes.TextTitle} />
                    </div> */}
                </div>
            </section>
            <section className={classNames(["section", styles.text_info, styles.last_text_block])}>
                <div className={styles.bg2}>
                    <img src={bg2} alt="bg"/>
                </div>
                <div className={styles.last_text_block_content}>
                    <div>
                        <Text data={[
                            {text: "Ready to experience the future? ", accent: true},
                        ]}
                              type={textTypes.BlockTitle}
                        />
                        <Text data={[
                            {text: "Become a part of the Gliesereum community. Explore our products, engage with our team, and witness the future of market management and yield generation."}
                        ]}
                              classes={[styles.text_info_re]}
                              type={textTypes.medium}
                        />
                    </div>
                    <Btn text={"get access"} type="link" action="https://web.stels.app/"
                         classes={[styles.last_text_block_btn]}/>

                </div>
            </section>
        </div>
    )
}
