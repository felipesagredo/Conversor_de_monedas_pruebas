<template>
  <div>
    <h1>Valor de la UF en CLP para una fecha específica</h1>
    <input type="date" v-model="selectedDate">
    <button @click="getUFValue">Obtener Valor de la UF</button>
    <p v-if="ufValue">Fecha: {{ formattedDate(ufValue.fecha) }}, Valor: ${{ ufValue.valor }} CLP</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      ufValue: null,
      selectedDate: null
    };
  },
  methods: {
    async getUFValue() {
      if (!this.selectedDate) {
        alert('Seleccione una fecha.');
        return;
      }

      const formattedDate = this.formatDate(this.selectedDate);

      try {
        const response = await axios.get(`http://localhost:3000/uf/${formattedDate}`);
        this.ufValue = response.data.serie[0];  // Obtener el primer elemento de la serie
      } catch (error) {
        console.error('Error al obtener el valor de la UF:', error);
      }
    },
    formatDate(date) {
      const [year, month, day] = date.split('-');
      return `${day}-${month}-${year}`;
    },
    formattedDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('es-CL', options);
    }
  }
};
</script>

<style scoped>
/* Estilos opcionales para tu componente */
</style>
