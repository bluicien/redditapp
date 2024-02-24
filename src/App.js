import React from 'react';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
// import { Counter } from './features/counter/Counter';
import './App.css';
import SignUp from './components/SignUp';
import Root from './components/Root.js';
import Login from './components/Login.js';
import RedditPosts from './features/redditPosts/RedditPosts.js';

const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={ <Root/> } >
		<Route path='sign-up' element={ <SignUp /> } />
		<Route path='login' element={ <Login /> } />
		<Route path='/' element={ <RedditPosts />} />
	</Route>
));

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
