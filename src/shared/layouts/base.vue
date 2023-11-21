<template>
	<section class="h-full w-full flex flex-col">
		<div class="parent-routes flex justify-center items-center bg-slate-200 pt-10 gap-x-[1px] border-b">
			<router-link
				v-for="item in routesLinks"
				:to="{ name: item.name }"
				class="border-b-2 p-2 rounded-se-md rounded-ss-md transition-all duration-300 hover:no-underline"
			>
				<p class="m-0 text-black">{{ item.text }}</p>
			</router-link>
		</div>
		<router-view />
	</section>
</template>

<script setup>

const routesLinks = [
	{
		text: 'QUILL EDITOR',
		name: 'quill.editor',
	},
	{
		text: 'PINIA',
		name: 'pinia',
	},
	{
		text: 'MAIN',
		name: 'content.main',
	},
	{
		text: 'FullCalendar',
		name: 'full.calendar',
	},
	{
		text: 'CROPPER',
		name: 'content.cropper',
	},
	{
		text: 'FILE-POND',
		name: 'file.pond',
	},
]

</script>

<style lang="scss" scoped>
.parent-routes{
	.router-link-active.router-link-exact-active{
		border-bottom: 2px solid black;
		background-color: grey;
		p{
			color: white !important;
		}
	}
	a{
		&:hover{
			border-bottom: 2px solid black;
			background-color: grey;
			p{
				color: white;
			}
		}
	}
}


</style>