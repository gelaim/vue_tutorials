function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
  },
  methods: {
    attackMonster() {
      const atackValue = getRandomValue(5, 12);
      this.monsterHealth -= atackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const atackValue = getRandomValue(5, 15);
      this.playerHealth -= atackValue;
    },
    specialAttackMonster() {
      const atackValue = getRandomValue(10, 25);
      this.monsterHealth -= atackValue;
      this.attackPlayer();
    },
  },
});

app.mount("#game");
