import React, { useState } from 'react';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import './App.css';
import Logo from './components/common/Logo';

function App() {
	return (
		<div className="App">
			<nav className="nav">
				<Logo />
				<h1 style={{ marginLeft: 10 }}>Invoice Creator</h1>
			</nav>
		</div>
	);
}

export default App;
