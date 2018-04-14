<template>
		<li class="menu-p-right">
			<nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
			<ul v-if="item.sub">
				<menu-item v-for="subitem in item.sub" :item="subitem" :key="subitem.url" />
			</ul>
		</li>
</template>

<style lang="scss" scoped>
</style>

<script>
export default {
	name: 'MenuItem',
	props: ['item']
}
</script>