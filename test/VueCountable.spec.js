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

    it('Reads sentence character count correctly', async () => {
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

        wrapper.vm.$nextTick(() => {
            expect(wrapper.emitted('change')).toBeTruthy()
            expect(wrapper.emitted('change')[0][0].paragraphs).toBe(1)
            expect(wrapper.emitted('change')[0][0].sentences).toBe(3)
            expect(wrapper.emitted('change')[0][0].words).toBe(17)
            expect(wrapper.emitted('change')[0][0].characters).toBe(74)
            expect(wrapper.emitted('change')[0][0].all).toBe(90)
        })
    })

    it('Reads long text character count correctly', async () => {
        let initialPropsData = {
            elementId: 'first-div',
            text: 'Yes, I was the first one out. And, yes, I\'ve heard women and children first. But, we do not employ children. We are not a sweat shop. Thankfully. And, women are equal in the workplace by law. So, I let them out first, I have a lawsuit on my hands.'
        }

        const wrapper = shallowMount(VueCountable, {
            propsData: {
                elementId: initialPropsData.elementId,
                text: initialPropsData.text
            }
        })

        expect(wrapper.vm.elementId).toBe(initialPropsData.elementId)
        expect(wrapper.vm.text).toBe(initialPropsData.text)

        wrapper.vm.$nextTick(() => {
            expect(wrapper.emitted('change')).toBeTruthy()
            expect(wrapper.emitted('change')[0][0].paragraphs).toBe(1)
            expect(wrapper.emitted('change')[0][0].sentences).toBe(7)
            expect(wrapper.emitted('change')[0][0].words).toBe(50)
            expect(wrapper.emitted('change')[0][0].characters).toBe(198)
            expect(wrapper.emitted('change')[0][0].all).toBe(247)
        })
    })
})