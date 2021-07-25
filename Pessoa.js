export default class Pessoa {
  table = () => {
    return {
      name: "pessoa",
      increments: true,
      timestamps: true,
      columns: [
        {name: "nome", datatype: ["varchar", 100], nullable: false},
        {name: "sobrenome", datatype: ["varchar", 200], nullable: true},
        {name: "idade", datatype: ["integer"], nullable: false},
        {name: "ativo", datatype: ["boolean"], nullable: false, default: "true"},
        {name: "nascimento", datatype: ["date"], nullable: false},
        {name: "test", datatype: ["integer"], nullable: true},
      ]
    }
  }
}
