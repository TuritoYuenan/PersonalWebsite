<!-- @component Set current page's metadata in the head tag -->

<script lang="ts">
	/** Current page's title */
	export let title: string;

	/** Current page's description or purpose */
	export let desc: string = "Turito Yuenan's website";
</script>

<svelte:head>
	<title>{title ? title + ' | ' : ''}Turito Yuenan</title>
	<meta name="description" content={desc} />
	<slot />
</svelte:head>
