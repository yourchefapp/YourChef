var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","loadChildren":"./pages/tabs/tabs.module#TabsPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/tabs/tabs.router.module.ts","module":"TabsPageRoutingModule","children":[{"path":"tabs","component":"TabsPage","children":[{"path":"inicio","children":[{"path":"","loadChildren":"../inicio/inicio.module#InicioModule","children":[{"kind":"module","children":[],"module":"InicioModule"}]}]},{"path":"recetas","children":[{"path":"","loadChildren":"../recetas/recetas.module#RecetasModule","children":[{"kind":"module","children":[],"module":"RecetasModule"}]}]},{"path":"recetas/:categoria","children":[{"path":"","loadChildren":"../recetas/recetas.module#RecetasModule","children":[{"kind":"module","children":[],"module":"RecetasModule"}]}]},{"path":"perfil","children":[{"path":"","canActivate":["AuthGuard"],"loadChildren":"../perfil/perfil.module#PerfilModule","children":[{"kind":"module","children":[],"module":"PerfilModule"}]}]},{"path":"login","children":[{"path":"","loadChildren":"../login/login.module#LoginPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/login/login.module.ts","module":"LoginPageModule","children":[{"path":"","component":"LoginPage"}],"kind":"module"}],"module":"LoginPageModule"}]}]},{"path":"","redirectTo":"/tabs/inicio","pathMatch":"full"}]},{"path":"","redirectTo":"/tabs/inicio","pathMatch":"full"}],"kind":"module"}],"module":"TabsPageModule"}]},{"path":"receta","loadChildren":"./pages/receta/receta.module#RecetaPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/receta/receta.module.ts","module":"RecetaPageModule","children":[{"path":"","component":"RecetaPage"}],"kind":"module"}],"module":"RecetaPageModule"}]},{"path":"register","loadChildren":"./pages/signup/signup.module#SignupPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/signup/signup.module.ts","module":"SignupPageModule","children":[{"path":"","component":"SignupPage"}],"kind":"module"}],"module":"SignupPageModule"}]},{"path":"cocinadas/:categoria","loadChildren":"./pages/cocinadas/cocinadas.module#CocinadasPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/cocinadas/cocinadas.module.ts","module":"CocinadasPageModule","children":[{"path":"","component":"CocinadasPage"}],"kind":"module"}],"module":"CocinadasPageModule"}]},{"path":"settings","loadChildren":"./pages/settings/settings.module#SettingsPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/settings/settings.module.ts","module":"SettingsPageModule","children":[{"path":"","component":"SettingsPage"}],"kind":"module"}],"module":"SettingsPageModule"}]}],"kind":"module"}]}