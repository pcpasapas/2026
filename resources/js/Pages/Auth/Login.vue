<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable no-undef -->
<!-- eslint-disable vue/require-default-prop -->
<script setup>
import { Head, Link, useForm } from '@inertiajs/inertia-vue3'
import AuthenticationCard from '@/Components/Inertia/AuthenticationCard.vue'
import Checkbox from '@/Components/Inertia/Checkbox.vue'
import InputError from '@/Components/Inertia/InputError.vue'
import InputLabel from '@/Components/Inertia/InputLabel.vue'
import PrimaryButton from '@/Components/Inertia/PrimaryButton.vue'
import TextInput from '@/Components/Inertia/TextInput.vue'
import HeaderComponent from '../../Layouts/headerComponent.vue'

defineProps({
    canResetPassword: Boolean,
    status: String
})

const form = useForm({
    email: '',
    password: '',
    remember: false
})

const submit = () => {
    form.transform((data) => ({
        ...data,
        remember: form.remember ? 'on' : ''
    })).post(route('login'), {
        onFinish: () => form.reset('password')
    })
}
</script>

<template>
    <!-- eslint-disable vue/singleline-html-element-content-newline -->
    <HeaderComponent></HeaderComponent>
    <Head title="Log in" />

    <AuthenticationCard>
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

            <div class="mt-4">
                <InputLabel for="password" value="Mot de passe" />
                <TextInput
                    id="password"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="current-password"
                />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.remember" name="remember" />
                    <span class="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm text-gray-600 hover:text-gray-900"
                >
                    Mot de passe oublié?
                </Link>

                <PrimaryButton
                    class="ml-4"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    Se connecter
                </PrimaryButton>
            </div>
        </form>
    </AuthenticationCard>
</template>
