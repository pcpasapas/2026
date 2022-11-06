<script>
import { Head, Link } from "@inertiajs/inertia-vue3";
import logoComponent from "../Components/Perso/logoComponent.vue";
import NavbarComponent from "../Components/Perso/navbarComponent.vue";
import Dropdown from "../Components/Dropdown.vue";
import DropdownLink from "../Components/DropdownLink.vue";
import { Inertia } from "@inertiajs/inertia";
export default {
    props: {
        canLogin: Boolean,
        canRegister: Boolean,
    },
    methods: {
        logout() {
            Inertia.post(route("logout"));
        },
    },
    components: {
        logoComponent,
        NavbarComponent,
        Link,
        Head,
        Dropdown,
        DropdownLink,
    },
};
</script>

<template>
    <Head title="Welcome" />
    <div
        class="relative flex items-top justify-center bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"
    >
        <div
            v-if="canLogin"
            class="hidden fixed top-0 right-0 px-6 py-4 sm:block"
        >
            <div class="ml-3 relative" v-if="$page.props.user">
                <Dropdown align="right" width="48">
                    <template #trigger>
                        <button
                            v-if="$page.props.jetstream.managesProfilePhotos"
                            class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                        >
                            <img
                                class="h-8 w-8 rounded-full object-cover"
                                :src="$page.props.user.profile_photo_url"
                                :alt="$page.props.user.name"
                            />
                        </button>

                        <span v-else class="inline-flex rounded-md">
                            <button
                                type="button"
                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"
                            >
                                {{ $page.props.user.name }}

                                <svg
                                    class="ml-2 -mr-0.5 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                    </template>

                    <template #content>
                        <!-- Account Management -->

                        <DropdownLink :href="route('profile.show')">
                            Votre profil
                        </DropdownLink>

                        <DropdownLink
                            v-if="$page.props.jetstream.hasApiFeatures"
                            :href="route('api-tokens.index')"
                        >
                            API Tokens
                        </DropdownLink>

                        <div class="border-t border-gray-100" />

                        <!-- Authentication -->
                        <form @submit.prevent="logout">
                            <DropdownLink as="button">
                                Déconnexion
                            </DropdownLink>
                        </form>
                    </template>
                </Dropdown>
            </div>

            <template v-else>
                <Link
                    :href="route('login')"
                    class="text-sm text-gray-700 dark:text-gray-500 underline"
                    >Se connecter</Link
                >

                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                    >Créer un compte</Link
                >
            </template>
        </div>
        <div class="">
            <div class="logoConnect">
                <logoComponent msg="Pc pas à pas" />
                <!-- <LoginForm></LoginForm> -->
            </div>
            <NavbarComponent />
        </div>
    </div>
</template>
