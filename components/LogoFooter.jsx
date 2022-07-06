import Image from 'next/image'

export default function LogoFooter() {
  return (
      <div className="content">
        <Image
          src="/images/logo_footer.png"
          height={53} 
          width={55}
          layout="fixed"
          alt="Logo Eneva"
        />

        <style jsx>{`
          .content {
            width: 100%;
            max-width: 90px;
            height: 100%;
            max-height: 130px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #ffffff;
            margin: 0 0 0 25px;
          }

          `}
        </style>
      </div>
  )
}