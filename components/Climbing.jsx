import Image from 'next/image'

export default function Climbing({textOpen, setTextOpen, indexText, setIndexText}) {
    return (
      <>
        <div className="content">
          
          <div className='data'>

            <div className='data-item' onClick={() => {setTextOpen(!textOpen); setIndexText(101)}}>
              <div className='text-item'>Concluir integração da Focus Energia e iniciar<br/>operação comercial de Futura 1</div>
              <Image
                src="/images/flag.png"
                width={39}
                height={48} 
                layout='fixed'
                alt="Flag"
              />
            </div>

            <div className='data-item' onClick={() => {setTextOpen(!textOpen); setIndexText(102)}}>
              <div className='text-item'>Produzir primeiro gás de Gavião Preto</div>
              <Image
                src="/images/flag.png"
                width={39}
                height={48} 
                layout='fixed'
                alt="Flag"
              />
            </div>

            <div className='data-item' onClick={() => {setTextOpen(!textOpen); setIndexText(103)}}>
              <div className='text-item'>Lançar Academia de Líderes e carreira em Y</div>
              <Image
                src="/images/flag.png"
                width={39}
                height={48} 
                layout='fixed'
                alt="Flag"
              />
            </div>

            <div className='data-item' onClick={() => {setTextOpen(!textOpen); setIndexText(104)}}>
              <div className='text-item'>Realizar estudo de viabilidade e projeto básico para Ciclo Allam-Fetvedt</div>
              <div className='circles'>4</div>
            </div>

            <div className='data-item' onClick={() => {setTextOpen(!textOpen); setIndexText(105)}}>
              <div className='text-item'>Iniciar operação comercial de Jaguatirica II e Parnaíba V</div>
              <div className='circles'>5</div>
            </div>

            <div className='data-item' onClick={() => {setTextOpen(!textOpen); setIndexText(106)}}>
              <div className='text-item'>Celebrar primeiro contrato de comercialização de gás para cliente final</div>
              <div className='circles'>6</div>
            </div>

            <div className='data-item' onClick={() => {setTextOpen(!textOpen); setIndexText(107)}}>
              <div className='text-item'>Aprovar FEL 3 (planejamento da execução) para Tepor ou São Luís</div>
              <div className='circles'>7</div>
            </div>

            <div className='data-item' onClick={() => {setTextOpen(!textOpen); setIndexText(108)}}>
              <div className='text-item'>Realizar projeto piloto de gás não-convencional no Parnaíba</div>
              <div className='circles'>8</div>
            </div>

            <div className='data-item' onClick={() => {setTextOpen(!textOpen); setIndexText(109)}}>
              <div className='text-item'>Obter licenciamento ambiental do projeto de desenvolvimento<br/>e escoamento de Juruá</div>
              <div className='circles'>9</div>
            </div>

            <div className='data-item' onClick={() => {setTextOpen(!textOpen); setIndexText(110)}}>
              <div className='text-item'>Aumentar 600 MW de capacidade de geração em projeto ou aquisição</div>
              <div className='circles'>10</div>
            </div>

            <div className='data-item' onClick={() => {setTextOpen(!textOpen); setIndexText(111)}}>
              <div className='text-item'>Alcançar o rating C+ para ESG Eneva pela Refinitiv</div>
              <div className='circles'>11</div>
            </div>

            <div className='data-item' onClick={() => {setTextOpen(!textOpen); setIndexText(112)}}>
              <div className='text-item'>Certificar reservas 2P maior que o consumo no Parnaíba e converter os volumes<br/>3P e 2C para reservas 2P no Amazonas</div>
              <div className='circles'>12</div>
            </div>

            <div className='data-title'>
              <div>2022</div>
            </div>


          </div>

          <style jsx>{`
            .content {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: flex-end;
              align-items: flex-end;
              position: relative;
            }

            .data {
              position: absolute;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: flex-start;
              flex-direction: column-reverse;
              align-items: center;
              z-index:999;
              bottom: 80px;
            }

            .data-title {
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              right: -360px;
              bottom: 140px;           
              width: 100px;
              height: 25px;
              border-radius: 25px;
              background-color: #fab31d;
              color: #00585d;
              display: flex;
              justify-content: center;
              align-items: center;
              font-weight: bold;
              font-size: 1rem;
            }

            .data-item{
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              cursor: pointer;
            }

            .data-item:hover {
              background-image: linear-gradient(to right, rgba(0,109,116,0), rgba(0,109,116,1));
              border-radius: 0 50px 50px 0;
            }

            .text-item {
              margin-right: 10px;
              color: #ffffff;
              font-size: 0.6875rem;
              font-weight: bold;
              text-align: right;
            }

            .circles {
              width: 25px;
              height: 25px;
              border-radius: 25px;
              background-color: #fab31d;
              color: #00585d;
              display: flex;
              justify-content: center;
              align-items: center;
              font-weight: bold;
              font-size: 1rem;
            }

            .data-item:nth-child(1) {
              right: 160px;
            }

            .data-item:nth-child(2) {
              right: 70px;
            }

            .data-item:nth-child(3) {
              right: 60px;
            }

            .data-item:nth-child(4) {
              right: 120px;
              bottom: 5px;
            }

            .data-item:nth-child(5) {
              right: 50px;
              bottom: 12px;
            }

            .data-item:nth-child(6) {
              right: 80px;
              bottom: 20px;
            }

            .data-item:nth-child(7) {
              right: 50px;
              bottom: 28px;
            }

            .data-item:nth-child(8) {
              right: 10px;
              bottom: 35px;
            }

            .data-item:nth-child(9) {
              bottom: 45px;
            }

            .data-item:nth-child(10) {
              right: -20px;
              bottom: 60px;
            }

            .data-item:nth-child(11) {
              right: -110px;
              bottom: 75px;
            }

            .data-item:nth-child(12) {
              right: -60px;
              bottom: 90px;
            }

            `}
          </style>
        </div>
      </>
  )
}