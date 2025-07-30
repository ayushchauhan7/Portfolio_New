import React from 'react';
import {HeroText} from "../components/HeroText.jsx";
import {ParallaxBackground} from "../components/ParallaxBackground.jsx";

export const Hero = () => {
	return (
		<section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
			<HeroText />
			<ParallaxBackground />
		</section>
	);
};
