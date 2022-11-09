<!-- eslint-disable no-undef -->
<script setup>
import { ref } from 'vue'
import { useForm } from '@inertiajs/inertia-vue3'
import ActionSection from '@/Components/Inertia/ActionSection.vue'
import DangerButton from '@/Components/Inertia/DangerButton.vue'
import DialogModal from '@/Components/Inertia/DialogModal.vue'
import InputError from '@/Components/Inertia/InputError.vue'
import SecondaryButton from '@/Components/Inertia/SecondaryButton.vue'
import TextInput from '@/Components/Inertia/TextInput.vue'

const confirmingUserDeletion = ref(false)
const passwordInput = ref(null)

const form = useForm({
    password: ''
})

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true

    setTimeout(() => passwordInput.value.focus(), 250)
}

const deleteUser = () => {
    form.delete(route('current-user.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
    })
}

const closeModal = () => {
    confirmingUserDeletion.value = false

    form.reset()
}
</script>

<template>
    <ActionSection>
        <template #title>
             Supprimer votre compte 
            </template>

        <template #description>
            Suppression permanente de votre compte
        </template>

        <template #content>
            <div class="max-w-xl text-sm text-gray-600">
                Une fois votre compte supprimé, toutes vos informations et votre
                panier seront supprimés.
            </div>

            <div class="mt-5">
                <DangerButton @click="confirmUserDeletion">
                    Suppression du compte
                </DangerButton>
            </div>

            <!-- Delete Account Confirmation Modal -->
            <DialogModal :show="confirmingUserDeletion" @close="closeModal">
                <template #title>
                     Supprimer le compte
                     </template>

                <template #content>
                    Etes vous sûr(e) de vouloir supprimer votre compte ? Une
                    fois votre compte supprimé, toutes vos informations et votre
                    panier seront supprimés.
                    <br />
                    <p>Entrez votre mot de passe pour supprimer votre compte</p>

                    <div class="mt-4">
                        <TextInput
                            ref="passwordInput"
                            v-model="form.password"
                            type="password"
                            class="mt-1 block w-3/4"
                            placeholder="Mot de passe"
                            @keyup.enter="deleteUser"
                        />

                        <InputError
                            :message="form.errors.password"
                            class="mt-2"
                        />
                    </div>
                </template>

                <template #footer>
                    <SecondaryButton @click="closeModal">
                        Annuler
                    </SecondaryButton>

                    <DangerButton
                        class="ml-3"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="deleteUser"
                    >
                        Supprimer votre compte
                    </DangerButton>
                </template>
            </DialogModal>
        </template>
    </ActionSection>
</template>
