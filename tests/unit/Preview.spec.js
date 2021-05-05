import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Preview from '@/components/Preview.vue';

describe('Preview.vue', () => {
  it('should render gifs', () => {
    const gifs = [
      {
        images: {
          fixed_height: {
            url: "baz.gif"
          }
        }
      },
      {
        images: {
          fixed_height: {
            url: "bar.gif"
          }
        }
      },
      {
        images: {
          fixed_height: {
            url: "foo.gif"
          }
        }
      }
    ];



  });
});
