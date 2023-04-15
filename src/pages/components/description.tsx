import React from 'react';

const Description: React.FC = () => {
	return (
		<div className='description'>
			<div className='title'>Testador de teclado online: verifique o funcionamento das teclas do seu teclado!</div>
			<div className='subTitle'>
				Olá! Nós somos um website testador de teclado e estamos aqui para ajudá-los a verificar se todas as teclas do seu teclado estão
				funcionando corretamente.
				<br /> Somos uma ferramenta simples e fácil de usar, projetada para proporcionar uma experiência em primeira pessoa ao testar o seu
				teclado.
			</div>
			<div className='subTitle'>Algumas opções adicionais que podem ser encontradas em um testador de teclado incluem:</div>
			<ul className='subTitle'>
				<li>
					Visualização do layout do teclado: para que o usuário possa verificar se as teclas estão correspondendo corretamente com as letras e
					caracteres exibidos na tela;
				</li>
				<li>
					Detecção de teclas pressionadas simultaneamente: para verificar se o teclado suporta a digitação de múltiplas teclas ao mesmo tempo
					(como no caso de jogos que exigem o uso de teclas de atalho);
				</li>
			</ul>
			<div className='subTitle'>
				Essas ferramentas são úteis para quem precisa testar um teclado novo, verificar se as teclas estão funcionando corretamente ou avaliar
				sua própria digitação.
			</div>
			<div className='subTitle'>
				Estamos aqui para ajudá-los a testar um teclado novo, verificar se as teclas estão funcionando corretamente. Esperamos que você tenha uma
				experiência agradável e útil ao utilizar nossa plataforma.
			</div>
		</div>
	);
};

export default Description;
