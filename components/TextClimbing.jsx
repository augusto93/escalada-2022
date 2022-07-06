import Image from 'next/image'

export default function TextClimbing({textOpen, setTextOpen, indexText, setIndexText}) {
  return (
    <>
      <div className="container" onClick={() => {setTextOpen(!textOpen); setIndexText(0)}}>

        <div className='content item01'>
            <div className='content-title'>
              Integração da FOCUS e iniciar operação de FUTURA 1
            </div>
            <div className='content-discription'>
              A conclusão da integração da Focus e a operação do primeiro ativo solar da Eneva (Futura 1) traz, dentre outras vantagens, novas oportunidades de negócio no contexto da ampliação do mercado livre de energia e da transição energética. Nossa expectativa é que a operação comercial da usina fotovoltaica tenha início no quarto trimestre de 2022, o que nos posicionará como um relevante gerador de energia por fonte renovável,  adicionando 870 MW de capacidade ao nosso portfólio.
            </div>
        </div>

        <div className='content item02'>
          <div className='content-title'>
            Produzir primeiro gás<br/>de Gavião Preto
          </div>
          <div className='content-discription'>
            A produção de Gavião Preto contribui para a estratégia de garantir a continuidade do Complexo Parnaíba.
          </div>
        </div>

        <div className='content item03'>
          <div className='content-title'>
            Lançar Academia de líderes<br/>e carreira em Y
          </div>
          <div className='content-discription'>
            A preparação de líderes e desenvolvimento de carreira são pilares estratégicos para se ter uma companhia alinhada aos desafios. A Academia de Líderes e a disponibilidade da carreira em Y são iniciativas que atendem esse objetivo, além de fortalecer o Jeito de Ser e a cultura da Eneva. 
          </div>
        </div>

        <div className='content item04'>
          <div className='content-title'>
            Realizar estudo de viabilidade<br/>e projeto básico para Ciclo Allam-Fetvedt
          </div>
          <div className='content-discription'>
            Ciclo Allam-Fetvedt  é uma tecnologia inovadora, que utiliza gás natural como combustível para geração de energia, mas sem emitir CO2 na atmosfera - o gás carbônico gerado é utilizado no processo (no lugar do vapor dos ciclos combinados tradicionais). Esse tipo de tecnologia pode se tornar uma alternativa para a descarbonização, eliminando o impacto do carbono do gás natural e, assim, garantir a perpetuidade de nosso modelo R2W, expandindo para uma condição livre de emissões.
          </div>
        </div>

        <div className='content item05'>
          <div className='content-title'>
            Iniciar operação comercial<br/>de Jaguatirica II e Parnaiba V
          </div>
          <div className='content-discription'>
            Finalizar as obras e iniciar a operação das usinas Jaguatirica II e Parnaíba V é um marco importante na concretização e entrega da estratégia de crescimento da companhia, considerando que passamos a ter novas fontes de receita, além de maior participação na geração de energia para o Sistema Interligado Nacional e o Sistema Isolado.
          </div>
        </div>

        <div className='content item06'>
          <div className='content-title'>
            Celebrar primeiro contrato<br/>de comercialização de gás<br/>para cliente final
          </div>
          <div className='content-discription'>
            A companhia tem buscado constantemente formas alternativas de monetização da molécula de gás. Uma das formas é por meio da venda do gás natural diretamente para o cliente final (indústrias).
          </div>
        </div>

        <div className='content item07'>
          <div className='content-title'>
            Aprovar o Plano de Execução dos terminais de TEPOR<br/>ou São Luis
          </div>
          <div className='content-discription'>
            A construção de terminais é o primeiro passo para viabilizar a estratégia de desenvolvimento de infraestrutura de hubs de gás natural. Nesse sentido, é importante avançarmos na maturidade dos projetos que trabalhamos atualmente, seja para o terminal em Macaé (TEPOR) ou para o terminal em São Luís.
          </div>
        </div>

        <div className='content item08'>
          <div className='content-title'>
            Realizar projeto piloto de gás não-convencional em Parnaíba 
          </div>
          <div className='content-discription'>
            Somos pioneiros e inovadores e não seria diferente no caso da exploração do gás natural não-convencional. O objetivo do projeto piloto é avaliar a possibilidade de produzir gás nos reservatórios não-convencionais do Parnaíba e a viabilidade para os próximos passos, sendo mais uma opção na busca pela continuidade do Complexo. 
          </div>
        </div>

        <div className='content item09'>
          <div className='content-title'>
            Obter licenciamento ambiental do projeto de desenvolvimento<br/>e escoamento de Juruá
          </div>
          <div className='content-discription'>
            Um dos grandes desafios de Juruá é a logística para escoamento do gás por meio fluvial, além da construção de um gasoduto, que ligará Juruá até a cidade mais próxima, cerca de 30 km. Nosso marco para 2022 é obter licenciamento ambiental para os poços, construção do gasoduto e da planta de liquefação. 
          </div>
        </div>

        <div className='content item10'>
          <div className='content-title'>
            Aumentar 600 MW de capacidade de geração em projeto ou aquisição
          </div>
          <div className='content-discription'>
            A companhia está constantemente em busca de oportunidades para o desenvolvimento de novos projetos ou de fusões e aquisições que possam acelerar o crescimento e atingir os objetivos estratégicos.
          </div>
        </div>

        <div className='content item11'>
          <div className='content-title'>
            Alcançar o rating C+ para ESG Eneva pela Refinitiv
          </div>
          <div className='content-discription'>
            Ter um posicionamento cada vez mais assertivo nas 3 dimensões ESG é parte da estratégia da Eneva. Nesse sentido, como forma de medir os avanços da companhia, perseguimos avaliações nacionais e internacionais cada vez melhores, como é o caso da classificação de rating realizada pela Refinitiv (agência internacional que mede riscos e critérios sociais, ambientais e de governança).
          </div>
        </div>

        <div className='content item12'>
          <div className='content-title'>
            Certificar reservas 2P maior que o consumo no Parnaíba e converter os volumes 3P e 2C para reservas 2P no Amazonas
          </div>
          <div className='content-discription'>
            A recomposição das nossas reservas agora deve ser perseguida para ambas as bacias que atuamos: Parnaíba e Azulão, com o principal objetivo de garantir a continuidade dos nossos negócios nessas localidades.
          </div>
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
            background-image: url(/images/bg_marks_1.png);
            background-position: center;
            background-repeat: no-repeat;
          }

          .content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            width: 100%;
            max-width: 520px;
            height: 100%;
            max-height: 300px;
          }

          .content-title {
            display:flex;
            align-items: center;
            width: 100%;
            max-width: 520px;
            height: 100%;
            max-height: 150px;
            font-size: 1.75rem;
            line-height: 2.5rem;
            font-weight: bold;
            color: #ffffff;
          }

          .content-discription {
            display:flex;
            align-items: center;
            width: 100%;
            max-width: 520px;
            height: 100%;
            max-height: 100px;
            font-size: 0.8rem;
            color: #2d575a;
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