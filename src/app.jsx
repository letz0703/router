import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import React, {Component} from 'react';
import ScrollOut from 'scroll-out';
import styles from './app.module.css';

export default class App extends Component {
  componentDidMount() {
    this.so = ScrollOut({
      scope: this.$el
    });
  }

  componentWillUnmount() {
    this.so.teardown();
  }

  render() {
    return (
      <>
        <section scroll-down className={styles.title}>
          <h1>hi</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quam
            consequatur, tempora corporis saepe esse, natus tenetur, voluptas id
            ratione quis perspiciatis exercitationem iste? Officia ad,
            reiciendis facere totam mollitia voluptas eveniet ab. Non saepe
            ipsum ab soluta! Ullam vel iure dignissimos quis, maxime dolore?
            Tempora officiis voluptas sed dicta quibusdam explicabo? Neque
            accusamus saepe obcaecati sit similique dolor commodi corporis
            ipsum! Eius velit maiores dolor rem alias debitis aliquam, dolorum
            adipisci perferendis incidunt soluta, placeat id nisi perspiciatis
            quam sed hic libero animi est obcaecati ipsum asperiores? Rerum
            ducimus iure iste quidem at! Eaque fugit perspiciatis molestias
            maxime at odio itaque praesentium ad nostrum! Repellat asperiores
            hic excepturi labore nisi, veritatis accusamus, nostrum maiores
            nobis est adipisci quisquam iste impedit? Recusandae porro quam
            aliquid! Nulla, repellendus iusto sed optio quidem similique nostrum
            sapiente voluptatum fuga dolore modi, omnis, qui illo deleniti dolor
            distinctio blanditiis amet enim odio harum animi. Aut debitis vel
            nulla sapiente accusantium, ipsum nam est doloremque repellat ipsa
            laborum? Aspernatur blanditiis voluptate, recusandae facilis minus
            facere voluptatum culpa tempore suscipit, id sint amet eaque ea non
            eius. Blanditiis est magni, fugiat dolorum laborum maxime amet,
            error assumenda aspernatur atque alias ea, nobis nostrum quisquam
            qui voluptatibus.
          </p>
        </section>
        <section scroll-down>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illum
          iusto rerum aut iste possimus repellat, fugiat quasi veniam non
          veritatis adipisci accusamus nostrum voluptas officiis neque, quas
          ipsa esse, reiciendis modi! Sapiente, quo quis, sunt maiores quisquam
          odio magnam, nemo rerum hic inventore facilis enim quas nisi. Optio,
          fuga tempore! Architecto quos est sapiente porro impedit nulla
          repudiandae quae, placeat vero magni earum. Perspiciatis animi
          praesentium minus ullam nihil aspernatur rerum deserunt dicta,
          veritatis vitae voluptatibus corrupti iste debitis fuga blanditiis
          quaerat aperiam libero rem maxime labore! Perspiciatis consequuntur,
          sequi non corrupti ipsum nesciunt ea perferendis hic optio cum in
          dolore omnis beatae aliquam vero ad. Voluptatibus, in eius consectetur
          iure odio pariatur modi asperiores doloremque a voluptas minima
          aliquam ipsum nostrum consequatur numquam doloribus perferendis
          similique. Earum, ex? Amet tenetur aliquid quae et, expedita nostrum.
          Mollitia maiores sapiente vero facere beatae omnis id asperiores. Ex
          sapiente corrupti illo enim in laboriosam sit debitis. Asperiores,
          temporibus laborum? Sed magnam, numquam debitis nobis corrupti vero
          facilis fugiat alias odio eveniet repudiandae at facere deleniti quasi
          necessitatibus unde quia nostrum ipsum reprehenderit vitae ea aut.
          Consectetur facilis recusandae nam omnis amet autem nobis ullam
          doloribus, facere aliquam velit architecto placeat dolores.
        </section>
        <BrowserRouter>
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
