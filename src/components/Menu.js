import "./Menu.css";
import bruschetta from "../icons_assets/Bruschetta_02.jpg.webp";
import tzatziki from "../icons_assets/tzatziki.jpg";
import hummus from "../icons_assets/hummus_02.jpg";
import octopus from "../icons_assets/octopus.jpg";
import salad from "../icons_assets/greek salad.jpg";
import moussaka from "../icons_assets/moussaka.jpg";
import kebab from "../icons_assets/chicken_02.webp";
import gyro from "../icons_assets/Beef-Gyro-1.jpg";
import lemon from "../icons_assets/lemon dessert.jpg";
import orange from "../icons_assets/orange-cake.jpg";
import baklava from "../icons_assets/Baklava.webp";
import gelato from "../icons_assets/Pistachio-Gelato-5.jpg";

function Menu() {
  return (
    <div className="menu">
      <h1 id="menu-heading1">APPETIZERS</h1>
      <div id="item">#1 Bruschetta</div>
      <div id="menu-description">
        Toasted french baguette, cherry tomatoes, balsamic vinegar, and basil
      </div>
      <div id="item">#2 Tzatziki and Pita</div>
      <div id="menu-description">
        Yogurt, cucumber, dill, mint, lemon juice, and pita bread made from
        wheat flour
      </div>
      <div id="item">#3 Hummus and Pita </div>
      <div id="menu-description">
        Chickpeas, tahini, garlic, lemon juice, olive oil, and pita bread made
        from wheat flour
      </div>
      <div id="item">#4 Grilled Octopus</div>
      <div id="menu-description">
        Octopus, red wine vinegar, parsley, lemon, garlic, and oregano
      </div>
      <div id="menu-pics">
        <img src={bruschetta} id="menu-img" />
        <img src={tzatziki} id="menu-img" />
        <img src={hummus} id="menu-img" />
        <img src={octopus} id="menu-img" />
      </div>

      <h1 id="menu-heading1">ENTREES</h1>
      <div id="item">#1 Greek Salad</div>
      <div id="menu-description">
        Lettuce, peppers, olives, feta cheese, and rosemary croutons{" "}
      </div>
      <div id="item">#2 Moussaka</div>
      <div id="menu-description">
        Ground lamb, tomatoes, parsley, garlic, eggplant, potatoes, zucchini,
        and pecorino cheese
      </div>
      <div id="item">#3 Chicken Kebab</div>
      <div id="menu-description">
        Chicken, paprika, cumin, oregano, and lemon juice
      </div>
      <div id="item">#4 Beef & Lamb Gyro</div>
      <div id="menu-description">
        Beef, lamb, garlic, oregano, cumin, marjoram, rosemary, thyme, onions,
        and olive oil
      </div>
      <div id="menu-pics">
        <img src={salad} id="menu-img" />
        <img src={moussaka} id="menu-img" />
        <img src={kebab} id="menu-img" />
        <img src={gyro} id="menu-img" />
      </div>

      <h1 id="menu-heading1">DESSERTS</h1>
      <div id="item">#1 Lemon Cake</div>
      <div id="menu-description">
        Eggs, lemon zest, lemon juice, butter, cream cheese, and whole milk{" "}
      </div>
      <div id="item">#2 Orange Cake</div>
      <div id="menu-description">
        Eggs, orange zest, freshly squeezed orange juice, and vanilla extract
      </div>
      <div id="item">#3 Baklava</div>
      <div id="menu-description">
        Pistachios, walnuts, hazelnuts, cloves, phyllo dough, and honey{" "}
      </div>
      <div id="item">#4 Pistachio Gelato</div>
      <div id="menu-description">
        Pistachios, pistachio paste, sugar, whole milk, and lemon zest
      </div>
      <div id="menu-pics">
        <img src={lemon} id="menu-img" />
        <img src={orange} id="menu-img" />
        <img src={baklava} id="menu-img" />
        <img src={gelato} id="menu-img" />
      </div>
    </div>
  );
}

export default Menu;
