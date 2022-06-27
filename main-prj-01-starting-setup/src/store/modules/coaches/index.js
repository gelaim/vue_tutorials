import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Thiago',
          lastName: 'Gelaim',
          areas: ['frontend', 'backend', 'career'],
          description: 'blá blá blá ',
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Naiane',
          lastName: 'Salvi',
          areas: ['frontend', 'career'],
          description: 'blébléblé',
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
