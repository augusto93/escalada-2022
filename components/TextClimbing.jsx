import Image from 'next/image'

export default function TextClimbing({textOpen, setTextOpen, indexText, setIndexText}) {
  return (
    <>
      <div className="container" onClick={() => {setTextOpen(!textOpen); setIndexText(0)}}>

        <div className='content item01'>
            <h2>Concluir integração<br/>da Focus Energia<br/>e iniciar operação<br/>comercial de Futura 1</h2>
        </div>

        <div className='content item02'>
          <h2>Produzir primeiro gás<br/>de Gavião Preto</h2>
        </div>

        <div className='content item03'>
          <h2>Lançar Academia de Líderes<br/>e carreira em Y</h2>
        </div>

        <div className='content item04'>
          <h2>Realizar estudo de viabilidade e projeto básico para Ciclo Allam-Fetvedt</h2>
        </div>

        <div className='content item05'>
          <h2>Iniciar operação comercial de Jaguatirica II e Parnaíba V</h2>
        </div>

        <div className='content item06'>
          <h2>Celebrar primeiro contrato de comercialização de gás para cliente final</h2>
        </div>

        <div className='content item07'>
          <h2>Aprovar FEL 3<br/>(planejamento da execução) para Tepor ou São Luís</h2>
        </div>

        <div className='content item08'>
          <h2>Realizar projeto piloto de gás não-convencional no Parnaíba</h2>
        </div>

        <div className='content item09'>
          <h2>Obter licenciamento ambiental do projeto de desenvolvimento e escoamento de Juruá</h2>
        </div>

        <div className='content item10'>
          <h2>Aumentar 600 MW<br/>de capacidade de geração<br/>em projeto ou aquisição</h2>
        </div>

        <div className='content item11'>
          <h2>Alcançar o rating C+<br/>para ESG Eneva pela Refinitiv</h2>
        </div>

        <div className='content item12'>
          <h2>Certificar reservas 2P<br/>maior que o consumo no Parnaíba e converter os volumes 3P e 2C para reservas 2P no Amazonas</h2>
        </div>

        <style jsx>{`
          .container {
            width: 100%;
            height: 100vh;
            display: ${textOpen? "flex" : "none"};
            justify-content: center;
            align-items: center;
            z-index: 9998;
            position: fixed;
            background-color:rgba(0,0,0,0.8);
            background-image: url(/images/bg_marks.png);
            background-position: center;
            background-repeat: no-repeat;
          }
          .content {
            color: #ffffff;
            display: flex;
            position: relative;
            width: 100%;
            max-width: 480px;
            heigh: 100%;
            max-height: 378px;
          }
          
          .content h2 {
            font-size: 1.75rem;
            line-height: 2.5rem;
          }


          .item01 {
            display: ${indexText === 101? "flex" : "none"}
          }
          .item02 {
            display: ${indexText === 102? "flex" : "none"}
          }
          .item03 {
            display: ${indexText === 103? "flex" : "none"}
          }
          .item04 {
            display: ${indexText === 104? "flex" : "none"}
          }
          .item05 {
            display: ${indexText === 105? "flex" : "none"}
          }
          .item06 {
            display: ${indexText === 106? "flex" : "none"}
          }
          .item07 {
            display: ${indexText === 107? "flex" : "none"}
          }
          .item08 {
            display: ${indexText === 108? "flex" : "none"}
          }
          .item09 {
            display: ${indexText === 109? "flex" : "none"}
          }
          .item10 {
            display: ${indexText === 110? "flex" : "none"}
          }
          .item11 {
            display: ${indexText === 111? "flex" : "none"}
          }
          .item12 {
            display: ${indexText === 112? "flex" : "none"}
          }

          `}
        </style>
      </div>
    </>
  )
}