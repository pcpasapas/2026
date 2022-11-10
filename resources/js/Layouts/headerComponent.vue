<!-- eslint-disable vue/no-reserved-component-names -->
<!-- eslint-disable no-undef -->
<script>
import { Head, Link } from '@inertiajs/inertia-vue3'
import logoComponent from '../Components/Perso/logoComponent.vue'
import NavbarComponent from '../Components/Perso/navbarComponent.vue'
import Dropdown from '../Components/Inertia/Dropdown.vue'
import DropdownLink from '../Components/Inertia/DropdownLink.vue'
import { Inertia } from '@inertiajs/inertia'
export default {
    props: {
        canLogin: Boolean,
        canRegister: Boolean
    },
    methods: {
        logout() {
            Inertia.post(route('logout'))
        }
    },
    data() {
        return {
            showingNavigationDropdown: false
        }
    },
    components: {
        logoComponent,
        NavbarComponent,
        Link,
        Head,
        Dropdown,
        DropdownLink,
    }
}
</script>

<template>
    <Head title="Bienvenue" />
    <div
        class="relative flex items-top justify-center bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"
    >
        <div class="fixed top-0 right-0 px-0 sm:px-6 py-4">
            <div class="ml-3 mr-0 relative sm:block" v-if="$page.props.user">
                <Dropdown align="right" width="48">
                    <template #trigger>
                        <span class="inline-flex rounded-md ">
                            <button
                                type="button"
                                class="inline-flex items-center m-0 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"
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
                <div class="flex justify-center flex-col">
                    <Link
                        :href="route('login')"
                        class="text-xl px-3 m-3 text-center text-white dark:text-gray-500 bg-blue-400 rounded-full"
                    >
                        Se connecter
                    </Link>

                    <Link
                        :href="route('register')"
                        class="text-xl px-3 m-3 text-center text-white dark:text-gray-500 bg-blue-400 rounded-full"
                    >
                        Créer un compte
                    </Link>
                </div>
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

<style>


</style>
