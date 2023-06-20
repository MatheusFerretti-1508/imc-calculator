import { useEffect, useState } from 'react'
import style from './Form.module.css'

const Form = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);
    const [classificacao, setClassificacao] = useState('');

    const calculaImc = () => {
        let imcInterno = ((peso / (altura * altura)) * 10000);
        setImc(imcInterno.toFixed(2))

        return imc
    }
    const classificador = () => {
        if (imc < 18,5) {
            setClassificacao(`Magreza`)
        }
        else if (imc > 18,5 && imc < 24,9) {
            setClassificacao(``)
            setClassificacao(`Normal`)
        }
        else if (imc > 25 && imc < 29,9) {
            setClassificacao(`Sobrepeso`)
        }
    }

    return (
        <>
            <form className={style.form}>
                <div>
                    <label className={style.formLabel} htmlFor="altura">Altura:</label>
                    <input onBlur={e => setAltura(parseInt(e.target.value))} placeholder='Altura em centímetros' type="text" id="altura" />
                </div>
                <div>
                    <label className={style.formLabel} htmlFor="peso">Peso:</label>
                    <input onBlur={e => setPeso(parseInt(e.target.value))} placeholder='Peso em quilogramas' type="text" id="peso" />
                </div>
                <button onClick={e => calculaImc(peso, altura) && classificador()} className={style.formButton} type='button'>Calcular</button>
            </form>
            <div className={style.resultadoContainer}>
                <p className={style.resultadoImc}>
                    O seu IMC é: <b className={style.resultados}> {imc} </b>
                </p>
                {/* <p className={style.resultadoClassificacao}>
                    Sua classificação é: <b className={style.resultados}>{classificacao}</b>
                </p> */}
                <p className={style.legenda}>
                    IMC menor que 18,5: <b>MAGREZA</b> <br />
                    IMC entre 18,5 e 24,9: <b>NORMAL</b> <br />
                    IMC entre 25 e 29,9: <b>SOBREPESO</b> <br />
                    IMC entre 30 e 39,9: <b>OBESIDADE</b> <br />
                    IMC menor que 40: <b>OBESIDADE GRAVE</b> <br />
                </p>
            </div>

        </>
    )

}

export default Form;


