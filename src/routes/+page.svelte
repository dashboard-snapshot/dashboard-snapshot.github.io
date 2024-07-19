<script>
	import { onMount } from "svelte";
	import HomeContent from "./HomeContent.svelte";
	import VideoContent from "./VideoContent.svelte";
	import SnapshotContent from "./SnapshotContent.svelte";
	import ComponentContent from "./ComponentContent.svelte";
	import TemplateContent from "./TemplateContent.svelte";
	import TemplateSpecContent from "./TemplateSpecContent.svelte";
	import TextExprContent from "./TextExprContent.svelte";
	import TemplateDesignContent from "./TemplateDesignContent.svelte";
	import CurationContent from "./CurationContent.svelte";
	import InterfaceDocument from "./InterfaceDocument.svelte";

	let currMenu = "home";
	let menus = [
		{ name: "Home", type: "home" },
		{ name: "Snapshot Formalization", type: "snapshot" },
		{ name: "Component Formalization", type: "component" },
		{ name: "Template Design Formalization", type: "template-formal" },
		{ name: "Template Configuration Formalization", type: "template-spec" },
		{ name: "Template Designs", type: "template-design" },
		{ name: "Curation Methods", type: "curation" },
		{ name: "Text Expressions", type: "text-expr" },
		{ name: "Scenario Videos", type: "video" },
		{ name: "Interface Documentation", type: "interface" },
	];

	function setMenu(m) {
		currMenu = m;
		localStorage.setItem("currMenu", m);
	}
	onMount(() => {
		currMenu = localStorage.getItem("currMenu") || "home";
	});
</script>

<svelte:head>
	<title>Dashboard Snapshot Supplementary Material</title>
</svelte:head>

<header>
	<h1>Dashboard Snapshot Supplementary Material</h1>
</header>
<div class="content-wrap">
	<nav>
		{#each menus as menu}
			<button
				id={"menu-" + menu.type}
				class={menu.type === currMenu ? "curr" : ""}
				on:click={() => {
					setMenu(menu.type);
				}}>{menu.name}</button
			>
		{/each}
	</nav>
	<main>
		{#if currMenu === "home"}
			<HomeContent goTo={setMenu} />
		{:else if currMenu === "interface"}
			<InterfaceDocument />
		{:else if currMenu === "video"}
			<VideoContent />
		{:else if currMenu === "snapshot"}
			<SnapshotContent />
		{:else if currMenu === "component"}
			<ComponentContent />
		{:else if currMenu === "template-formal"}
			<TemplateContent />
		{:else if currMenu === "template-spec"}
			<TemplateSpecContent />
		{:else if currMenu === "template-design"}
			<TemplateDesignContent />
		{:else if currMenu === "curation"}
			<CurationContent />
		{:else if currMenu === "text-expr"}
			<TextExprContent />
		{/if}
	</main>
</div>

<footer>
	<div>
		Made by <a href="https://hyeok.me">Hyeok Kim</a>.
	</div>
</footer>

<style>
	:root {
		--default-radius-desktop: 0.25rem;
		--default-radius-mobile: 0.25rem;
		--default-radius-print: 1.5mm;
	}
	/* layout out */
	:global(html) {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
	:global(*) {
		box-sizing: border-box;
	}
	@media screen {
		/* screen */
		:global(body) {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
		}
	}
	@media print {
		/* print */
		:global(body) {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 10mm;
		}
	}

	/* layout in */
	header,
	div.content-wrap,
	footer {
		width: 100%;
		max-width: 1400px;
		margin: auto;
	}
	h1 {
		font-weight: 600;
	}
	/* header */
	@media screen and (min-width: 951px) {
		/* desktop */
		header {
			border-bottom: 1px solid;
		}
		header h1 {
			padding: 1rem;
			margin: 0;
			font-size: 2rem;
		}
	}
	@media screen and (max-width: 950px) {
		/* mobile */
		header h1 {
			padding: 0.5rem;
			margin: 0;
			font-size: 1rem;
		}
	}
	@media print {
		/* print */
		header {
			padding-bottom: 2mm;
		}
		header h1 {
			padding: 0;
			margin: 0;
			font-size: 3.5mm;
		}
	}
	/* main */
	@media screen and (min-width: 951px) {
		/* desktop */
		div.content-wrap {
			display: flex;
		}
		div.content-wrap nav {
			width: 200px;
			padding: 1rem 0.5rem 1rem 1rem;
		}
		div.content-wrap main {
			width: calc(100% - 200px);
			padding: 1rem 1rem 1rem 0.5rem;
		}
	}
	@media screen and (max-width: 950px) {
		/* mobile */
		div.content-wrap {
			display: block;
		}
		div.content-wrap nav {
			width: 100%;
			padding: 0 0.5rem 0.5rem 0.5rem;
			margin-bottom: 0.5rem;
			border-bottom: 1px solid;
		}
		div.content-wrap main {
			width: 100%;
			padding: 0 0.5rem 0.5rem 0.5rem;
		}
	}
	@media print {
		/* print */
		nav {
			display: none;
		}
	}
	/* nav button */
	@media screen and (min-width: 951px) {
		/* desktop */
		div.content-wrap nav button {
			appearance: none;
			width: 100%;
			margin-bottom: 0rem;
			padding: 0.5rem;
			border: 1px solid;
			border-radius: 0;
			font-size: 1rem;
			cursor: pointer;
			text-align: left;
		}
		div.content-wrap nav button:hover {
			font-weight: 500;
		}
		div.content-wrap nav button:first-of-type {
			border-radius: var(--default-radius-desktop) var(--default-radius-desktop)
				0 0;
		}
		div.content-wrap nav button:last-of-type {
			border-radius: 0 0 var(--default-radius-desktop)
				var(--default-radius-desktop);
		}
		div.content-wrap nav button.curr {
			font-weight: 500;
		}
	}
	@media screen and (max-width: 950px) {
		/* mobile */
		div.content-wrap nav button {
			appearance: none;
			width: auto;
			margin-bottom: 0.25rem;
			margin-right: 0.25rem;
			padding: 0.5rem;
			border: 1px solid;
			font-size: 0.9rem;
			border-radius: var(--default-radius-mobile);
			cursor: pointer;
		}
		div.content-wrap nav button:hover {
			font-weight: 500;
		}
		div.content-wrap nav button.curr {
			font-weight: 500;
		}
	}

	/* content assets */
	@media screen and (min-width: 951px) {
		/* desktop */
		:global(div.content-wrap section p) {
			font-size: 0.9rem;
			margin: 0 0 0.5rem 0;
			line-height: 150%;
			max-width: 700px;
		}
		:global(div.content-wrap section h2) {
			font-size: 1.2rem;
			font-weight: 600;
			margin: 1rem 0 0.5rem 0;
			line-height: 150%;
			max-width: 700px;
		}
		:global(div.content-wrap section h3) {
			font-size: 1rem;
			font-weight: 500;
			margin: 0.5rem 0 0.5rem 0;
			line-height: 150%;
			max-width: 700px;
		}
		:global(div.content-wrap section h4) {
			font-size: 0.9rem;
			font-weight: 500;
			margin: 0.5rem 0 0 0;
			line-height: 150%;
			max-width: 700px;
		}
		:global(div.content-wrap section h5) {
			font-size: 0.8rem;
			font-weight: 700;
			margin: 0.5rem 0 0 0;
			line-height: 150%;
			max-width: 700px;
		}
		:global(div.content-wrap main *:first-child) {
			margin-top: 0;
		}
		:global(div.content-wrap main ul) {
			font-size: 0.9rem;
			margin: 0 0 0.5rem 0;
			padding: 0 0 0 1rem;
			line-height: 150%;
			max-width: 700px;
		}
		:global(div.content-wrap main li) {
			margin: 0 0 0.5rem 0;
			max-width: 500px;
		}
		:global(div.content-wrap main img) {
			margin: 0.25rem 0 0.25rem 0;
			max-width: 600px;
			border-radius: var(--default-radius-desktop);
		}
	}
	@media screen and (max-width: 950px) {
		/* mobile */
		:global(div.content-wrap main p) {
			font-size: 0.9rem;
			margin: 0 0 0.25rem 0;
			line-height: 150%;
			max-width: 700px;
		}
		:global(div.content-wrap main h2) {
			font-size: 1.1rem;
			font-weight: 600;
			margin: 1rem 0 0.5rem 0;
			line-height: 150%;
			max-width: 450px;
		}
		:global(div.content-wrap main h3) {
			font-size: 1rem;
			font-weight: 500;
			margin: 0.5rem 0 0.5rem 0;
			line-height: 150%;
			max-width: 450px;
		}
		:global(div.content-wrap main h4) {
			font-size: 0.9rem;
			font-weight: 500;
			margin: 0.5rem 0 0 0;
			line-height: 150%;
			max-width: 450px;
		}
		:global(div.content-wrap main h5) {
			font-size: 0.8rem;
			font-weight: 700;
			margin: 0.5rem 0 0 0;
			line-height: 150%;
			max-width: 450px;
		}
		:global(div.content-wrap main *:first-child) {
			margin-top: 0;
		}
		:global(div.content-wrap main ul) {
			font-size: 0.9rem;
			margin: 0 0 0.5rem 0;
			padding: 0 0 0 1rem;
			line-height: 150%;
			max-width: 500px;
		}
		:global(div.content-wrap main li) {
			margin: 0 0 0.5rem 0;
			max-width: 500px;
		}
		:global(div.content-wrap main img) {
			margin: 0.25rem 0 0.25rem 0;
			max-width: calc(100% - 1rem);
			border-radius: var(--default-radius-mobile);
		}
	}
	@media print {
		/* print */
		:global(div.content-wrap main p) {
			font-size: 2.5mm;
			color: cmyk(0, 0, 0, 0.9);
			margin: 0 0 0.25mm 0;
			line-height: 150%;
		}
		:global(div.content-wrap main h2) {
			font-size: 3mm;
			color: cmyk(0, 0, 0, 1);
			margin: 1mm 0 0.5mm 0;
			line-height: 150%;
			page-break-after: avoid;
		}
		:global(div.content-wrap main h3) {
			font-size: 2.5mm;
			color: cmyk(0, 0, 0, 1);
			margin: 1mm 0 0.5mm 0;
			line-height: 150%;
			page-break-after: avoid;
		}
		:global(div.content-wrap main h4) {
			font-size: 2.5mm;
			color: cmyk(0, 0, 0, 0.9);
			margin: 0.5mm 0 0 0;
			font-weight: 500;
			line-height: 150%;
			page-break-after: avoid;
		}
		:global(div.content-wrap main h5) {
			font-size: 2.3mm;
			color: cmyk(0, 0, 0, 0.8);
			margin: 0.5mm 0 0 0;
			font-weight: 600;
			line-height: 150%;
			page-break-after: avoid;
		}
		:global(div.content-wrap main *:first-child) {
			margin-top: 0;
		}
		:global(div.content-wrap main ul) {
			font-size: 2.5mm;
			color: cmyk(0, 0, 0, 0.9);
			margin: 0 0 0.25mm 0;
			line-height: 150%;
		}
		:global(div.content-wrap main img) {
			margin: 0.25mm 0 0.25mm 0;
			max-width: 100%;
			border-radius: var(--default-radius-print);
		}
	}

	/* footer */
	@media screen and (min-width: 951px) {
		/* desktop */
		footer {
			border-top: 1px solid;
		}
		footer div {
			padding: 1rem;
			font-size: 0.9rem;
		}
	}
	@media screen and (max-width: 950px) {
		/* mobile */
		footer {
			border-top: 1px solid;
		}
		footer div {
			padding: 0.5rem;
			font-size: 0.9rem;
		}
	}
	@media print {
		/* print */
		footer {
			padding-top: 5mm;
		}
		footer div {
			padding: 0;
			font-size: 2mm;
		}
	}

	/* color */
	/* light mode */
	@media (prefers-color-scheme: light) {
		:global(body) {
			background-color: #ffffff;
			color: #000000;
		}
		header,
		div.content-wrap nav {
			border-bottom-color: #dddddd;
		}
		footer {
			border-top-color: #dddddd;
			color: #999999;
		}
		:global(div.content-wrap main h2) {
			color: #000000;
		}
		:global(div.content-wrap main h3),
		:global(div.content-wrap main h4) {
			color: #212121;
		}
		:global(div.content-wrap main h5) {
			color: #666666;
		}
		:global(div.content-wrap main p),
		:global(div.content-wrap main ul) {
			color: #333333;
		}
		div.content-wrap nav button {
			border-color: #f9f9f9;
			background-color: #f9f9f9;
			color: #454545;
		}
		div.content-wrap nav button.curr,
		div.content-wrap nav button:hover {
			background-color: #e0f2f1;
		}
		div.content-wrap nav button.curr {
			border-color: #00796b;
			color: #00796b;
		}
	}

	/* darkmode */
	@media (prefers-color-scheme: dark) {
		:global(body) {
			background-color: #263238;
			color: #f0f0f0;
		}
		header,
		div.content-wrap nav {
			border-bottom-color: #454545;
		}
		footer {
			border-top-color: #454545;
			color: #999999;
		}
		:global(div.content-wrap main h2) {
			color: #f0f0f0;
		}
		:global(div.content-wrap main h3),
		:global(div.content-wrap main h4) {
			color: #eaeaea;
		}
		:global(div.content-wrap main h5) {
			color: #eaeaea;
		}
		:global(div.content-wrap main p),
		:global(div.content-wrap main ul) {
			color: #e0e0e0;
		}
		:global(a),
		:global(a:visited) {
			color: #b3e5fc;
		}
		div.content-wrap nav button {
			border-color: #37474f;
			background-color: #37474f;
			color: #f0f0f0;
		}
		div.content-wrap nav button.curr,
		div.content-wrap nav button:hover {
			background-color: #004d40;
		}
		div.content-wrap nav button.curr {
			border-color: #e0f2f1;
			color: #e0f2f1;
		}
	}
</style>
