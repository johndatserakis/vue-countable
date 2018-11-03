import { shallowMount } from '@vue/test-utils'
import VueCountable from '@/vue-countable.vue'

describe('VueCountable.vue', () => {
    it('Sets props correctly', async () => {
        let initialPropsData = {
            elementId: 'first-div',
            text: 'We\'re like \'Friends\'. I am Chandler and Joey and, uh, Pam is Rachel. And Dwight is Kramer.'
        }

        const wrapper = shallowMount(VueCountable, {
            propsData: {
                elementId: initialPropsData.elementId,
                text: initialPropsData.text
            }
        })

        expect(wrapper.vm.elementId).toBe(initialPropsData.elementId)
        expect(wrapper.vm.text).toBe(initialPropsData.text)
    })
})