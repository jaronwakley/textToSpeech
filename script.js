let app = new Vue({
  el: '#app',
  data: {
    Name: '',
    Gender: '',
    Language: '',
    addedName: '',
  },
  methods: {
    getNameInfoBefore(){
      this.getNameInfo(this.addedName);
    },
    async getNameInfo(name) {
      const response = await axios.get('https://www.behindthename.com/api/lookup.json/?key=ja197142243&name=' + name);
      if (response.data[0].gender == "f")
      {
        this.Gender = "Female";
      }
      else if (response.data[0].gender == "m")
      {
        this.Gender = "Male";
      }
      else if (response.data[0].gender == "mf")
      {
        this.Gender = "Either";
      }
      this.Name = name;
      this.Language = response.data[0].usages[0].usage_full;
    },
    async getRandomName() {
        const response = await axios.get('https://www.behindthename.com/api/random.json/?key=ja197142243');
        await this.getNameInfo(response.data.names[0]);
    }
  }
  
});