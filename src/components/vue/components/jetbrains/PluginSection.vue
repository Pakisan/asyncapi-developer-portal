<script setup lang="ts">
import {onActivated} from "vue";

onActivated(() => {
  if (window.MarketplaceWidget) {
    window.MarketplaceWidget.setupMarketplaceWidget('card', 15673, "#asyncapi-jetbrains-widget");
  }
})
</script>

<template>
  <section class="plugin-section py-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-gray-100 dark:bg-gray-800">
    <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="w-full md:w-1/2">
        <h2 class="text-3xl font-bold mb-4">Integrate with your favorite IDE</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">Enhance your <a href="https://www.asyncapi.com" style="color: #7e4cc9">AsyncAPI</a>
          development workflow directly within IntelliJ IDEA, Android Studio, and other JetBrains IDEs
        </p>
        <!--                <a class="text-sky-500 dark:text-sky-400 font-semibold flex items-center" href="#">Learn more about integrations <span class="material-icons ml-1">arrow_forward</span></a>-->
      </div>
      <div class="w-full md:w-1/2">
        <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg flex items-start space-x-4" id="asyncapi-jetbrains-widget">
          <iframe width="384px" height="285px" src="https://plugins.jetbrains.com/embeddable/card/15673"></iframe>
          <!--                    <img alt="Jetbrains IDEs logo" class="w-12 h-12" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQqT0jKq0rE-YgKzB8a_e9d5aB7c4N5fG3e9fH8jK7l6pZ1c7R8e9S0T-y_V-u_X_W-Z_A_B_C_D_E_F_G_H_I_J_K_L_M_N_O_P_Q_R_S_T_U_V_W_X_Y_Z-0123456789-_"/>-->
          <!--                    <div>-->
          <!--                        <h3 class="font-semibold text-lg">JetBrains IDEs</h3>-->
          <!--                        <p class="text-sm text-gray-500 dark:text-gray-400">Plugin</p>-->
          <!--                        <div class="flex items-center space-x-1 text-sm mt-2">-->
          <!--                            <span class="material-icons text-yellow-500 text-base">star</span>-->
          <!--                            <span class="material-icons text-yellow-500 text-base">star</span>-->
          <!--                            <span class="material-icons text-yellow-500 text-base">star</span>-->
          <!--                            <span class="material-icons text-yellow-500 text-base">star</span>-->
          <!--                            <span class="material-icons text-yellow-500 text-base">star</span>-->
          <!--                            <span class="text-gray-500 dark:text-gray-400 ml-1">3</span>-->
          <!--                        </div>-->
          <!--                        <button class="mt-4 bg-sky-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-sky-600 transition-colors">Install</button>-->
          <!--                    </div>-->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>