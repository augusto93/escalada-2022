import Image from 'next/image'

export default function Topic({isOpen, setOpen, anoAtivo, setAnoAtivo}) {

  // console.log(isOpen)
  // console.log("o ano que aparece é " + anoAtivo)

  return (
    <>
      <div className="container" onClick={() => {setOpen(!isOpen); setAnoAtivo(0) }}>

        <div className='content ano18'>
          <Image
            src="/images/topic_18.png"
            width={648}
            height={500} 
            layout="fixed"
            alt="Resultados 2018"
          />
        </div>

        <div className='content ano19'>
          <Image
            src="/images/topic_19.png"
            width={648}
            height={500} 
            layout="fixed"
            alt="Resultados 2019"
          />
        </div>

        <div className='content ano20'>
          <Image
            src="/images/topic_20.png"
            width={648}
            height={500} 
            layout="fixed"
            alt="Resultados 2020"
          />
        </div>   

        <div className='content ano21'>
          <Image
            src="/images/topic_21.png"
            width={648}
            height={500} 
            layout="fixed"
            alt="Resultados 2021"
          />
        </div>    

        <style jsx>{`

            .container {
              width: 100%;
              height: 100vh;
              display: ${isOpen? "flex" : "none"};
              justify-content: center;
              align-items: center;
              z-index: 9998;
              position: absolute;
              background-color:rgba(0,0,0,0.8);
              animation: fadeIn 0.3s !important;
            }

            .content{
              width: 100%;
              height: 100%;
              z-index: 9999;
              display: none;
              justify-content: center;
              align-items: center;
              position: absolute;
              cursor: pointer;
              color: #ffffff;
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