import Header from './componentes/Header';
import Container from './componentes/Container';
import { Input } from './componentes/Input';
import Button from './componentes/Button';

export default function Home() {
    return (
        <main className='min-h-screen flex flex-col'>
            <Header />
            <div className='mx-auto w-full h-full flex flex-1 items-center justify-center'>
                <Container>
                    <div className='max-w-[580px] w-full bg-secondary p-4 rounded-lg'>
                        <div>
                            <span>Ingressar</span>
                            <span>Nova Reunião</span>
                        </div>
                        <div className='space-y-4'>
                            <Input placeholder='Seu nome' type='text' />
                            <Input placeholder='ID da reunião' type='text' />
                            <Button title='Entrar' type='button' />
                        </div>
                    </div>
                </Container>
            </div>
        </main>
    );
}
