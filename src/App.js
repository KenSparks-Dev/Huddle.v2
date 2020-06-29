import React from 'react';
import './App.css';
import MainImage from './components/MainImage';
import  Text  from './components/Text';
import 'font-awesome/css/font-awesome.css';
import Footer from './components/Footer';
// import Random from './components/Random'; remove comment syntax to reveal props practice
function App() {

	const links = [
		{
			url: 'https://www.linkedin.com/in/kensparks90/',
			icon: 'fa fa-linkedin fa-lg'
		},
		{
			url: 'https://twitter.com/KenSparks90',
			icon: 'fa fa-twitter fa-lg'
		},
		{
			url: 'https://www.instagram.com/kensparks90/',
			icon: 'fa fa-instagram fa-lg'
		},
		{
			url: 'https://github.com/KenSparksDev/Huddle.v2',
			icon: 'fa fa-github fa-lg'
		}
]

// const random = [
// 	{
// 		name: "Ken",
// 		food:"cheese burger",
// 		color: "Black",
// 		song: "Another Me by Andy Mineo",
// 		movie: "Lion King",
// 		writer: "Rick Remender"
// 	},
// 	{
// 			name:"Mel",
// 			food: "Sushi",
// 			color: "Green",
// 			song: "Any song by Masego",
// 			movie: "Hookers in Revolt",
// 			writer: "Lemony Snicket"
// 	}
// ] remove notation to see props practice 

	return (
		<div className="App">
			<div className="container d-flex justify-content-center">
				<div className="row text-md-center image-text-container">
					<div className="col-lg-7 col-xl-7 pr-xl-5 text-lg-left">
						< MainImage headerIcon = {"fa fa-comments"}
						header="Huddle Dark" />
					</div>
					{/* < Random random = {random}/> remove notation to see props practice */}
					<div className="col-lg-5 col-xl-5 p-xl-5 text-center text-lg-left">
						< Text textTitle = {'Build The Community Your Fans Will Hate'} textPara = {'Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion'} button= 'Register'/>
					</div>
				</div>
			</div>
			<Footer links={links}/>
		</div>
	);
}

export default App;
