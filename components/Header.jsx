import { motion } from "motion/react"
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3x1 text-center mx-auto h-screen flex
        flex-col items-center justify-center gap-4'>
            <motion.div
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            transition={{duration: 0.8, type: 'spring', stiffness: 100}}
            >
                <img src='/images/github-profile.jpg' alt="Foto de perfil"
                className="rounded-full w-32"/>
            </motion.div>
                <motion.h3 initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.3}}
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                    Olá! Me chamo Pablo Cunha <img src='/images/hand-icon.png' 
                    alt='ícone de uma mão acenando' className='w-6'/>
                </motion.h3>
                <motion.h1 initial={{y: -30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.5}}
                className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
                    Fullstack Developer.
                </motion.h1>
                <motion.p initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay: 0.7}}
                className='max-w-2xl mx-auto font-Ovo'>
                    Desenvolvedor Fullstack com experiência em JavaScript, Java e MySQL.
                </motion.p>
                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <motion.a initial={{y: 30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 1}}
                    href="#contact"
                    className='px-10 py-3 border border-white rounded-full bg-black flex
                    text-white items-center gap-2 dark:bg-transparent'>
                        Entre em contato <img src='/images/right-arrow-white.png' 
                        alt="ícone de seta para direita" className="w-4"/>
                    </motion.a>
                    <motion.a initial={{y: 30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 1.2}}
                    href="/Curriculo_PabloCunha.docx" download 
                    className='px-10 py-3 border rounded-full border-gray-500 flex
                    items-center gap-2 bg-white dark:text-black'>
                        Meu currículo <img src='/images/download-icon.png' 
                        alt="ícone de seta para baixo" className="w-4"/>
                    </motion.a>
                </div>
        </div>
    )
}

export default Header
