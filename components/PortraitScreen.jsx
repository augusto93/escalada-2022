import Image from "next/image";

export default function PortraitScreen() {
  return (
    <>
      <div className="container">
        <div className="image">
          <Image src="/images/phone.svg" width={82} height={82} layout="fixed" alt="telefone"/>
        </div>
        <span>O app só funciona em modo paisagem.</span>
        <span>Rotacione a tela.</span>
        <style jsx>{`
          .container {
            width: 100%;
            height: 100%;
            background-color:rgba(0,0,0,0.8);
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            color: #ffffff;
            font-size: 1.25rem;
          }

          .image {
            margin: 0 0 20px 0;
          }

          @media (orientation: portrait) {
            .container {
            display: flex;
            }
          }

          `}
        </style>
      </div>
    </>
  )
}