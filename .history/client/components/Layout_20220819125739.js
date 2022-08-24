import Head from 'next/head'
import NavbarMenu from './NavbarMenu'
import Script from 'next/script'
import { useState, useEffect } from 'react'

useEffect(() => {
  loadUser()
}, [authState.isAuthenticated])
const Layout = ({ children }) => (
	<div>
		<Head>
			<meta charset='UTF-8' />
			<meta http-equiv='X-UA-Compatible' content='IE=edge' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<title>Draw App</title>
      <script src="https://kit.fontawesome.com/cd2089affa.js" crossorigin="anonymous"></script>
		</Head>

		<header>
			<NavbarMenu />
		</header>

		<main>{children}</main>

	</div>
)

export default Layout
