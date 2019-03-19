const fs = require('fs');

var groups_data;

const new_groups =
{
  food_var:
    [
      {
        name: "ЭКОНОМ ОБЕД",
        menu:
        [
          {
            name: "Морковь с сахаром, яблоком, курагой, р/м",
            weight: [100],
            units: ["гр"],
            price: 25.00
          },
          {
            name: "Рассольник \"Ленинградский\" с курицей, сметаной",
            weight: [35, 250, 10],
            units: ["гр", "гр", "гр"],
            price: 50.00
          },
          {
            name: "Котлета куриная, рубленная",
            weight: [100],
            units: ["гр"],
            price: 75.00
          },
          {
            name: "Рис, припущенный в бульоне",
            weight: [150],
            units: ["гр"],
            price: 20
          },
          {
            name: "Чай с сахаром",
            weight: [200, 16],
            units: ["мл", "гр"],
            price: 15.00
          }
        ]
      },
      {
        name: "ДИЕТИЧЕСКИЕ БЛЮДА",
        menu:
        [
          {
            name: "Каша молочная рисовая с маслом",
            weight: [250],
            units: ["гр"],
            price: 40.00
          },
          {
            name: "Пудинг творожный с изюмом, сгущенным молоком",
            weight: [150, 20],
            units: ["гр", "гр"],
            price: 60.00
          },
          {
            name: "Пудинг творожный с изюмом, сметаной",
            weight: [150, 20],
            units: ["гр", "гр"],
            price: 60.00
          }
        ]
      },
      {
        name: "ХОЛОДНЫЕ ЗАКУСКИ",
        menu:
        [
          {
            name: "Грейпфрут с взбитыми сливками",
            weight: [100],
            units: ["гр"],
            price: 50
          },
          {
            name: "Морковь с сахаром, яблоком, курагой, р/м",
            weight: [100],
            units: ["гр"],
            price: 25
          },
          {
            name: "Редис \"Дайкон\" с морковью, сыром и майонезом",
            weight: [100],
            units: ["гр"],
            price: 50
          },
          {
            name: "Салат \"Золотая рыбка\" (крабовое мясо, кукуруза, капуста)",
            weight: [100],
            units: ["гр"],
            price: 30
          },
          {
            name: "Салат \"Рыбный\" (с рисом)",
            weight: [100],
            units: ["гр"],
            price: 60
          },
          {
            name: "Салат из квашеной капусты с клюквой, р/м",
            weight: [100],
            units: ["гр"],
            price: 35
          },
          {
            name: "Сельдь с гарниром",
            weight: [70, 50],
            units: ["гр", "гр"],
            price: 80
          }
        ]
      },
      {
        name: "ПЕРВЫЕ БЛЮДА",
        menu:
        [
          {
            name: "Рассольник \"Ленинградский\" с курицей, сметаной",
            weight: [35, 250, 10],
            units: ["гр", "мл", "гр"],
            price: 50
          },
          {
            name: "Суп-пюре из брокколи",
            weight: [250],
            units: ["мл"],
            price: 60
          }
        ]
      },
      {
        name: "ВТОРЫЕ БЛЮДА",
        menu:
        [
          {
            name: "Жульен на сливках",
            weight: [100],
            units: ["гр"],
            price: 90
          },
          {
            name: "Биточек рыбный",
            weight: [100],
            units: ["гр"],
            price: 100
          },
          {
            name: "Котлета куриная, рубленная",
            weight: [100],
            units: ["гр"],
            price: 75
          },
          {
            name: "Куры жареные",
            weight: [120],
            units: ["гр"],
            price: 95
          },
          {
            name: "Плов из индейки",
            weight: [250],
            units: ["гр"],
            price: 110
          },
          {
            name: "Рыба отварная с лимоном",
            weight: [100, 10],
            units: ["гр", "гр"],
            price: 170
          },
          {
            name: "Поджарка из свинины",
            weight: [75, 50],
            units: ["гр"],
            price: 100
          },
          {
            name: "Свинина, запеченная с грибами, луком, сыром, майонезом",
            weight: [80, 40],
            units: ["гр", "гр"],
            price: 145
          }
        ]
      },
      {
        name: "ГАРНИРЫ",
        menu:
        [
          {
            name: "Картофельное пюре",
            weight: [150],
            units: ["гр"],
            price: 35
          },
          {
            name: "Каша гречневая",
            weight: [150],
            units: ["гр"],
            price: 20
          },
          {
            name: "Рис, припущенный в бульоне",
            weight: [150],
            units: ["гр"],
            price: 20
          },
          {
            name: "Фасоль стручковая, тушенная с овощами",
            weight: [150],
            units: ["гр"],
            price: 50
          }
        ]
      },
      {
        name: "СОУСЫ / ХЛЕБ",
        menu:
        [
          {
            name: "Горчица",
            weight: [10],
            units: ["гр"],
            price: 5
          },
          {
            name: "Кетчуп \"Хайнц\"",
            weight: [50],
            units: ["гр"],
            price: 20
          },
          {
            name: "Подлива мясная (Поджарка)",
            weight: [50],
            units: ["гр"],
            price: 5
          },
          {
            name: "Соус \"Тар-тар\"",
            weight: [50],
            units: ["гр"],
            price: 20
          },
          {
            name: "Хлеб пшеничный",
            weight: [35],
            units: ["гр"],
            price: 3
          },
          {
            name: "Хлеб ржаной",
            weight: [35],
            units: ["гр"],
            price: 2
          },
          {
            name: "Хрен столовый",
            weight: [10],
            units: ["гр"],
            price: 5
          }
        ]
      },
      {
        name: "НАПИТКИ",
        menu:
        [
          {
            name: "Горячий шоколад",
            weight: [200],
            units: ["мл"],
            price: 30
          },
          {
            name: "Компот из кураги",
            weight: [200],
            units: ["мл"],
            price: 30
          },
          {
            name: "Напиток фруктовый",
            weight: [200],
            units: ["мл"],
            price: 20
          },
          {
            name: "Кофе 3 в 1",
            weight: [200],
            units: ["мл"],
            price: 25
          },
          {
            name: "Кофе б/р без сахара",
            weight: [200],
            units: ["мл"],
            price: 25
          },
          {
            name: "Кофе б/р с сахаром",
            weight: [200, 16],
            units: ["мл", "гр"],
            price: 25
          },
          {
            name: "Лимон",
            weight: [7],
            units: ["гр"],
            price: 5
          },
          {
            name: "Сок в ассортименте",
            weight: [200],
            units: ["мл"],
            price: 35
          },
          {
            name: "Чай без сахара",
            weight: [200],
            units: ["мл"],
            price: 15
          },
          {
            name: "Чай с сахаром",
            weight: [200, 16],
            units: ["мл", "гр"],
            price: 15
          },
          {
            name: "Чай с сахаром и лимоном",
            weight: [200, 16, 7],
            units: ["мл", "гр", "гр"],
            price: 15
          }
        ]
      }
    ]

};

console.log(new_groups);
const json_groups = JSON.stringify(new_groups);

fs.writeFile('menu/Tue.json', json_groups, 'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

/*
{
  name: "",
  menu:
  [
    {
      name: "",
      weight: [],
      units: [""],
      price:
    },
  ]
}
  */
