'use client';
import React from 'react'
import styles from './style.module.css';
import { Eagle_Lake, Quicksand } from 'next/font/google';

type ProgramProps = {
    index: number,
    title: string,
    subtitle: string,
    setModal: React.Dispatch<React.SetStateAction<{ active: boolean; index: number }>>
};

const font = Eagle_Lake({ subsets: ['latin'], weight: '400'})
const font2 = Quicksand({ subsets: ['latin'], weight: '400'})

const Program = ({index, title, subtitle, setModal}: ProgramProps) => {

    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={'Program'}>
            <h2 className={`${font.className}`}>{title}</h2>
            <p className={`${font2.className}`}>{subtitle}</p>
        </div>
    )
}

export default Program