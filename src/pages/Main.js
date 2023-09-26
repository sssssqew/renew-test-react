import React from "react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


import '../styles/Main.css'

function Main(){
    // 부모인 motion.svg 태그 애니메이션
    const textContainer = {
        start: { strokeDashoffset: 150, fill: "rgba(255, 255, 255, 0)" },
        end: {
            strokeDashoffset: 0, 
            fill: "rgba(255, 255, 255, 1)",
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.5
            }            
         }
    };

    // 자식인 motion.text 태그 애니메이션
    // 부모와 자식에 동일한 이름의 애니메이션이 적용되어야
    // children 속성이 적용 가능 
    const textContents = {
        start: { strokeDashoffset: 150, fill: "rgba(255, 255, 255, 0)" },
        end: { strokeDashoffset: 0, fill: "rgba(255, 255, 255, 1)"}
    }

    return (
        <div className="main-page">
            <div className="main-text">
                {/* 텍스트에 애니메이션을 적용하기 위해
                    span 태그가 아닌 svg text 태그를 이용 */}
                <motion.svg 
                    viewBox="0 0 300 300"
                    width="30rem"
                    height="30rem"

                    variants={textContainer}
                    initial="start"
                    animate="end"
                    strokeWidth="1"
                    transition={{ default: { duration: 0.5 }}}
                    
                >
                    <motion.text x="0" y="110" variants={textContents}>
                        What is
                    </motion.text>
                    <motion.text x="0" y="170" variants={textContents}>
                        Your
                    </motion.text>
                    <motion.text x="0" y="230" variants={textContents}>
                        Favorite
                    </motion.text>
                    <motion.text x="0" y="290" variants={textContents}>
                        Movie ?
                    </motion.text>
                </motion.svg>
                
            </div>
            <div className="clapperboard-container">
                {/* 이상형 월드컵으로 이동하는 클래퍼보드 이미지
                    호버시 클래퍼보드를 닫는 애니메이션을 위해
                    상단과 하단으로 나눠서 path를 만듦. */}
                <Link to="/tournament">
                    
                    <motion.svg
                        fill="#fff" version="1.1" id="clapperboard" 
                        viewBox="0 0 302.303 302.303"
                        width="30rem"
                        height="30rem"
                        initial={{ fill: "rgba(255, 255, 255, 0)" }}
                        animate={{ fill: "rgba(255, 255, 255, 1)" }}
                        transition={{
                            fill: { duration: 1, delay: 2.5 }
                        }}
                    >
                        {/* 클래퍼보드 상단 - 호버시 움직임. */}
                        <motion.path d="M298.675,51.129l-6.603-37.45L0,65.179l6.604,37.45L298.675,51.129z M273.076,26.472l11.451-2.019l3.374,19.133
                            l-21.018,3.706L273.076,26.472z M240.07,32.292l22.767-4.014l-6.193,20.82l-22.767,4.014L240.07,32.292z M207.063,38.112
                            l22.767-4.015l-6.193,20.82l-22.767,4.014L207.063,38.112z M174.057,43.932l22.767-4.015l-6.193,20.82l-22.767,4.014
                            L174.057,43.932z M141.051,49.752l22.767-4.015l-6.193,20.82l-22.767,4.014L141.051,49.752z M108.044,55.572l22.766-4.015
                            l-6.193,20.82l-22.767,4.015L108.044,55.572z M75.037,61.392l22.767-4.015l-6.193,20.82l-22.766,4.015L75.037,61.392z
                            M42.031,67.211l22.767-4.015l-6.193,20.82l-22.767,4.015L42.031,67.211z M31.791,69.017l-6.193,20.82l-11.451,2.019
                            l-3.373-19.133L31.791,69.017z"
                            id="clapperboard-upper"
                        />
                        {/* 클래퍼보드 하단 */}
                        <motion.path d="M5.725,106.957v181.667h296.578V106.957H5.725z M247.859,116.257h23.119l-9.714,19.428h-23.119L247.859,116.257z
                            M214.343,116.257h23.118l-9.714,19.428h-23.119L214.343,116.257z M180.827,116.257h23.119l-9.714,19.428h-23.118
                            L180.827,116.257z M147.312,116.257h23.119l-9.714,19.428h-23.118L147.312,116.257z M113.796,116.257h23.119l-9.714,19.428
                            h-23.119L113.796,116.257z M80.281,116.257h23.118l-9.714,19.428H70.567L80.281,116.257z M46.764,116.257h23.119l-9.714,19.428
                            H37.051L46.764,116.257z M293.003,279.323L293.003,279.323H15.025V116.257h21.342l-9.713,19.428h-6.702v9.3h268.125v-9.3h-16.416
                            l9.714-19.428h11.628V279.323z"
                            id="clapperboard-under"
                        />
                        {/* 클래퍼보드 안의 디자인 */}
                        <rect x="24.877" y="250.457" width="9.3" height="19.152"/>
                        <rect x="39.241" y="250.457" width="9.3" height="19.152"/>
                        <rect x="63.043" y="255.383" width="220.246" height="9.3"/>
                        <rect x="24.739" y="154.836" width="28.728" height="9.3"/>
                        <rect x="24.739" y="173.988" width="52.668" height="9.3"/>
                        <rect x="24.739" y="193.14" width="9.576" height="9.3"/>

                    </motion.svg>
                </Link>
            </div>
            
        </div>
        
    )
}

export default Main