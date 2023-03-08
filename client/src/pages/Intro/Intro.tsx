import React, { useState } from 'react';
import { IntroSubTextWrapper, IntroTextWrapper, IntroWrapper, LogoImgWrapper, LogoIntoWrapper } from '@src/pages/Intro/style';
import Typical from 'react-typical';
import { Button } from '@components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@src/pages/Intro/Logo/Logo';

export const Intro: React.FC = () => {
	const [isDone, setDone] = useState(false);
	const [isNavigating, setNavigating] = useState(false);
	const navigate = useNavigate();
	const typicalDoneHandler = () => {
		setDone(true);
	};
	
	const navigateToMap = () => {
		setNavigating(true);
		setTimeout(() => {
			navigate('/map');
		}, 400);
	};
	
	return (
		<IntroWrapper>
			<IntroTextWrapper isDone={isDone} isNavigating={isNavigating}>
				<LogoIntoWrapper isDone={isDone}>
					<LogoImgWrapper>
						{isDone && (
							<>
								<Logo/>
							</>
						)}
					</LogoImgWrapper>
					<h1>
						{isDone ? <span>СПОГАДИ</span> : (
							<Typical
								key="done"
								steps={!isDone ? [1000, 'С', 80, 'СП', 80, 'СПО', 80, 'СПОГ', 80, 'СПОГА', 80, 'СПОГАД', 80, 'СПОГАДИ', 80, typicalDoneHandler] : ['СПОГАДИ']}
								loop={1}
								wrapper="p"
							/>
						)}
					</h1>
				</LogoIntoWrapper>
				{isDone && (
					<IntroSubTextWrapper>
						<p>книга пам&rsquo;яті</p>
						<Typical
							key="done"
							steps={['незламних', 3000, 'вільних', 3000, 'нескорених', 3000, 'останніх визвольних змагань']}
							loop={1}
							wrapper="p"
						/>
						<Button onClick={() => navigateToMap()} title="Переглянути" margin="30px 0 0 0" padding="20px 35px" fz="20px"/>
					</IntroSubTextWrapper>
				)}
			</IntroTextWrapper>
		</IntroWrapper>
	);
};
