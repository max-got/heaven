<script lang="ts">
	import { Phone, Mail } from '$icons';
	import { CONTACT_INFORMATIONS } from '$constants';
</script>

<div class="border-b py-3 dark:border-b-orange">
	<nav class="mx-auto flex max-w-md justify-around text-sm" aria-labelledby="contact-navigation">
		<a
			href={CONTACT_INFORMATIONS.phone.href}
			class="group flex flex-col items-center space-y-1 text-purple-800 transition-colors hover:text-purple-600 dark:text-purple-200 dark:hover:text-purple-100"
		>
			<Phone
				class="h-7 w-7 fill-purple transition-colors group-hover:fill-purple-900 dark:fill-purple-400 dark:group-hover:fill-orange"
			/>

			{CONTACT_INFORMATIONS.phone.text}
		</a>
		<a
			href={CONTACT_INFORMATIONS.mail.href}
			class="group flex flex-col items-center space-y-1 text-purple-800 transition-colors hover:text-purple-600 dark:text-purple-200 dark:hover:text-purple-100"
		>
			<Mail
				class="h-7 w-7 fill-purple transition-colors  group-hover:fill-purple-900 dark:fill-purple-400 dark:group-hover:fill-orange"
			/>

			{CONTACT_INFORMATIONS.mail.text}
		</a>
	</nav>
</div>
