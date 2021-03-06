import React from 'react';
import Image from 'next/image'
import styles from './styles.module.scss';

export function BandaOnFire(){

    return(
        <div className={styles.container}>
            <h1>Noemy Nery e Banda ONFIRE</h1>
            <div className={styles.Player}>
                <Image 
                    src="/images/bandaOnFire.jpg"
                    alt="Imagem da Banda OnFire" 
                    width={900}
                    height={600}
                />
            </div>
        </div>
    );
}