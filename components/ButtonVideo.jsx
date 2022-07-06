import Image from 'next/image'

export default function ButtonVideo({videoOpen, setVideoOpen}) {
  return (
    <div className='content' 
      onClick={() => {setVideoOpen(!videoOpen)}}
    >
      <div className='ico'>
        <Image
          src="/images/play.png"
          height={29} 
          width={29}
          layout="fixed"
          alt="Botão de play"
        />
      </div>
      <div className="text">
        <p>Confira o video-resumo da nossa Escalada</p>
        <p>Acesse a intranet para assistir aos outros vídeos</p>
      </div>

      <style jsx> {`
        .content {
          width: 340px;
          height: 55px;
          background-color: #fab31d;
          border-radius: 15px;
          display: flex;
          justify-content: space-between;
          cursor: pointer;
          transition: transform 0.4s;
        }

        .content:hover {
          transform: scale(1.05);
        }

        .ico{
          width: 100%;
          max-width: 49px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 0 0 8px;
        }

        .text {
          width: 100%;
          max-width: 331px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 0 0 -8px;
        }

        .text :first-child {
          font-weight: bold;
        }

        p {
          font-size: 0.6875rem;
          color: #006269;
          margin: 0;
        }

      `}
      </style>
      
    </div>
  )
}