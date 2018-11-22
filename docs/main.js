const app = new Vue({
  el: '#app',
  data: {
    loaded: false,
    userData: {},
    avatar: '',
  },
  methods: {
    fetchAvatar(userName) {
      const vm = this;
      fetch(`https://api.github.com/users/${userName}`)
        .then(resp => resp.json())
        .then(data => (vm.avatar = data.avatar_url));
    },
  },
  computed: {
    codewarsProfile() {
      return `https://www.codewars.com/users/${this.userData.username}`;
    },
  },
  created() {
    const vm = this;
    fetch('https://cors-anywhere.herokuapp.com/https://www.codewars.com/api/v1/users/erdembircan')
      .then(resp => resp.json())
      .then((data) => {
        vm.loaded = true;
        vm.userData = data;
        this.fetchAvatar('erdembircan');
      });
  },
});
