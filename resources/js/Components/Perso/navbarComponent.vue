<script>
import { Link } from '@inertiajs/inertia-vue3'
export default {
    components: {
        // eslint-disable-next-line vue/no-reserved-component-names
        Link
    }
}
</script>

<template>
    <nav>
        <Link href="/">Accueil</Link>
        <Link href="/configurateur">Configurateur </Link>
        <Link href="/tutos">Tutoriels</Link>
        <Link href="/alims">Api</Link>
    </nav>
</template>

<style>
nav {
    width: 100%;
    padding: 0;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 0.5rem;
    border-radius: 10px;
    border: 1px solid bisque;
    background-color: rgb(116, 180, 230);
}

nav a.link-exact-active {
    color: white;
    pointer-events: none;
    background-color: rgb(32, 78, 112);
}

nav a {
    display: inline-block;
    padding: 1rem;
    border-radius: 50%;
    border-left: 1px solid var(--color-border);
    text-decoration: none;
}

nav a:first-of-type {
    border: 0;
}
</style>
