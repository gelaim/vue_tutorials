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
  methods: {
    attackMonster() {
      const atackValue = getRandomValue(5, 12);
      this.monsterHealth -= atackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const atackValue = getRandomValue(5, 15);
      this.playerHealth -= atackValue;
      console.log("Player " + this.playerHealth);
      console.log("Monster " + this.monsterHealth);
    },
  },
});

app.mount("#game");
