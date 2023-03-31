import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex box-border items-center flex-center py-[2%] pl-[5%] pr-[1%] bg-slate-950 h-[100vh] w-full">
      <div className="flex flex-center flex-col w-[45%] p-2">
        <div className='p-2'><Image
          src="alura.svg" width="200" height="100" alt='Logo Alura' />
        </div>
        <div>
          <h1 className='font-bold text-center text-6xl py-2'>Alura Cases</h1>
        </div>
        <div className="flex flex-row flex-1 gap-1 text-center items-center justify-start" >
          <p className="text-sm font-semibold bg-violet-500 p-1 rounded-xl">O que tem de novo?</p>
          <p className="text-sm font-semibold">Confira as principais dúvidas <b className='text-violet-500'>&gt;</b></p>
        </div>
        <div className=''>
          <p className='p-2'>O Alura Cases é uma plataforma online que conecta empresas que buscam soluções personalizadas de negócios com estudantes e profissionais de tecnologia capacitados. A plataforma oferece diversos desafios em áreas como desenvolvimento de software, design, marketing digital e análise de dados. As empresas cadastradas podem criar briefings detalhados para cada desafio, enquanto os estudantes e profissionais têm a oportunidade de aplicar seus conhecimentos em projetos reais e aprender com a experiência. A plataforma também oferece uma comunidade ativa de alunos e profissionais que compartilham conhecimentos e experiências, além de suporte especializado.</p>
          <p className='text-center text-xl font-semibold'>
            Quer testar antes de todo mundo?
          </p>
        </div>
        <form className='w-3/4 flex flex-1 gap-2 justify-between m-auto p-2'>
          <input className=' text-slate-950 w-2/3 rounded-xl p-2 text-md bg-slate-300' placeholder='Insira seu e-mail' />
          <button className='bg-violet-500 font-bold rounded-xl p-2 text-md w-1/3'>Cadastrar</button>

        </form>
      </div>
      <div className=' absolute -right-1/4'>
        <Image className='   rounded-xl shadow-md shadow-black' src="/alura-cases.png" width="800" height="380" priority alt='Site do alura cases' />
      </div>
    </main>
  )
}
