<!-- eslint-disable no-undef -->
<!-- eslint-disable vue/require-default-prop -->
<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import ActionMessage from '@/Components/Inertia/ActionMessage.vue';
import ActionSection from '@/Components/Inertia/ActionSection.vue';
import DialogModal from '@/Components/Inertia/DialogModal.vue';
import InputError from '@/Components/Inertia/InputError.vue';
import PrimaryButton from '@/Components/Inertia/PrimaryButton.vue';
import SecondaryButton from '@/Components/Inertia/SecondaryButton.vue';
import TextInput from '@/Components/Inertia/TextInput.vue';

defineProps({
    sessions: Array,
});

const confirmingLogout = ref(false);
const passwordInput = ref(null);

const form = useForm({
    password: '',
});

const confirmLogout = () => {
    confirmingLogout.value = true;

    setTimeout(() => passwordInput.value.focus(), 250);
};

const logoutOtherBrowserSessions = () => {
    form.delete(route('other-browser-sessions.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingLogout.value = false;

    form.reset();
};
</script>

<template>
    <ActionSection>
        <template #title>
            Sessions en cours
        </template>

        <template #description>
            Gérer et se déconnecter des sessions en cours sur les navigateurs.
        </template>

        <template #content>
            <div class="max-w-xl text-sm text-gray-600">
                Vous pouvez vous déconnecter des sessions en cours sur vos appareils et navigateurs. Vos sessions sont affichées ici, cette liste peut ne pas être exhaustive. Si vous pensez que votre mot de passe est corrumpu vous pouvez le modifier.
            </div>

            <!-- Other Browser Sessions -->
            <div v-if="sessions.length > 0" class="mt-5 space-y-6">
                <div v-for="(session, i) in sessions" :key="i" class="flex items-center">
                    <div>
                        <svg
                            v-if="session.agent.is_desktop"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="w-8 h-8 text-gray-500"
                        >
                            <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>

                        <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="w-8 h-8 text-gray-500"
                        >
                            <path d="M0 0h24v24H0z" stroke="none" /><rect
                                x="7"
                                y="4"
                                width="10"
                                height="16"
                                rx="1"
                            /><path d="M11 5h2M12 17v.01" />
                        </svg>
                    </div>

                    <div class="ml-3">
                        <div class="text-sm text-gray-600">
                            {{ session.agent.platform ? session.agent.platform : 'Unknown' }} - {{ session.agent.browser ? session.agent.browser : 'Unknown' }}
                        </div>

                        <div>
                            <div class="text-xs text-gray-500">
                                {{ session.ip_address }},

                                <span v-if="session.is_current_device" class="text-green-500 font-semibold">
                                    Cet appareil</span>
                                <span v-else>
                                    Dernière activité {{ session.last_active }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center mt-5">
                <PrimaryButton @click="confirmLogout">
                    Se déconnecter
                </PrimaryButton>

                <ActionMessage :on="form.recentlySuccessful" class="ml-3">
                   Déconnecté.
                </ActionMessage>
            </div>

            <!-- Log Out Other Devices Confirmation Modal -->
            <DialogModal :show="confirmingLogout" @close="closeModal">
                <template #title>
                    Se déconnecter
                </template>

                <template #content>
                    Merci d'entrer votre mot de passe pour confirmer que vous voulez vous déconnecter de vos sessions.

                    <div class="mt-4">
                        <TextInput
                            ref="passwordInput"
                            v-model="form.password"
                            type="password"
                            class="mt-1 block w-3/4"
                            placeholder="Mot de passe"
                            @keyup.enter="logoutOtherBrowserSessions"
                        />

                        <InputError :message="form.errors.password" class="mt-2" />
                    </div>
                </template>

                <template #footer>
                    <SecondaryButton @click="closeModal">
                        Annuler
                    </SecondaryButton>

                    <PrimaryButton
                        class="ml-3"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="logoutOtherBrowserSessions"
                    >
                    Se déconnecter
                    </PrimaryButton>
                </template>
            </DialogModal>
        </template>
    </ActionSection>
</template>
