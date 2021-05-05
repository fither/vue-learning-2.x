// import { expect } from 'chai';
// import { shallowMount } from '@vue/test-utils';

// TODO: Learn more about unit-testing

import Vue from 'vue';
import Preview from '@/components/Preview.vue';
import { expect } from 'chai';

describe('Preview.vue', () => {
  it('should render gifs', () => {
    const gifs = [
      { images: { fixed_height: { url: "baz.gif" } } },
      { images: { fixed_height: { url: "bar.gif" } } },
      { images: { fixed_height: { url: "foo.gif" } } }
    ];

    const container = document.createElement('div');
    const previewComponent = Vue.extend(Preview);
    const vm = new previewComponent({
      propsData: {
        gifs
      }
    });

    vm.$mount(container);

    expect(vm.gifs.length).to.equal(gifs.length);

    // are every gifs showed on component that send via props?
    expect(vm.$el.querySelectorAll('.gif-box').length).to.equal(gifs.length);

    // const wrapper = shallowMount(Preview, {
    //   propsData: { gifs }
    // });

    // expect(wrapper.find('.gif-box').length).to.equal(gifs.length);

  });
});
