<script setup>
import { Head, useForm } from '@inertiajs/inertia-vue3';
import AuthenticationCard from '@/Components/Inertia/AuthenticationCard.vue';
import InputError from '@/Components/Inertia/InputError.vue';
import InputLabel from '@/Components/Inertia/InputLabel.vue';
import PrimaryButton from '@/Components/Inertia/PrimaryButton.vue';
import TextInput from '@/Components/Inertia/TextInput.vue';
import HeaderComponent from '../../Layouts/headerComponent.vue';

defineProps({
    // eslint-disable-next-line vue/require-default-prop
    status: String,
});

const form = useForm({
    email: '',
});

const submit = () => {
    // eslint-disable-next-line no-undef
    form.post(route('password.email'));
};
</script>

<template>
    <Head title="Forgot Password" />
    <headerComponent></headerComponent>

    <AuthenticationCard>
        <div class="mb-4 text-sm text-gray-600">
            Vous avez oublié votre mot de passe ? Pas de problème. Donnez juste votre e-mail et nous vous fournirons un lien par e-mail pour en choisir un nouveau.
        </div>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email" />
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                    autofocus
                />
                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    M'envoyer un lien de réactivation
                </PrimaryButton>
            </div>
        </form>
    </AuthenticationCard>
</template>
