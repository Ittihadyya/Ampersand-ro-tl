<script setup lang="ts">
	import {
		IonAvatar,
	} from "@ionic/vue";

	import { Member } from '../../lib/db/entities';
	import { getBlobURL } from '../../lib/util/blob';

	const props = defineProps<{
		member: Member,
	}>();
</script>

<template>
	<IonAvatar class="with-outline" :style="{ outlineColor: props.member.color }" v-if="props.member.image">
		<img aria-hidden="true" :src="getBlobURL(props.member.image)" />
	</IonAvatar>
</template>

<style scoped>
	ion-avatar.with-outline {
		outline-width: 2px;
		outline-style: solid;
	}
</style>