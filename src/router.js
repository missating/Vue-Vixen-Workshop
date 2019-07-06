import Vue from "vue";
import Router from "vue-router";
import CardLayout from "./components/CardLayout";
import SingleCharacter from "./components/SingleCharacter";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      redirect: "/CardLayout"
    },

    {
      path: "/CardLayout",
      component: CardLayout
    },

    {
      path: "/SingleCharacter/:id",
      component: SingleCharacter
    }
  ]
});
