import Image from 'next/image'

export default function LogoFooter() {
  return (
      <div className="content">
        <Image
          src="/images/logo_header.png"
          height={309} 
          width={249}
          layout="fixed"
          alt="Logo Eneva"
        />

        <style jsx>{`
          .content {
            width: 100%;
            max-width: 249px;
            height: 100%;
            max-height: 309px;
            position: relative;
          }

          `}
        </style>
      </div>
  )
}