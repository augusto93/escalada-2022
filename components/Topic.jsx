import Accordion from '../components/Accordion';
import Link from 'next/link';

export default function Topic({isOpen, setOpen, anoAtivo, setAnoAtivo,}) {

  return (
    <>
      <div className="container" >

        <div className='content'>
          <div className='container-data'>
            <div className='content-data-marks'>
              <h5>Escaladas</h5>
              <div className='item' onClick={() => {setOpen(!isOpen); setAnoAtivo(2018) }}>2018</div>
              <div className='item' onClick={() => {setOpen(!isOpen); setAnoAtivo(2019) }}>2019</div>
              <div className='item' onClick={() => {setOpen(!isOpen); setAnoAtivo(2020) }}>2020</div>
              <div className='item' onClick={() => {setOpen(!isOpen); setAnoAtivo(2021) }}>2021</div>
            </div>
            <div className='btn-22'>
              <Link href={"/"}>
                <button>2022</button>
              </Link>
            </div>
          </div>

          <div className='container-topic ano18'>
            <div className='container-marks'>

              <Accordion title="Identificação dos prospectos dos blocos da R13" content="A identificação de recursos prospectivos na Bacia do Parnaíba é um importante marco para a certificação de novas reservas. O aumento de reservas possibilitará a extensão do ciclo de vida das térmicas no Parnaíba após o término do PPA." />

              <Accordion title="Revitalização Itaqui e Pecém" content="Conclusão dos investimentos de melhoria operacional iniciados em 2016 com foco em HSE, disponibilidade e eficiência em custos. Transformação das usinas de carvão em ativos geradores de caixa que irão contribuir para o crescimento da empresa." />

              <Accordion title="Comercialização da energia fechamento de ciclo" content="O fechamento de Ciclo de Parnaíba I é uma grande oportunidade para a Eneva porque podemos aumentar a capacidade de geração sem consumo adicional de gás." />

              <Accordion title="Programa inovação" content="Definição da estratégia de inovação para criar vantagem competitiva e como iremos operacionalizá-la financeiramente e/ou com parceiros na Eneva." />

              <Accordion title="Sucesso no leilão de energia" content="O leilão de energia, que será realizado, é uma importante oportunidade de comercialização de projetos de energia e pretendemos participar." />

              <Accordion title="Comercialização da energia de Azulão" content="Com o término da aquisição do Campo de Azulão, temos um projeto de R2W para ser implementado. Após a definição da comercialização, a construção da térmica poderá ser iniciada, aumentando a nossa capacidade de geração." />

              <Accordion title="Sucesso em leilões ANP" content="A aquisição de novas áreas exploratórias é fundamental para que no futuro tenhamos mais reservas de gás em terra e possamos desenvolver novos projetos R2W." />

              <Accordion title="Resolução ICMS Itaqui" content="A diminuição do imposto estadual é fundamental para o alcance da margem variável positiva para a usina de Itaqui e complementa as iniciativas de melhoria de performance e redução de custos, que estão em andamento." />

              <Accordion title="Melhoria estrutura de capital (Puzzle)" content="Simplificar a estrutura societária da empresa irá melhorar a nossa gestão. Além disso, iremos otimizar as despesas com pagamentos de impostos, liberando caixa para o crescimento da companhia." />
                  
            </div>
          </div>

          <div className='container-topic ano19'> 
            <div className='container-marks'>

              <Accordion title="Novo modelo de negócios da comercializadora" content="A estruturação do plano de negócios da comercializadora contribui na elevação da resiliência da companhia frente aos desafios de um futuro de expansão do mercado livre de energia." />

              <Accordion title="Iniciar a campanha exploratória da rodada 14" content="A busca constante por novas reservas é um dos principais pilares para continuidade do negócio da Eneva, principalmente no Complexo Parnaíba onde as nossas termelétricas já estão instaladas." />

              <Accordion title="Converter recursos prospectivos em recursos contingentes na rodada 13" content="O esforço na prospecção de novos recursos é recompensado quando se tornam realidade." />

              <Accordion title="Criação de aceleradora de startups" content="Dando continuidade à construção da estratégia de inovação, o trabalho com startups é a ferramenta que a companhia escolheu para alavancar essa estratégia." />

              <Accordion title="Financiamento de Parnaíba V no primeiro semestre de 2019" content="Para dar início às obras, o plano do projeto Parnaíba V prevê a busca de recursos financeiros logo no início das atividades, portanto é muito importante conseguirmos o financiamento ainda este ano." />

              <Accordion title="Início das obras de Parnaíba V no primeiro semestre de 2019" content="Após o vencimento no leilão A-6 em 2018, para entregar o compromisso assumido, é necessário executar o plano de implantação do projeto Parnaíba V, com início da obra em 2019." />

              <Accordion title="Monetização de projeto Gas-to-Power" content="A nossa estratégia também considera o crescimento por meio de outros tipos de projeto de gás, como é o caso de projetos de gás associado e GNL. As termelétricas a gás são prioridade da estratégia considerando que esse é o nosso negócio, no qual podemos ter melhor vantagem competitiva." />

            </div>
          </div>

          <div className='container-topic ano20'>
            <div className='container-marks'>

              <Accordion title="Concluir as paradas de manutenção (overhaul) nas operações" content="Para manter nossas operações em elevados níveis de qualidade, eficiência e segurança, temos que ser diligentes em realizar manutenções preventivas e constantes." />

              <Accordion title="Compor a 1ª turma de trainees da Eneva" content="Formar novos talentos para compor o time da Eneva é estratégico para se ter uma companhia adequada aos novos desafios. A primeira turma de trainees abre espaço e fortalece este objetivo." />

              <Accordion title="Obter financiamento para os projetos de crescimento (Parnaíba V e Azulão/ Jaguatirica)" content="Garantir os recursos necessários para as obras dos nossos projetos é fundamental para honrarmos os compromissos contratados nos leilões de energia. Os financiamentos ajudam a manter um fluxo financeiro adequado para o crescimento sem deixarmos de sustentar as operações existentes." />

              <Accordion title="Finalizar a montagem das caldeiras de Parnaíba V e o posicionamento do gerador na base" content="As caldeiras e o gerador são os principais componentes para operação das usinas termelétricas. Garantir eles sejam instalados dentro do cronograma elaborado para as obras favorece o início do suprimento de energia no prazo que queremos." />

              <Accordion title="Realizar o comissionamento a quente da planta de Azulão" content="Uma das fases importantes das obras de Azulão planejadas para este ano é a finalização dos testes de queima de gás para que a planta possa entrar em operação em 2021." />

              <Accordion title="Adquirir áreas de interesse na Oferta Permanente" content="Devemos estar atentos às possibilidades que a Oferta Permanente, da ANP, pode apresentar em relação a áreas que tenham sinergia com o nosso plano de crescimento. Assim, poderemos aumentar nosso acesso ao gás." />

              <Accordion title="Comprovar reservas iguais ou superiores ao volume comprometido com Jaguatirica" content="O campo de Azulão é um importante vetor de crescimento para a companhia. Expandir suas reservas traz oportunidades na região Norte além do que já alcançamos com a contratação da UTE Jaguatirica." />

              <Accordion title="Certificar reservas com volume maior do que o consumido" content="A estratégia da Eneva tem como espinha dorsal o acesso à molécula de gás. Portanto, devemos nos esforçar continuamente para aumentar e recompor nossas reservas." />

              <Accordion title="Adquirir um ativo, projeto ou empresa, com adição de 500 MW ou mais de capacidade" content="A companhia está constantemente em busca de oportunidades para o desenvolvimento de novos projetos ou de aquisições e fusões que possam acelerar o crescimento rumo aos 4,7 GW de capacidade de geração." />

              <Accordion title="Finalizar a avaliação de Fazenda Tianguar" content="Avaliar e determinar a volumetria e comercialidade dos indícios de óleo e gás encontrados em um dos poços do Plano de Avaliação de Descoberta (PAD) Fazenda Tianguar, na Bacia do Parnaíba." />

            </div>
          </div>

          <div className='container-topic ano21'>
            <div className='container-marks'>

              <Accordion title="Assinar o primeiro compromisso de fornecimento de micro-lng" content="A companhia tem buscado constantemente formas alternativas de monetização da molécula de gás nas localidades dos campos de Parnaíba e Azulão. Uma das formas é por meio da venda do gás liquefeito (GNL) diretamente para o cliente final (indústrias)." />

              <Accordion title="Concluir o overhaul do turbogerador de Itaqui" content="Para manter nossas operações em elevados níveis de qualidade, eficiência e segurança, temos que ser diligentes em realizar manutenções preventivas e constantes." />

              <Accordion title="Iniciar o comissionamento da planta de Parnaíba V" content="O fechamento de ciclo da planta de Parnaíba I (projeto de Parnaíba V) acrescentará 385 MW ao nosso portfólio. O início do comissionamento da operação e equipamentos marca um importante passo para a preparação e testagem da operação." />

              <Accordion title="Iniciar o abastecimento dos tanques do projeto Azulão-Jaguatirica" content="O início do abastecimento dos tanques criogênicos, que levarão GNL do Campo de Azulão à UTE Jaguatirica (aprox. 1.100 km de rodovia), marca o começo de uma operação estruturada para abastecer a cidade de Boa Vista (RR) e localidades conectadas." />

              <Accordion title="Concluir a parada da usina Parnaíba II (HGPS das TGS 51 e 52)" content="Nos preocupamos muito com a segurança operacional e eficiência das nossas plantas. Por isso, neste ano, realizaremos uma parada na usina Parnaíba II para fazermos a manutenção das turbinas (HGPs: Hot Gas Path – câmaras de combustão da turbina a gás)." />

              <Accordion title="Assinar contratos de concessão da oferta permanente" content="Em dez/2020 investimos no leilão da Oferta Permanente da ANP. Adquirimos 7 concessões exploratórias nas bacias do (I) Amazonas, (II) Paraná e (III) Solimões. Ao longo deste ano, trabalharemos para ter a assinatura dos contratos de concessão destes blocos e, assim, planejar a exploração e desenvolvimento dos campos." />

              <Accordion title="Iniciar a operação de Jaguatirica II" content="A entrada em operação da usina Jaguatirica II marca um importante passo na história da companhia pelo pioneirismo na estruturação do projeto – a usina vai gerar aproximadamente 117 MW de energia elétrica a partir do gás proveniente do campo de Azulão." />

              <Accordion title="Adquirir um ativo, projeto ou empresa, com adição dde 500 MWou mais de capacidade (ou equivalene energético)" content="A companhia está constantemente em busca de oportunidades para o desenvolvimento de novos projetos ou de fusões e aquisições que possam acelerar o crescimento e atingir os objetivos estratégicos." />

              <Accordion title="Certificar reservas com volume maior que o consumido" content="A estratégia da Eneva tem como espinha dorsal o acesso à molécula de gás. Portanto, devemos nos esforçar continuamente para aumentar e recompor nossas reservas." />

              <Accordion title="Mapear 100% dos sucessores para posições críticas" content="As pessoas são os principais ativos para viabilizar a Eneva do futuro e, para isso, é fundamental garantir o capital intelectual para o nosso crescimento através do mapeamento, desenvolvimento e retenção dos sucessores das posições críticas." />

            </div>
          </div>
        </div>

        <style jsx>{`
            .container {
              width: 100%;
              height: 100vh;
              display: flex;
              z-index: 9998;
              position: fixed;
              background-color:rgba(0,0,0,0.8);
              animation: fadeIn 0.1s !important;
            }

            .content{
              width: 100%;
              height: 100%;
              z-index: 9999;
              display: flex;
            }

            .container-data {
              width: 33%;
              height: 100%;
              background-color:rgba(7,71,75,0.8);
              padding: 55px 0 0 45px;
              color: #0E9197;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }

            .container-data h5 {
              font-size: 1.5rem;
              font-weight: normal;
              margin: 0;
            } 

            .container-data div {
              font-size: 4.375rem;
              font-weight: bold;
              margin: 0;
            }

            .content-data-marks div {
              cursor: pointer
            }

            .content-data-marks div:hover {
              color: #5BB2B8;
            }
            
            .container-topic {
              width: 67%;
              height: 105%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              position: relative;
            }

            .container-marks {
              height: 100%;
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .btn-22 {
              padding: 0 0 50px 0;
            }

            .btn-22 button {
              width: 128px;
              height: 48px;
              background-color: #5BB2B8;
              border-radius: 23px;
              color: #ffffff;
              font-size: 24px;
              border: none;
              cursor: pointer;
            }

            .ano18 {
              display: ${anoAtivo === 2018? "flex" : "none"}
            }

            .ano19 {
              display: ${anoAtivo === 2019? "flex" : "none"}
            }

            .ano20 {
              display: ${anoAtivo === 2020? "flex" : "none"}
            }

            .ano21 {
              display: ${anoAtivo === 2021? "flex" : "none"}
            }

          `}

        </style>

      </div>
    </>
  )
}